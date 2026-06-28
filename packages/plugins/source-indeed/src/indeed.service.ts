import { SourcePlugin } from '@ever-jobs/plugin';

import { Injectable, Logger } from '@nestjs/common';
import {
  IScraper,
  ScraperInputDto,
  JobResponseDto,
  JobPostDto,
  LocationDto,
  CompensationDto,
  DescriptionFormat,
  Country,
  Site,
  getIndeedDomain,
} from '@ever-jobs/models';
import {
  createHttpClient,
  IndeedException,
  markdownConverter,
  plainConverter,
  extractEmails,
  randomSleep,
} from '@ever-jobs/common';
import { INDEED_HEADERS, INDEED_USER_AGENT, buildJobSearchQuery } from './indeed.constants';
import { getJobType, getCompensation, isJobRemote } from './indeed.utils';

@SourcePlugin({
  site: Site.INDEED,
  name: 'Indeed',
  category: 'job-board',
})
@Injectable()
export class IndeedService implements IScraper {
  private readonly logger = new Logger(IndeedService.name);
  private readonly delay = 5;
  private readonly bandDelay = 5;

  async scrape(input: ScraperInputDto): Promise<JobResponseDto> {
    // The Indeed mobile-app User-Agent must be set as the client's single UA
    // (via constructor options), not merged via setHeaders — see indeed.constants.
    const client = createHttpClient({ ...input, userAgent: INDEED_USER_AGENT });

    const country = input.country ?? Country.USA;
    const { subdomain, apiCountryCode } = getIndeedDomain(country);

    const headers = { ...INDEED_HEADERS, 'indeed-co': apiCountryCode };
    client.setHeaders(headers);

    const apiUrl = `https://apis.indeed.com/graphql`;

    const jobList: JobPostDto[] = [];
    const resultsWanted = input.resultsWanted ?? 15;
    let cursor: string | null = null;
    const seenIds = new Set<string>();

    while (jobList.length < resultsWanted) {
      this.logger.log(`Fetching Indeed jobs, cursor: ${cursor ?? 'initial'}`);

      try {
        const query = buildJobSearchQuery({
          searchTerm: input.searchTerm,
          location: input.location,
          distance: input.distance,
          cursor,
          hoursOld: input.hoursOld,
          jobType: input.jobType,
          isRemote: input.isRemote,
        });

        const response = await client.post(apiUrl, { query });

        if (response.data?.errors) {
          this.logger.warn(
            `Indeed GraphQL errors: ${JSON.stringify(response.data.errors).slice(0, 300)}`,
          );
          break;
        }

        const data = response.data?.data?.jobSearch;
        if (!data) {
          this.logger.warn('No data in Indeed response');
          break;
        }

        cursor = data.pageInfo?.nextCursor ?? null;
        const results = data.results ?? [];

        if (results.length === 0) break;

        for (const result of results) {
          if (jobList.length >= resultsWanted) break;

          const job = result.job;
          if (!job) continue;

          const jobKey = job.key;
          if (seenIds.has(jobKey)) continue;
          seenIds.add(jobKey);

          try {
            const jobPost = this.processJob(job, subdomain, input.descriptionFormat);
            if (jobPost) {
              jobList.push(jobPost);
            }
          } catch (err: any) {
            this.logger.warn(`Error processing Indeed job ${jobKey}: ${err.message}`);
          }
        }

        if (!cursor) break;
        await randomSleep(this.delay * 1000, (this.delay + this.bandDelay) * 1000);
      } catch (err: any) {
        this.logger.error(`Indeed scrape error: ${err.message}`);
        break;
      }
    }

    return new JobResponseDto(jobList);
  }

  private processJob(job: any, subdomain: string, format?: DescriptionFormat): JobPostDto | null {
    const title = job.title;
    if (!title) return null;

    const employer = job.employer ?? null;
    const dossier = employer?.dossier ?? null;
    const employerDetails = dossier?.employerDetails ?? {};

    const companyName = employer?.name ?? null;
    const companyUrl = employer?.relativeCompanyPageUrl
      ? `https://${subdomain}.indeed.com${employer.relativeCompanyPageUrl}`
      : null;
    const companyLogo = dossier?.images?.squareLogoUrl ?? null;
    const bannerPhotoUrl = dossier?.images?.headerImageUrl ?? null;
    const companyDescription = employerDetails.briefDescription ?? null;
    const companyIndustry = employerDetails.industry
      ? employerDetails.industry.replace(/Iv1/g, '').replace(/_/g, ' ').trim()
      : null;
    const companyNumEmployees = employerDetails.employeesLocalizedLabel ?? null;
    const companyRevenue = employerDetails.revenueLocalizedLabel ?? null;
    const companyAddresses = employerDetails.addresses?.[0] ?? null;

    const loc = job.location ?? {};
    const location = new LocationDto({
      city: loc.city ?? null,
      state: loc.admin1Code ?? null,
      country: loc.countryCode ?? null,
    });

    const rawDescription = job.description?.html ?? null;
    let description = rawDescription;
    if (description) {
      if (format === DescriptionFormat.MARKDOWN) {
        description = markdownConverter(description) ?? description;
      } else if (format === DescriptionFormat.PLAIN) {
        description = plainConverter(description) ?? description;
      }
    }

    const attributes = job.attributes ?? [];
    const jobType = getJobType(attributes);
    const remote = isJobRemote(job, description);
    const comp = getCompensation(job.compensation);
    const compensation = comp
      ? new CompensationDto({
          interval: comp.interval ?? undefined,
          minAmount: comp.minAmount,
          maxAmount: comp.maxAmount,
          currency: comp.currency ?? 'USD',
        })
      : null;

    const datePosted = job.datePublished ?? job.dateOnIndeed ?? null;

    return new JobPostDto({
      id: `in-${job.key}`,
      title,
      companyName,
      companyUrl,
      jobUrl: `https://${subdomain}.indeed.com/viewjob?jk=${job.key}`,
      location,
      description,
      compensation,
      datePosted: datePosted ? new Date(datePosted).toISOString().split('T')[0] : null,
      jobType,
      isRemote: remote,
      emails: extractEmails(description),
      companyIndustry,
      companyLogo,
      bannerPhotoUrl,
      companyDescription,
      companyNumEmployees,
      companyRevenue,
      companyAddresses,
      site: Site.INDEED,
    });
  }
}
