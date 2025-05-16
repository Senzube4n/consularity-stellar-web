
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import { LanguageProvider } from "@/hooks/useLanguage";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

// Service pages
import SapBusinessOne from "./pages/services/SapBusinessOne";
import AwsCloud from "./pages/services/AwsCloud";
import AiReporting from "./pages/services/AiReporting";
import PowerBI from "./pages/services/PowerBI";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import ItSupport from "./pages/services/ItSupport";

import CookieConsent from "./components/CookieConsent";

const queryClient = new QueryClient();

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              
              {/* Service routes */}
              <Route path="/services/sap-business-one" element={<SapBusinessOne />} />
              <Route path="/services/aws-cloud" element={<AwsCloud />} />
              <Route path="/services/ai-reporting" element={<AiReporting />} />
              <Route path="/services/power-bi" element={<PowerBI />} />
              <Route path="/services/website-development" element={<WebsiteDevelopment />} />
              <Route path="/services/it-support" element={<ItSupport />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
            <CookieConsent />
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
