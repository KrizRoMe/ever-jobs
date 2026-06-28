/**
 * E2E test for the Indeed scraper.
 *
 * NOTE: This test hits the live Indeed website and may be rate-limited
 * or blocked depending on your network/IP. Run sparingly.
 */
import { Test, TestingModule } from '@nestjs/testing';
import { IndeedModule, IndeedService } from '@ever-jobs/source-indeed';
import { ScraperInputDto, Site, Country, DescriptionFormat } from '@ever-jobs/models';

describe('IndeedService (E2E)', () => {
  let service: IndeedService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [IndeedModule],
    }).compile();

    service = module.get<IndeedService>(IndeedService);
  });

  it('should return job results for a basic search', async () => {
    const input = new ScraperInputDto({
      siteType: [Site.INDEED],
      searchTerm: 'software engineer',
      location: 'New York',
      resultsWanted: 5,
      country: Country.USA,
      descriptionFormat: DescriptionFormat.MARKDOWN,
    });

    const response = await service.scrape(input);

    expect(response).toBeDefined();
    expect(Array.isArray(response.jobs)).toBe(true);
    // A green run must prove the scraper is actually reaching Indeed.
    // (A previously-permissive assertion masked a hard 403 from Cloudflare.)
    expect(response.jobs.length).toBeGreaterThan(0);

    const job = response.jobs[0];
    expect(typeof job.title).toBe('string');
    expect(job.title.length).toBeGreaterThan(0);
    expect(job.jobUrl).toContain('indeed.com/viewjob?jk=');
    expect(job.site).toBe(Site.INDEED);
  }, 60000);
});
