import { WaitlistEntry, CustomerWaitlistEntry, ContractorWaitlistEntry } from '../types';

const STORAGE_KEY = 'loqelo_waitlist_records';

const INITIAL_SEED_ENTRIES: WaitlistEntry[] = [
  {
    id: 'seed-c-1',
    type: 'customer',
    email: 'sophie.van.dijk@outlook.nl',
    country: 'Netherlands',
    entityType: 'individual',
    serviceInterests: ['House cleaning', 'Window washing'],
    consentMarketing: true,
    timestamp: '2026-10-18T14:32:00Z',
    referralCode: 'LQ-NL-4821',
  },
  {
    id: 'seed-p-1',
    type: 'contractor',
    email: 'contact@cleanpro-amsterdam.nl',
    country: 'Netherlands',
    entityType: 'business',
    tradeCategories: ['House cleaning', 'Office cleaning'],
    businessName: 'CleanPro Amsterdam BV',
    consentMarketing: true,
    timestamp: '2026-10-19T09:15:00Z',
    referralCode: 'LQ-PRO-9124',
  },
  {
    id: 'seed-c-2',
    type: 'customer',
    email: 'marc.dubois@gmail.com',
    country: 'France',
    entityType: 'business',
    serviceInterests: ['Office maintenance', 'Window washing'],
    consentMarketing: true,
    timestamp: '2026-10-20T11:40:00Z',
    referralCode: 'LQ-FR-8319',
  },
  {
    id: 'seed-p-2',
    type: 'contractor',
    email: 'info@glans-co.nl',
    country: 'Netherlands',
    entityType: 'business',
    tradeCategories: ['Window cleaning', 'Facade washing'],
    businessName: 'Glans & Co',
    consentMarketing: true,
    timestamp: '2026-10-21T16:22:00Z',
    referralCode: 'LQ-PRO-3820',
  },
  {
    id: 'seed-c-3',
    type: 'customer',
    email: 'lukas.weber@gmx.de',
    country: 'Germany',
    entityType: 'individual',
    serviceInterests: ['Tree trimming', 'Garden landscaping'],
    consentMarketing: true,
    timestamp: '2026-10-22T08:50:00Z',
    referralCode: 'LQ-DE-1092',
  },
  {
    id: 'seed-p-3',
    type: 'contractor',
    email: 'kontakt@gartenbau-weber.de',
    country: 'Germany',
    entityType: 'business',
    tradeCategories: ['Garden landscaping', 'Tree trimming'],
    businessName: 'Gartenbau Weber',
    consentMarketing: true,
    timestamp: '2026-10-22T13:05:00Z',
    referralCode: 'LQ-PRO-5541',
  },
  {
    id: 'seed-c-4',
    type: 'customer',
    email: 'kasia.nowak@onet.pl',
    country: 'Poland',
    entityType: 'individual',
    serviceInterests: ['Plumbing & electrics', 'Bathroom tap repair'],
    consentMarketing: true,
    timestamp: '2026-10-23T06:18:00Z',
    referralCode: 'LQ-PL-6712',
  },
];

export function getWaitlistEntries(): WaitlistEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_SEED_ENTRIES));
      return INITIAL_SEED_ENTRIES;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to load waitlist entries from localStorage', err);
    return INITIAL_SEED_ENTRIES;
  }
}

export function addWaitlistEntry(entry: Omit<CustomerWaitlistEntry, 'id' | 'timestamp' | 'referralCode'> | Omit<ContractorWaitlistEntry, 'id' | 'timestamp' | 'referralCode'>): WaitlistEntry {
  const current = getWaitlistEntries();
  const id = `entry-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
  const timestamp = new Date().toISOString();
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const referralCode = `LQ-${entry.country.substring(0, 2).toUpperCase()}-${randomSuffix}`;

  const newRecord: WaitlistEntry = {
    ...entry,
    id,
    timestamp,
    referralCode,
  } as WaitlistEntry;

  const updated = [newRecord, ...current];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save to localStorage', err);
  }

  return newRecord;
}

export function exportWaitlistToCsv(entries?: WaitlistEntry[]): void {
  const data = entries || getWaitlistEntries();

  // CSV headers
  const headers = [
    'ID',
    'User Group',
    'Email Address',
    'Country',
    'Entity Type',
    'Business Name',
    'Selected Categories / Services',
    'Marketing Consent',
    'Registration Date',
    'Referral Code',
  ];

  const rows = data.map((item) => {
    const categories =
      item.type === 'customer'
        ? (item.serviceInterests || []).join('; ')
        : (item.tradeCategories || []).join('; ');

    const business = item.type === 'contractor' ? item.businessName || 'N/A' : 'N/A';

    return [
      item.id,
      item.type === 'customer' ? 'Customer' : 'Service Provider (Contractor)',
      item.email,
      item.country,
      item.entityType,
      business,
      categories,
      item.consentMarketing ? 'YES' : 'NO',
      new Date(item.timestamp).toLocaleString(),
      item.referralCode,
    ];
  });

  const csvContent =
    'data:text/csv;charset=utf-8,\uFEFF' +
    [headers.join(','), ...rows.map((e) => e.map((val) => `"${String(val).replace(/"/g, '""')}"`).join(','))].join(
      '\n'
    );

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `loqelo_waitlist_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
