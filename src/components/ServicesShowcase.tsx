import React from 'react';
import { LanguageCode } from '../types';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ServicesShowcaseProps {
  currentLang: LanguageCode;
  onOpenWaitlist: (type?: 'customer' | 'contractor') => void;
}

interface ServiceCard {
  title: string;
  category: 'Home' | 'Garden' | 'Office' | 'Repairs';
  description: string;
  imageSrc: string;
  popularTasks: string[];
  avgQuotes: string;
}

const SERVICES: ServiceCard[] = [
  {
    title: 'Home & Apartment Cleaning',
    category: 'Home',
    description:
      'Regular maintenance, deep cleaning, move-out turnovers, and post-renovation spotless sanitation.',
    imageSrc: '/src/assets/images/service_house_cleaning_1792777417409.jpg',
    popularTasks: ['Deep house cleaning', 'Window washing', 'Kitchen & oven detailing'],
    avgQuotes: 'Under 2 hours',
  },
  {
    title: 'Garden Care & Landscaping',
    category: 'Garden',
    description:
      'Hedge trimming, lawn mowing, seasonal yard cleanup, tree pruning, and green waste disposal.',
    imageSrc: '/src/assets/images/service_garden_landscaping_1792777417654.jpg',
    popularTasks: ['Hedge & bush trimming', 'Lawn care & aeration', 'Green waste removal'],
    avgQuotes: 'Under 3 hours',
  },
  {
    title: 'Plumbing, Electric & Fixtures',
    category: 'Repairs',
    description:
      'Leak detection, pipe repairs, tap installation, lighting replacement, and domestic installations.',
    imageSrc: '/src/assets/images/service_plumbing_renovation_1792777418304.jpg',
    popularTasks: ['Pipe leak repairs', 'Bathroom sink & taps', 'Electrical fixtures'],
    avgQuotes: 'Under 1 hour',
  },
  {
    title: 'Office & Facility Maintenance',
    category: 'Office',
    description:
      'Commercial cleaning, facade and high-reach window washing, carpet care, and scheduled office upkeep.',
    imageSrc: '/src/assets/images/service_office_maintenance_1792777418484.jpg',
    popularTasks: ['High-reach window washing', 'Commercial cleaning', 'Property maintenance'],
    avgQuotes: 'Same day',
  },
];

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ onOpenWaitlist }) => {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            Home · Garden · Office
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            Services Built for Every Corner of Your Property
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From single-room tasks to extensive property care, Loqelo matches certified local professionals equipped with the right skills and tools.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Fallback */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={srv.imageSrc}
                    alt={srv.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold tracking-wide">
                      {srv.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-teal-700 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {srv.description}
                  </p>

                  {/* Popular tasks list */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Common Requests:
                    </div>
                    {srv.popularTasks.map((task, tIdx) => (
                      <div
                        key={tIdx}
                        className="flex items-center gap-1.5 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="truncate">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400 text-[10px] block">Avg. First Quote</span>
                  <span className="font-bold text-teal-800">{srv.avgQuotes}</span>
                </div>
                <button
                  onClick={() => onOpenWaitlist('customer')}
                  className="font-semibold text-teal-700 hover:text-teal-900 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  Join List <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Adjacency Trust Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-teal-50/70 border border-teal-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-teal-950">
                Are you a service professional or contractor?
              </div>
              <div className="text-xs text-teal-800">
                Register during our pre-launch window and get 0% commission fees on all booked jobs for your first 90 days.
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpenWaitlist('contractor')}
            className="px-5 py-2.5 bg-teal-800 hover:bg-teal-900 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Join as Contractor (0% Fee)
          </button>
        </div>

      </div>
    </section>
  );
};
