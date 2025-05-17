
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, BrowserRouter } from 'react-router-dom';
import { ThemeProvider as ShadcnThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastProvider } from '@/components/providers/toast-provider';
import { LanguageProvider } from '@/hooks/useLanguage';
import { CookieConsentProvider } from '@/hooks/useCookieConsent';
import { ThemeProvider } from '@/hooks/useTheme';
import CookieConsent from '@/components/CookieConsent';

import Index from '@/pages/Index';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import SapBusinessOne from '@/pages/services/SapBusinessOne';
import AwsCloud from '@/pages/services/AwsCloud';
import AiReporting from '@/pages/services/AiReporting';
import PowerBi from '@/pages/services/PowerBi';
import WebsiteDevelopment from '@/pages/services/WebsiteDevelopment';
import ItSupport from '@/pages/services/ItSupport';
import WorkflowAutomation from '@/pages/services/WorkflowAutomation';
import PrivacyPolicy from '@/pages/legal/PrivacyPolicy';
import TermsOfService from '@/pages/legal/TermsOfService';
import NotFound from '@/pages/NotFound';

const queryClient = new QueryClient();

// ScrollToTopOnRouteChange component
const ScrollToTopOnRouteChange = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

function App() {
  const [isCookieConsentAccepted, setIsCookieConsentAccepted] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted the cookie consent
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'accepted') {
      setIsCookieConsentAccepted(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider>
        <ShadcnThemeProvider defaultTheme="system" storageKey="consularity-theme">
          <ToastProvider>
            <QueryClientProvider client={queryClient}>
              <LanguageProvider>
                <CookieConsentProvider>
                  <ScrollToTopOnRouteChange>
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/services/sap-business-one" element={<SapBusinessOne />} />
                      <Route path="/services/aws-cloud" element={<AwsCloud />} />
                      <Route path="/services/ai-reporting" element={<AiReporting />} />
                      <Route path="/services/power-bi" element={<PowerBi />} />
                      <Route path="/services/website-development" element={<WebsiteDevelopment />} />
                      <Route path="/services/it-support" element={<ItSupport />} />
                      <Route path="/services/workflow-automation" element={<WorkflowAutomation />} />
                      <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
                      <Route path="/legal/terms-of-service" element={<TermsOfService />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                    
                    <CookieConsent />
                  </ScrollToTopOnRouteChange>
                </CookieConsentProvider>
              </LanguageProvider>
            </QueryClientProvider>
          </ToastProvider>
        </ShadcnThemeProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
