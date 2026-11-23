export interface DeviceFamily {
  id: string;
  name: string;
  shortName: string;
  examples: string;
  /** Illustrative base CAD value per working unit at 3–4 years owned (mid-tier benchmark) */
  basePerUnit3to4: number;
  /** Illustrative replacement unit cost CAD for upgrade-offset modeling */
  typicalNewUnitCost: number;
  /** Annual depreciation retention multipliers across ownership brackets */
  ageMultipliers: Record<AgeBracketId, number>;
  /** Spectralink contract synergy note */
  lifecycleNote: string;
}

export type AgeBracketId = 'under-2' | '2-3' | '3-4' | '4-5' | '5-plus';

export interface AgeBracket {
  id: AgeBracketId;
  label: string;
  shortLabel: string;
  recommendation: string;
}

export type ConditionId = 'working' | 'mixed' | 'retired';

export interface ConditionOption {
  id: ConditionId;
  label: string;
  multiplier: number;
  note: string;
}

export const AGE_BRACKETS: AgeBracket[] = [
  {
    id: 'under-2',
    label: 'Under 2 years',
    shortLabel: '< 2 yrs',
    recommendation: 'Highest residual recovery value for early corporate refresh or surplus redeployment.',
  },
  {
    id: '2-3',
    label: '2 – 3 years',
    shortLabel: '2–3 yrs',
    recommendation: 'Prime trade-in window before battery fatigue and warranty roll-off erode market demand.',
  },
  {
    id: '3-4',
    label: '3 – 4 years',
    shortLabel: '3–4 yrs',
    recommendation: 'Optimal capital-recovery window — ideal time to run an assessment ahead of refresh procurement.',
  },
  {
    id: '4-5',
    label: '4 – 5 years',
    shortLabel: '4–5 yrs',
    recommendation: 'Pair selective fleet buyback with a 3- or 6-month maintenance bridge during phased cutover.',
  },
  {
    id: '5-plus',
    label: '5+ years',
    shortLabel: '5+ yrs',
    recommendation: 'Evaluate remaining reusable handsets for value recovery alongside responsible recycling and 12-month EOL coverage.',
  },
];

export const CONDITIONS: ConditionOption[] = [
  {
    id: 'working',
    label: 'Working — Good Condition',
    multiplier: 1.0,
    note: 'Powers on, intact housing/screen, ready for refurbishment or secondary enterprise deployment.',
  },
  {
    id: 'mixed',
    label: 'Mixed Fleet Wear',
    multiplier: 0.78,
    note: 'Typical enterprise retirement mix — mostly functional with normal cosmetic wear and some spares.',
  },
  {
    id: 'retired',
    label: 'Decommissioned / Unassessed',
    multiplier: 0.55,
    note: 'Pulled from active service and stored; includes full intake triage, value recovery, and responsible recycling.',
  },
];

