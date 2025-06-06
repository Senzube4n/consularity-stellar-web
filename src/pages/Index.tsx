import React, { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Cloud, Database, Settings, BarChart, Globe, Workflow } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';
import ServiceCard from '@/components/ServiceCard';
import FeatureColumn from '@/components/FeatureColumn';
import ConnectorLine from '@/components/ConnectorLine';
import { useLanguage } from '@/hooks/useLanguage';
import ImpactMetrics from '@/components/ImpactMetrics';
import PerformanceCharts from '@/components/PerformanceCharts';
import ProjectTimeline from '@/components/ProjectTimeline';
import Testimonials from '@/components/Testimonials';

/**
 * Index Page Component
 * 
 * This component serves as the landing page for the Consularity website.
 * It uses intersection observers to track which section is currently in view
 * and implements smooth scrolling functionality for navigation.
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
 */
const Index = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState(0);
  const navigate = useNavigate(); // Hook for programmatic navigation
  
  // Refs for sections to track scrolling
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  
  // Ref for the approach section for smooth scrolling
  const approachSectionRef = useRef<HTMLElement | null>(null);
  
  /**
   * Handle the "Let's Talk" button click
   * Navigates to the contact page
   */
  const handleLetsTalkClick = () => {
    navigate('/contact');
  };
  
  /**
   * Handle the "Discover Our Approach" button click
   * Scrolls smoothly to the approach section
   */
  const handleDiscoverApproachClick = () => {
    if (approachSectionRef.current) {
      approachSectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  // Intersection Observer to detect which section is in view
  useEffect(() => {
    // Create an observer that updates the active section when sections come into view
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
    
    // Observe all section elements
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });
    
    // Cleanup function to unobserve elements
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
        <ParticlesBackground />
        
        <div className="consularity-container text-center z-10">
          <div className="max-w-3xl mx-auto">
            <img 
              src="/lovable-uploads/ad26eaa0-5998-4d76-b99e-67d19dc9f090.png" 
              alt="Consularity Logo" 
              className="h-16 md:h-20 mx-auto mb-6 invert-0 dark:invert" 
            />
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
              {t('Where AI, Cloud, and Business Systems Converge')}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              {t('Premium consultancy for SAP Business One, AWS Cloud and AI-powered solutions tailored to small and midsize enterprises.')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                className="cta-button text-lg px-8 py-6"
                onClick={handleLetsTalkClick}
              >
                {t('Let\'s Talk')}
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group"
                onClick={handleDiscoverApproachClick}
              >
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            <ServiceCard 
              titleKey="service_sap_title" 
              descriptionKey="service_sap_desc"
              icon={<Database className="w-6 h-6" />}
              link="/services/sap-business-one"
            />
            
            <ServiceCard 
              titleKey="service_aws_title" 
              descriptionKey="service_aws_desc"
              icon={<Cloud className="w-6 h-6" />}
              link="/services/aws-cloud"
            />
            
            <ServiceCard 
              titleKey="service_ai_title" 
              descriptionKey="service_ai_desc"
              icon={<Server className="w-6 h-6" />}
              link="/services/ai-reporting"
            />
            
            <ServiceCard 
              titleKey="service_powerbi_title" 
              descriptionKey="service_powerbi_desc"
              icon={<BarChart className="w-6 h-6" />}
              link="/services/power-bi"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <ServiceCard 
              titleKey="service_web_title" 
              descriptionKey="service_web_desc"
              icon={<Globe className="w-6 h-6" />}
              link="/services/website-development"
            />
            
            <ServiceCard 
              titleKey="service_it_title" 
              descriptionKey="service_it_desc"
              icon={<Settings className="w-6 h-6" />}
              link="/services/it-support"
            />
            
            <ServiceCard 
              titleKey="service_workflow_title" 
              descriptionKey="service_workflow_desc"
              icon={<Workflow className="w-6 h-6" />}
              link="/services/workflow-automation"
            />
          </div>
        </div>
      </section>
      
      {/* Approach Section */}
      <section
        ref={(el) => {
          // Store reference for both the section tracking and the smooth scroll
          sectionsRef.current[2] = el;
          approachSectionRef.current = el;
        }}
        data-index={2}
        className="py-24 bg-gray-50/50 dark:bg-gray-900/30 relative"
        id="approach" // Added ID for direct navigation
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
      
      {/* Project Timeline Section */}
      <section
        ref={el => sectionsRef.current[3] = el}
        data-index={3}
        className="py-24 relative"
      >
        <ConnectorLine active={activeSection === 3} />
        
        <div className="consularity-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('Project Timeline')}</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
            <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              {t('Our proven implementation methodology ensures a smooth, predictable journey from concept to completion')}
            </p>
          </div>
          
          <ProjectTimeline />
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section
        ref={el => sectionsRef.current[4] = el}
        data-index={4}
        className="py-24 bg-gray-50/50 dark:bg-gray-900/30 relative"
      >
        <ConnectorLine active={activeSection === 4} />
        
        <div className="consularity-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('Client Testimonials')}</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
            <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              {t('Don\'t just take our word for it. Hear what our clients have to say about working with Consularity.')}
            </p>
          </div>
          
          <Testimonials />
        </div>
      </section>
      
      {/* Our Impact Section */}
      <section
        ref={el => sectionsRef.current[5] = el}
        data-index={5}
        className="py-24 relative"
      >
        <ConnectorLine active={activeSection === 5} />
        
        <div className="consularity-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('Our Impact')}</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
            <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              {t('At Consularity, we measure our success by the transformative outcomes we deliver for our clients. Each case study represents a journey through the technological singularity, resulting in measurable business improvements and competitive advantages.')}
            </p>
          </div>
          
          <ImpactMetrics />
        </div>
      </section>
      
      {/* Impact Metrics Section */}
      <section
        ref={el => sectionsRef.current[6] = el}
        data-index={6}
        className="py-24 bg-gray-50/50 dark:bg-gray-900/30 relative"
      >
        <ConnectorLine active={activeSection === 6} />
        
        <div className="consularity-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('Impact Metrics')}</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
            <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              {t('Visualizing the measurable impact of our solutions across client implementations')}
            </p>
          </div>
          
          <PerformanceCharts />
        </div>
      </section>
      
      {/* CTA Section */}
      <section
        ref={el => sectionsRef.current[7] = el}
        data-index={7}
        className="py-24 relative"
      >
        <ConnectorLine active={activeSection === 7} />
        
        <div className="consularity-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('Let\'s start your transformation')}
            </h2>
            
            <p className="text-xl text-muted-foreground mb-10">
              {t('Ready to leverage cutting-edge technology to transform your business operations? Let\'s discuss how Consularity can help you achieve your goals.')}
            </p>
            
            <Button 
              className="cta-button text-lg px-8 py-6"
              onClick={handleLetsTalkClick}
            >
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
