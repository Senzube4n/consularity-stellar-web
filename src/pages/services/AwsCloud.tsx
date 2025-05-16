
import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Zap, LineChart, Cloud } from 'lucide-react';

const AwsCloud = () => {
  const { t } = useLanguage();
  
  const offerings = [
    {
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your existing infrastructure to AWS with minimal disruption to your business operations.',
      icon: <Cloud className="h-8 w-8 text-primary mb-4" />
    },
    {
      title: 'Security & Compliance',
      description: 'Implement robust security measures and ensure compliance with industry standards and regulations.',
      icon: <Shield className="h-8 w-8 text-primary mb-4" />
    },
    {
      title: 'Performance Optimization',
      description: 'Fine-tune your cloud infrastructure for optimal performance, scalability, and cost-efficiency.',
      icon: <Zap className="h-8 w-8 text-primary mb-4" />
    },
    {
      title: 'Monitoring & Analytics',
      description: 'Implement comprehensive monitoring and analytics to track performance and identify opportunities for improvement.',
      icon: <LineChart className="h-8 w-8 text-primary mb-4" />
    }
  ];
  
  return (
    <ServiceLayout 
      title="AWS Cloud Hosting & DevOps" 
      description="Secure, scalable and high-performance cloud infrastructure with continuous delivery pipelines."
    >
      {/* Overview Section */}
      <section className="py-16">
        <div className="consularity-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('Leverage the Power of AWS Cloud')}</h2>
            <p className="text-lg mb-6">
              {t('Amazon Web Services (AWS) offers a comprehensive suite of cloud services that enable businesses of all sizes to build sophisticated applications with increased flexibility, scalability, and reliability. As AWS Partners, we help you harness the full potential of AWS cloud services to drive innovation and growth.')}
            </p>
            <p className="text-lg">
              {t('Our team of certified AWS experts works with you to design, implement, and manage cloud solutions tailored to your specific business requirements. Whether you\'re looking to migrate to the cloud, optimize your existing cloud infrastructure, or implement a DevOps approach, we have the expertise to help you succeed.')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
        <div className="consularity-container">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('Our AWS Cloud Services')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((offering, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader className="pt-8 pb-2 flex flex-col items-center">
                  {offering.icon}
                  <CardTitle>{t(offering.title)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{t(offering.description)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* DevOps Section */}
      <section className="py-16">
        <div className="consularity-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('DevOps Excellence')}</h2>
              <p className="text-lg mb-4">
                {t('We help organizations implement DevOps practices to streamline software development, increase deployment frequency, and improve reliability.')}
              </p>
              <p className="text-lg mb-6">
                {t('Our DevOps approach combines people, processes, and technology to break down silos between development and operations teams, enabling faster and more reliable software delivery.')}
              </p>
              
              <h3 className="text-xl font-bold mb-3">{t('Our DevOps Services Include:')}</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>{t('CI/CD Pipeline Implementation')}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>{t('Infrastructure as Code (IaC)')}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>{t('Containerization & Orchestration')}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>{t('Automated Testing & Deployment')}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>{t('Monitoring & Logging')}</span>
                </li>
              </ul>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 h-full">
                <h3 className="text-2xl font-bold mb-6 text-center">{t('Benefits of Our AWS & DevOps Solutions')}</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="rounded-full bg-primary text-white w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold mb-1">{t('Increased Scalability')}</h4>
                      <p>{t('Easily scale your infrastructure up or down based on demand.')}</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="rounded-full bg-primary text-white w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold mb-1">{t('Enhanced Security')}</h4>
                      <p>{t('Implement robust security measures to protect your data and applications.')}</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="rounded-full bg-primary text-white w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold mb-1">{t('Cost Optimization')}</h4>
                      <p>{t('Optimize your cloud spending with proper resource allocation.')}</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="rounded-full bg-primary text-white w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-bold mb-1">{t('Faster Time to Market')}</h4>
                      <p>{t('Accelerate development and deployment with automated CI/CD pipelines.')}</p>
                    </div>
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

export default AwsCloud;