export const DEVICE_FAMILIES: DeviceFamily[] = [
  {
    id: 'spectralink',
    name: 'Spectralink',
    shortName: 'Spectralink',
    examples: 'Versity 95/96/97, Pivot, 84-Series, DECT 72/75/76/77',
    basePerUnit3to4: 100,
    typicalNewUnitCost: 800,
    ageMultipliers: {
      'under-2': 2.1,
      '2-3': 1.45,
      '3-4': 1.0,
      '4-5': 0.68,
      '5-plus': 0.42,
    },
    lifecycleNote: 'Eligible for customized 3-, 6-, and 12-month extended warranty and maintenance agreements while planning your refresh.',
  },
  {
    id: 'apple-ios',
    name: 'Apple iOS',
    shortName: 'Apple iOS',
    examples: 'iPhone 12 / 13 / 14 / 15 Enterprise Fleets & iPad',
    basePerUnit3to4: 185,
    typicalNewUnitCost: 1050,
    ageMultipliers: {
      'under-2': 2.25,
      '2-3': 1.55,
      '3-4': 1.0,
      '4-5': 0.64,
      '5-plus': 0.35,
    },
    lifecycleNote: 'Strong secondary enterprise demand across Canada makes early-cycle iOS buyback one of the fastest ways to fund upgrades.',
  },
  {
    id: 'android',
    name: 'Android Enterprise',
    shortName: 'Android',
    examples: 'Samsung Galaxy XCover, S-Series, Enterprise Handsets & Tablets',
    basePerUnit3to4: 115,
    typicalNewUnitCost: 850,
    ageMultipliers: {
      'under-2': 2.15,
      '2-3': 1.48,
      '3-4': 1.0,
      '4-5': 0.62,
      '5-plus': 0.34,
    },
    lifecycleNote: 'Bulk fleet retirement assessments turn retired Android devices into immediate capital toward replacement deployments.',
  },
  {
    id: 'zebra',
    name: 'Zebra',
    shortName: 'Zebra',
    examples: 'TC52/TC57, TC72/TC77, MC9300, Rugged Mobile Computers',
    basePerUnit3to4: 145,
    typicalNewUnitCost: 1350,
    ageMultipliers: {
      'under-2': 2.05,
      '2-3': 1.45,
      '3-4': 1.0,
      '4-5': 0.72,
      '5-plus': 0.45,
    },
    lifecycleNote: 'High industrial durability preserves meaningful resale and refurbishment value well into year four and beyond.',
  },
  {
    id: 'cisco',
    name: 'Cisco',
    shortName: 'Cisco',
    examples: '8821 Wireless IP Phone, DECT 6800 Series, Enterprise Desk & Wireless',
    basePerUnit3to4: 85,
    typicalNewUnitCost: 720,
    ageMultipliers: {
      'under-2': 1.95,
      '2-3': 1.4,
      '3-4': 1.0,
      '4-5': 0.66,
      '5-plus': 0.38,
    },
    lifecycleNote: 'Evaluate retired Cisco wireless handsets and base infrastructure together to maximize bulk capital recovery.',
  },
  {
    id: 'other-oem',
    name: 'Ascom / Mitel / Avaya / NEC',
    shortName: 'Ascom & More',
    examples: 'Ascom Myco & d-Series, Mitel, Avaya, NEC, Nortel Handsets & Infrastructure',
    basePerUnit3to4: 75,
    typicalNewUnitCost: 700,
    ageMultipliers: {
      'under-2': 1.9,
      '2-3': 1.38,
      '3-4': 1.0,
      '4-5': 0.65,
      '5-plus': 0.38,
    },
    lifecycleNote: 'Eligible legacy handsets and communications infrastructure are assessed for buyback, refurbishment, or responsible recovery.',
  },
];

export const SUPPORTED_MANUFACTURERS = [
  'Spectralink',
  'Cisco',
  'Avaya',
  'Nortel',
  'Ascom',
  'Mitel',
  'NEC',
  'Zebra',
  'Apple',
] as const;

export const INDUSTRIES_SERVED = [
  {
    name: 'Healthcare',
    detail: 'Clinical Wi-Fi and DECT fleets requiring zero-downtime continuity, spares, and phased upgrades.',
  },
  {
    name: 'Manufacturing',
    detail: 'Plant-floor wireless handsets and rugged terminals maintained past OEM support transitions.',
  },
  {
    name: 'Warehousing & Logistics',
    detail: 'High-volume Zebra, Spectralink, and Android scanner fleets retired in coordinated bulk waves.',
  },
  {
    name: 'Retail',
    detail: 'Multi-site associate mobile devices valued centrally to offset store-wide modernization.',
  },
  {
    name: 'Enterprise IT',
    detail: 'Corporate iOS, Android, and unified communications fleets governed by clear CFO-ready recovery math.',
  },
  {
    name: 'Systems Integrators',
    detail: 'Channel partners bundling buyback assessments early in new hardware proposals to unblock stalled budgets.',
  },
] as const;

export const SPECTRALINK_CONTRACTS = [
  {
    term: '3-Month',
    title: 'Short-Term Refresh Bridge',
    idealFor: 'Active upgrade rollouts and site cutovers',
    summary:
      'Keep your existing Spectralink fleet protected through procurement approval, staging, and phased deployment without locking into an unnecessary annual renewal.',
    includes: [
      'Rapid depot repair and refurbishment coverage',
      'Advanced replacement options for critical clinical or plant users',
      'Coordinated transition directly into fleet buyback at cutover',
    ],
  },
  {
    term: '6-Month',
    title: 'Semi-Annual Lifecycle Extension',
    idealFor: 'Budget-cycle alignment and multi-facility transitions',
    summary:
      'Bridge fiscal quarters with predictable maintenance spend while evaluating next-generation Spectralink hardware and locking in an early fleet recovery assessment.',
    includes: [
      'Customized handset repair and spare device sourcing',
      'Support for eligible legacy and end-of-life Spectralink models',
      'Mid-term fleet audit to forecast residual buyback value',
    ],
  },
  {
    term: '12-Month',
    title: 'Annual Continuity Agreement',
    idealFor: 'Extending proven fleets on your own capital schedule',
    summary:
      'Lower ongoing maintenance costs on stable enterprise wireless deployments when immediate full-fleet replacement is not the right operational priority.',
    includes: [
      'Full-year customized maintenance and depot turnaround',
      'Spare pool management and replacement handset sourcing',
      'Annual refresh readiness and capital recovery reassessment',
    ],
  },
] as const;

