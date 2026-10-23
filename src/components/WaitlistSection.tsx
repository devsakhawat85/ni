import React, { useState, useEffect } from 'react';
import { LanguageCode, UserType, WaitlistEntry } from '../types';
import { TRANSLATIONS } from '../utils/i18n';
import { COUNTRIES, detectUserCountry } from '../utils/countries';
import { addWaitlistEntry } from '../utils/storage';
import { trackEvent } from '../utils/analytics';
import {
  CheckCircle,
  Copy,
  Check,
  Sparkles,
  Shield,
  ArrowRight,
  Gift,
  Building,
  User,
} from 'lucide-react';

interface WaitlistSectionProps {
  currentLang: LanguageCode;
  initialType?: UserType;
}

const POPULAR_SERVICES = [
  'House & Apartment Cleaning',
  'Window & Facade Washing',
  'Garden & Tree Trimming',
  'Plumbing & Electrics',
  'Flooring & Renovation',
  'Pool & Outdoor Care',
  'Office Maintenance',
  'Senior Assistance',
];

export const WaitlistSection: React.FC<WaitlistSectionProps> = ({
  currentLang,
  initialType = 'customer',
}) => {
  const t = TRANSLATIONS[currentLang];
  const [userType, setUserType] = useState<UserType>(initialType);

  // Form Fields
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('Netherlands');
  const [entityType, setEntityType] = useState<'individual' | 'business'>('individual');
  const [businessName, setBusinessName] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([POPULAR_SERVICES[0]]);
  const [consentMarketing, setConsentMarketing] = useState(true);
  const [honeypot, setHoneypot] = useState(''); // Anti-spam trap

  // Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEntry, setSubmittedEntry] = useState<WaitlistEntry | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (initialType) {
      setUserType(initialType);
    }
    const detected = detectUserCountry();
    if (detected) {
      setCountry(detected);
    }
  }, [initialType]);

  const handleToggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Spam honeypot validation
    if (honeypot) {
      console.warn('Bot submission blocked');
      return;
    }

    // Basic validation
    if (!email || !email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!consentMarketing) {
      setErrorMessage('Please agree to receive launch updates to join the waitlist.');
      return;
    }

    setIsSubmitting(true);
    trackEvent('form_start', { userType, country });

    setTimeout(() => {
      try {
        let entry: WaitlistEntry;
        if (userType === 'customer') {
          entry = addWaitlistEntry({
            type: 'customer',
            email: email.trim().toLowerCase(),
            country,
            entityType,
            serviceInterests: selectedServices,
            consentMarketing,
          });
          trackEvent('customer_signup', { country, entityType });
        } else {
          entry = addWaitlistEntry({
            type: 'contractor',
            email: email.trim().toLowerCase(),
            country,
            entityType,
            tradeCategories: selectedServices,
            businessName: entityType === 'business' ? businessName : undefined,
            consentMarketing,
          });
          trackEvent('contractor_signup', { country, entityType });
        }

        setSubmittedEntry(entry);
        setIsSubmitting(false);
      } catch (err) {
        console.error(err);
        setErrorMessage('Failed to save your reservation. Please try again.');
        setIsSubmitting(false);
      }
    }, 400);
  };

  const handleCopyInviteLink = () => {
    if (!submittedEntry) return;
    const url = `${window.location.origin}?ref=${submittedEntry.referralCode}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
      trackEvent('referral_link_copied');
    });
  };

  const resetForm = () => {
    setSubmittedEntry(null);
    setEmail('');
    setBusinessName('');
  };

  return (
    <section id="waitlist-form" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            {t.waitlist.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            {t.waitlist.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t.waitlist.subtitle}
          </p>
        </div>

        {/* Card */}
        <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {submittedEntry ? (
            /* SUCCESS CONFIRMATION STATE */
            <div className="text-center py-6 space-y-6 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 mx-auto flex items-center justify-center border border-teal-500/40 shadow-inner">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {t.waitlist.successTitle}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
                  {t.waitlist.successMessage}
                </p>
              </div>

              {/* Priority badge & Perks summary */}
              <div className="p-4 rounded-2xl bg-teal-950/60 border border-teal-800/80 max-w-md mx-auto text-left space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-teal-300">
                  <span className="flex items-center gap-1.5">
                    <Gift className="w-4 h-4 text-teal-400" />
                    {submittedEntry.type === 'customer'
                      ? 'Early Customer Benefit:'
                      : 'Early Contractor Benefit:'}
                  </span>
                  <span className="font-mono text-white bg-teal-900/80 px-2 py-0.5 rounded border border-teal-700">
                    {submittedEntry.referralCode}
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  {submittedEntry.type === 'customer'
                    ? '€20 introductory voucher credited to your account upon launch in February 2027.'
                    : '0% platform service fee on all accepted jobs for your first 90 days after launch.'}
                </p>
              </div>

              {/* Referral sharing */}
              <div className="max-w-md mx-auto space-y-2 text-left">
                <label className="text-xs text-slate-400 font-medium">
                  {t.waitlist.referralShareText}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={`${window.location.origin}?ref=${submittedEntry.referralCode}`}
                    className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-300 font-mono select-all focus:outline-none"
                  />
                  <button
                    onClick={handleCopyInviteLink}
                    className="px-4 py-2.5 bg-teal-600 hover:bg-teal-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer"
                  >
                    {copiedLink ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedLink ? t.waitlist.copied : t.waitlist.copyLink}</span>
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700/60">
                <button
                  onClick={resetForm}
                  className="text-xs text-slate-400 hover:text-white underline underline-offset-4 transition-colors"
                >
                  {t.waitlist.anotherSignup}
                </button>
              </div>
            </div>
          ) : (
            /* ACTIVE SIGNUP FORM */
            <div>
              {/* Group Selector Tab */}
              <div className="grid grid-cols-2 gap-2 p-1.5 bg-slate-900/90 rounded-2xl mb-8 border border-slate-700/60">
                <button
                  type="button"
                  onClick={() => setUserType('customer')}
                  className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                    userType === 'customer'
                      ? 'bg-teal-700 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span>{t.waitlist.customerTab}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setUserType('contractor')}
                  className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                    userType === 'contractor'
                      ? 'bg-teal-700 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Building className="w-4 h-4" />
                  <span>{t.waitlist.contractorTab}</span>
                </button>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Honeypot anti-spam field (hidden from human users) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company_nickname_hp">Do not fill this</label>
                  <input
                    id="company_nickname_hp"
                    type="text"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    {t.waitlist.emailLabel} <span className="text-teal-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.waitlist.emailPlaceholder}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                  />
                </div>

                {/* Country of Residence / Service */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    {t.waitlist.countryLabel} <span className="text-teal-400">*</span>
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all cursor-pointer"
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c.code} value={c.name} className="bg-slate-900 text-white">
                        {c.flag} {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Entity Type: Individual vs Business */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    {t.waitlist.typeLabel} (Optional)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                        entityType === 'individual'
                          ? 'border-teal-500 bg-teal-950/40 text-white'
                          : 'border-slate-700 bg-slate-900/60 text-slate-400 hover:text-slate-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="entityType"
                        value="individual"
                        checked={entityType === 'individual'}
                        onChange={() => setEntityType('individual')}
                        className="text-teal-600 focus:ring-teal-500 bg-slate-900 border-slate-700"
                      />
                      <span className="text-xs font-medium">
                        {userType === 'customer'
                          ? t.waitlist.typeIndividual
                          : t.waitlist.typeContractorSolo}
                      </span>
                    </label>

                    <label
                      className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                        entityType === 'business'
                          ? 'border-teal-500 bg-teal-950/40 text-white'
                          : 'border-slate-700 bg-slate-900/60 text-slate-400 hover:text-slate-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="entityType"
                        value="business"
                        checked={entityType === 'business'}
                        onChange={() => setEntityType('business')}
                        className="text-teal-600 focus:ring-teal-500 bg-slate-900 border-slate-700"
                      />
                      <span className="text-xs font-medium">
                        {userType === 'customer'
                          ? t.waitlist.typeBusiness
                          : t.waitlist.typeContractorBusiness}
                      </span>
                    </label>
                  </div>
                </div>

                {/* Contractor Business Name (if business) */}
                {userType === 'contractor' && entityType === 'business' && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="e.g. Amsterdam Home Services BV"
                      className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                )}

                {/* Service Category Interests */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    {t.waitlist.serviceCategoryLabel}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {POPULAR_SERVICES.map((srv, idx) => {
                      const isSelected = selectedServices.includes(srv);
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleToggleService(srv)}
                          className={`text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-teal-700 border-teal-500 text-white font-semibold'
                              : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
                          }`}
                        >
                          {isSelected && '✓ '}
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* GDPR Marketing Consent */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={consentMarketing}
                      onChange={(e) => setConsentMarketing(e.target.checked)}
                      className="mt-0.5 rounded border-slate-700 bg-slate-900 text-teal-600 focus:ring-teal-500"
                    />
                    <span className="text-xs text-slate-300 leading-relaxed">
                      {t.waitlist.consentText}
                    </span>
                  </label>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-950/60 border border-red-800 text-red-300 text-xs rounded-xl">
                    {errorMessage}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-teal-600 hover:bg-teal-500 disabled:bg-slate-700 text-white text-sm sm:text-base font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>{t.waitlist.submitting}</span>
                  ) : (
                    <>
                      <span>
                        {userType === 'customer'
                          ? t.waitlist.submitCustomer
                          : t.waitlist.submitContractor}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500">
                  <Shield className="w-3.5 h-3.5 text-teal-500" />
                  <span>Privacy secured. Emails are strictly never shared with third parties.</span>
                </div>

              </form>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
