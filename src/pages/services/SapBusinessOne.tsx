
import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const SapBusinessOne = () => {
  const { t } = useLanguage();
  
  const benefits = [
    'Streamlined business operations',
    'Real-time inventory management',
    'Integrated financial reporting',
    'Enhanced customer relationship management',
    'Scalable solution that grows with your business',
    'Single source of truth for all business data'
  ];
  
  const features = [
    {
      title: 'Implementation & Migration',
      description: 'Full implementation services including requirements gathering, system setup, data migration, and user training.'
    },
    {
      title: 'Custom Development',
      description: 'Tailor SAP Business One to your specific business requirements with custom modules and integrations.'
    },
    {
      title: 'Support & Maintenance',
      description: 'Ongoing technical support, system optimization, and regular updates to ensure optimal performance.'
    },
    {
      title: 'Integration Services',
      description: 'Connect SAP Business One with your existing systems and third-party applications for seamless data flow.'
    }
  ];
  
  return (
    <ServiceLayout 
      title="SAP Business One Implementations" 
      description="Streamline your business operations with a comprehensive ERP solution tailored to your unique requirements."
    >
      {/* Overview Section */}
      <section className="py-16">
        <div className="consularity-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('Transform Your Business with SAP Business One')}</h2>
            <p className="text-lg mb-6">
              {t('SAP Business One is a comprehensive ERP solution designed specifically for small to medium-sized enterprises. As certified SAP Business One partners, we provide end-to-end implementation services to help you streamline operations, improve decision-making, and accelerate growth.')}
            </p>
            <p className="text-lg mb-6">
              {t('Our team of experienced consultants works closely with you to understand your business processes, configure the system to meet your specific needs, and ensure a smooth transition to your new ERP solution.')}
            </p>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">{t('Key Benefits')}</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-6 w-6 text-green-500 flex-shrink-0" />
                    <span>{t(benefit)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
        <div className="consularity-container">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('Our SAP Business One Services')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle>{t(feature.title)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{t(feature.description)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Implementation Process */}
      <section className="py-16">
        <div className="consularity-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">{t('Our Implementation Approach')}</h2>
            <p className="text-lg mb-10 text-center">
              {t('We follow a proven methodology to ensure successful SAP Business One implementations.')}
            </p>
            
            <div className="relative">
              <div className="absolute left-12 top-0 h-full w-0.5 bg-primary/30"></div>
              
              <div className="space-y-12">
                <div className="relative flex">
                  <div className="absolute left-12 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="pl-20">
                    <h3 className="text-xl font-bold mb-2">{t('1. Discovery & Planning')}</h3>
                    <p>{t('We analyze your business requirements, identify key processes, and develop a detailed implementation plan.')}</p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="absolute left-12 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="pl-20">
                    <h3 className="text-xl font-bold mb-2">{t('2. System Configuration')}</h3>
                    <p>{t('We set up and configure SAP Business One according to your specific business requirements and industry best practices.')}</p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="absolute left-12 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="pl-20">
                    <h3 className="text-xl font-bold mb-2">{t('3. Data Migration')}</h3>
                    <p>{t('We migrate your existing data into SAP Business One, ensuring accuracy and integrity throughout the process.')}</p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="absolute left-12 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="pl-20">
                    <h3 className="text-xl font-bold mb-2">{t('4. Testing & Validation')}</h3>
                    <p>{t('We conduct thorough testing to ensure the system meets all requirements and functions correctly.')}</p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="absolute left-12 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="pl-20">
                    <h3 className="text-xl font-bold mb-2">{t('5. Training & Go-Live')}</h3>
                    <p>{t('We provide comprehensive training for your team and support you through the go-live process.')}</p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="absolute left-12 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="pl-20">
                    <h3 className="text-xl font-bold mb-2">{t('6. Ongoing Support')}</h3>
                    <p>{t('We provide continuous support and optimization to ensure you get the most out of your SAP Business One implementation.')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default SapBusinessOne;
