import React, { useState } from 'react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../utils/i18n';
import {
  FileText,
  Radar,
  Scale,
  CheckCircle,
  Briefcase,
  Send,
  UserCheck,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface HowItWorksProps {
  currentLang: LanguageCode;
  onOpenWaitlist: (type?: 'customer' | 'contractor') => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ currentLang, onOpenWaitlist }) => {
  const t = TRANSLATIONS[currentLang];
  const [activeTab, setActiveTab] = useState<'customer' | 'contractor'>('customer');

  const customerIcons = [FileText, Radar, Scale, CheckCircle];
  const contractorIcons = [Briefcase, Send, UserCheck, TrendingUp];

  const handleTabChange = (tab: 'customer' | 'contractor') => {
    setActiveTab(tab);
    trackEvent('how_it_works_tab_switch', { tab });
  };

  const steps = activeTab === 'customer' ? t.howItWorks.customerSteps : t.howItWorks.contractorSteps;
  const icons = activeTab === 'customer' ? customerIcons : contractorIcons;

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-2">
            {t.howItWorks.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.howItWorks.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.howItWorks.subtitle}
          </p>

          {/* Segmented Tab Switcher */}
          <div className="mt-8 inline-flex p-1 bg-slate-200/80 rounded-xl">
            <button
              onClick={() => handleTabChange('customer')}
              className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'customer'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.howItWorks.tabs.customer}
            </button>
            <button
              onClick={() => handleTabChange('contractor')}
              className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'contractor'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.howItWorks.tabs.contractor}
            </button>
          </div>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = icons[idx] || CheckCircle;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-teal-700 bg-teal-50 px-2 py-1 rounded">
                      Step {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                      <Icon className="w-5 h-5 text-teal-700" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-teal-700">
                  <span>
                    {activeTab === 'customer' ? 'Customer workflow' : 'Pro advantage'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenWaitlist(activeTab)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-teal-700 text-white text-sm font-semibold transition-all shadow-sm"
          >
            <span>
              {activeTab === 'customer' ? 'Join as Customer' : 'Join as Contractor'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
