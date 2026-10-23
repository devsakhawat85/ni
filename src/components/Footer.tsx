import React from 'react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../utils/i18n';
import { BarChart3, BookOpen } from 'lucide-react';

interface FooterProps {
  currentLang: LanguageCode;
  onOpenWaitlist: (type?: 'customer' | 'contractor') => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onOpenWaitlist,
  onOpenAdmin,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <footer className="bg-white border-t border-slate-200/80 py-12 md:py-16 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="inline-block">
              <img
                src="/assets/aistudio/Loqelo_a788ec4e.png"
                alt="Loqelo Logo"
                className="h-9 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              {t.footer.tagline} Connecting homeowners, landlords, and office managers with certified local contractors across Europe. Planned launch: February 2027.
            </p>
            <div className="text-xs text-teal-800 font-medium">
              Official domain: <span className="font-semibold">loqelo.com</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Explore
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#how-it-works" className="hover:text-teal-700 transition-colors">
                  {t.nav.howItWorks}
                </a>
              </li>
              <li>
                <a href="#video-tour" className="hover:text-teal-700 transition-colors">
                  {t.nav.video}
                </a>
              </li>
              <li>
                <a href="#platform-screens" className="hover:text-teal-700 transition-colors">
                  {t.nav.preview}
                </a>
              </li>
              <li>
                <a href="#launch-countdown" className="hover:text-teal-700 transition-colors">
                  {t.nav.launch}
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenWaitlist()}
                  className="hover:text-teal-700 transition-colors cursor-pointer"
                >
                  {t.nav.waitlist}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Admin & Documentation */}
          <div>
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Organizer & Admin
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenAdmin}
                  className="flex items-center gap-1.5 text-slate-700 hover:text-teal-700 font-semibold transition-colors cursor-pointer"
                >
                  <BarChart3 className="w-3.5 h-3.5 text-teal-600" />
                  <span>{t.footer.adminDashboard}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAdmin}
                  className="flex items-center gap-1.5 text-slate-600 hover:text-teal-700 transition-colors cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-teal-600" />
                  <span>{t.footer.userManual}</span>
                </button>
              </li>
              <li className="pt-2 text-slate-400">
                <span>{t.footer.contact}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>{t.footer.rights}</div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-600 transition-colors cursor-pointer">
              {t.footer.privacy}
            </span>
            <span className="hover:text-slate-600 transition-colors cursor-pointer">
              {t.footer.terms}
            </span>
            <span>GDPR Ready</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
