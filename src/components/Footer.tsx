
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { useLanguage } from '@/hooks/useLanguage';

/**
 * Footer Component
 * 
 * The website footer containing contact information, quick links, and a call to action.
 * Includes responsive design for different screen sizes.
 * 
 * @see https://reactrouter.com/en/main/components/link - For Link component
 * @see https://reactrouter.com/en/main/hooks/use-navigate - For useNavigate hook
 */
const Footer = () => {
  const { t } = useLanguage();
  const navigate = useNavigate(); // Hook for programmatic navigation
  
  /**
   * Handles navigation to the contact page
   */
  const handleLetsTalkClick = () => {
    navigate('/contact');
  };
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900/30 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Dots - Creates a subtle visual separator at the top of footer */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="consularity-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/ad26eaa0-5998-4d76-b99e-67d19dc9f090.png" 
                alt="Consularity Logo" 
                className="h-10 invert-0 dark:invert"
              />
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('Where AI, Cloud, and Business Systems Converge')}
            </p>
            <div className="flex space-x-4">
              <a href="mailto:info@consularity.com" className="text-gray-500 hover:text-primary" aria-label="Email us">
                <Mail size={20} />
              </a>
              <a href="tel:+40721354551" className="text-gray-500 hover:text-primary" aria-label="Call us">
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">{t('Quick Links')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                  {t('Home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                  {t('About Us')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                  {t('Contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">{t('Start a Conversation')}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {t('Ready to transform your business with cutting-edge technology?')}
            </p>
            <Button 
              className="cta-button"
              onClick={handleLetsTalkClick}
            >
              <span>{t('Let\'s Talk')}</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Consularity. {t('All rights reserved.')}
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <Link to="/privacy" className="hover:text-primary">{t('Privacy Policy')}</Link>
            <Link to="/terms" className="hover:text-primary">{t('Terms of Service')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
