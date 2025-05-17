
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Workflow, ArrowRight, CheckCircle, Zap, Flow, Layers } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ServiceFeature from '@/components/ServiceFeature';
import { useLanguage } from '@/hooks/useLanguage';

const WorkflowAutomation = () => {
  const { t } = useLanguage();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageHeader 
        title={t('Workflow Automation with n8n')}
        description={t('Streamline your business processes with powerful, visual workflow automation')}
        icon={<Workflow className="w-10 h-10" />}
      />
      
      <main className="flex-grow consularity-container py-12">
        {/* Introduction Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('Transform Your Business with Workflow Automation')}</h2>
              <p className="text-lg mb-6">
                {t('n8n is a powerful workflow automation platform that helps you connect any app with an API with any other. Design, automate, and execute workflows that connect your entire software stack, eliminating repetitive tasks and streamlining your operations.')}
              </p>
              <p className="text-lg mb-6">
                {t('Our team of workflow experts will help you identify automation opportunities, design and implement custom workflows, and train your team to get the most out of your automation investment.')}
              </p>
              <Button className="cta-button" asChild>
                <Link to="/contact">
                  {t('Start Automating Today')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/workflow-automation.jpg" 
                alt="n8n Workflow Automation" 
                className="w-full h-auto"
                onError={(e) => {
                  // Fallback for missing image
                  e.currentTarget.src = "https://n8n.io/images/homepage/trusted-n8n-lg.png";
                }}
              />
            </div>
          </div>
        </section>
        
        {/* Key Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('Key Benefits')}</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceFeature
              icon={<Zap className="w-8 h-8" />}
              title={t('Increased Productivity')}
              description={t('Automate repetitive tasks and free up your team to focus on strategic initiatives.')}
            />
            
            <ServiceFeature
              icon={<Flow className="w-8 h-8" />}
              title={t('Seamless Integration')}
              description={t('Connect over 200+ applications and services without complex coding.')}
            />
            
            <ServiceFeature
              icon={<Layers className="w-8 h-8" />}
              title={t('Scalable Solutions')}
              description={t('Start small and expand your automation as your business grows.')}
            />
            
            <ServiceFeature
              icon={<CheckCircle className="w-8 h-8" />}
              title={t('Reduced Errors')}
              description={t('Eliminate human error from repetitive processes with reliable automation.')}
            />
            
            <ServiceFeature
              icon={<Workflow className="w-8 h-8" />}
              title={t('Custom Workflows')}
              description={t('Build workflows tailored to your specific business needs and processes.')}
            />
            
            <ServiceFeature
              icon={<Database className="w-8 h-8" />}
              title={t('Data Synchronization')}
              description={t('Keep your data consistent across all your systems and applications.')}
            />
          </div>
        </section>
        
        {/* Our Workflow Automation Services */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('Our Workflow Automation Services')}</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{t('Workflow Design & Implementation')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('Complete workflow design and implementation services including requirements gathering, workflow modeling, and deployment.')}
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{t('Integration Services')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('Connect n8n with your existing systems and third-party applications for seamless data flow.')}
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{t('Custom Node Development')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('Develop custom nodes to extend n8n\'s capabilities for your specific business requirements.')}
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{t('Training & Support')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('Comprehensive training for your team and ongoing support to ensure your workflows stay efficient and effective.')}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Use Cases */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('Common Use Cases')}</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
            <p className="text-lg mt-6 max-w-3xl mx-auto">
              {t('Our workflow automation solutions can be applied to various business processes across different departments.')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg shadow border border-border">
              <h3 className="font-bold text-xl mb-3">{t('Sales & Marketing')}</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>{t('Lead management automation')}</li>
                <li>{t('Customer onboarding workflows')}</li>
                <li>{t('Marketing campaign automation')}</li>
                <li>{t('CRM integration and synchronization')}</li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow border border-border">
              <h3 className="font-bold text-xl mb-3">{t('Finance & Operations')}</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>{t('Invoice processing automation')}</li>
                <li>{t('Expense approval workflows')}</li>
                <li>{t('Inventory management')}</li>
                <li>{t('Purchase order processing')}</li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow border border-border">
              <h3 className="font-bold text-xl mb-3">{t('HR & Administration')}</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>{t('Employee onboarding and offboarding')}</li>
                <li>{t('Time-off request approvals')}</li>
                <li>{t('Performance review automation')}</li>
                <li>{t('Document management workflows')}</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="mb-12 bg-muted p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">{t('Ready to automate your business processes?')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('Contact us today to discuss how our workflow automation solutions can help streamline your operations and boost productivity.')}
          </p>
          <Button className="cta-button text-lg px-8 py-6" asChild>
            <Link to="/contact">
              {t('Get Started')} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WorkflowAutomation;
