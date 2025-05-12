
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language, isValidLanguage } from '@/translations';

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
    const savedLang = localStorage.getItem('language');
    
    if (savedLang && isValidLanguage(savedLang)) {
      return savedLang;
    }
    
    // Try to get browser language
    const browserLang = navigator.language.split('-')[0];
    if (isValidLanguage(browserLang)) {
      return browserLang;
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
