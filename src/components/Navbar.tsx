import React, { useState } from 'react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../utils/i18n';
import { Globe, BarChart3, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentLang: LanguageCode;
  onSelectLang: (lang: LanguageCode) => void;
  onOpenWaitlist: (type?: 'customer' | 'contractor') => void;
  onOpenAdmin: () => void;
}

const LANGUAGES: Array<{ code: LanguageCode; label: string; flag: string }> = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'pl', label: 'Polski', flag: '🇵🇱' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onSelectLang,
  onOpenWaitlist,
  onOpenAdmin,
}) => {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[currentLang];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single brand logo element */}
        <a href="#" className="flex items-center gap-3 shrink-0 focus-visible:outline-teal-600">
          <img
            src="/assets/aistudio/Loqelo_a788ec4e.png"
            alt="Loqelo Logo"
            className="h-9 md:h-11 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Zone 2: Clean single-line nav links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a
            href="#how-it-works"
            className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.howItWorks}
          </a>
          <a
            href="#video-tour"
            className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.video}
          </a>
          <a
            href="#platform-screens"
            className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.preview}
          </a>
          <a
            href="#launch-countdown"
            className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.launch}
          </a>
        </nav>

        {/* Zone 3: 1 primary action + Language switch + Organizer stats button */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/70 rounded-lg transition-colors"
              aria-label="Change language"
              aria-expanded={langMenuOpen}
            >
              <Globe className="w-3.5 h-3.5 text-teal-700" />
              <span className="uppercase">{currentLang}</span>
            </button>

            {langMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLangMenuOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-slate-200/80 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
                  {LANGUAGES.map((item) => (
                    <button
                      key={item.code}
                      onClick={() => {
                        onSelectLang(item.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-medium transition-colors ${
                        currentLang === item.code
                          ? 'bg-teal-50 text-teal-900 font-semibold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{item.flag}</span>
                        <span>{item.label}</span>
                      </span>
                      {currentLang === item.code && (
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Admin & CSV Export quick access */}
          <button
            onClick={onOpenAdmin}
            title={t.nav.admin}
            className="p-2 text-slate-500 hover:text-teal-700 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Admin Dashboard and Statistics"
          >
            <BarChart3 className="w-4 h-4" />
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => onOpenWaitlist()}
            className="px-4 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-teal-700 active:scale-[0.98] rounded-xl transition-all shadow-sm hover:shadow whitespace-nowrap shrink-0"
          >
            {t.nav.waitlist}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-3">
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            {t.nav.howItWorks}
          </a>
          <a
            href="#video-tour"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            {t.nav.video}
          </a>
          <a
            href="#platform-screens"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            {t.nav.preview}
          </a>
          <a
            href="#launch-countdown"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            {t.nav.launch}
          </a>
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="flex items-center gap-2 text-sm text-slate-600 font-medium px-3 py-2"
            >
              <BarChart3 className="w-4 h-4 text-teal-600" />
              <span>{t.nav.admin}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWaitlist();
              }}
              className="w-full ml-4 py-2.5 text-center text-sm font-semibold text-white bg-slate-900 rounded-xl"
            >
              {t.nav.waitlist}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
