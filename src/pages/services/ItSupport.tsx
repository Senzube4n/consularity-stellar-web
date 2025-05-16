
import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Link2, HeadphonesIcon, DatabaseZap } from 'lucide-react';

const ItSupport = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: 'Technical Support',
      description: 'Responsive help desk services to resolve technical issues quickly and efficiently.',
      icon: <HeadphonesIcon className="h-8 w-8 text-primary mb-4" />
    },
    {
      title: 'System Integration',
      description: 'Seamlessly connect different systems and applications to work together efficiently.',
      icon: <Link2 className="h-8 w-8 text-primary mb-4" />
    },
    {
      title: 'Infrastructure Management',
      description: 'Proactive monitoring and management of your IT infrastructure to ensure reliability.',
      icon: <Settings className="h-8 w-8 text-primary mb-4" />
    },
    {
      title: 'Data Management',
      description: 'Comprehensive data backup, recovery, and security solutions to protect your valuable information.',
      icon: <DatabaseZap className="h-8 w-8 text-primary mb-4" />
    }
  ];
  
  return (
    <ServiceLayout 
      title="IT Support & Integrations" 
      description="Reliable technical support and seamless system integrations to keep your business running smoothly."
    >
      {/* Overview Section */}
      <section className="py-16">
        <div className="consularity-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('Comprehensive IT Support for Your Business')}</h2>
            <p className="text-lg mb-6">
              {t('Technology is the backbone of modern business, but it can also be a source of frustration when things don\'t work as expected. Our IT support and integration services ensure your systems run smoothly, allowing you to focus on your core business.')}
            </p>
            <p className="text-lg">
              {t('With a team of experienced IT professionals, we provide timely support, proactive maintenance, and seamless integrations between different systems and applications.')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
        <div className="consularity-container">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('Our IT Services')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader className="pt-8 pb-2 flex flex-col items-center">
                  {service.icon}
                  <CardTitle>{t(service.title)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{t(service.description)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Support Plans */}
      <section className="py-16">
        <div className="consularity-container">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('Support Plans')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="h-full border-primary/20">
              <CardHeader>
                <CardTitle className="text-center">{t('Essential Support')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center text-3xl font-bold text-primary">{t('Basic')}</div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Business hours support')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Email and phone support')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Remote troubleshooting')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Monthly system health check')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="h-full border-primary/20">
              <CardHeader>
                <CardTitle className="text-center">{t('Advanced Support')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center text-3xl font-bold text-primary">{t('Standard')}</div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Extended hours support')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Priority response times')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('On-site support when needed')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Weekly system monitoring')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Quarterly technology review')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="h-full border-primary/20">
              <CardHeader>
                <CardTitle className="text-center">{t('Premium Support')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center text-3xl font-bold text-primary">{t('Enterprise')}</div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('24/7 support coverage')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Dedicated support team')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Proactive monitoring & alerts')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Regular on-site visits')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Strategic IT planning')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Monthly executive reports')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Integration Capabilities */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
        <div className="consularity-container">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('Integration Capabilities')}</h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-center mb-12">
              {t('We specialize in integrating various business systems to create a cohesive technology ecosystem that streamlines operations and improves efficiency.')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">{t('ERP Integration')}</h3>
                <p className="mb-4">
                  {t('Connect your ERP system with other business applications for seamless data flow and process automation.')}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('SAP Business One integration')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Financial system integration')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Inventory management integration')}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">{t('CRM Integration')}</h3>
                <p className="mb-4">
                  {t('Integrate your customer relationship management system with marketing, sales, and service tools.')}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Salesforce integration')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Marketing automation integration')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Customer service platform integration')}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">{t('E-Commerce Integration')}</h3>
                <p className="mb-4">
                  {t('Connect your online store with inventory, accounting, and fulfillment systems.')}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Shopify/WooCommerce integration')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Payment gateway integration')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Shipping and logistics integration')}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">{t('Custom API Development')}</h3>
                <p className="mb-4">
                  {t('Develop custom APIs to enable communication between disparate systems and applications.')}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('REST API development')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('GraphQL API development')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Third-party API integration')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default ItSupport;
