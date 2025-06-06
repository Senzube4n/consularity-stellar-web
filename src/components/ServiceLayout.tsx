
import React, { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import ParallaxHero from '@/components/ParallaxHero';

interface ServiceLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  image?: string;
}

const ServiceLayout = ({ children, title, description, image }: ServiceLayoutProps) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const handleLetsTalkClick = () => {
    navigate('/contact');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section with Parallax */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden">
          <ParallaxHero speed={0.2} className="absolute inset-0 bg-dots opacity-50" />
          
          <div className="consularity-container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{t(title)}</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {t(description)}
                </p>
                <Button 
                  className="cta-button text-lg"
                  onClick={handleLetsTalkClick}
                >
                  {t('Get Started')} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              {image && (
                <div className="relative h-64 md:h-80 overflow-hidden rounded-xl shadow-xl">
                  <img 
                    src={image} 
                    alt={title} 
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
        
        {children}
        
        {/* CTA Section with Background Pattern */}
        <section className="py-20 bg-primary/5 dark:bg-primary/10 bg-hexagon">
          <div className="consularity-container text-center">
            <h2 className="text-3xl font-bold mb-6">{t('Ready to transform your business?')}</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {t('Contact us today to discuss how we can help you achieve your business goals with our comprehensive technology solutions.')}
            </p>
            <Button 
              className="cta-button text-lg px-8 py-6"
              onClick={handleLetsTalkClick}
            >
              {t('Let\'s Talk')} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceLayout;
