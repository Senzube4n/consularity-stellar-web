
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sun, Moon, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/hooks/useLanguage";

/**
 * Navbar Component
 * 
 * A responsive navigation bar that adapts to scroll position and theme changes.
 * Includes language selection, theme toggle, and navigation links.
 * 
 * @see https://reactrouter.com/en/main/components/link - For Link component
 * @see https://reactrouter.com/en/main/hooks/use-navigate - For useNavigate hook
 * @see https://tailwindcss.com/docs/backdrop-blur - For backdrop blur effect
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate(); // Hook for programmatic navigation
  
  /**
   * Handle navigation to the contact page
   * Uses React Router's useNavigate for programmatic navigation
   */
  const handleLetsTalkClick = () => {
    navigate('/contact');
  };
  
  // Effect for detecting scroll position to style the navbar accordingly
  useEffect(() => {
    /**
     * Handles scroll events to change navbar appearance
     * Adds background and shadow when page is scrolled
     */
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-consularity-dark/90 shadow-md backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="consularity-container flex justify-between items-center py-4">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/ad26eaa0-5998-4d76-b99e-67d19dc9f090.png" 
            alt="Consularity Logo" 
            className="h-10 mr-2 invert-0 dark:invert"
          />
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="nav-link">{t('Home')}</Link>
          <Link to="/about" className="nav-link">{t('About Us')}</Link>
          <Link to="/contact" className="nav-link">{t('Contact')}</Link>
        </div>

        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Globe className="h-5 w-5" />
                <span className="absolute -bottom-1 -right-1 text-xs font-bold">
                  {language.toUpperCase().substring(0, 2)}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage('en')}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('nl')}>
                Nederlands
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('ro')}>
                Română
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Button 
            className="cta-button hidden sm:inline-flex"
            onClick={handleLetsTalkClick}
          >
            {t('Let\'s Talk')}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
