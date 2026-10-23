import React, { useState, useEffect } from 'react';
import { WaitlistEntry } from '../types';
import { getWaitlistEntries, exportWaitlistToCsv } from '../utils/storage';
import {
  getAnalyticsSummary,
  getStoredGAId,
  setStoredGAId,
} from '../utils/analytics';
import {
  X,
  Download,
  Users,
  Briefcase,
  TrendingUp,
  Globe,
  Search,
  CheckCircle2,
  FileText,
  BarChart2,
  BookOpen,
  ExternalLink,
  ShieldCheck,
  Settings,
} from 'lucide-react';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'contacts' | 'analytics' | 'ga4' | 'manual'>('contacts');
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [filterType, setFilterType] = useState<'all' | 'customer' | 'contractor'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [analytics, setAnalytics] = useState(getAnalyticsSummary());
  const [gaId, setGaId] = useState(getStoredGAId());
  const [gaSaved, setGaSaved] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setEntries(getWaitlistEntries());
      setAnalytics(getAnalyticsSummary());
      setGaId(getStoredGAId());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredEntries = entries.filter((e) => {
    if (filterType !== 'all' && e.type !== filterType) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchEmail = e.email.toLowerCase().includes(q);
      const matchCountry = e.country.toLowerCase().includes(q);
      const matchCode = e.referralCode.toLowerCase().includes(q);
      return matchEmail || matchCountry || matchCode;
    }
    return true;
  });

  const handleSaveGA = (e: React.FormEvent) => {
    e.preventDefault();
    setStoredGAId(gaId.trim());
    setGaSaved(true);
    setTimeout(() => setGaSaved(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-800 text-white flex items-center justify-center font-bold">
              LQ
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Loqelo Admin & Pre-Launch Control
              </h2>
              <p className="text-xs text-slate-500">
                Waitlist CRM · Analytics · GA4 Config · User Manual
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-xl transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-white px-6 gap-2 sm:gap-6 overflow-x-auto text-xs sm:text-sm font-semibold">
          <button
            onClick={() => setActiveTab('contacts')}
            className={`py-3.5 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === 'contacts'
                ? 'border-teal-600 text-teal-800'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Waitlist Contacts ({entries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`py-3.5 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === 'analytics'
                ? 'border-teal-600 text-teal-800'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BarChart2 className="w-4 h-4" />
            <span>Traffic & Conversion Stats</span>
          </button>

          <button
            onClick={() => setActiveTab('ga4')}
            className={`py-3.5 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === 'ga4'
                ? 'border-teal-600 text-teal-800'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Google Analytics 4 Setup</span>
          </button>

          <button
            onClick={() => setActiveTab('manual')}
            className={`py-3.5 border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === 'manual'
                ? 'border-teal-600 text-teal-800'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>User Manual & Deployment</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          
          {/* TAB 1: WAITLIST CONTACTS */}
          {activeTab === 'contacts' && (
            <div className="space-y-5">
              {/* Top Action Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="inline-flex p-1 bg-slate-100 rounded-xl text-xs font-semibold">
                    <button
                      onClick={() => setFilterType('all')}
                      className={`px-3 py-1.5 rounded-lg transition-colors ${
                        filterType === 'all'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      All ({entries.length})
                    </button>
                    <button
                      onClick={() => setFilterType('customer')}
                      className={`px-3 py-1.5 rounded-lg transition-colors ${
                        filterType === 'customer'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Customers ({entries.filter((e) => e.type === 'customer').length})
                    </button>
                    <button
                      onClick={() => setFilterType('contractor')}
                      className={`px-3 py-1.5 rounded-lg transition-colors ${
                        filterType === 'contractor'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Contractors ({entries.filter((e) => e.type === 'contractor').length})
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="Search email, country..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9 pr-3 py-1.5 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-teal-600"
                    />
                  </div>

                  <button
                    onClick={() => exportWaitlistToCsv(filteredEntries)}
                    className="flex items-center gap-2 px-3.5 py-2 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors shrink-0"
                  >
                    <Download className="w-4 h-4" />
                    <span>Export to CSV</span>
                  </button>
                </div>
              </div>

              {/* Data Table */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200">
                      <tr>
                        <th className="px-4 py-3">Group</th>
                        <th className="px-4 py-3">Email</th>
                        <th className="px-4 py-3">Country</th>
                        <th className="px-4 py-3">Account Type</th>
                        <th className="px-4 py-3">Categories</th>
                        <th className="px-4 py-3">Referral Code</th>
                        <th className="px-4 py-3">Registered</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                      {filteredEntries.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span
                              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold ${
                                item.type === 'customer'
                                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                  : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                              }`}
                            >
                              {item.type === 'customer' ? 'Customer' : 'Contractor / Pro'}
                            </span>
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-900 whitespace-nowrap">
                            {item.email}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">{item.country}</td>
                          <td className="px-4 py-3 capitalize whitespace-nowrap">
                            {item.entityType}
                            {item.type === 'contractor' && item.businessName && (
                              <span className="block text-[10px] text-slate-400">
                                {item.businessName}
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-slate-500 max-w-xs truncate">
                            {item.type === 'customer'
                              ? (item.serviceInterests || []).join(', ')
                              : (item.tradeCategories || []).join(', ')}
                          </td>
                          <td className="px-4 py-3 font-mono text-[11px] text-teal-800 whitespace-nowrap">
                            {item.referralCode}
                          </td>
                          <td className="px-4 py-3 text-slate-400 whitespace-nowrap">
                            {new Date(item.timestamp).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="text-right text-[11px] text-slate-400">
                Showing {filteredEntries.length} of {entries.length} records · Ready for Mailchimp, Brevo, or HubSpot import
              </div>
            </div>
          )}

          {/* TAB 2: ANALYTICS & CONVERSION */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              {/* KPI Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="text-xs text-slate-500 font-semibold mb-1">Total Visitors</div>
                  <div className="text-2xl font-extrabold text-slate-900 tabular-nums">
                    {analytics.totalVisitors}
                  </div>
                  <div className="text-[11px] text-teal-700 font-medium mt-1">Unique sessions</div>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="text-xs text-slate-500 font-semibold mb-1">Customer Signups</div>
                  <div className="text-2xl font-extrabold text-blue-700 tabular-nums">
                    {analytics.customerSignups}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">Home & office owners</div>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="text-xs text-slate-500 font-semibold mb-1">Contractor Signups</div>
                  <div className="text-2xl font-extrabold text-emerald-700 tabular-nums">
                    {analytics.contractorSignups}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">Trade professionals</div>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="text-xs text-slate-500 font-semibold mb-1">Conversion Rate</div>
                  <div className="text-2xl font-extrabold text-teal-800 tabular-nums">
                    {analytics.conversionRate}%
                  </div>
                  <div className="text-[11px] text-emerald-700 font-medium mt-1">Visit-to-waitlist</div>
                </div>
              </div>

              {/* Geographic Breakdown */}
              <div className="border border-slate-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-4">
                  <Globe className="w-4 h-4 text-teal-700" />
                  <span>Country Distribution (Where Potential Users Are Coming From)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {Object.entries(analytics.countriesBreakdown).map(([cName, count]) => {
                    const percentage = Math.round(
                      (count / (entries.length || 1)) * 100
                    );
                    return (
                      <div
                        key={cName}
                        className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between"
                      >
                        <div>
                          <div className="text-xs font-bold text-slate-800">{cName}</div>
                          <div className="text-[11px] text-slate-500">{percentage}% of signups</div>
                        </div>
                        <div className="text-base font-extrabold text-slate-900 font-mono">
                          {count}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl flex items-start gap-3 text-xs text-teal-900">
                <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold">Strict Privacy & GDPR Compliance:</strong>
                  <p className="mt-0.5 text-teal-800">
                    In compliance with requirement #5, no personal email addresses, names, or form content are ever shared with external analytics tools or scripts. Tracking is restricted to anonymized behavioral events and country geolocation.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: GA4 SETUP */}
          {activeTab === 'ga4' && (
            <div className="space-y-6">
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Google Analytics 4 Configuration
                </h3>
                <p className="text-xs text-slate-600 mb-4">
                  Connect your real Google Analytics 4 property to track live traffic when hosted on loqelo.com.
                </p>

                <form onSubmit={handleSaveGA} className="flex items-center gap-3 max-w-md">
                  <div className="flex-1">
                    <label className="block text-[11px] font-semibold text-slate-500 uppercase mb-1">
                      Measurement ID
                    </label>
                    <input
                      type="text"
                      value={gaId}
                      onChange={(e) => setGaId(e.target.value)}
                      placeholder="G-XXXXXXXXXX"
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-sm font-mono text-slate-900 focus:outline-none focus:border-teal-600"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-5 px-4 py-2.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-xl transition-colors shrink-0"
                  >
                    Save GA4 ID
                  </button>
                </form>

                {gaSaved && (
                  <div className="mt-3 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Measurement ID updated successfully!
                  </div>
                )}
              </div>

              {/* Pre-configured events documentation */}
              <div className="border border-slate-200 rounded-2xl p-6">
                <h4 className="text-sm font-bold text-slate-900 mb-2">
                  Pre-Configured GA4 Events in Code:
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-slate-50 rounded-lg flex items-center justify-between">
                    <code className="font-mono text-teal-800 font-bold">page_view</code>
                    <span className="text-slate-500">Tracks visitor session and detected country</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-lg flex items-center justify-between">
                    <code className="font-mono text-teal-800 font-bold">customer_signup</code>
                    <span className="text-slate-500">Triggered upon successful customer waitlist join</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-lg flex items-center justify-between">
                    <code className="font-mono text-teal-800 font-bold">contractor_signup</code>
                    <span className="text-slate-500">Triggered upon successful contractor waitlist join</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-lg flex items-center justify-between">
                    <code className="font-mono text-teal-800 font-bold">video_play</code>
                    <span className="text-slate-500">Fired when visitor plays the promo video</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-lg flex items-center justify-between">
                    <code className="font-mono text-teal-800 font-bold">video_chapter_jump</code>
                    <span className="text-slate-500">Tracks user engagement with specific feature chapters</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: USER MANUAL & DEPLOYMENT GUIDE */}
          {activeTab === 'manual' && (
            <div className="space-y-6 text-slate-700 text-xs sm:text-sm">
              <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl">
                <h3 className="text-sm font-bold text-teal-950 mb-1">
                  100% Free / Low-Maintenance Solution Overview
                </h3>
                <p className="text-xs text-teal-900 leading-relaxed">
                  As requested in section 6 & 7: This landing page requires <strong>$0 in paid software licenses or subscriptions</strong>. It runs on a blazing fast React + Vite static bundle with zero recurring server fees, fully configured with <code className="bg-white/80 px-1 py-0.5 rounded text-teal-900 font-mono">netlify.toml</code> and <code className="bg-white/80 px-1 py-0.5 rounded text-teal-900 font-mono">_redirects</code> for instant 1-click deployment on <strong>Netlify via GitHub</strong>.
                </p>
              </div>

              <div className="border border-slate-200 rounded-2xl p-5 space-y-4">
                <h4 className="font-bold text-slate-900 text-base">
                  0. Deploying to Netlify via GitHub (Quick Steps)
                </h4>
                <ol className="list-decimal pl-5 space-y-1.5 text-slate-600">
                  <li>Push this project to your GitHub repository (<code className="bg-slate-100 px-1 py-0.5 rounded">git push origin main</code>).</li>
                  <li>Log in to <strong className="text-slate-800">Netlify</strong> and click <strong>"Add new site" → "Import an existing project"</strong>.</li>
                  <li>Choose <strong>GitHub</strong> and select your Loqelo repository.</li>
                  <li>Netlify automatically detects <code className="bg-slate-100 px-1 py-0.5 rounded">netlify.toml</code>: Build command <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">npm run build</code>, Publish directory <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">dist</code>.</li>
                  <li>Click <strong>"Deploy"</strong>. Your website will be live globally in under 60 seconds with free SSL!</li>
                </ol>
              </div>

              <div className="border border-slate-200 rounded-2xl p-5 space-y-4">
                <h4 className="font-bold text-slate-900 text-base">
                  1. Connecting the loqelo.com Domain
                </h4>
                <p className="leading-relaxed">
                  To point your domain <code className="bg-slate-100 px-1 py-0.5 rounded text-teal-800">loqelo.com</code> to this deployment:
                </p>
                <ol className="list-decimal pl-5 space-y-1 text-slate-600">
                  <li>In your domain registrar (e.g. GoDaddy, Namecheap, Cloudflare, OVH), navigate to <strong>DNS Management</strong>.</li>
                  <li>Add an <strong>A Record</strong> pointing <code className="bg-slate-100 px-1 py-0.5 rounded">@</code> to your hosting provider's IP address.</li>
                  <li>Add a <strong>CNAME Record</strong> pointing <code className="bg-slate-100 px-1 py-0.5 rounded">www</code> to <code className="bg-slate-100 px-1 py-0.5 rounded">loqelo.com</code>.</li>
                  <li>SSL certificates are automatically generated and renewed at zero cost via Let's Encrypt / hosting edge.</li>
                </ol>
              </div>

              <div className="border border-slate-200 rounded-2xl p-5 space-y-4">
                <h4 className="font-bold text-slate-900 text-base">
                  2. Managing Waitlist Contacts & Email Marketing
                </h4>
                <p className="leading-relaxed">
                  All sign-ups are instantly logged with category tags, country, and user group. You have 3 ready options:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>
                    <strong>Built-In CSV Export (Recommended & Free):</strong> Click the "Export to CSV" button on the contacts tab at any time. The resulting file imports directly into Excel, Google Sheets, Brevo, Mailchimp, or Klaviyo.
                  </li>
                  <li>
                    <strong>Free Tier Email Marketing (Brevo / MailerLite):</strong> Free tier allows sending up to 300 free emails per day without any monthly subscription.
                  </li>
                  <li>
                    <strong>Google Sheets Webhook (Optional):</strong> A simple 5-line Google Apps Script can automatically append every new submission into a shared Google Sheet in real time.
                  </li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-2xl p-5 space-y-4">
                <h4 className="font-bold text-slate-900 text-base">
                  3. Content & Translation Editing
                </h4>
                <p className="leading-relaxed">
                  All text, headlines, and translations for all 6 languages (EN, DE, NL, FR, PL, ES) are cleanly stored in a single structured file at <code className="bg-slate-100 px-1 py-0.5 rounded text-teal-800">/src/utils/i18n.ts</code>. You can easily modify wording, dates, or launch milestones by editing that file without touching any code.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Loqelo Pre-Launch Release 1.0</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
