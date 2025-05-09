
import React, { createContext, useContext, useState, useEffect } from 'react';

// Available languages
type Language = 'en' | 'nl' | 'ro';

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    'Home': 'Home',
    'About Us': 'About Us',
    'Contact': 'Contact',
    'Let\'s Talk': 'Let\'s Talk',
    'Where AI, Cloud, and Business Systems Converge': 'Where AI, Cloud, and Business Systems Converge',
    'Discover Our Approach': 'Discover Our Approach',
    'Our Services': 'Our Services',
    'SAP Business One Implementations': 'SAP Business One Implementations',
    'AWS Cloud Hosting & DevOps': 'AWS Cloud Hosting & DevOps',
    'AI Reporting & Automation': 'AI Reporting & Automation',
    'IT Support & Integrations': 'IT Support & Integrations',
    'Why Consularity': 'Why Consularity',
    'Expert-led Implementations': 'Expert-led Implementations',
    'Scalable Infrastructure': 'Scalable Infrastructure',
    'AI-Enhanced Operations': 'AI-Enhanced Operations',
    'Let\'s start your transformation': 'Let\'s start your transformation',
    'Start a Conversation': 'Start a Conversation',
    'Quick Links': 'Quick Links',
    'All rights reserved.': 'All rights reserved.',
    'Privacy Policy': 'Privacy Policy',
    'Terms of Service': 'Terms of Service',
    'Ready to transform your business with cutting-edge technology?': 'Ready to transform your business with cutting-edge technology?',
  },
  nl: {
    'Home': 'Home',
    'About Us': 'Over ons',
    'Contact': 'Contact',
    'Let\'s Talk': 'Neem contact op',
    'Where AI, Cloud, and Business Systems Converge': 'Waar AI, Cloud en bedrijfssystemen samenkomen',
    'Discover Our Approach': 'Ontdek onze aanpak',
    'Our Services': 'Onze Diensten',
    'SAP Business One Implementations': 'SAP Business One Implementaties',
    'AWS Cloud Hosting & DevOps': 'AWS Cloud Hosting & DevOps',
    'AI Reporting & Automation': 'AI Rapportage & Automatisering',
    'IT Support & Integrations': 'IT Ondersteuning & Integraties',
    'Why Consularity': 'Waarom Consularity',
    'Expert-led Implementations': 'Implementaties door experts',
    'Scalable Infrastructure': 'Schaalbare infrastructuur',
    'AI-Enhanced Operations': 'AI-verbeterde operaties',
    'Let\'s start your transformation': 'Laten we uw transformatie starten',
    'Start a Conversation': 'Begin een gesprek',
    'Quick Links': 'Snelle links',
    'All rights reserved.': 'Alle rechten voorbehouden.',
    'Privacy Policy': 'Privacybeleid',
    'Terms of Service': 'Servicevoorwaarden',
    'Ready to transform your business with cutting-edge technology?': 'Klaar om uw bedrijf te transformeren met geavanceerde technologie?',
  },
  ro: {
    'Home': 'Acasă',
    'About Us': 'Despre noi',
    'Contact': 'Contact',
    'Let\'s Talk': 'Să discutăm',
    'Where AI, Cloud, and Business Systems Converge': 'Unde AI, Cloud și sistemele de afaceri converg',
    'Discover Our Approach': 'Descoperă abordarea noastră',
    'Our Services': 'Serviciile noastre',
    'SAP Business One Implementations': 'Implementări SAP Business One',
    'AWS Cloud Hosting & DevOps': 'AWS Cloud Hosting și DevOps',
    'AI Reporting & Automation': 'Raportare și automatizare AI',
    'IT Support & Integrations': 'Suport IT și integrări',
    'Why Consularity': 'De ce Consularity',
    'Expert-led Implementations': 'Implementări conduse de experți',
    'Scalable Infrastructure': 'Infrastructură scalabilă',
    'AI-Enhanced Operations': 'Operațiuni îmbunătățite cu AI',
    'Let\'s start your transformation': 'Să începem transformarea ta',
    'Start a Conversation': 'Începe o conversație',
    'Quick Links': 'Linkuri rapide',
    'All rights reserved.': 'Toate drepturile rezervate.',
    'Privacy Policy': 'Politica de confidențialitate',
    'Terms of Service': 'Termenii serviciului',
    'Ready to transform your business with cutting-edge technology?': 'Ești gata să îți transformi afacerea cu tehnologie de ultimă generație?',
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
