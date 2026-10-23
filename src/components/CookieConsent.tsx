import React, { useState, useEffect } from 'react';
import { getCookieConsent, setCookieConsent } from '../utils/analytics';
import { ShieldCheck } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent) {
      // Show after a subtle delay
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  const handleAccept = () => {
    setCookieConsent('accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    setCookieConsent('declined');
    setIsVisible(false);
  };

  return (
    <aside aria-label="Privacy and Cookie Consent" className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-6 sm:max-w-md z-40 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl rounded-2xl p-4 sm:p-5 text-slate-800 animate-in slide-in-from-bottom-5 duration-200">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-teal-50 text-teal-700 shrink-0 mt-0.5">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
            Privacy & Cookie Preferences
          </h4>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            We use anonymized cookies to measure website traffic and regional interest ahead of the February 2027 launch. No email addresses or form content are ever shared with analytics services.
          </p>

          <div className="mt-3 flex items-center gap-2">
            <button
              onClick={handleAccept}
              className="px-3.5 py-1.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Accept Analytics
            </button>
            <button
              onClick={handleDecline}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg transition-colors cursor-pointer"
            >
              Essential Only
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
