import React, { useState, useEffect } from 'react';
import { LanguageCode, UserType } from './types';
import { detectBrowserLanguage } from './utils/i18n';
import { detectUserCountry } from './utils/countries';
import { recordPageView, trackEvent, initGA4 } from './utils/analytics';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoShowcase } from './components/VideoShowcase';
import { HowItWorks } from './components/HowItWorks';
import { ServicesShowcase } from './components/ServicesShowcase';
import { PlatformScreenshots } from './components/PlatformScreenshots';
import { LaunchCountdown } from './components/LaunchCountdown';
import { WaitlistSection } from './components/WaitlistSection';
import { Footer } from './components/Footer';
import { AdminModal } from './components/AdminModal';
import { CookieConsent } from './components/CookieConsent';

export default function App() {
  const [currentLang, setCurrentLang] = useState<LanguageCode>('en');
  const [waitlistInitialType, setWaitlistInitialType] = useState<UserType>('customer');
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    // Auto detect language based on browser preference
    const detectedLang = detectBrowserLanguage();
    setCurrentLang(detectedLang);

    // Auto detect country and record privacy-safe page view
    const detectedCountry = detectUserCountry();
    recordPageView(detectedCountry);

    // Try initializing GA4 if consent exists
    initGA4();
  }, []);

  const handleSelectLanguage = (lang: LanguageCode) => {
    setCurrentLang(lang);
    trackEvent('language_changed', { language: lang });
  };

  const handleOpenWaitlist = (type: UserType = 'customer') => {
    setWaitlistInitialType(type);
    const element = document.getElementById('waitlist-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 selection:bg-teal-500/20 selection:text-teal-900">
      {/* Navigation */}
      <Navbar
        currentLang={currentLang}
        onSelectLang={handleSelectLanguage}
        onOpenWaitlist={handleOpenWaitlist}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Landing Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section with Interactive Service Detector */}
        <Hero
          currentLang={currentLang}
          onOpenWaitlist={handleOpenWaitlist}
        />

        {/* 2. Official Video Showcase with Interactive Chapters */}
        <VideoShowcase currentLang={currentLang} />

        {/* 3. How It Works (Customer vs Contractor Steps) */}
        <HowItWorks
          currentLang={currentLang}
          onOpenWaitlist={handleOpenWaitlist}
        />

        {/* 4. Services Showcase (Home, Garden & Office Visual Gallery) */}
        <ServicesShowcase
          currentLang={currentLang}
          onOpenWaitlist={handleOpenWaitlist}
        />

        {/* 5. Selected Platform Screenshots & Screen Demos */}
        <PlatformScreenshots
          currentLang={currentLang}
          onOpenWaitlist={handleOpenWaitlist}
        />

        {/* 5. Launch Countdown to Feb 2027 & Early Perks */}
        <LaunchCountdown
          currentLang={currentLang}
          onOpenWaitlist={handleOpenWaitlist}
        />

        {/* 6. Waitlist Forms (Customers & Contractors) */}
        <WaitlistSection
          currentLang={currentLang}
          initialType={waitlistInitialType}
        />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenWaitlist={handleOpenWaitlist}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Admin Dashboard & Documentation Modal */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      {/* Privacy & Cookie Banner */}
      <CookieConsent />
    </div>
  );
}
