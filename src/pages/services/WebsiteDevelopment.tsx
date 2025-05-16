
import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Globe, ShoppingCart, BadgeCheck } from 'lucide-react';

const WebsiteDevelopment = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: 'Corporate Websites',
      description: 'Professional websites that showcase your brand, products, and services with a focus on user experience.',
      icon: <Globe className="h-8 w-8 text-primary mb-4" />
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Custom online stores with secure payment processing, inventory management, and customer accounts.',
      icon: <ShoppingCart className="h-8 w-8 text-primary mb-4" />
    },
    {
      title: 'Web Applications',
      description: 'Tailored web applications that automate processes and improve efficiency for your business.',
      icon: <Code className="h-8 w-8 text-primary mb-4" />
    },
    {
      title: 'Website Optimization',
      description: 'Performance tuning, SEO improvements, and accessibility enhancements for existing websites.',
      icon: <BadgeCheck className="h-8 w-8 text-primary mb-4" />
    }
  ];
  
  const technologies = [
    'React', 'TypeScript', 'Next.js',
    'Tailwind CSS', 'Node.js', 'GraphQL',
    'AWS', 'Cloudflare', 'Vercel',
    'WordPress', 'WooCommerce', 'Shopify'
  ];
  
  return (
    <ServiceLayout 
      title="Website Development" 
      description="Custom, responsive websites and web applications built with modern technologies to elevate your online presence."
    >
      {/* Overview Section */}
      <section className="py-16">
        <div className="consularity-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('Modern Web Development for Your Business')}</h2>
            <p className="text-lg mb-6">
              {t('In today\'s digital world, your website is often the first interaction customers have with your business. We create visually stunning, high-performance websites and web applications that make a lasting impression and help you achieve your business objectives.')}
            </p>
            <p className="text-lg">
              {t('Our web development team combines technical expertise with creative design to deliver solutions that not only look great but also provide an exceptional user experience across all devices.')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
        <div className="consularity-container">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('Web Development Services')}</h2>
          
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
      
      {/* Development Process */}
      <section className="py-16">
        <div className="consularity-container">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('Our Development Process')}</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-12 top-0 h-full w-0.5 bg-primary/30"></div>
              
              <div className="space-y-12">
                <div className="relative flex">
                  <div className="absolute left-12 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="pl-20">
                    <h3 className="text-xl font-bold mb-2">{t('1. Discovery & Planning')}</h3>
                    <p>{t('We work with you to understand your business goals, target audience, and requirements for your website or web application.')}</p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="absolute left-12 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="pl-20">
                    <h3 className="text-xl font-bold mb-2">{t('2. Design')}</h3>
                    <p>{t('We create wireframes and visual designs that align with your brand identity and provide an optimal user experience.')}</p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="absolute left-12 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="pl-20">
                    <h3 className="text-xl font-bold mb-2">{t('3. Development')}</h3>
                    <p>{t('Our developers write clean, efficient code to bring the designs to life, ensuring responsiveness and cross-browser compatibility.')}</p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="absolute left-12 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="pl-20">
                    <h3 className="text-xl font-bold mb-2">{t('4. Testing & Quality Assurance')}</h3>
                    <p>{t('We thoroughly test your website or application to ensure it functions correctly across all devices and browsers.')}</p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="absolute left-12 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="pl-20">
                    <h3 className="text-xl font-bold mb-2">{t('5. Deployment')}</h3>
                    <p>{t('We deploy your website or application to a production environment, ensuring a smooth launch.')}</p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="absolute left-12 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="pl-20">
                    <h3 className="text-xl font-bold mb-2">{t('6. Support & Maintenance')}</h3>
                    <p>{t('We provide ongoing support and maintenance to keep your website secure, up-to-date, and performing optimally.')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
        <div className="consularity-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">{t('Technologies We Use')}</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center hover:shadow-md transition-shadow">
                  {t(tech)}
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4 text-center">{t('Why Choose Us for Web Development?')}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-lg">
                  <h4 className="font-bold text-xl mb-2">{t('Technical Excellence')}</h4>
                  <p>{t('Our developers stay up-to-date with the latest technologies and best practices to deliver high-quality, future-proof solutions.')}</p>
                </div>
                
                <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-lg">
                  <h4 className="font-bold text-xl mb-2">{t('User-Centered Design')}</h4>
                  <p>{t('We prioritize user experience to ensure your website or application is intuitive, accessible, and engaging.')}</p>
                </div>
                
                <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-lg">
                  <h4 className="font-bold text-xl mb-2">{t('Performance Optimization')}</h4>
                  <p>{t('We optimize for speed and performance, ensuring fast load times and smooth interactions.')}</p>
                </div>
                
                <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-lg">
                  <h4 className="font-bold text-xl mb-2">{t('SEO & Accessibility')}</h4>
                  <p>{t('We follow SEO best practices and accessibility standards to ensure your website reaches the widest possible audience.')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default WebsiteDevelopment;
