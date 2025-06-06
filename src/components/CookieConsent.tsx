
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Shield, Cookie } from "lucide-react";
import { useLanguage } from '@/hooks/useLanguage';

// Define Google Analytics types
interface Window {
  dataLayer?: any[];
  gtag?: (command: string, action: string, params?: any) => void;
}

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (command: string, action: string, params?: any) => void;
  }
}

// Google Analytics tracking ID - replace with your actual GA ID
const GA_TRACKING_ID = 'G-SH74YB75PR'; // Replace with your GA4 Measurement ID

// Cookie consent options
type ConsentOptions = {
  analytics: boolean;
  marketing: boolean;
  necessary: boolean;
};

export const CookieConsent: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const [options, setOptions] = useState<ConsentOptions>({
    analytics: false,
    marketing: false,
    necessary: true, // Always required
  });

  // Check for existing consent on component mount
  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent) {
      setConsentGiven(true);
      setOptions(JSON.parse(savedConsent));
      
      // Initialize GA if analytics consent was given
      const parsedOptions = JSON.parse(savedConsent);
      if (parsedOptions.analytics) {
        initializeGA();
      }
    } else {
      // Show cookie banner if no consent is saved
      setIsOpen(true);
    }
  }, []);

  // Function to initialize Google Analytics
  const initializeGA = () => {
    // Create script elements for Google Analytics
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    
    const dataLayerScript = document.createElement('script');
    dataLayerScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', { 'anonymize_ip': true });
    `;
    
    // Append scripts to document
    document.head.appendChild(gtagScript);
    document.head.appendChild(dataLayerScript);
  };

  // Handle accepting all cookies
  const handleAcceptAll = () => {
    const allOptions = {
      analytics: true,
      marketing: true,
      necessary: true,
    };
    setOptions(allOptions);
    localStorage.setItem('cookieConsent', JSON.stringify(allOptions));
    setConsentGiven(true);
    setIsOpen(false);
    
    // Initialize GA when accepting all
    initializeGA();
  };

  // Handle accepting only necessary cookies
  const handleAcceptNecessary = () => {
    const necessaryOnly = {
      analytics: false,
      marketing: false,
      necessary: true,
    };
    setOptions(necessaryOnly);
    localStorage.setItem('cookieConsent', JSON.stringify(necessaryOnly));
    setConsentGiven(true);
    setIsOpen(false);
  };

  // Handle saving custom cookie preferences
  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(options));
    setConsentGiven(true);
    setIsOpen(false);
    
    // Initialize GA if analytics is enabled
    if (options.analytics) {
      initializeGA();
    }
  };

  // Open the cookie settings panel
  const handleOpenCookieSettings = () => {
    setIsOpen(true);
  };

  if (!isOpen) {
    return (
      <button
        onClick={handleOpenCookieSettings}
        className="fixed bottom-4 right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors z-50"
        aria-label={t('Cookie Settings')}
      >
        <Cookie className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background border rounded-lg shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="h-6 w-6 text-primary flex-shrink-0" />
          <h2 className="text-lg sm:text-xl font-semibold">{t('Privacy Preferences')}</h2>
        </div>
        
        <p className="text-muted-foreground mb-6 text-sm sm:text-base">
          {t('We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.')}
        </p>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm sm:text-base">{t('Necessary Cookies')}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{t('Required for the website to function properly')}</p>
            </div>
            <Switch checked disabled className="flex-shrink-0" />
          </div>
          
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm sm:text-base">{t('Analytics Cookies')}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{t('Help us understand how visitors interact with our website')}</p>
            </div>
            <Switch 
              checked={options.analytics} 
              onCheckedChange={(checked) => setOptions({...options, analytics: checked})}
              className="flex-shrink-0"
            />
          </div>
          
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm sm:text-base">{t('Marketing Cookies')}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{t('Used to deliver advertisements more relevant to you')}</p>
            </div>
            <Switch 
              checked={options.marketing} 
              onCheckedChange={(checked) => setOptions({...options, marketing: checked})}
              className="flex-shrink-0"
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-2 sm:gap-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Button 
              variant="outline" 
              className="w-full text-xs sm:text-sm" 
              onClick={handleAcceptNecessary}
            >
              {t('Necessary Only')}
            </Button>
            <Button 
              variant="outline" 
              className="w-full text-xs sm:text-sm" 
              onClick={handleSavePreferences}
            >
              {t('Save Preferences')}
            </Button>
          </div>
          <Button 
            className="w-full text-xs sm:text-sm" 
            onClick={handleAcceptAll}
          >
            {t('Accept All')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
