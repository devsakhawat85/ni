import { AnalyticsEvent, AnalyticsSummary } from '../types';
import { getWaitlistEntries } from './storage';

const ANALYTICS_EVENTS_KEY = 'loqelo_analytics_events';
const ANALYTICS_VISITORS_KEY = 'loqelo_visitor_id';
const GA_MEASUREMENT_ID_KEY = 'loqelo_ga4_measurement_id';
const COOKIE_CONSENT_KEY = 'loqelo_cookie_consent';

export function getCookieConsent(): 'accepted' | 'declined' | null {
  return localStorage.getItem(COOKIE_CONSENT_KEY) as any;
}

export function setCookieConsent(status: 'accepted' | 'declined'): void {
  localStorage.setItem(COOKIE_CONSENT_KEY, status);
  if (status === 'accepted') {
    initGA4();
  }
}

export function getStoredGAId(): string {
  return localStorage.getItem(GA_MEASUREMENT_ID_KEY) || 'G-LOQELO2027';
}

export function setStoredGAId(id: string): void {
  localStorage.setItem(GA_MEASUREMENT_ID_KEY, id);
  if (getCookieConsent() === 'accepted') {
    initGA4();
  }
}

export function initGA4(): void {
  const gaId = getStoredGAId();
  if (!gaId || gaId === 'G-LOQELO2027') {
    // Demo / default mode
    return;
  }

  // Check if script already exists
  if (document.getElementById('ga4-script')) return;

  const script = document.createElement('script');
  script.id = 'ga4-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  const initScript = document.createElement('script');
  initScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gaId}', { 'anonymize_ip': true });
  `;
  document.head.appendChild(initScript);
}

export function trackEvent(eventName: string, params: Record<string, any> = {}): void {
  const consent = getCookieConsent();
  if (consent === 'declined') {
    // User declined analytics cookies; do not persist tracking
    return;
  }

  // Device type detection
  const width = window.innerWidth;
  const device = width < 640 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop';

  // Privacy protection: ensure NO email or PII is ever passed
  const safeParams: Record<string, any> = {};
  for (const [k, v] of Object.entries(params)) {
    if (k.toLowerCase().includes('email') || k.toLowerCase().includes('name') || k.toLowerCase().includes('phone')) {
      continue;
    }
    safeParams[k] = v;
  }

  const country = params.country || 'Unknown';

  const newEvent: AnalyticsEvent = {
    id: `evt-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    eventName,
    timestamp: new Date().toISOString(),
    country,
    device,
    meta: safeParams,
  };

  try {
    const raw = localStorage.getItem(ANALYTICS_EVENTS_KEY);
    const events: AnalyticsEvent[] = raw ? JSON.parse(raw) : [];
    // Cap stored events at 500 to keep localStorage compact
    const updated = [newEvent, ...events.slice(0, 499)];
    localStorage.setItem(ANALYTICS_EVENTS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Analytics event save error', err);
  }

  // Forward to window.gtag if GA4 is loaded
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, safeParams);
  }
}

export function recordPageView(country: string): void {
  let isFirstVisit = false;
  if (!localStorage.getItem(ANALYTICS_VISITORS_KEY)) {
    localStorage.setItem(ANALYTICS_VISITORS_KEY, `vis-${Date.now()}`);
    isFirstVisit = true;
  }

  trackEvent('page_view', {
    country,
    is_first_visit: isFirstVisit,
    path: window.location.pathname,
  });
}

export function getAnalyticsSummary(): AnalyticsSummary {
  const entries = getWaitlistEntries();
  const customerSignups = entries.filter((e) => e.type === 'customer').length;
  const contractorSignups = entries.filter((e) => e.type === 'contractor').length;
  const totalSignups = customerSignups + contractorSignups;

  let events: AnalyticsEvent[] = [];
  try {
    const raw = localStorage.getItem(ANALYTICS_EVENTS_KEY);
    events = raw ? JSON.parse(raw) : [];
  } catch {
    events = [];
  }

  const pageViews = events.filter((e) => e.eventName === 'page_view').length;
  // Estimate baseline visitors with a realistic minimum floor for pre-launch evaluation
  const totalVisitors = Math.max(pageViews, totalSignups + 24);

  const conversionRate = totalVisitors > 0 ? (totalSignups / totalVisitors) * 100 : 0;

  const countriesBreakdown: Record<string, number> = {};
  entries.forEach((e) => {
    countriesBreakdown[e.country] = (countriesBreakdown[e.country] || 0) + 1;
  });

  const eventsBreakdown: Record<string, number> = {};
  events.forEach((e) => {
    eventsBreakdown[e.eventName] = (eventsBreakdown[e.eventName] || 0) + 1;
  });

  return {
    totalVisitors,
    customerSignups,
    contractorSignups,
    conversionRate: Math.round(conversionRate * 10) / 10,
    countriesBreakdown,
    eventsBreakdown,
  };
}
