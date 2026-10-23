import { LanguageCode } from '../types';

export interface Translations {
  nav: {
    howItWorks: string;
    video: string;
    preview: string;
    launch: string;
    waitlist: string;
    admin: string;
  };
  hero: {
    tagline: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    launchNotice: string;
    ctaCustomer: string;
    ctaContractor: string;
    interactivePlaceholder: string;
    interactiveButton: string;
    prosNearbyTag: string;
  };
  howItWorks: {
    badge: string;
    title: string;
    subtitle: string;
    tabs: {
      customer: string;
      contractor: string;
    };
    customerSteps: Array<{
      step: string;
      title: string;
      desc: string;
    }>;
    contractorSteps: Array<{
      step: string;
      title: string;
      desc: string;
    }>;
  };
  video: {
    badge: string;
    title: string;
    subtitle: string;
    playVideo: string;
    pauseVideo: string;
    mute: string;
    unmute: string;
  };
  screens: {
    badge: string;
    title: string;
    subtitle: string;
    tabs: {
      postJob: string;
      radar: string;
      offers: string;
      dashboard: string;
    };
  };
  waitlist: {
    badge: string;
    title: string;
    subtitle: string;
    customerTab: string;
    contractorTab: string;
    emailLabel: string;
    emailPlaceholder: string;
    countryLabel: string;
    typeLabel: string;
    typeIndividual: string;
    typeBusiness: string;
    typeContractorBusiness: string;
    typeContractorSolo: string;
    serviceCategoryLabel: string;
    consentText: string;
    submitCustomer: string;
    submitContractor: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    referralShareText: string;
    copyLink: string;
    copied: string;
    anotherSignup: string;
  };
  launch: {
    badge: string;
    title: string;
    targetDate: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    perksTitle: string;
    perk1Title: string;
    perk1Desc: string;
    perk2Title: string;
    perk2Desc: string;
    perk3Title: string;
    perk3Desc: string;
  };
  footer: {
    tagline: string;
    rights: string;
    privacy: string;
    terms: string;
    contact: string;
    adminDashboard: string;
    userManual: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, Translations> = {
  en: {
    nav: {
      howItWorks: 'How It Works',
      video: 'Watch Video',
      preview: 'Platform Preview',
      launch: 'Launch Feb 2027',
      waitlist: 'Join Waitlist',
      admin: 'Admin & Export',
    },
    hero: {
      tagline: 'Everything your place needs.',
      title: 'Connecting quality service providers with',
      titleHighlight: 'home, garden & office.',
      subtitle:
        'Post your job in your own words, receive transparent offers from verified local pros, and track everything in one place. Launching February 2027.',
      launchNotice: 'Official Pre-Launch • Launching February 2027',
      ctaCustomer: 'Join as Customer',
      ctaContractor: 'Join as Service Provider',
      interactivePlaceholder: 'e.g. I need to clean my house, trim the trees, and fix a leaking pipe...',
      interactiveButton: 'See Matching Pros',
      prosNearbyTag: 'verified pros ready in your area',
    },
    howItWorks: {
      badge: 'Simple, Transparent, Fast',
      title: 'How Loqelo Works',
      subtitle: 'From describing what you need in plain words to a completed job with peace of mind.',
      tabs: {
        customer: 'For Customers',
        contractor: 'For Contractors & Pros',
      },
      customerSteps: [
        {
          step: '01',
          title: 'Describe Your Need',
          desc: 'Speak or type in your own words. Loqelo identifies the exact services needed, lets you attach photos, specify location and flexible dates in 2 minutes.',
        },
        {
          step: '02',
          title: 'Local Radar Matching',
          desc: 'Your request is dispatched to verified, rated local pros in your immediate radius. No cold calls, no spam.',
        },
        {
          step: '03',
          title: 'Receive & Compare Offers',
          desc: 'Transparent offers arrive directly to your inbox. Compare fixed prices, estimated completion dates, customer reviews, and job success rates.',
        },
        {
          step: '04',
          title: 'All Jobs in One Place',
          desc: 'Track progress from first proposal to job completion. Safe milestones, clear communication, and guaranteed satisfaction.',
        },
      ],
      contractorSteps: [
        {
          step: '01',
          title: 'Jobs That Come to You',
          desc: 'Receive pre-qualified job requests matched exactly to your trade skills and specified service radius on an interactive map.',
        },
        {
          step: '02',
          title: 'Send an Offer in 1 Minute',
          desc: 'Review job photos, scope, and customer dates. Send your total price, timing, and a quick note in seconds.',
        },
        {
          step: '03',
          title: 'Direct Client Connection',
          desc: 'When the customer accepts your offer, connect directly. No middlemen delays or hidden surprise deductions.',
        },
        {
          step: '04',
          title: 'Grow Your Local Reputation',
          desc: 'Build verified public reviews, highlight your past works, and benefit from 0% commission fees during the launch phase.',
        },
      ],
    },
    video: {
      badge: 'Official Presentation',
      title: 'Experience the Loqelo Concept',
      subtitle: 'Watch our 80-second walkthrough showing the platform workflow from both customer and contractor perspectives.',
      playVideo: 'Play Video',
      pauseVideo: 'Pause',
      mute: 'Mute',
      unmute: 'Unmute',
    },
    screens: {
      badge: 'Designed For Simplicity',
      title: 'Selected Platform Screens',
      subtitle: 'Take an exclusive first look at the user experience developed for our February 2027 release.',
      tabs: {
        postJob: '1. Post a Job',
        radar: '2. Smart Radar',
        offers: '3. Compare Offers',
        dashboard: '4. Pro Dashboard',
      },
    },
    waitlist: {
      badge: 'Early Access',
      title: 'Be First in Line for Launch',
      subtitle: 'Reserve your spot today. Early customers receive service vouchers, and contractors get 0% commission for their first 3 months.',
      customerTab: "I'm a Customer",
      contractorTab: "I'm a Service Provider",
      emailLabel: 'Email Address',
      emailPlaceholder: 'you@domain.com',
      countryLabel: 'Country of Residence',
      typeLabel: 'Account Type',
      typeIndividual: 'Private Homeowner / Individual',
      typeBusiness: 'Company / Property Manager',
      typeContractorBusiness: 'Registered Business / Company',
      typeContractorSolo: 'Sole Proprietor / Freelancer',
      serviceCategoryLabel: 'Primary Service Interest',
      consentText: 'I agree to receive email updates about Loqelo’s launch, features, and early access benefits. You can unsubscribe at any time.',
      submitCustomer: 'Join Customer Waitlist',
      submitContractor: 'Join Contractor Waitlist',
      submitting: 'Saving your reservation...',
      successTitle: 'You are on the Loqelo list!',
      successMessage: 'Thank you for joining. We have recorded your reservation and will notify you ahead of the February 2027 rollout.',
      referralShareText: 'Share your personal priority invite link with friends, family, or fellow contractors:',
      copyLink: 'Copy Invite Link',
      copied: 'Copied to Clipboard!',
      anotherSignup: 'Register another contact',
    },
    launch: {
      badge: 'Global Rollout Roadmap',
      title: 'Planned Launch: February 2027',
      targetDate: 'February 1, 2027',
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
      perksTitle: 'Early Waitlist Privileges',
      perk1Title: 'Zero Commission for Early Pros',
      perk1Desc: 'Service providers joining before launch enjoy 0% platform service fees for the first 90 days after going live.',
      perk2Title: '€20 Voucher for Customers',
      perk2Desc: 'Registered early adopters receive a €20 discount credit applied to their first booked service.',
      perk3Title: 'Multi-Country Availability',
      perk3Desc: 'Simultaneous initial launch across key European markets with localized multi-currency and native language support.',
    },
    footer: {
      tagline: 'Everything your place needs.',
      rights: '© 2026-2027 Loqelo Inc. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      contact: 'Contact Support: hello@loqelo.com',
      adminDashboard: 'Waitlist Manager & Stats',
      userManual: 'User Manual & Deployment',
    },
  },
  de: {
    nav: {
      howItWorks: 'So funktioniert es',
      video: 'Video ansehen',
      preview: 'Plattform-Vorschau',
      launch: 'Start Feb 2027',
      waitlist: 'Auf die Warteliste',
      admin: 'Admin & Export',
    },
    hero: {
      tagline: 'Alles, was Ihr Zuhause braucht.',
      title: 'Verbindet erstklassige Dienstleister mit',
      titleHighlight: 'Haus, Garten und Büro.',
      subtitle:
        'Beschreiben Sie Ihren Bedarf in eigenen Worten, erhalten Sie transparente Angebote geprüfter lokaler Dienstleister und behalten Sie alles an einem Ort im Blick. Start Februar 2027.',
      launchNotice: 'Offizieller Vorab-Start • Geplant für Februar 2027',
      ctaCustomer: 'Als Kunde anmelden',
      ctaContractor: 'Als Dienstleister beitreten',
      interactivePlaceholder: 'z.B. Haus reinigen, Bäume schneiden und Rohr reparieren...',
      interactiveButton: 'Passende Profis anzeigen',
      prosNearbyTag: 'geprüfte Profis in Ihrer Nähe verfügbar',
    },
    howItWorks: {
      badge: 'Einfach, Transparent, Schnell',
      title: 'So funktioniert Loqelo',
      subtitle: 'Vom einfachen Beschreiben des Bedarfs bis zum zuverlässig erledigten Auftrag.',
      tabs: {
        customer: 'Für Kunden',
        contractor: 'Für Dienstleister',
      },
      customerSteps: [
        {
          step: '01',
          title: 'Bedarf beschreiben',
          desc: 'Sprechen oder tippen Sie in Ihren eigenen Worten. Loqelo erkennt die benötigten Services und ermöglicht das Hinzufügen von Fotos und Wunschterminen in 2 Minuten.',
        },
        {
          step: '02',
          title: 'Lokales Radar-Matching',
          desc: 'Ihre Anfrage erreicht direkt geprüfte, bewertete Fachleute in Ihrer unmittelbaren Umgebung. Keine unerwünschten Kaltanrufe.',
        },
        {
          step: '03',
          title: 'Angebote vergleichen',
          desc: 'Transparente Angebote direkt erhalten. Festpreise, Termine, Kundenbewertungen und Erfolgsquoten auf einen Blick vergleichen.',
        },
        {
          step: '04',
          title: 'Alles an einem Ort',
          desc: 'Vom ersten Angebot bis zur Fertigstellung alles zentral im Dashboard nachverfolgen.',
        },
      ],
      contractorSteps: [
        {
          step: '01',
          title: 'Aufträge kommen zu Ihnen',
          desc: 'Erhalten Sie qualifizierte Kundenanfragen, die exakt zu Ihren Qualifikationen und Ihrem Tätigkeitsbereich passen.',
        },
        {
          step: '02',
          title: 'Angebot in 1 Minute senden',
          desc: 'Fotos und Aufgabenstellung ansehen, Festpreis und Termin eingeben – fertig.',
        },
        {
          step: '03',
          title: 'Direkter Kundenkontakt',
          desc: 'Sobald der Kunde Ihr Angebot annimmt, arbeiten Sie direkt zusammen ohne Umwege.',
        },
        {
          step: '04',
          title: '0% Gebühren zum Start',
          desc: 'Frühzeitige Dienstleister profitieren von 0% Vermittlungsprovision in den ersten 3 Monaten.',
        },
      ],
    },
    video: {
      badge: 'Offizielles Video',
      title: 'Das Loqelo-Konzept im Video',
      subtitle: 'Sehen Sie sich die 80-sekündige Plattform-Vorstellung an.',
      playVideo: 'Video abspielen',
      pauseVideo: 'Pause',
      mute: 'Stummschalten',
      unmute: 'Ton an',
    },
    screens: {
      badge: 'Intuitive Benutzeroberfläche',
      title: 'Einblick in die Plattform',
      subtitle: 'Entdecken Sie die für den Start im Februar 2027 entwickelten Funktionen.',
      tabs: {
        postJob: '1. Auftrag aufgeben',
        radar: '2. Dienstleister-Radar',
        offers: '3. Angebote vergleichen',
        dashboard: '4. Profi-Dashboard',
      },
    },
    waitlist: {
      badge: 'Frühzeitiger Zugang',
      title: 'Sichern Sie sich Ihren Platz',
      subtitle: 'Registrieren Sie sich vor dem Start und erhalten Sie exklusive Willkommensvorteile.',
      customerTab: 'Ich bin Kunde',
      contractorTab: 'Ich bin Dienstleister',
      emailLabel: 'E-Mail-Adresse',
      emailPlaceholder: 'ihre-email@domain.de',
      countryLabel: 'Land',
      typeLabel: 'Kategorie',
      typeIndividual: 'Privatperson / Eigentümer',
      typeBusiness: 'Unternehmen / Hausverwaltung',
      typeContractorBusiness: 'Eingetragenes Unternehmen / Firma',
      typeContractorSolo: 'Einzelunternehmer / Selbstständig',
      serviceCategoryLabel: 'Gewünschte Dienstleistung',
      consentText: 'Ich stimme zu, E-Mail-Informationen über den Loqelo-Start und exklusive Angebote zu erhalten.',
      submitCustomer: 'Als Kunde eintragen',
      submitContractor: 'Als Dienstleister eintragen',
      submitting: 'Wird gespeichert...',
      successTitle: 'Erfolgreich eingetragen!',
      successMessage: 'Vielen Dank! Wir informieren Sie rechtzeitig vor dem Start im Februar 2027.',
      referralShareText: 'Empfehlungslink mit Bekannten teilen:',
      copyLink: 'Link kopieren',
      copied: 'In die Zwischenablage kopiert!',
      anotherSignup: 'Weiteren Kontakt eintragen',
    },
    launch: {
      badge: 'Geplanter Start',
      title: 'Veröffentlichung: Februar 2027',
      targetDate: '1. Februar 2027',
      days: 'Tage',
      hours: 'Stunden',
      minutes: 'Minuten',
      seconds: 'Sekunden',
      perksTitle: 'Exklusive Vorteile für die Warteliste',
      perk1Title: '0% Provision für erste Dienstleister',
      perk1Desc: 'Für die ersten 90 Tage nach Start erheben wir keine Vermittlungsprovision.',
      perk2Title: '20€ Gutschein für Kunden',
      perk2Desc: 'Erhalten Sie 20€ Guthaben auf Ihren ersten gebuchten Auftrag.',
      perk3Title: 'Europaweiter Rollout',
      perk3Desc: 'Verfügbar in den Niederlanden, Deutschland, Frankreich, Polen und weiteren Ländern.',
    },
    footer: {
      tagline: 'Alles, was Ihr Zuhause braucht.',
      rights: '© 2026-2027 Loqelo Inc. Alle Rechte vorbehalten.',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      contact: 'Kontakt: hello@loqelo.com',
      adminDashboard: 'Wartelisten-Verwaltung',
      userManual: 'Benutzerhandbuch',
    },
  },
  nl: {
    nav: {
      howItWorks: 'Hoe het werkt',
      video: 'Bekijk Video',
      preview: 'Platform preview',
      launch: 'Lancering feb 2027',
      waitlist: 'Meld je aan',
      admin: 'Beheer & Export',
    },
    hero: {
      tagline: 'Alles wat jouw plek nodig heeft.',
      title: 'Verbindt betrouwbare vakmensen met',
      titleHighlight: 'huis, tuin en kantoor.',
      subtitle:
        'Omschrijf wat je nodig hebt in je eigen woorden, ontvang transparante offertes van beoordeelde lokale professionals en volg alles op één plek. Lancering februari 2027.',
      launchNotice: 'Officiële pre-launch • Lancering februari 2027',
      ctaCustomer: 'Aanmelden als klant',
      ctaContractor: 'Aanmelden als vakman',
      interactivePlaceholder: 'bijv. Huis schoonmaken, ramen wassen en lekkende kraan repareren...',
      interactiveButton: 'Vind beschikbare vakmensen',
      prosNearbyTag: 'geverifieerde vakmensen actief in jouw buurt',
    },
    howItWorks: {
      badge: 'Eenvoudig, Transparant, Snel',
      title: 'Hoe Loqelo werkt',
      subtitle: 'Van het omschrijven van je klus tot een perfect uitgevoerde opdracht.',
      tabs: {
        customer: 'Voor Klanten',
        contractor: 'Voor Vakmensen',
      },
      customerSteps: [
        {
          step: '01',
          title: 'Omschrijf je klus',
          desc: 'Spreek of typ in je eigen woorden. Loqelo herkent direct de benodigde diensten en laat je foto’s en gewenste data toevoegen in 2 minuten.',
        },
        {
          step: '02',
          title: 'Lokale matching',
          desc: 'Je aanvraag wordt direct gematcht met geverifieerde en beoordeelde vakmensen in je directe omgeving.',
        },
        {
          step: '03',
          title: 'Vergelijk offertes',
          desc: 'Vaste prijzen, beschikbaarheid, reviews en slagingspercentages helder op een rij.',
        },
        {
          step: '04',
          title: 'Alles op één plek',
          desc: 'Volg je opdracht van de eerste offerte tot oplevering en veilige afronding.',
        },
      ],
      contractorSteps: [
        {
          step: '01',
          title: 'Klussen komen naar jou',
          desc: 'Ontvang passende opdrachten binnen jouw werkgebied op een overzichtelijke kaart.',
        },
        {
          step: '02',
          title: 'Bied binnen 1 minuut',
          desc: 'Bekijk de foto’s en omschrijving, voer je vaste prijs en datum in met één klik.',
        },
        {
          step: '03',
          title: 'Direct klantcontact',
          desc: 'Als de klant akkoord gaat, stem je alles rechtstreeks en soepel af.',
        },
        {
          step: '04',
          title: '0% commissie bij lancering',
          desc: 'Vroege vakmensen betalen de eerste 3 maanden geen enkele platformcommissie.',
        },
      ],
    },
    video: {
      badge: 'Officiële video',
      title: 'Ontdek het Loqelo concept',
      subtitle: 'Bekijk onze demonstratievideo van 80 seconden.',
      playVideo: 'Video afspelen',
      pauseVideo: 'Pauzeer',
      mute: 'Dempen',
      unmute: 'Geluid aan',
    },
    screens: {
      badge: 'Modern & Eenvoudig',
      title: 'Platform impressie',
      subtitle: 'Een eerste blik op de interface voor februari 2027.',
      tabs: {
        postJob: '1. Klus plaatsen',
        radar: '2. Vakmensen radar',
        offers: '3. Offertes vergelijken',
        dashboard: '4. Vakman dashboard',
      },
    },
    waitlist: {
      badge: 'Vroege toegang',
      title: 'Meld je aan voor de lancering',
      subtitle: 'Krijg als eerste toegang. Klanten ontvangen korting en vakmensen genieten van 0% commissie.',
      customerTab: 'Ik ben Klant',
      contractorTab: 'Ik ben Vakman / Bedrijf',
      emailLabel: 'E-mailadres',
      emailPlaceholder: 'jouw@email.nl',
      countryLabel: 'Land',
      typeLabel: 'Type',
      typeIndividual: 'Particulier / Huiseigenaar',
      typeBusiness: 'Bedrijf / Vastgoedbeheerder',
      typeContractorBusiness: 'Geregistreerd bedrijf (BV/VOF)',
      typeContractorSolo: 'ZZP / Zelfstandige',
      serviceCategoryLabel: 'Gewenste categorie',
      consentText: 'Ik ga akkoord met het ontvangen van e-mails over de lancering en vroege toegang van Loqelo.',
      submitCustomer: 'Meld mij aan als klant',
      submitContractor: 'Meld mij aan als vakman',
      submitting: 'Aanmelden...',
      successTitle: 'Je staat op de wachtlijst!',
      successMessage: 'Bedankt! We houden je op de hoogte in de aanloop naar februari 2027.',
      referralShareText: 'Deel je persoonlijke link:',
      copyLink: 'Kopieer link',
      copied: 'Gekopieerd!',
      anotherSignup: 'Nog iemand aanmelden',
    },
    launch: {
      badge: 'Geplande lancering',
      title: 'Lancering: Februari 2027',
      targetDate: '1 februari 2027',
      days: 'Dagen',
      hours: 'Uren',
      minutes: 'Minuten',
      seconds: 'Seconden',
      perksTitle: 'Wachtlijst voordelen',
      perk1Title: '0% Commissie voor vroege vakmensen',
      perk1Desc: 'De eerste 90 dagen na livegang rekenen we 0% servicekosten.',
      perk2Title: '€20 Voucher voor klanten',
      perk2Desc: 'Ontvang direct €20 tegoed op je eerste geboekte klus.',
      perk3Title: 'Europese uitrol',
      perk3Desc: 'Direct beschikbaar in Nederland en omliggende landen.',
    },
    footer: {
      tagline: 'Alles wat jouw plek nodig heeft.',
      rights: '© 2026-2027 Loqelo Inc. Alle rechten voorbehouden.',
      privacy: 'Privacybeleid',
      terms: 'Voorwaarden',
      contact: 'Contact: hello@loqelo.com',
      adminDashboard: 'Wachtlijst beheer',
      userManual: 'Handleiding',
    },
  },
  fr: {
    nav: {
      howItWorks: 'Comment ça marche',
      video: 'Voir la vidéo',
      preview: 'Aperçu',
      launch: 'Lancement Fév 2027',
      waitlist: "S'inscrire",
      admin: 'Admin & Export',
    },
    hero: {
      tagline: 'Tout ce dont votre espace a besoin.',
      title: 'Connecte des prestataires de confiance pour',
      titleHighlight: 'maison, jardin & bureau.',
      subtitle:
        'Décrivez votre besoin avec vos propres mots, recevez des offres claires de professionnels locaux vérifiés et suivez tout au même endroit. Lancement en février 2027.',
      launchNotice: 'Pré-lancement officiel • Février 2027',
      ctaCustomer: 'Rejoindre comme client',
      ctaContractor: 'Rejoindre comme prestataire',
      interactivePlaceholder: 'ex: Nettoyage de la maison, tailler les arbres et réparer une fuite...',
      interactiveButton: 'Trouver des pros',
      prosNearbyTag: 'professionnels vérifiés disponibles près de chez vous',
    },
    howItWorks: {
      badge: 'Simple, Transparent, Rapide',
      title: 'Comment fonctionne Loqelo',
      subtitle: 'De la description de votre besoin jusqu’au travail bien fait.',
      tabs: {
        customer: 'Pour les clients',
        contractor: 'Pour les professionnels',
      },
      customerSteps: [
        {
          step: '01',
          title: 'Décrivez votre besoin',
          desc: 'Écrivez ou dictez avec vos propres mots. Loqelo identifie les services et vous permet d’ajouter photos et dates en 2 minutes.',
        },
        {
          step: '02',
          title: 'Matching local intelligent',
          desc: 'Votre demande est transmise aux professionnels vérifiés et notés de votre zone géographique.',
        },
        {
          step: '03',
          title: 'Comparez les offres',
          desc: 'Prix fixes, délais, avis vérifiés et taux de réussite en toute transparence.',
        },
        {
          step: '04',
          title: 'Tout au même endroit',
          desc: 'Suivez le statut de votre mission du devis jusqu’au paiement et à la validation finale.',
        },
      ],
      contractorSteps: [
        {
          step: '01',
          title: 'Les chantiers viennent à vous',
          desc: 'Recevez des demandes ciblées selon vos compétences et votre rayon d’intervention.',
        },
        {
          step: '02',
          title: 'Répondez en 1 minute',
          desc: 'Consultez les photos et envoyez votre tarif et vos disponibilités en un instant.',
        },
        {
          step: '03',
          title: 'Contact direct',
          desc: 'Dès que le client choisit votre offre, échangez directement sans intermédiaire.',
        },
        {
          step: '04',
          title: '0% de commission au lancement',
          desc: 'Bénéficiez de 0% de frais de plateforme pendant vos 3 premiers mois.',
        },
      ],
    },
    video: {
      badge: 'Vidéo officielle',
      title: 'Découvrez le concept Loqelo',
      subtitle: 'Regardez notre vidéo de 80 secondes pour voir le fonctionnement de la plateforme.',
      playVideo: 'Lire la vidéo',
      pauseVideo: 'Pause',
      mute: 'Muet',
      unmute: 'Son actif',
    },
    screens: {
      badge: 'Interface moderne',
      title: 'Aperçu de la plateforme',
      subtitle: 'Découvrez les écrans conçus pour le lancement de février 2027.',
      tabs: {
        postJob: '1. Publier une demande',
        radar: '2. Radar des pros',
        offers: '3. Comparer les offres',
        dashboard: '4. Tableau de bord pro',
      },
    },
    waitlist: {
      badge: 'Accès anticipé',
      title: 'Inscrivez-vous sur la liste',
      subtitle: 'Réservez votre place dès aujourd’hui et profitez d’avantages exclusifs.',
      customerTab: 'Je suis Client',
      contractorTab: 'Je suis Prestataire / Pro',
      emailLabel: 'Adresse email',
      emailPlaceholder: 'vous@domaine.fr',
      countryLabel: 'Pays',
      typeLabel: 'Type de compte',
      typeIndividual: 'Particulier / Propriétaire',
      typeBusiness: 'Entreprise / Gestionnaire immobilier',
      typeContractorBusiness: 'Entreprise enregistrée / Société',
      typeContractorSolo: 'Auto-entrepreneur / Indépendant',
      serviceCategoryLabel: 'Prestation recherchée',
      consentText: "J'accepte de recevoir des emails d'information sur le lancement de Loqelo.",
      submitCustomer: 'Rejoindre la liste clients',
      submitContractor: 'Rejoindre la liste prestataires',
      submitting: 'Enregistrement...',
      successTitle: 'Vous êtes inscrit !',
      successMessage: 'Merci pour votre inscription. Nous vous informerons avant le lancement officiel en février 2027.',
      referralShareText: 'Partagez votre lien exclusif :',
      copyLink: 'Copier le lien',
      copied: 'Lien copié !',
      anotherSignup: 'Inscrire un autre contact',
    },
    launch: {
      badge: 'Calendrier officiel',
      title: 'Lancement prévu : Février 2027',
      targetDate: '1er février 2027',
      days: 'Jours',
      hours: 'Heures',
      minutes: 'Minutes',
      seconds: 'Secondes',
      perksTitle: 'Avantages exclusifs avant lancement',
      perk1Title: '0% de commission pour les pros',
      perk1Desc: 'Les prestataires inscrits bénéficient de 0% de frais pendant 90 jours.',
      perk2Title: 'Bon de réduction de 20€',
      perk2Desc: '20€ offerts sur votre première commande de service.',
      perk3Title: 'Disponibilité multi-pays',
      perk3Desc: 'Déploiement simultané dans plusieurs pays européens.',
    },
    footer: {
      tagline: 'Tout ce dont votre espace a besoin.',
      rights: '© 2026-2027 Loqelo Inc. Tous droits réservés.',
      privacy: 'Confidentialité',
      terms: 'Conditions générales',
      contact: 'Contact : hello@loqelo.com',
      adminDashboard: 'Gestion des inscrits',
      userManual: "Manuel d'utilisation",
    },
  },
  pl: {
    nav: {
      howItWorks: 'Jak to działa',
      video: 'Zobacz wideo',
      preview: 'Podgląd platformy',
      launch: 'Start luty 2027',
      waitlist: 'Lista oczekujących',
      admin: 'Panel & Eksport',
    },
    hero: {
      tagline: 'Wszystko, czego potrzebuje Twoje miejsce.',
      title: 'Łączymy sprawdzonych wykonawców z',
      titleHighlight: 'domem, ogrodem i biurem.',
      subtitle:
        'Opisz swoje zlecenie własnymi słowami, otrzymuj przejrzyste oferty od zweryfikowanych lokalnych wykonawców i zarządzaj wszystkim w jednym miejscu. Start: luty 2027.',
      launchNotice: 'Oficjalny Pre-Launch • Premiera w lutym 2027',
      ctaCustomer: 'Zapisz się jako Klient',
      ctaContractor: 'Zapisz się jako Wykonawca',
      interactivePlaceholder: 'np. Sprzątanie domu, przycięcie żywopłotu i naprawa cieknącego kranu...',
      interactiveButton: 'Pokaż dostępnych fachowców',
      prosNearbyTag: 'zweryfikowanych wykonawców w Twojej okolicy',
    },
    howItWorks: {
      badge: 'Prosto, Przejrzyście, Szybko',
      title: 'Jak działa Loqelo',
      subtitle: 'Od opisania potrzeby własnymi słowami po bezproblemową realizację zlecenia.',
      tabs: {
        customer: 'Dla Klientów',
        contractor: 'Dla Wykonawców',
      },
      customerSteps: [
        {
          step: '01',
          title: 'Opisz swoje zlecenie',
          desc: 'Wpisz lub podyktuj własnymi słowami. Loqelo rozpoznaje usługi, pozwala dodać zdjęcia i ustalić termin w 2 minuty.',
        },
        {
          step: '02',
          title: 'Dopasowanie wykonawców',
          desc: 'Zgłoszenie trafia wyłącznie do sprawdzonych, ocenionych specjalistów w Twoim rejonie.',
        },
        {
          step: '03',
          title: 'Porównaj oferty',
          desc: 'Przejrzyste stałe ceny, terminy realizacji, oceny klientów i wskaźnik zrealizowanych zleceń.',
        },
        {
          step: '04',
          title: 'Wszystko w jednym miejscu',
          desc: 'Śledź postępy od pierwszej oferty aż po odbiór i bezpieczne rozliczenie.',
        },
      ],
      contractorSteps: [
        {
          step: '01',
          title: 'Zlecenia same do Ciebie trafiają',
          desc: 'Otrzymuj zapytania idealnie dopasowane do Twojej branży i obszaru działania.',
        },
        {
          step: '02',
          title: 'Oferta w 1 minutę',
          desc: 'Obejrzyj zdjęcia, podaj cenę i termin – prosto i bez zbędnej biurokracji.',
        },
        {
          step: '03',
          title: 'Bezpośredni kontakt',
          desc: 'Po wyborze Twojej oferty kontaktujesz się bezpośrednio z klientem.',
        },
        {
          step: '04',
          title: '0% prowizji na start',
          desc: 'Wykonawcy zarejestrowani przed premierą nie płacą prowizji przez pierwsze 3 miesiące.',
        },
      ],
    },
    video: {
      badge: 'Prezentacja wideo',
      title: 'Poznaj koncepcję Loqelo',
      subtitle: 'Obejrzyj 80-sekundowe wideo prezentujące działanie platformy z perspektywy klienta i fachowca.',
      playVideo: 'Odtwórz wideo',
      pauseVideo: 'Wstrzymaj',
      mute: 'Wycisz',
      unmute: 'Włącz dźwięk',
    },
    screens: {
      badge: 'Nowoczesny design',
      title: 'Ekrany platformy',
      subtitle: 'Zobacz wybrane widoki interfejsu przygotowanego na premierę w lutym 2027.',
      tabs: {
        postJob: '1. Dodaj zlecenie',
        radar: '2. Radar fachowców',
        offers: '3. Porównaj oferty',
        dashboard: '4. Panel wykonawcy',
      },
    },
    waitlist: {
      badge: 'Wczesny dostęp',
      title: 'Zapisz się przed premierą',
      subtitle: 'Zarezerwuj miejsce na liście. Klienci otrzymują zniżki, a wykonawcy 0% prowizji na start.',
      customerTab: 'Jestem Klientem',
      contractorTab: 'Jestem Wykonawcą / Firmą',
      emailLabel: 'Adres e-mail',
      emailPlaceholder: 'twoj-email@domena.pl',
      countryLabel: 'Kraj',
      typeLabel: 'Typ konta',
      typeIndividual: 'Osoba prywatna / Właściciel',
      typeBusiness: 'Firma / Zarządca nieruchomości',
      typeContractorBusiness: 'Zarejestrowana firma (Sp. z o.o. / JDG)',
      typeContractorSolo: 'Samodzielny wykonawca / Freelancer',
      serviceCategoryLabel: 'Główna branża',
      consentText: 'Wyrażam zgodę na otrzymywanie informacji o premierze Loqelo i aktualizacjach projektu drogą mailową.',
      submitCustomer: 'Zapisz się jako Klient',
      submitContractor: 'Zapisz się jako Wykonawca',
      submitting: 'Zapisywanie...',
      successTitle: 'Jesteś na liście Loqelo!',
      successMessage: 'Dziękujemy! Otrzymasz powiadomienie przed oficjalnym startem w lutym 2027.',
      referralShareText: 'Podziel się linkiem ze znajomymi lub innymi fachowcami:',
      copyLink: 'Kopiuj link polecający',
      copied: 'Skopiowano do schowka!',
      anotherSignup: 'Zapisz kolejną osobę',
    },
    launch: {
      badge: 'Harmonogram',
      title: 'Planowany start: Luty 2027',
      targetDate: '1 lutego 2027',
      days: 'Dni',
      hours: 'Godzin',
      minutes: 'Minut',
      seconds: 'Sekund',
      perksTitle: 'Korzyści dla osób z listy oczekujących',
      perk1Title: '0% prowizji dla wykonawców',
      perk1Desc: 'Wykonawcy zapisani przed premierą nie płacą prowizji serwisowej przez pierwsze 90 dni.',
      perk2Title: 'Voucher 100 zł dla klientów',
      perk2Desc: 'Pierwsi klienci otrzymują rabat na pierwsze zamówienie usługi.',
      perk3Title: 'Dostępność międzynarodowa',
      perk3Desc: 'Jednoczesny start w kluczowych rynkach europejskich.',
    },
    footer: {
      tagline: 'Wszystko, czego potrzebuje Twoje miejsce.',
      rights: '© 2026-2027 Loqelo Inc. Wszelkie prawa zastrzeżone.',
      privacy: 'Polityka prywatności',
      terms: 'Regulamin',
      contact: 'Kontakt: hello@loqelo.com',
      adminDashboard: 'Panel bazy & Eksport CSV',
      userManual: 'Instrukcja obsługi',
    },
  },
  es: {
    nav: {
      howItWorks: 'Cómo funciona',
      video: 'Ver vídeo',
      preview: 'Vista previa',
      launch: 'Lanzamiento Feb 2027',
      waitlist: 'Lista de espera',
      admin: 'Admin y Exportación',
    },
    hero: {
      tagline: 'Todo lo que tu espacio necesita.',
      title: 'Conectando profesionales de calidad con',
      titleHighlight: 'hogar, jardín y oficina.',
      subtitle:
        'Describe tu necesidad con tus propias palabras, recibe ofertas transparentes de profesionales locales verificados y gestiona todo en un solo lugar. Lanzamiento en febrero de 2027.',
      launchNotice: 'Pre-lanzamiento oficial • Febrero 2027',
      ctaCustomer: 'Unirse como Cliente',
      ctaContractor: 'Unirse como Profesional',
      interactivePlaceholder: 'ej. Limpieza de casa, podar árboles y arreglar una tubería...',
      interactiveButton: 'Ver profesionales cercanos',
      prosNearbyTag: 'profesionales verificados en tu zona',
    },
    howItWorks: {
      badge: 'Simple, Transparente, Rápido',
      title: 'Cómo funciona Loqelo',
      subtitle: 'Desde describir lo que necesitas hasta un trabajo realizado con total tranquilidad.',
      tabs: {
        customer: 'Para Clientes',
        contractor: 'Para Profesionales',
      },
      customerSteps: [
        {
          step: '01',
          title: 'Describe tu necesidad',
          desc: 'Habla o escribe con tus propias palabras. Loqelo detecta los servicios, añade fotos y fechas en 2 minutos.',
        },
        {
          step: '02',
          title: 'Radar de coincidencia local',
          desc: 'Tu solicitud se envía a profesionales locales verificados y con valoraciones contrastadas.',
        },
        {
          step: '03',
          title: 'Compara ofertas',
          desc: 'Precios fijos, plazos de entrega, opiniones y porcentaje de éxito visibles claramente.',
        },
        {
          step: '04',
          title: 'Todo en un solo lugar',
          desc: 'Sigue cada trabajo desde el primer presupuesto hasta el pago y finalización.',
        },
      ],
      contractorSteps: [
        {
          step: '01',
          title: 'Los trabajos van hacia ti',
          desc: 'Recibe solicitudes filtradas que encajan con tu oficio y tu radio de cobertura.',
        },
        {
          step: '02',
          title: 'Envía tu oferta en 1 minuto',
          desc: 'Revisa las fotos, indica tu precio cerrado y fecha estimada en segundos.',
        },
        {
          step: '03',
          title: 'Conexión directa',
          desc: 'Cuando el cliente acepte tu propuesta, contacta directamente sin comisiones ocultas.',
        },
        {
          step: '04',
          title: '0% comisión de lanzamiento',
          desc: 'Los profesionales registrados antes del lanzamiento disfrutan de 0% de comisión durante 3 meses.',
        },
      ],
    },
    video: {
      badge: 'Vídeo oficial',
      title: 'Descubre el concepto Loqelo',
      subtitle: 'Mira nuestro vídeo explicativo de 80 segundos.',
      playVideo: 'Reproducir vídeo',
      pauseVideo: 'Pausar',
      mute: 'Silenciar',
      unmute: 'Activar sonido',
    },
    screens: {
      badge: 'Diseño Intuitivo',
      title: 'Pantallas seleccionadas',
      subtitle: 'Una vista previa del diseño creado para el lanzamiento de febrero de 2027.',
      tabs: {
        postJob: '1. Publicar trabajo',
        radar: '2. Radar de profesionales',
        offers: '3. Comparar ofertas',
        dashboard: '4. Panel de profesionales',
      },
    },
    waitlist: {
      badge: 'Acceso anticipado',
      title: 'Asegura tu lugar en la lista',
      subtitle: 'Regístrate hoy. Los clientes obtienen cupones de descuento y los profesionales 0% de comisión.',
      customerTab: 'Soy Cliente',
      contractorTab: 'Soy Profesional / Empresa',
      emailLabel: 'Correo electrónico',
      emailPlaceholder: 'tu-correo@dominio.es',
      countryLabel: 'País de residencia',
      typeLabel: 'Tipo de cuenta',
      typeIndividual: 'Particular / Propietario',
      typeBusiness: 'Empresa / Administrador de fincas',
      typeContractorBusiness: 'Empresa registrada / Sociedad',
      typeContractorSolo: 'Autónomo / Profesional independiente',
      serviceCategoryLabel: 'Servicio principal',
      consentText: 'Acepto recibir información por correo sobre el lanzamiento de Loqelo y sus novedades.',
      submitCustomer: 'Unirse a la lista de clientes',
      submitContractor: 'Unirse a la lista de profesionales',
      submitting: 'Guardando...',
      successTitle: '¡Estás en la lista de Loqelo!',
      successMessage: 'Gracias por registrarte. Te avisaremos antes del lanzamiento oficial en febrero de 2027.',
      referralShareText: 'Comparte tu enlace de invitación prioritario:',
      copyLink: 'Copiar enlace',
      copied: '¡Copiado al portapapeles!',
      anotherSignup: 'Registrar otro contacto',
    },
    launch: {
      badge: 'Hoja de ruta',
      title: 'Lanzamiento previsto: Febrero 2027',
      targetDate: '1 de febrero de 2027',
      days: 'Días',
      hours: 'Horas',
      minutes: 'Minutos',
      seconds: 'Segundos',
      perksTitle: 'Ventajas de la lista de espera',
      perk1Title: '0% de comisión para profesionales',
      perk1Desc: 'Sin comisiones de servicio durante los primeros 90 días tras el lanzamiento.',
      perk2Title: 'Bono de 20€ para clientes',
      perk2Desc: 'Descuento directo en tu primera reserva de servicio a través de Loqelo.',
      perk3Title: 'Despliegue internacional',
      perk3Desc: 'Disponible en los principales países europeos con soporte multilingüe.',
    },
    footer: {
      tagline: 'Todo lo que tu espacio necesita.',
      rights: '© 2026-2027 Loqelo Inc. Todos los derechos reservados.',
      privacy: 'Política de privacidad',
      terms: 'Términos y condiciones',
      contact: 'Contacto: hello@loqelo.com',
      adminDashboard: 'Gestor de lista y analíticas',
      userManual: 'Manual de usuario',
    },
  },
};

export function detectBrowserLanguage(): LanguageCode {
  try {
    const rawLang = (navigator.language || '').toLowerCase();
    if (rawLang.startsWith('de')) return 'de';
    if (rawLang.startsWith('nl')) return 'nl';
    if (rawLang.startsWith('fr')) return 'fr';
    if (rawLang.startsWith('pl')) return 'pl';
    if (rawLang.startsWith('es')) return 'es';
  } catch {
    // fallback to English
  }
  return 'en';
}
