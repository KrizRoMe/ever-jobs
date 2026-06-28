import { JobType } from '@ever-jobs/models';

/**
 * Headers required by Indeed's GraphQL API (apis.indeed.com/graphql).
 *
 * The endpoint sits behind Cloudflare bot protection that only admits traffic
 * impersonating the official Indeed mobile app: the iOS app User-Agent plus the
 * `indeed-app-info` header are mandatory — a desktop browser UA is rejected with
 * HTTP 403. The `indeed-api-key` must be current or the API responds with 401.
 *
 * `indeed-co` is injected per-request by the service (per country code).
 *
 * NOTE: the User-Agent is intentionally NOT set here — it must be passed through
 * the HttpClient constructor options so it overrides the client's default UA.
 * Injecting `user-agent` via `setHeaders` would leave the client's default
 * (desktop Chrome) UA in place under a different header casing, and Cloudflare
 * rejects the resulting desktop-looking request with HTTP 403.
 */
export const INDEED_USER_AGENT =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Indeed App 193.1';

export const INDEED_HEADERS: Record<string, string> = {
  Host: 'apis.indeed.com',
  'content-type': 'application/json',
  'indeed-api-key': '161092c2017b5bbab13edb12461a62d5a833871e7cad6d9d475304573de67ac8',
  accept: 'application/json',
  'indeed-locale': 'en-US',
  'accept-language': 'en-US,en;q=0.9',
  'indeed-app-info': 'appv=193.1; appid=com.indeed.jobsearch; osv=16.6.1; os=ios; dtype=phone',
};

/** Maps our JobType enum to Indeed's opaque attribute filter keys. */
const JOB_TYPE_FILTER_KEYS: Partial<Record<JobType, string>> = {
  [JobType.FULL_TIME]: 'CF3CP',
  [JobType.PART_TIME]: '75GKK',
  [JobType.CONTRACT]: 'NJXCK',
  [JobType.INTERNSHIP]: 'VDTG7',
};

const REMOTE_FILTER_KEY = 'DSQF7';

export interface JobSearchQueryParams {
  searchTerm?: string;
  location?: string;
  distance?: number;
  cursor?: string | null;
  hoursOld?: number;
  jobType?: JobType;
  isRemote?: boolean;
}

/**
 * Builds the `filters: { ... }` GraphQL fragment.
 *
 * Indeed cannot combine a date filter with a job-type/remote composite filter,
 * so `hoursOld` takes precedence (matching upstream jobspy behaviour).
 */
function buildFilters(params: JobSearchQueryParams): string {
  if (params.hoursOld) {
    return `filters: { date: { field: "dateOnIndeed", start: "${params.hoursOld}h" } }`;
  }

  if (params.jobType || params.isRemote) {
    const keys: string[] = [];
    if (params.jobType && JOB_TYPE_FILTER_KEYS[params.jobType]) {
      keys.push(JOB_TYPE_FILTER_KEYS[params.jobType] as string);
    }
    if (params.isRemote) {
      keys.push(REMOTE_FILTER_KEY);
    }
    if (keys.length > 0) {
      const keysStr = keys.map((k) => `"${k}"`).join(', ');
      return `filters: { composite: { filters: [{ keyword: { field: "attributes", keys: [${keysStr}] } }] } }`;
    }
  }

  return '';
}

/**
 * Builds the Indeed GraphQL `jobSearch` query.
 *
 * Indeed's current schema inlines arguments directly into the query body (the
 * old typed-variable form using `DateInput` / `SearchFilterInput` was removed),
 * so parameters are interpolated here rather than passed as GraphQL variables.
 */
export function buildJobSearchQuery(params: JobSearchQueryParams): string {
  const search = params.searchTerm ? params.searchTerm.replace(/"/g, '\\"') : '';
  const what = search ? `what: "${search}"` : '';
  const location = params.location
    ? `location: {where: "${params.location}", radius: ${params.distance ?? 50}, radiusUnit: MILES}`
    : '';
  const cursor = params.cursor ? `cursor: "${params.cursor}"` : '';
  const filters = buildFilters(params);

  return `query GetJobData {
    jobSearch(
      ${what}
      ${location}
      limit: 100
      ${cursor}
      sort: DATE
      ${filters}
    ) {
      pageInfo { nextCursor }
      results {
        trackingKey
        job {
          source { name }
          key
          title
          datePublished
          dateOnIndeed
          description { html }
          location {
            countryName
            countryCode
            admin1Code
            city
            postalCode
            streetAddress
            formatted { short long }
          }
          attributes { key label }
          compensation {
            estimated {
              currencyCode
              baseSalary { unitOfWork range { ... on Range { min max } } }
            }
            baseSalary { unitOfWork range { ... on Range { min max } } }
            currencyCode
          }
          employer {
            relativeCompanyPageUrl
            name
            dossier {
              employerDetails {
                addresses
                industry
                employeesLocalizedLabel
                revenueLocalizedLabel
                briefDescription
              }
              images { headerImageUrl squareLogoUrl }
              links { corporateWebsite }
            }
          }
          recruit { viewJobUrl detailedSalary workSchedule }
        }
      }
    }
  }`;
}
