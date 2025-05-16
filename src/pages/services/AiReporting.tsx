
import React from 'react';
import ServiceLayout from '@/components/ServiceLayout';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Bot, FileText, BarChart } from 'lucide-react';

const AiReporting = () => {
  const { t } = useLanguage();
  
  const capabilities = [
    {
      title: 'Predictive Analytics',
      description: 'Leverage AI to forecast trends, identify patterns, and make data-driven predictions about your business.',
      icon: <BrainCircuit className="h-8 w-8 text-primary mb-4" />
    },
    {
      title: 'Intelligent Automation',
      description: 'Automate routine tasks and complex business processes with AI-powered workflows and decision-making.',
      icon: <Bot className="h-8 w-8 text-primary mb-4" />
    },
    {
      title: 'Custom Reports & Dashboards',
      description: 'Create tailored reports and interactive dashboards that provide actionable insights for your business.',
      icon: <FileText className="h-8 w-8 text-primary mb-4" />
    },
    {
      title: 'Data Visualization',
      description: 'Transform complex data sets into clear, visually appealing representations that drive better decision-making.',
      icon: <BarChart className="h-8 w-8 text-primary mb-4" />
    }
  ];
  
  return (
    <ServiceLayout 
      title="AI Reporting & Automation" 
      description="Transform your data into actionable insights with our AI-powered reporting and automation solutions."
    >
      {/* Overview Section */}
      <section className="py-16">
        <div className="consularity-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('Harness the Power of AI for Your Business')}</h2>
            <p className="text-lg mb-6">
              {t('In today\'s data-driven world, businesses that can efficiently collect, analyze, and act on their data gain a significant competitive advantage. Our AI Reporting & Automation solutions help you transform raw data into valuable insights and automate routine tasks, allowing you to focus on strategic initiatives.')}
            </p>
            <p className="text-lg">
              {t('Our team of data scientists and AI specialists works closely with you to understand your business objectives and implement solutions that deliver measurable results.')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Capabilities Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
        <div className="consularity-container">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('AI Capabilities')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader className="pt-8 pb-2 flex flex-col items-center">
                  {capability.icon}
                  <CardTitle>{t(capability.title)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{t(capability.description)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="py-16">
        <div className="consularity-container">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('AI Use Cases')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">{t('Sales Forecasting')}</h3>
              <p className="mb-4">
                {t('Predict future sales trends and optimize inventory management based on historical data, market conditions, and seasonal patterns.')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>{t('Accurate demand forecasting')}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>{t('Reduced inventory costs')}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>{t('Optimized pricing strategies')}</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">{t('Customer Insights')}</h3>
              <p className="mb-4">
                {t('Analyze customer behavior and preferences to personalize marketing efforts and improve customer satisfaction.')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>{t('Customer segmentation')}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>{t('Churn prediction')}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>{t('Personalized recommendations')}</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">{t('Financial Analysis')}</h3>
              <p className="mb-4">
                {t('Automate financial reporting and gain deeper insights into your company\'s financial performance.')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>{t('Cash flow forecasting')}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>{t('Expense categorization')}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>{t('Anomaly detection')}</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">{t('Process Automation')}</h3>
              <p className="mb-4">
                {t('Streamline business processes by automating repetitive tasks and workflows with intelligent AI systems.')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>{t('Document processing')}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>{t('Email management')}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>{t('Customer service automation')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Implementation Process */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
        <div className="consularity-container">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('Our Implementation Process')}</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-12 top-0 h-full w-0.5 bg-primary/30"></div>
              
              <div className="space-y-12">
                <div className="relative flex">
                  <div className="absolute left-12 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="pl-20">
                    <h3 className="text-xl font-bold mb-2">{t('1. Discovery & Assessment')}</h3>
                    <p>{t('We work with you to understand your business objectives, data sources, and reporting needs.')}</p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="absolute left-12 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="pl-20">
                    <h3 className="text-xl font-bold mb-2">{t('2. Solution Design')}</h3>
                    <p>{t('We design a tailored AI reporting and automation solution that addresses your specific requirements.')}</p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="absolute left-12 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="pl-20">
                    <h3 className="text-xl font-bold mb-2">{t('3. Development & Integration')}</h3>
                    <p>{t('We develop and integrate the AI solution with your existing systems and data sources.')}</p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="absolute left-12 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="pl-20">
                    <h3 className="text-xl font-bold mb-2">{t('4. Testing & Validation')}</h3>
                    <p>{t('We thoroughly test the solution to ensure accuracy, reliability, and performance.')}</p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="absolute left-12 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="pl-20">
                    <h3 className="text-xl font-bold mb-2">{t('5. Deployment & Training')}</h3>
                    <p>{t('We deploy the solution and provide training to your team to ensure effective utilization.')}</p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="absolute left-12 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="pl-20">
                    <h3 className="text-xl font-bold mb-2">{t('6. Continuous Improvement')}</h3>
                    <p>{t('We provide ongoing support and continuously refine the solution to adapt to evolving business needs.')}</p>
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

export default AiReporting;
