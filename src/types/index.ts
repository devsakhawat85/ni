export type UserType = 'customer' | 'contractor';

export interface CustomerWaitlistEntry {
  id: string;
  type: 'customer';
  email: string;
  country: string;
  entityType: 'individual' | 'business';
  serviceInterests: string[];
  consentMarketing: boolean;
  timestamp: string;
  referralCode: string;
}

export interface ContractorWaitlistEntry {
  id: string;
  type: 'contractor';
  email: string;
  country: string;
  entityType: 'business' | 'individual';
  tradeCategories: string[];
  businessName?: string;
  consentMarketing: boolean;
  timestamp: string;
  referralCode: string;
}

export type WaitlistEntry = CustomerWaitlistEntry | ContractorWaitlistEntry;

export interface AnalyticsEvent {
  id: string;
  eventName: string;
  timestamp: string;
  country: string;
  device: 'desktop' | 'mobile' | 'tablet';
  meta?: Record<string, any>;
}

export interface AnalyticsSummary {
  totalVisitors: number;
  customerSignups: number;
  contractorSignups: number;
  conversionRate: number;
  countriesBreakdown: Record<string, number>;
  eventsBreakdown: Record<string, number>;
}

export type LanguageCode = 'en' | 'de' | 'nl' | 'fr' | 'pl' | 'es';

export interface CountryOption {
  code: string;
  name: string;
  flag: string;
}
