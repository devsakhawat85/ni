import { CountryOption } from '../types';

export const COUNTRIES: CountryOption[] = [
  { code: 'NL', name: 'Netherlands', flag: '🇳🇱' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'BE', name: 'Belgium', flag: '🇧🇪' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'PL', name: 'Poland', flag: '🇵🇱' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹' },
  { code: 'AT', name: 'Austria', flag: '🇦🇹' },
  { code: 'CH', name: 'Switzerland', flag: '🇨🇭' },
  { code: 'SE', name: 'Sweden', flag: '🇸🇪' },
  { code: 'NO', name: 'Norway', flag: '🇳🇴' },
  { code: 'DK', name: 'Denmark', flag: '🇩🇰' },
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: 'IE', name: 'Ireland', flag: '🇮🇪' },
  { code: 'PT', name: 'Portugal', flag: '🇵🇹' },
  { code: 'CZ', name: 'Czech Republic', flag: '🇨🇿' },
  { code: 'OTHER', name: 'Other Country', flag: '🌍' },
];

export function detectUserCountry(): string {
  try {
    const lang = (navigator.language || '').toLowerCase();
    if (lang.includes('nl')) return 'Netherlands';
    if (lang.includes('de')) return 'Germany';
    if (lang.includes('fr')) return 'France';
    if (lang.includes('pl')) return 'Poland';
    if (lang.includes('es')) return 'Spain';
    if (lang.includes('gb') || lang.includes('en-gb')) return 'United Kingdom';
    if (lang.includes('us') || lang.includes('en-us')) return 'United States';
    if (lang.includes('be')) return 'Belgium';
    if (lang.includes('at')) return 'Austria';
    if (lang.includes('ch')) return 'Switzerland';
  } catch {
    // fallback
  }
  return 'Netherlands'; // Default European home base featured in the video
}
