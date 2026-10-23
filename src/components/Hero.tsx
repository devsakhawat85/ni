import React, { useState } from 'react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../utils/i18n';
import { Sparkles, ArrowRight, MapPin, CheckCircle2, ShieldCheck, Users, Calendar } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface HeroProps {
  currentLang: LanguageCode;
  onOpenWaitlist: (type?: 'customer' | 'contractor') => void;
}

const PRESET_NEEDS = [
  {
    query: 'I need house cleaning and window washing for a 3-bedroom home',
    services: ['House cleaning', 'Window washing'],
    prosCount: 14,
    city: 'Amsterdam',
  },
  {
    query: 'Trim tall garden trees and dispose green waste before winter',
    services: ['Tree trimming', 'Green waste removal'],
    prosCount: 8,
    city: 'Berlin',
  },
  {
    query: 'Fix kitchen water pipe leak and install a new sink tap',
    services: ['Plumbing & pipe repair', 'Bathroom / Kitchen tap'],
    prosCount: 19,
    city: 'Paris',
  },
];

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenWaitlist }) => {
  const t = TRANSLATIONS[currentLang];
  const [inputText, setInputText] = useState(PRESET_NEEDS[0].query);
  const [activeServices, setActiveServices] = useState<string[]>(PRESET_NEEDS[0].services);
  const [prosFound, setProsFound] = useState<number>(PRESET_NEEDS[0].prosCount);
  const [city] = useState<string>('Amsterdam');

  const handleSelectPreset = (preset: typeof PRESET_NEEDS[0]) => {
    setInputText(preset.query);
    setActiveServices(preset.services);
    setProsFound(preset.prosCount);
    trackEvent('hero_preset_selected', { query: preset.query });
  };

  const handleInputCustom = (val: string) => {
    setInputText(val);
    const lower = val.toLowerCase();
    const detected: string[] = [];

    if (lower.includes('clean') || lower.includes('sprzątan') || lower.includes('reinigen')) detected.push('House cleaning');
    if (lower.includes('window') || lower.includes('ramen') || lower.includes('fenster') || lower.includes('okna')) detected.push('Window washing');
    if (lower.includes('tree') || lower.includes('garden') || lower.includes('garten') || lower.includes('ogród') || lower.includes('tuin')) detected.push('Garden & Tree care');
    if (lower.includes('leak') || lower.includes('plumb') || lower.includes('pipe') || lower.includes('rohr') || lower.includes('kran') || lower.includes('ciekn')) detected.push('Plumbing repair');
    if (lower.includes('floor') || lower.includes('paint') || lower.includes('malen') || lower.includes('podłog')) detected.push('Flooring & Painting');

    if (detected.length > 0) {
      setActiveServices(detected);
      setProsFound(6 + detected.length * 4);
    } else {
      setActiveServices(['Custom service matching']);
      setProsFound(11);
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28">
      {/* Background soft ambient accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-teal-50/70 via-slate-50/40 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Launch metadata ticker */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-900 text-xs font-semibold tracking-wide shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-teal-600"></span>
            <span>{t.hero.launchNotice}</span>
            <span className="text-teal-400">·</span>
            <span className="text-teal-700 font-medium">Home · Garden · Office</span>
          </div>
        </div>

        {/* Hero Typography */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-slate-500 mb-3">
            {t.hero.tagline}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] text-balance mb-6">
            {t.hero.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-600">
              {t.hero.titleHighlight}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto text-balance">
            {t.hero.subtitle}
          </p>

          {/* Dual CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenWaitlist('customer')}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 active:scale-[0.98] rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
            >
              <span>{t.hero.ctaCustomer}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => onOpenWaitlist('contractor')}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 active:scale-[0.98] border border-slate-300 rounded-xl shadow-sm hover:border-slate-400 transition-all flex items-center justify-center gap-2"
            >
              <Users className="w-4 h-4 text-teal-700" />
              <span>{t.hero.ctaContractor}</span>
            </button>
          </div>

          {/* Trust bullets */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              Verified & Rated Pros
            </span>
            <span className="text-slate-300">·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
              Free to Post, No Obligation
            </span>
            <span className="text-slate-300">·</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-teal-600" />
              Launch Feb 2027
            </span>
          </div>
        </div>

        {/* Hero Visual Banner (Home, Garden & Architecture) */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl shadow-slate-200/70 group">
            <img
              src="/assets/images/hero_home_garden_property_1792777850421.jpg"
              alt="Loqelo – Everything your place needs: Home, Garden, Office"
              className="w-full h-[280px] sm:h-[400px] md:h-[480px] object-cover group-hover:scale-[1.02] transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Measured overlay scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-black/20 pointer-events-none" />

            {/* Floating pro pill 1 (inspired by promo video 0:01) */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/90 backdrop-blur-md border border-white/60 rounded-2xl p-2.5 sm:p-3 shadow-lg flex items-center gap-2.5 text-xs">
              <div className="w-8 h-8 rounded-xl bg-teal-700 text-white flex items-center justify-center font-bold text-xs shrink-0">
                HQ
              </div>
              <div>
                <div className="text-[10px] text-teal-800 font-bold uppercase tracking-wider">
                  Service 01 / 08 · House & Garden
                </div>
                <div className="text-xs font-extrabold text-slate-900">
                  14 pros nearby in your area
                </div>
              </div>
            </div>

            {/* Floating pro pill 2 (inspired by promo video 0:05) */}
            <div className="hidden sm:flex absolute top-6 right-6 bg-white/90 backdrop-blur-md border border-white/60 rounded-2xl p-3 shadow-lg items-center gap-2.5 text-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase">
                  Verified & Insured
                </div>
                <div className="text-xs font-extrabold text-slate-900">
                  Rated 4.8+ on Loqelo
                </div>
              </div>
            </div>

            {/* Bottom banner caption */}
            <div className="absolute bottom-4 inset-x-4 sm:bottom-6 sm:inset-x-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
              <div>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-teal-300 block mb-1">
                  Home · Garden · Office
                </span>
                <p className="text-sm sm:text-lg font-bold text-white drop-shadow-sm">
                  Everything your place needs, managed effortlessly.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => onOpenWaitlist('customer')}
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-xl text-xs font-bold shadow-md transition-all cursor-pointer"
                >
                  Reserve Your Spot
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Platform Simulation Card (from the Loqelo promo video 0:16) */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200/90 overflow-hidden">
            
            {/* Top browser/app bar */}
            <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                <span className="ml-2 font-mono text-[11px] text-slate-400">loqelo.com/post-a-job</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-slate-600 font-medium">
                  <MapPin className="w-3 h-3 text-teal-600" />
                  {city}
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-semibold">
                  Demo Interactive
                </span>
              </div>
            </div>

            <div className="p-5 sm:p-7 md:p-8">
              <div className="mb-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Natural Language Matching
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  What do you need? Describe it.
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Write it in your own words. Loqelo finds the right services and brings you quotes from rated local pros.
                </p>
              </div>

              {/* Input container */}
              <div className="relative mb-4">
                <textarea
                  rows={2}
                  value={inputText}
                  onChange={(e) => handleInputCustom(e.target.value)}
                  placeholder={t.hero.interactivePlaceholder}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50/50 p-4 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 transition-all resize-none shadow-inner"
                />
              </div>

              {/* Preset suggestion chips */}
              <div className="mb-6 flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-400 font-medium">Try clicking:</span>
                {PRESET_NEEDS.map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectPreset(preset)}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-700 transition-colors cursor-pointer text-left font-medium"
                  >
                    {preset.services.join(' + ')}
                  </button>
                ))}
              </div>

              {/* Live Recognition and Matching Preview Box */}
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Services Detected ({activeServices.length}):
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeServices.map((srv, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-teal-200 text-teal-900 text-xs font-semibold shadow-xs"
                      >
                        <CheckCircle2 className="w-3 h-3 text-teal-600" />
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0 sm:border-l sm:border-slate-200 sm:pl-4">
                  <div className="text-right sm:text-left">
                    <div className="text-lg font-extrabold text-slate-900 tabular-nums">
                      {prosFound} pros
                    </div>
                    <div className="text-[11px] text-teal-700 font-medium">
                      nearby in {city}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      trackEvent('hero_interactive_submit', { query: inputText });
                      onOpenWaitlist('customer');
                    }}
                    className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-xl shadow-xs transition-colors whitespace-nowrap cursor-pointer"
                  >
                    {t.hero.interactiveButton}
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
