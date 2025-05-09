
import React, { useRef, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Cloud, Database, Settings } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThreeBackground from '@/components/ThreeBackground';
import ServiceCard from '@/components/ServiceCard';
import FeatureColumn from '@/components/FeatureColumn';
import ConnectorLine from '@/components/ConnectorLine';
import { useLanguage } from '@/hooks/useLanguage';

const Index = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState(0);
  
  // Refs for sections to track scrolling
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Intersection Observer to detect which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveSection(index);
          }
        });
      },
      { threshold: 0.4 } // 40% visibility to trigger
    );
    
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });
    
    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        ref={el => sectionsRef.current[0] = el} 
        data-index={0}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <ThreeBackground />
        
        <div className="consularity-container text-center z-10">
          <div className="max-w-3xl mx-auto">
            <img 
              src="/public/lovable-uploads/ad26eaa0-5998-4d76-b99e-67d19dc9f090.png" 
              alt="Consularity Logo" 
              className="h-16 md:h-20 mx-auto mb-6 invert-0 dark:invert" 
            />
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
              {t('Where AI, Cloud, and Business Systems Converge')}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Premium consultancy for SAP Business One, AWS Cloud and AI-powered solutions 
              tailored to small and midsize enterprises.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="cta-button text-lg px-8 py-6">
                {t('Let\'s Talk')}
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                {t('Discover Our Approach')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section
        ref={el => sectionsRef.current[1] = el}
        data-index={1}
        className="py-24 relative"
      >
        <ConnectorLine active={activeSection === 1} />
        
        <div className="consularity-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('Our Services')}</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              title="SAP Business One Implementations" 
              description="Complete ERP solutions tailored to your business processes with expert guidance and support."
              icon={<Database className="w-6 h-6" />}
            />
            
            <ServiceCard 
              title="AWS Cloud Hosting & DevOps" 
              description="Secure, scalable and high-performance infrastructure with continuous delivery pipelines."
              icon={<Cloud className="w-6 h-6" />}
            />
            
            <ServiceCard 
              title="AI Reporting & Automation" 
              description="Smart reporting tools and AI-enhanced automation to transform data into actionable insights."
              icon={<Server className="w-6 h-6" />}
            />
            
            <ServiceCard 
              title="IT Support & Integrations" 
              description="Seamless integration of all systems with reliable ongoing technical support."
              icon={<Settings className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>
      
      {/* Approach Section */}
      <section
        ref={el => sectionsRef.current[2] = el}
        data-index={2}
        className="py-24 bg-gray-50/50 dark:bg-gray-900/30 relative"
      >
        <ConnectorLine active={activeSection === 2} />
        
        <div className="consularity-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('Why Consularity')}</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureColumn 
              title="Expert-led Implementations" 
              description="Our team brings deep expertise in business systems, ensuring smooth deployment and maximum value."
              icon={<Server className="w-6 h-6" />}
            />
            
            <FeatureColumn 
              title="Scalable Infrastructure" 
              description="Future-proof solutions that grow with your business needs while maintaining performance."
              icon={<Cloud className="w-6 h-6" />}
            />
            
            <FeatureColumn 
              title="AI-Enhanced Operations" 
              description="Leverage the power of AI to optimize your operations and gain competitive advantage."
              icon={<Database className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section
        ref={el => sectionsRef.current[3] = el}
        data-index={3}
        className="py-24 relative"
      >
        <ConnectorLine active={activeSection === 3} />
        
        <div className="consularity-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('Let\'s start your transformation')}
            </h2>
            
            <p className="text-xl text-muted-foreground mb-10">
              Ready to leverage cutting-edge technology to transform your business operations?
              Let's discuss how Consularity can help you achieve your goals.
            </p>
            
            <Button className="cta-button text-lg px-8 py-6">
              {t('Let\'s Talk')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