export const LIFECYCLE_STAGES = [
  {
    year: 1,
    label: 'Year 1',
    phase: 'Active Deployment',
    residualPct: 62,
    status: 'Peak Asset Value',
    summary:
      'New enterprise handsets carry high balance-sheet value. Surplus or redeployed units can be recovered immediately rather than sitting idle in IT storage.',
    bridgeNote: 'Standard OEM coverage active; catalog serial inventory early.',
  },
  {
    year: 2,
    label: 'Year 2',
    phase: 'High Secondary Demand',
    residualPct: 45,
    status: 'Strong Buyback Tier',
    summary:
      'Corporate iOS, Android, and enterprise wireless devices retain top-tier market liquidity — ideal for organizations on rapid 24-month refresh policies.',
    bridgeNote: 'Assess idle spare pools to unlock immediate working capital.',
  },
  {
    year: 3,
    label: 'Year 3',
    phase: 'Optimal Refresh Window',
    residualPct: 28,
    status: 'Recommended Assessment Point',
    summary:
      'Most enterprise fleets hit peak ROI for introducing a buyback assessment early in replacement planning — recovering meaningful capital before OEM support shifts.',
    bridgeNote: 'Introduce MG Enterprises buyback assessment into new hardware quotes.',
  },
  {
    year: 4,
    label: 'Year 4',
    phase: 'Capital Offset & Bridge',
    residualPct: 16,
    status: '3 / 6 Month Spectralink Bridge',
    summary:
      'Aging Spectralink, Cisco, and Zebra fleets still recover real capital (e.g. ~$25,000 illustrative offset on a $200,000 refresh) while short-term contracts cover phased cutovers.',
    bridgeNote: 'Pair 3- or 6-month Spectralink maintenance with phased buyback retirement.',
  },
  {
    year: 5,
    label: 'Year 5+',
    phase: 'Lifecycle Extension & Recovery',
    residualPct: 8,
    status: '12-Month EOL Coverage + Recovery',
    summary:
      'Extend usable life on eligible legacy handsets with customized 12-month maintenance, recover value on reusable models, and route non-recoverable units to responsible recycling.',
    bridgeNote: 'Prioritize reuse and refurbishment first, with compliant recycling for retired units.',
  },
] as const;

export const COMMERCIAL_OUTCOMES = [
  {
    title: 'Recover Value',
    summary:
      'Turn retired mobile devices and communications infrastructure into recovered capital through a structured enterprise buyback program.',
    href: '/buyback',
    cta: 'Explore Device Buyback',
  },
  {
    title: 'Reduce Costs',
    summary:
      'Extend the usable life of existing wireless fleets through repair, refurbishment, spare sourcing, and 3-, 6-, and 12-month Spectralink agreements.',
    href: '/maintenance',
    cta: 'View Maintenance Contracts',
  },
  {
    title: 'Modernize Affordably',
    summary:
      'Use recovered equipment value early in the procurement cycle to offset the upfront cost of upgrading to newer enterprise mobile technologies.',
    href: '/partners',
    cta: 'See Refresh & Partner Programs',
  },
] as const;

export function calculateIllustrativeEstimate(
  familyId: string,
  quantity: number,
  ageId: AgeBracketId,
  conditionId: ConditionId = 'working'
) {
  const family = DEVICE_FAMILIES.find((f) => f.id === familyId) ?? DEVICE_FAMILIES[0];
  const condition = CONDITIONS.find((c) => c.id === conditionId) ?? CONDITIONS[0];
  const qty = Math.max(1, Math.min(10000, Math.round(quantity || 1)));
  const ageMult = family.ageMultipliers[ageId] ?? 1.0;

  // Bulk operational efficiency lift above 100 units (modest, illustrative)
  const volumeFactor = qty >= 500 ? 1.06 : qty >= 200 ? 1.0 : qty >= 50 ? 0.96 : 0.9;

  const perUnitMid = Math.round(family.basePerUnit3to4 * ageMult * condition.multiplier * volumeFactor);
  const midTotal = perUnitMid * qty;
  const lowTotal = Math.round((midTotal * 0.85) / 50) * 50;
  const highTotal = Math.round((midTotal * 1.15) / 50) * 50;

  const newFleetEstimate = qty * family.typicalNewUnitCost;
  const effectiveUpgradeCost = Math.max(0, newFleetEstimate - midTotal);
  const offsetPct = newFleetEstimate > 0 ? Math.min(45, (midTotal / newFleetEstimate) * 100) : 0;

  return {
    family,
    condition,
    quantity: qty,
    perUnitMid,
    midTotal,
    lowTotal,
    highTotal,
    newFleetEstimate,
    effectiveUpgradeCost,
    offsetPct,
  };
}
