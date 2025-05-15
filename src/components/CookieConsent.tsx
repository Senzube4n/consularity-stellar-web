
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useLanguage } from '@/hooks/useLanguage';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Check if consent was already given
    const consentGiven = localStorage.getItem('cookie-consent');
    if (!consentGiven) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowConsent(false);
    // Only initialize GA after consent
    initializeGA();
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowConsent(false);
  };

  return showConsent ? (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg p-4 z-50 border-t border-gray-200 dark:border-gray-800">
      <div className="consularity-container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600 dark:text-gray-300">
          {t('This website uses cookies to enhance your experience. By continuing to use this site, you agree to our use of cookies.')}
          <a href="/privacy" className="text-primary ml-1 hover:underline">
            {t('Learn more')}
          </a>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={declineCookies} className="text-sm h-9">
            {t('Decline')}
          </Button>
          <Button onClick={acceptCookies} className="text-sm h-9">
            {t('Accept')}
          </Button>
        </div>
        <button 
          onClick={declineCookies} 
          className="absolute top-2 right-2 md:hidden text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  ) : null;
};

export default CookieConsent;

// Initialize Google Analytics
function initializeGA() {
  // Load Google Analytics script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=G-MEASUREMENT_ID`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize GA
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-MEASUREMENT_ID');
}

// Add types for gtag to avoid TypeScript errors
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
