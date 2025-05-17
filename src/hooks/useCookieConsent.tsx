
import React, { createContext, useContext, useState, useEffect } from 'react';

type CookieConsentContextType = {
  consentGiven: boolean;
  setConsentGiven: (value: boolean) => void;
};

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookieConsent');
    if (storedConsent === 'accepted') {
      setConsentGiven(true);
    }
  }, []);

  useEffect(() => {
    if (consentGiven) {
      localStorage.setItem('cookieConsent', 'accepted');
    }
  }, [consentGiven]);

  return (
    <CookieConsentContext.Provider value={{ consentGiven, setConsentGiven }}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = (): CookieConsentContextType => {
  const context = useContext(CookieConsentContext);
  
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  
  return context;
};
