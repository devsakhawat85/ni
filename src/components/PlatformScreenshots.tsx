import React, { useState } from 'react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../utils/i18n';
import {
  FileText,
  Radar,
  ListFilter,
  LayoutDashboard,
  Check,
  Star,
  MapPin,
  Calendar,
  Sparkles,
  Upload,
  ArrowRight,
} from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface PlatformScreenshotsProps {
  currentLang: LanguageCode;
  onOpenWaitlist: (type?: 'customer' | 'contractor') => void;
}

export const PlatformScreenshots: React.FC<PlatformScreenshotsProps> = ({
  currentLang,
  onOpenWaitlist,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [activeScreen, setActiveScreen] = useState<'post' | 'radar' | 'offers' | 'pro'>('offers');
  const [selectedOffer, setSelectedOffer] = useState<string>('CleanPro Amsterdam');

  const offers = [
    {
      name: 'CleanPro Amsterdam',
      avatar: 'CP',
      price: '€340',
      badge: 'Best match',
      badgeColor: 'bg-emerald-100 text-emerald-800',
      duration: '2 days',
      dates: 'from Mon 5 Oct',
      rating: 4.8,
      reviews: 126,
      successRate: '97%',
    },
    {
      name: 'Glans & Co',
      avatar: 'GC',
      price: '€295',
      badge: 'Lowest price',
      badgeColor: 'bg-blue-100 text-blue-800',
      duration: '3 days',
      dates: 'from Fri 9 Oct',
      rating: 4.7,
      reviews: 83,
      successRate: '94%',
    },
    {
      name: 'Fresh Nest',
      avatar: 'FN',
      price: '€410',
      badge: 'Fastest (1 day)',
      badgeColor: 'bg-amber-100 text-amber-800',
      duration: '1 day',
      dates: 'from Sat 3 Oct',
      rating: 5.0,
      reviews: 214,
      successRate: '99%',
    },
    {
      name: 'Brightside Cleaning',
      avatar: 'BC',
      price: '€365',
      badge: 'Member since 2021',
      badgeColor: 'bg-slate-100 text-slate-700',
      duration: '2 days',
      dates: 'from Wed 7 Oct',
      rating: 4.8,
      reviews: 57,
      successRate: '96%',
    },
  ];

  const handleSelectTab = (tab: 'post' | 'radar' | 'offers' | 'pro') => {
    setActiveScreen(tab);
    trackEvent('platform_screen_view', { screen: tab });
  };

  return (
    <section id="platform-screens" className="py-20 md:py-28 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-2">
            {t.screens.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.screens.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.screens.subtitle}
          </p>

          {/* Screen Navigation Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 bg-slate-100 rounded-2xl max-w-2xl mx-auto">
            <button
              onClick={() => handleSelectTab('post')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeScreen === 'post'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-4 h-4 text-teal-600" />
              <span>{t.screens.tabs.postJob}</span>
            </button>
            <button
              onClick={() => handleSelectTab('radar')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeScreen === 'radar'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Radar className="w-4 h-4 text-teal-600" />
              <span>{t.screens.tabs.radar}</span>
            </button>
            <button
              onClick={() => handleSelectTab('offers')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeScreen === 'offers'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ListFilter className="w-4 h-4 text-teal-600" />
              <span>{t.screens.tabs.offers}</span>
            </button>
            <button
              onClick={() => handleSelectTab('pro')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeScreen === 'pro'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutDashboard className="w-4 h-4 text-teal-600" />
              <span>{t.screens.tabs.dashboard}</span>
            </button>
          </div>
        </div>

        {/* Display Container */}
        <div className="max-w-5xl mx-auto bg-slate-50/70 border border-slate-200 rounded-3xl p-4 sm:p-8 shadow-sm">
          
          {/* SCREEN 1: POST A JOB */}
          {activeScreen === 'post' && (
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
                <div>
                  <span className="text-xs font-semibold text-teal-700 uppercase">Post A Job</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Photos. Location. Date. Post it.
                  </h3>
                  <p className="text-xs text-slate-500">Takes about 2 minutes. Free and no obligation.</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-teal-50 text-teal-800 text-xs font-semibold rounded-lg border border-teal-200/60">
                    34 matching providers in Amsterdam
                  </span>
                </div>
              </div>

              {/* Step 1 in form */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-bold text-slate-500 mb-2">1. Described Need</div>
                <div className="text-sm font-medium text-slate-800 mb-2">
                  "I need to <span className="bg-amber-100 text-amber-900 px-1 rounded">clean my house</span>, <span className="bg-sky-100 text-sky-900 px-1 rounded">wash my windows</span>, and <span className="bg-teal-100 text-teal-900 px-1 rounded">wash my car</span>. It is a 3-bedroom house, 14 windows. Car is a family SUV."
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-200 font-semibold text-slate-700">AI found:</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-medium">Cleaning</span>
                  <span className="px-2 py-0.5 rounded bg-sky-50 text-sky-800 font-medium">Window cleaning</span>
                  <span className="px-2 py-0.5 rounded bg-teal-50 text-teal-800 font-medium">Car washing</span>
                </div>
              </div>

              {/* Step 2 in form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs font-bold text-slate-500 mb-2">2. Attached Photos & Videos (Optional)</div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-2 bg-white p-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 shadow-xs">
                      <img
                        src="/src/assets/images/service_house_cleaning_1792777417409.jpg"
                        alt="living-room.jpg"
                        className="w-8 h-8 rounded-md object-cover"
                      />
                      <span className="text-[11px]">living-room.jpg</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white p-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 shadow-xs">
                      <img
                        src="/src/assets/images/service_garden_landscaping_1792777417654.jpg"
                        alt="garden-lawn.jpg"
                        className="w-8 h-8 rounded-md object-cover"
                      />
                      <span className="text-[11px]">garden-lawn.jpg</span>
                    </div>
                    <span className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 flex items-center gap-1.5 shadow-xs">
                      <Upload className="w-3.5 h-3.5 text-teal-600" />
                      suv.mp4
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs font-bold text-slate-500 mb-2">3. Location & Timing</div>
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-700">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-teal-600" />
                      Amsterdam (1077 AB)
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-teal-600" />
                      Flexible: ± 2 days
                    </span>
                  </div>
                </div>
              </div>

              {/* Confirmation preview box */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-950">Job Dispatched Instantly</div>
                    <div className="text-xs text-emerald-800">Quotes typically arrive within 2 hours.</div>
                  </div>
                </div>
                <button
                  onClick={() => onOpenWaitlist('customer')}
                  className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800"
                >
                  Try When We Launch
                </button>
              </div>
            </div>
          )}

          {/* SCREEN 2: SMART RADAR */}
          {activeScreen === 'radar' && (
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-3">
                <div>
                  <span className="text-xs font-semibold text-teal-700 uppercase">Geo-Radius Matching</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Loqelo matches your job with nearby pros
                  </h3>
                  <p className="text-xs text-slate-500">Live geo-proximity radar centered on your neighborhood.</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-900 text-xs font-semibold rounded-lg">
                    5 suitable contractors found
                  </span>
                </div>
              </div>

              {/* Map representation inspired by video */}
              <div className="relative mt-6 h-80 rounded-2xl bg-gradient-to-br from-emerald-50/60 via-slate-50 to-teal-50/40 border border-slate-200 overflow-hidden flex items-center justify-center">
                
                {/* Concentric rings */}
                <div className="absolute w-72 h-72 rounded-full border border-teal-300/40 animate-ping duration-1000 opacity-20 pointer-events-none" />
                <div className="absolute w-80 h-80 rounded-full border border-teal-400/30 pointer-events-none" />
                <div className="absolute w-52 h-52 rounded-full border border-teal-500/40 pointer-events-none" />
                <div className="absolute w-28 h-28 rounded-full border border-teal-600/50 pointer-events-none" />

                {/* Center User Dot */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-teal-800 text-white font-bold flex items-center justify-center shadow-lg border-2 border-white">
                    AK
                  </div>
                  <div className="mt-1 px-2.5 py-0.5 rounded-full bg-white shadow-sm border border-slate-200 text-[10px] font-semibold text-slate-800">
                    House, window & car
                  </div>
                </div>

                {/* Pro pin 1 */}
                <div className="absolute top-8 left-16 sm:left-24 bg-white rounded-xl shadow-md border border-slate-200 p-2 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-teal-700 text-white text-[11px] font-bold flex items-center justify-center">
                    CP
                  </div>
                  <div className="text-left text-[11px]">
                    <div className="font-bold text-slate-900">CleanPro Amsterdam</div>
                    <div className="text-slate-500 flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" /> 4.8 · Verified Pro
                    </div>
                  </div>
                </div>

                {/* Pro pin 2 */}
                <div className="absolute top-8 right-16 sm:right-24 bg-white rounded-xl shadow-md border border-slate-200 p-2 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-700 text-white text-[11px] font-bold flex items-center justify-center">
                    GC
                  </div>
                  <div className="text-left text-[11px]">
                    <div className="font-bold text-slate-900">Glans & Co</div>
                    <div className="text-slate-500 flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" /> 4.7 · Verified Pro
                    </div>
                  </div>
                </div>

                {/* Pro pin 3 */}
                <div className="absolute bottom-8 right-14 sm:right-28 bg-white rounded-xl shadow-md border border-slate-200 p-2 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-700 text-white text-[11px] font-bold flex items-center justify-center">
                    FN
                  </div>
                  <div className="text-left text-[11px]">
                    <div className="font-bold text-slate-900">Fresh Nest</div>
                    <div className="text-slate-500 flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" /> 5.0 · Verified Pro
                    </div>
                  </div>
                </div>

                {/* Pro pin 4 */}
                <div className="absolute bottom-8 left-12 sm:left-20 bg-white rounded-xl shadow-md border border-slate-200 p-2 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-indigo-700 text-white text-[11px] font-bold flex items-center justify-center">
                    BC
                  </div>
                  <div className="text-left text-[11px]">
                    <div className="font-bold text-slate-900">Brightside Cleaning</div>
                    <div className="text-slate-500 flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" /> 4.8 · Verified Pro
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* SCREEN 3: COMPARE OFFERS */}
          {activeScreen === 'offers' && (
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
                <div>
                  <span className="text-xs font-semibold text-teal-700 uppercase">Transparent Marketplace</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Let the offers come to you.
                  </h3>
                  <p className="text-xs text-slate-500">
                    Compare fixed prices, timing, ratings, and past job success.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400">Price spread:</span>
                  <span className="font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-lg tabular-nums">
                    €295 – €410
                  </span>
                </div>
              </div>

              {/* Offer Rows */}
              <div className="space-y-3">
                {offers.map((offer, idx) => {
                  const isSelected = selectedOffer === offer.name;
                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                        isSelected
                          ? 'border-teal-600 bg-teal-50/50 shadow-sm ring-1 ring-teal-600/30'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-900 text-white font-bold flex items-center justify-center shrink-0">
                          {offer.avatar}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-slate-900 text-sm sm:text-base">
                              {offer.name}
                            </span>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${offer.badgeColor}`}>
                              {offer.badge}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                            <span className="flex items-center gap-1 font-semibold text-slate-700">
                              <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                              {offer.rating}
                            </span>
                            <span>{offer.reviews} reviews</span>
                            <span>·</span>
                            <span className="text-emerald-700 font-semibold">{offer.successRate} success</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
                        <div className="text-left sm:text-right">
                          <div className="text-lg font-extrabold text-slate-900 tabular-nums">
                            {offer.price}
                          </div>
                          <div className="text-[11px] text-slate-500">
                            {offer.duration} · {offer.dates}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setSelectedOffer(offer.name)}
                          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                            isSelected
                              ? 'bg-teal-700 text-white shadow-xs'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                          }`}
                        >
                          {isSelected ? '✓ Selected Pro' : 'Select'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Status footer */}
              <div className="p-3.5 bg-slate-100/80 rounded-xl flex items-center justify-between text-xs text-slate-600">
                <span>Selected: <strong className="text-slate-900">{selectedOffer}</strong></span>
                <span className="text-teal-700 font-medium">Safe milestone protection included</span>
              </div>
            </div>
          )}

          {/* SCREEN 4: PRO DASHBOARD */}
          {activeScreen === 'pro' && (
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
                <div>
                  <span className="text-xs font-semibold text-teal-700 uppercase">For Service Providers</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Jobs for you. Matched in seconds.
                  </h3>
                  <p className="text-xs text-slate-500">
                    Receive verified customer requests in your area and submit offers with 1 click.
                  </p>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-xl">
                  <div className="text-[11px] text-emerald-800 font-medium">Earnings Potential (Amsterdam)</div>
                  <div className="text-lg font-extrabold text-emerald-950 tabular-nums">€6,420 / mo</div>
                </div>
              </div>

              {/* Pro offer builder demo */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Incoming Job Card */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="px-2 py-0.5 rounded bg-teal-100 text-teal-900 font-semibold">
                        New Match Near You (2.1 km)
                      </span>
                      <span className="text-slate-400">Posted 10m ago</span>
                    </div>

                    <div className="flex gap-3 mb-3">
                      <img
                        src="/src/assets/images/service_garden_landscaping_1792777417654.jpg"
                        alt="Lawn care & hedge trimming"
                        className="w-20 h-16 rounded-xl object-cover shrink-0 shadow-xs border border-slate-200"
                      />
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm leading-snug mb-1">
                          Lawn care & hedge trimming, back garden 120 m²
                        </h4>
                        <p className="text-[11px] text-slate-500">
                          Amsterdam-Noord · 3 offers so far · Est. €245
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 text-xs">
                    <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 text-[11px]">Lawn care</span>
                    <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 text-[11px]">Hedge trimming</span>
                    <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 text-[11px]">Waste disposal</span>
                  </div>
                </div>

                {/* Send Offer Form in 1 Minute */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase mb-2">Send Your Best Offer</div>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">Your Total Price</label>
                        <div className="relative">
                          <span className="absolute left-3 top-2 text-sm text-slate-400">€</span>
                          <input
                            type="text"
                            readOnly
                            value="260"
                            className="w-full pl-7 pr-3 py-1.5 border border-slate-300 rounded-lg text-sm font-bold text-slate-900 bg-slate-50"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">When finished?</label>
                        <div className="px-3 py-2 bg-slate-100 rounded-lg text-xs font-bold text-slate-800 text-center">
                          1 day
                        </div>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      "Hi! I can start this coming Monday. Lawn, hedge edges, and full waste haul included."
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenWaitlist('contractor')}
                    className="mt-4 w-full py-2.5 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Join as Contractor (0% Fees at Launch)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
