import React, { createContext, useContext, useState, useEffect } from 'react';

// Available languages
type Language = 'en' | 'nl' | 'ro';

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation & General UI
    'Home': 'Home',
    'About Us': 'About Us',
    'Contact': 'Contact',
    'Let\'s Talk': 'Let\'s Talk',
    'Where AI, Cloud, and Business Systems Converge': 'Where AI, Cloud, and Business Systems Converge',
    'Discover Our Approach': 'Discover Our Approach',
    
    // Services Section
    'Our Services': 'Our Services',
    'SAP Business One Implementations': 'SAP Business One Implementations',
    'AWS Cloud Hosting & DevOps': 'AWS Cloud Hosting & DevOps',
    'AI Reporting & Automation': 'AI Reporting & Automation',
    'IT Support & Integrations': 'IT Support & Integrations',
    
    // Why Consularity Section
    'Why Consularity': 'Why Consularity',
    'Expert-led Implementations': 'Expert-led Implementations',
    'Scalable Infrastructure': 'Scalable Infrastructure',
    'AI-Enhanced Operations': 'AI-Enhanced Operations',
    
    // Project Timeline Section
    'Project Timeline': 'Project Timeline',
    'Discovery & Planning': 'Discovery & Planning',
    'System Design': 'System Design',
    'Development': 'Development',
    'Testing': 'Testing',
    'Deployment': 'Deployment',
    'Post-Implementation Support': 'Post-Implementation Support',
    'Weeks 1-2': 'Weeks 1-2',
    'Weeks 3-4': 'Weeks 3-4',
    'Weeks 5-8': 'Weeks 5-8',
    'Weeks 9-10': 'Weeks 9-10',
    'Week 11': 'Week 11',
    'Weeks 12+': 'Weeks 12+',
    'Initial consultation, business process analysis, and project scope definition. We identify key requirements and establish project milestones.': 
      'Initial consultation, business process analysis, and project scope definition. We identify key requirements and establish project milestones.',
    'Solution architecture design, data migration planning, and system configuration blueprint. We design a solution tailored to your specific needs.': 
      'Solution architecture design, data migration planning, and system configuration blueprint. We design a solution tailored to your specific needs.',
    'System configuration, customization, integration development, and data migration preparation. This phase builds the foundation of your solution.': 
      'System configuration, customization, integration development, and data migration preparation. This phase builds the foundation of your solution.',
    'User acceptance testing, quality assurance, performance testing, and refinements based on feedback. We ensure everything works as expected.': 
      'User acceptance testing, quality assurance, performance testing, and refinements based on feedback. We ensure everything works as expected.',
    'Data migration, go-live preparation, user training, and system launch. The transition to the new system is carefully managed.': 
      'Data migration, go-live preparation, user training, and system launch. The transition to the new system is carefully managed.',
    'Ongoing support, performance optimization, and continuous improvement. We stay by your side to ensure lasting success.': 
      'Ongoing support, performance optimization, and continuous improvement. We stay by your side to ensure lasting success.',
    
    // Testimonials Section
    'Client Testimonials': 'Client Testimonials',
    'Consularity transformed our entire business operations. Their SAP implementation was smooth and their ongoing support has been exceptional.': 
      'Consularity transformed our entire business operations. Their SAP implementation was smooth and their ongoing support has been exceptional.',
    'The AI-powered reporting tools have given us insights we never thought possible. We can now make data-driven decisions with confidence.': 
      'The AI-powered reporting tools have given us insights we never thought possible. We can now make data-driven decisions with confidence.',
    'Our AWS cloud migration with Consularity was flawless. We\'ve seen marked improvements in system performance and significant cost savings.': 
      'Our AWS cloud migration with Consularity was flawless. We\'ve seen marked improvements in system performance and significant cost savings.',
    'The team at Consularity doesn\'t just implement solutions; they become true partners in your business success. Highly recommended.': 
      'The team at Consularity doesn\'t just implement solutions; they become true partners in your business success. Highly recommended.',
    'CFO': 'CFO',
    'CTO': 'CTO',
    'Operations Director': 'Operations Director',
    'CEO': 'CEO',
    
    // Impact Sections
    'Our Impact': 'Our Impact',
    'Impact Metrics': 'Impact Metrics',
    
    // CTA Section
    'Let\'s start your transformation': 'Let\'s start your transformation',
    'Start a Conversation': 'Start a Conversation',
    
    // Footer
    'Quick Links': 'Quick Links',
    'All rights reserved.': 'All rights reserved.',
    'Privacy Policy': 'Privacy Policy',
    'Terms of Service': 'Terms of Service',
    'Ready to transform your business with cutting-edge technology?': 'Ready to transform your business with cutting-edge technology?',
    
    // About Page
    'We\'re a team of technology experts dedicated to transforming businesses through innovative AI, cloud, and ERP solutions.': 
      'We\'re a team of technology experts dedicated to transforming businesses through innovative AI, cloud, and ERP solutions.',
    'Our Mission': 'Our Mission',
    'At Consularity, we combine deep technical expertise with business acumen to deliver transformative technology solutions that drive tangible results for our clients.': 
      'At Consularity, we combine deep technical expertise with business acumen to deliver transformative technology solutions that drive tangible results for our clients.',
    'We believe that the convergence of AI, cloud technology, and business systems creates unprecedented opportunities for businesses of all sizes.': 
      'We believe that the convergence of AI, cloud technology, and business systems creates unprecedented opportunities for businesses of all sizes.',
    'Our mission is to make these cutting-edge technologies accessible and valuable to small and midsize enterprises, helping them compete and thrive in an increasingly digital world.': 
      'Our mission is to make these cutting-edge technologies accessible and valuable to small and midsize enterprises, helping them compete and thrive in an increasingly digital world.',
    'Our Values': 'Our Values',
    'Excellence': 'Excellence',
    'We strive for excellence in everything we do, from code quality to client communication.': 
      'We strive for excellence in everything we do, from code quality to client communication.',
    'Innovation': 'Innovation',
    'We constantly explore new technologies and approaches to deliver the best solutions.': 
      'We constantly explore new technologies and approaches to deliver the best solutions.',
    'Client Success': 'Client Success',
    'Our success is measured by the success of our clients. We\'re partners in your journey.': 
      'Our success is measured by the success of our clients. We\'re partners in your journey.',
    'Our Journey': 'Our Journey',
    'Company Founded': 'Company Founded',
    'Consularity was established with the vision of bringing enterprise-grade technology to small and midsize businesses.': 
      'Consularity was established with the vision of bringing enterprise-grade technology to small and midsize businesses.',
    'AWS Partnership': 'AWS Partnership',
    'Became an official AWS Partner, expanding our cloud services capabilities to deliver more value to our clients.': 
      'Became an official AWS Partner, expanding our cloud services capabilities to deliver more value to our clients.',
    'AI Integration Launch': 'AI Integration Launch',
    'Launched our AI reporting and automation services, bringing cutting-edge machine learning to business operations.': 
      'Launched our AI reporting and automation services, bringing cutting-edge machine learning to business operations.',
    'International Expansion': 'International Expansion',
    'Expanded our services to new regions, helping more businesses leverage the power of technology.': 
      'Expanded our services to new regions, helping more businesses leverage the power of technology.',
    
    // Contact Page
    'Have questions? Ready to start your digital transformation? Get in touch with our team.': 
      'Have questions? Ready to start your digital transformation? Get in touch with our team.',
    'Send us a message': 'Send us a message',
    'Name': 'Name',
    'Your name': 'Your name',
    'Email': 'Email',
    'your.email@example.com': 'your.email@example.com',
    'Subject': 'Subject',
    'How can we help?': 'How can we help?',
    'Message': 'Message',
    'Tell us about your project or inquiry...': 'Tell us about your project or inquiry...',
    'Send Message': 'Send Message',
    'Contact Information': 'Contact Information',
    'Phone': 'Phone',
    'Office Hours': 'Office Hours',
    'Monday - Friday:': 'Monday - Friday:',
    '9:00 AM - 6:00 PM CET': '9:00 AM - 6:00 PM CET',
    'Saturday - Sunday:': 'Saturday - Sunday:',
    'Closed': 'Closed',
    'Message Sent': 'Message Sent',
    'We\'ll get back to you as soon as possible.': 'We\'ll get back to you as soon as possible.'
  },
  nl: {
    // Navigation & General UI
    'Home': 'Home',
    'About Us': 'Over ons',
    'Contact': 'Contact',
    'Let\'s Talk': 'Neem contact op',
    'Where AI, Cloud, and Business Systems Converge': 'Waar AI, Cloud en bedrijfssystemen samenkomen',
    'Discover Our Approach': 'Ontdek onze aanpak',
    
    // Services Section
    'Our Services': 'Onze Diensten',
    'SAP Business One Implementations': 'SAP Business One Implementaties',
    'AWS Cloud Hosting & DevOps': 'AWS Cloud Hosting & DevOps',
    'AI Reporting & Automation': 'AI Rapportage & Automatisering',
    'IT Support & Integrations': 'IT Ondersteuning & Integraties',
    
    // Why Consularity Section
    'Why Consularity': 'Waarom Consularity',
    'Expert-led Implementations': 'Implementaties door experts',
    'Scalable Infrastructure': 'Schaalbare infrastructuur',
    'AI-Enhanced Operations': 'AI-verbeterde operaties',
    
    // Project Timeline Section
    'Project Timeline': 'Project Tijdlijn',
    'Discovery & Planning': 'Ontdekking & Planning',
    'System Design': 'Systeemontwerp',
    'Development': 'Ontwikkeling',
    'Testing': 'Testen',
    'Deployment': 'Implementatie',
    'Post-Implementation Support': 'Ondersteuning na implementatie',
    'Weeks 1-2': 'Weken 1-2',
    'Weeks 3-4': 'Weken 3-4',
    'Weeks 5-8': 'Weken 5-8',
    'Weeks 9-10': 'Weken 9-10',
    'Week 11': 'Week 11',
    'Weeks 12+': 'Weken 12+',
    'Initial consultation, business process analysis, and project scope definition. We identify key requirements and establish project milestones.': 
      'Initiële consultatie, analyse van bedrijfsprocessen en definitie van de projectomvang. We identificeren belangrijke vereisten en stellen projectmijlpalen vast.',
    'Solution architecture design, data migration planning, and system configuration blueprint. We design a solution tailored to your specific needs.': 
      'Ontwerp van de oplossingsarchitectuur, planning van datamigratie en blauwdruk voor systeemconfiguratie. We ontwerpen een oplossing op maat voor uw specifieke behoeften.',
    'System configuration, customization, integration development, and data migration preparation. This phase builds the foundation of your solution.': 
      'Systeemconfiguratie, aanpassing, ontwikkeling van integraties en voorbereiding van datamigratie. Deze fase legt de basis voor uw oplossing.',
    'User acceptance testing, quality assurance, performance testing, and refinements based on feedback. We ensure everything works as expected.': 
      'Gebruikersacceptatietests, kwaliteitscontrole, prestatietests en verfijningen op basis van feedback. We zorgen ervoor dat alles werkt zoals verwacht.',
    'Data migration, go-live preparation, user training, and system launch. The transition to the new system is carefully managed.': 
      'Datamigratie, go-live voorbereiding, gebruikerstraining en systeemstart. De overgang naar het nieuwe systeem wordt zorgvuldig beheerd.',
    'Ongoing support, performance optimization, and continuous improvement. We stay by your side to ensure lasting success.': 
      'Doorlopende ondersteuning, prestatie-optimalisatie en continue verbetering. We blijven aan uw zijde om blijvend succes te garanderen.',
    
    // Testimonials Section
    'Client Testimonials': 'Klantreferenties',
    'Consularity transformed our entire business operations. Their SAP implementation was smooth and their ongoing support has been exceptional.': 
      'Consularity heeft onze volledige bedrijfsvoering getransformeerd. Hun SAP-implementatie verliep soepel en hun doorlopende ondersteuning is uitzonderlijk.',
    'The AI-powered reporting tools have given us insights we never thought possible. We can now make data-driven decisions with confidence.': 
      'De door AI aangedreven rapportagetools hebben ons inzichten gegeven die we nooit voor mogelijk hielden. We kunnen nu met vertrouwen datagestuurde beslissingen nemen.',
    'Our AWS cloud migration with Consularity was flawless. We\'ve seen marked improvements in system performance and significant cost savings.': 
      'Onze AWS-cloudmigratie met Consularity verliep vlekkeloos. We hebben merkbare verbeteringen in systeemprestaties en aanzienlijke kostenbesparingen gezien.',
    'The team at Consularity doesn\'t just implement solutions; they become true partners in your business success. Highly recommended.': 
      'Het team van Consularity implementeert niet alleen oplossingen; ze worden echte partners in uw zakelijk succes. Sterk aanbevolen.',
    'CFO': 'CFO',
    'CTO': 'CTO',
    'Operations Director': 'Operationeel Directeur',
    'CEO': 'CEO',
    
    // Impact Sections
    'Our Impact': 'Onze Impact',
    'Impact Metrics': 'Impactmetriek',
    
    // CTA Section
    'Let\'s start your transformation': 'Laten we uw transformatie starten',
    'Start a Conversation': 'Begin een gesprek',
    
    // Footer
    'Quick Links': 'Snelle links',
    'All rights reserved.': 'Alle rechten voorbehouden.',
    'Privacy Policy': 'Privacybeleid',
    'Terms of Service': 'Servicevoorwaarden',
    'Ready to transform your business with cutting-edge technology?': 'Klaar om uw bedrijf te transformeren met geavanceerde technologie?'
  },
  ro: {
    // Navigation & General UI
    'Home': 'Acasă',
    'About Us': 'Despre noi',
    'Contact': 'Contact',
    'Let\'s Talk': 'Să discutăm',
    'Where AI, Cloud, and Business Systems Converge': 'Unde AI, Cloud și sistemele de afaceri converg',
    'Discover Our Approach': 'Descoperă abordarea noastră',
    
    // Services Section
    'Our Services': 'Serviciile noastre',
    'SAP Business One Implementations': 'Implementări SAP Business One',
    'AWS Cloud Hosting & DevOps': 'AWS Cloud Hosting și DevOps',
    'AI Reporting & Automation': 'Raportare și automatizare AI',
    'IT Support & Integrations': 'Suport IT și integrări',
    
    // Why Consularity Section
    'Why Consularity': 'De ce Consularity',
    'Expert-led Implementations': 'Implementări conduse de experți',
    'Scalable Infrastructure': 'Infrastructură scalabilă',
    'AI-Enhanced Operations': 'Operațiuni îmbunătățite cu AI',
    
    // Project Timeline Section
    'Project Timeline': 'Cronologia Proiectului',
    'Discovery & Planning': 'Descoperire și Planificare',
    'System Design': 'Proiectare Sistem',
    'Development': 'Dezvoltare',
    'Testing': 'Testare',
    'Deployment': 'Implementare',
    'Post-Implementation Support': 'Suport post-implementare',
    'Weeks 1-2': 'Săpt��mânile 1-2',
    'Weeks 3-4': 'Săptămânile 3-4',
    'Weeks 5-8': 'Săptămânile 5-8',
    'Weeks 9-10': 'Săptămânile 9-10',
    'Week 11': 'Săptămâna 11',
    'Weeks 12+': 'Săptămânile 12+',
    'Initial consultation, business process analysis, and project scope definition. We identify key requirements and establish project milestones.': 
      'Consultație inițială, analiza proceselor de afaceri și definirea scopului proiectului. Identificăm cerințele cheie și stabilim etapele proiectului.',
    'Solution architecture design, data migration planning, and system configuration blueprint. We design a solution tailored to your specific needs.': 
      'Proiectarea arhitecturii soluției, planificarea migrării datelor și planul de configurare a sistemului. Proiectăm o soluție adaptată nevoilor dumneavoastră specifice.',
    'System configuration, customization, integration development, and data migration preparation. This phase builds the foundation of your solution.': 
      'Configurarea sistemului, personalizare, dezvoltarea integrării și pregătirea migrării datelor. Această fază construiește fundamentul soluției dumneavoastră.',
    'User acceptance testing, quality assurance, performance testing, and refinements based on feedback. We ensure everything works as expected.': 
      'Testare de acceptanță a utilizatorilor, asigurarea calității, testarea performanței și rafinamente bazate pe feedback. Ne asigurăm că totul funcționează conform așteptărilor.',
    'Data migration, go-live preparation, user training, and system launch. The transition to the new system is carefully managed.': 
      'Migrarea datelor, pregătirea pentru lansare, instruirea utilizatorilor și lansarea sistemului. Tranziția către noul sistem este gestionată cu atenție.',
    'Ongoing support, performance optimization, and continuous improvement. We stay by your side to ensure lasting success.': 
      'Suport continuu, optimizarea performanței și îmbunătățire continuă. Rămânem alături de dvs. pentru a asigura un succes de durată.',
    
    // Testimonials Section
    'Client Testimonials': 'Testimoniale Clienți',
    'Consularity transformed our entire business operations. Their SAP implementation was smooth and their ongoing support has been exceptional.': 
      'Consularity ne-a transformat întreaga operațiune de afaceri. Implementarea SAP a fost fără probleme, iar suportul lor continuu a fost excepțional.',
    'The AI-powered reporting tools have given us insights we never thought possible. We can now make data-driven decisions with confidence.': 
      'Instrumentele de raportare bazate pe AI ne-au oferit perspective pe care nu le-am crezut posibile. Acum putem lua decizii bazate pe date cu încredere.',
    'Our AWS cloud migration with Consularity was flawless. We\'ve seen marked improvements in system performance and significant cost savings.': 
      'Migrarea noastră în cloud AWS cu Consularity a fost impecabilă. Am văzut îmbunătățiri semnificative în performanța sistemului și economii importante de costuri.',
    'The team at Consularity doesn\'t just implement solutions; they become true partners in your business success. Highly recommended.': 
      'Echipa Consularity nu doar implementează soluții; ei devin adevărați parteneri în succesul afacerii dumneavoastră. Recomandăm cu căldură.',
    'CFO': 'CFO',
    'CTO': 'CTO',
    'Operations Director': 'Director de Operațiuni',
    'CEO': 'CEO',
    
    // Impact Sections
    'Our Impact': 'Impactul Nostru',
    'Impact Metrics': 'Metrici de Impact',
    
    // CTA Section
    'Let\'s start your transformation': 'Să începem transformarea ta',
    'Start a Conversation': 'Începe o conversație',
    
    // Footer
    'Quick Links': 'Linkuri rapide',
    'All rights reserved.': 'Toate drepturile rezervate.',
    'Privacy Policy': 'Politica de confidențialitate',
    'Terms of Service': 'Termenii serviciului',
    'Ready to transform your business with cutting-edge technology?': 'Ești gata să îți transformi afacerea cu tehnologie de ultimă generație?'
  }
};

// Context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

type LanguageProviderProps = {
  children: React.ReactNode;
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    // Check stored preference
    const savedLang = localStorage.getItem('language') as Language;
    
    if (savedLang && ['en', 'nl', 'ro'].includes(savedLang)) {
      return savedLang;
    }
    
    // Try to get browser language
    const browserLang = navigator.language.split('-')[0];
    if (['en', 'nl', 'ro'].includes(browserLang as Language)) {
      return browserLang as Language;
    }
    
    // Default to English
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
}
