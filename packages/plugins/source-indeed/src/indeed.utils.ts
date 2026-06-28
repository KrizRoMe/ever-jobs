import { JobType, CompensationInterval, getCompensationInterval, getJobTypeFromString } from '@ever-jobs/models';

/**
 * Get job types from an Indeed attribute list.
 *
 * Indeed attributes carry opaque keys (e.g. `CF3CP`), so we resolve job types
 * from their human-readable labels (e.g. "Full-time") instead of the key.
 */
export function getJobType(attributes: { label: string; key: string }[]): JobType[] | null {
  if (!attributes) return null;
  const types: JobType[] = [];
  for (const attr of attributes) {
    if (!attr.label) continue;
    const jt = getJobTypeFromString(attr.label);
    if (jt && !types.includes(jt)) types.push(jt);
  }
  return types.length > 0 ? types : null;
}

/**
 * Extract compensation from Indeed API data.
 */
export function getCompensation(compensation: any): {
  interval: CompensationInterval | null;
  minAmount: number | null;
  maxAmount: number | null;
  currency: string | null;
} | null {
  if (!compensation) return null;

  // Prefer the employer-stated base salary, fall back to Indeed's estimate.
  const baseSalary = compensation.baseSalary ?? compensation.estimated?.baseSalary;
  if (!baseSalary) return null;

  const range = baseSalary.range;
  if (!range) return null;

  const currencyCode =
    compensation.currencyCode ?? compensation.estimated?.currencyCode ?? 'USD';

  const interval = baseSalary.unitOfWork
    ? getCompensationInterval(baseSalary.unitOfWork)
    : null;

  return {
    interval,
    minAmount: range.min ?? null,
    maxAmount: range.max ?? null,
    currency: currencyCode,
  };
}

const REMOTE_KEYWORDS = ['remote', 'work from home', 'wfh'];

/**
 * Determine if an Indeed job is remote.
 *
 * Indeed has no dedicated remote flag in the attribute keys, so we scan the
 * attribute labels, the description, and the formatted location for keywords.
 */
export function isJobRemote(job: any, description: string | null): boolean {
  const attributes: { label?: string }[] = job?.attributes ?? [];
  const inAttributes = attributes.some((attr) =>
    REMOTE_KEYWORDS.some((kw) => attr.label?.toLowerCase().includes(kw)),
  );

  const desc = (description ?? '').toLowerCase();
  const inDescription = REMOTE_KEYWORDS.some((kw) => desc.includes(kw));

  const locLong = (job?.location?.formatted?.long ?? '').toLowerCase();
  const inLocation = REMOTE_KEYWORDS.some((kw) => locLong.includes(kw));

  return inAttributes || inDescription || inLocation;
}
