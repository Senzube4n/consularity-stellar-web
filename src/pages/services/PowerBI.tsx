
import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, DatabaseZap, LayoutDashboard, LineChart } from 'lucide-react';

const PowerBI = () => {
  const { t } = useLanguage();
  
  const solutions = [
    {
      title: 'Power BI Implementation',
      description: 'Complete Power BI setup, configuration, and integration with your data sources.',
      icon: <DatabaseZap className="h-8 w-8 text-primary mb-4" />
    },
    {
      title: 'Dashboard Development',
      description: 'Custom dashboard creation with interactive visualizations tailored to your business needs.',
      icon: <LayoutDashboard className="h-8 w-8 text-primary mb-4" />
    },
    {
      title: 'Data Model Optimization',
      description: 'Optimize your data models for better performance and more insightful analytics.',
      icon: <BarChart className="h-8 w-8 text-primary mb-4" />
    },
    {
      title: 'Power BI Training',
      description: 'Comprehensive training programs to help your team maximize the value of Power BI.',
      icon: <LineChart className="h-8 w-8 text-primary mb-4" />
    }
  ];
  
  const benefits = [
    'Interactive data visualizations',
    'Real-time reporting capabilities',
    'Self-service business intelligence',
    'Integration with multiple data sources',
    'Mobile access to key insights',
    'AI-powered data analysis'
  ];
  
  return (
    <ServiceLayout 
      title="Power BI Solutions" 
      description="Transform your data into powerful visual insights with Microsoft Power BI solutions tailored to your business needs."
    >
      {/* Overview Section */}
      <section className="py-16">
        <div className="consularity-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('Unlock the Power of Your Data with Power BI')}</h2>
            <p className="text-lg mb-6">
              {t('Microsoft Power BI is a leading business intelligence platform that helps organizations transform data into actionable insights. Our Power BI solutions enable you to connect to hundreds of data sources, create stunning visualizations, and share insights across your organization.')}
            </p>
            <p className="text-lg">
              {t('As Microsoft partners with expertise in Power BI, we help businesses of all sizes implement effective data visualization and business intelligence solutions that drive informed decision-making and business growth.')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
        <div className="consularity-container">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('Our Power BI Solutions')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader className="pt-8 pb-2 flex flex-col items-center">
                  {solution.icon}
                  <CardTitle>{t(solution.title)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{t(solution.description)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16">
        <div className="consularity-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('Power BI Features & Benefits')}</h2>
              <p className="text-lg mb-6">
                {t('Power BI offers a comprehensive set of features designed to help you gain insights from your data and share those insights with colleagues and stakeholders.')}
              </p>
              
              <h3 className="text-xl font-bold mb-3">{t('Key Benefits:')}</h3>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t(benefit)}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-xl bg-primary/5 dark:bg-primary/10 p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">{t('Our Power BI Methodology')}</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="rounded-full bg-primary text-white w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold mb-1">{t('Requirements Analysis')}</h4>
                    <p>{t('We work with you to understand your reporting needs and business objectives.')}</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="rounded-full bg-primary text-white w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold mb-1">{t('Data Source Integration')}</h4>
                    <p>{t('We connect Power BI to your data sources and ensure proper data flow.')}</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="rounded-full bg-primary text-white w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold mb-1">{t('Data Model Development')}</h4>
                    <p>{t('We create optimized data models that enable fast and flexible analysis.')}</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="rounded-full bg-primary text-white w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold mb-1">{t('Dashboard & Report Design')}</h4>
                    <p>{t('We design intuitive dashboards and reports with interactive visualizations.')}</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="rounded-full bg-primary text-white w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-bold mb-1">{t('Deployment & Training')}</h4>
                    <p>{t('We deploy the solution and provide training to ensure user adoption.')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
        <div className="consularity-container">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('Power BI Use Cases')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{t('Sales & Marketing')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Sales performance analytics')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Customer segmentation')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Campaign effectiveness')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Lead conversion tracking')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{t('Finance & Operations')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Financial reporting')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Budget vs. actuals')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Inventory management')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Supply chain analytics')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{t('Human Resources')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Workforce analytics')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Recruitment metrics')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Employee performance')}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{t('Training effectiveness')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default PowerBI;
