import React, { useState, useEffect } from 'react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../utils/i18n';
import { Calendar, Percent, Gift, Globe2, ArrowRight } from 'lucide-react';

interface LaunchCountdownProps {
  currentLang: LanguageCode;
  onOpenWaitlist: (type?: 'customer' | 'contractor') => void;
}

export const LaunchCountdown: React.FC<LaunchCountdownProps> = ({
  currentLang,
  onOpenWaitlist,
}) => {
  const t = TRANSLATIONS[currentLang];

  // Target date: February 1, 2027
  const TARGET_DATE = new Date('2027-02-01T00:00:00Z').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="launch-countdown" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-2 flex items-center justify-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {t.launch.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.launch.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We are preparing the platform infrastructure, vetting initial service providers, and finalizing localized payment rails ahead of our public debut in February 2027.
          </p>
        </div>

        {/* Live Countdown Cards */}
        <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm text-center">
            <div className="text-3xl sm:text-5xl font-extrabold text-teal-700 font-mono tabular-nums">
              {timeLeft.days}
            </div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-2">
              {t.launch.days}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm text-center">
            <div className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-mono tabular-nums">
              {timeLeft.hours}
            </div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-2">
              {t.launch.hours}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm text-center">
            <div className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-mono tabular-nums">
              {timeLeft.minutes}
            </div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-2">
              {t.launch.minutes}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm text-center">
            <div className="text-3xl sm:text-5xl font-extrabold text-teal-600 font-mono tabular-nums">
              {timeLeft.seconds}
            </div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-2">
              {t.launch.seconds}
            </div>
          </div>
        </div>

        {/* Why Join the Pre-Launch List */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              {t.launch.perksTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                  <Percent className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {t.launch.perk1Title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t.launch.perk1Desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenWaitlist('contractor')}
                  className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1"
                >
                  Join as Contractor <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                  <Gift className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {t.launch.perk2Title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t.launch.perk2Desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenWaitlist('customer')}
                  className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1"
                >
                  Join as Customer <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {t.launch.perk3Title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t.launch.perk3Desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400">
                Netherlands · Germany · France · Poland · Spain
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
