
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="consularity-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('About Us')}</h1>
              <p className="text-xl text-muted-foreground">
                {t('We\'re a team of technology experts dedicated to transforming businesses through innovative AI, cloud, and ERP solutions.')}
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16">
          <div className="consularity-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t('Our Mission')}</h2>
                <p className="text-lg mb-4">
                  {t('At Consularity, we combine deep technical expertise with business acumen to deliver transformative technology solutions that drive tangible results for our clients.')}
                </p>
                <p className="text-lg mb-4">
                  {t('We believe that the convergence of AI, cloud technology, and business systems creates unprecedented opportunities for businesses of all sizes.')}
                </p>
                <p className="text-lg">
                  {t('Our mission is to make these cutting-edge technologies accessible and valuable to small and midsize enterprises, helping them compete and thrive in an increasingly digital world.')}
                </p>
              </div>
              
              <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">{t('Our Values')}</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 rounded-full w-6 h-6 flex items-center justify-center bg-primary text-white">1</div>
                    <div>
                      <h4 className="font-bold">{t('Excellence')}</h4>
                      <p>{t('We strive for excellence in everything we do, from code quality to client communication.')}</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 rounded-full w-6 h-6 flex items-center justify-center bg-primary text-white">2</div>
                    <div>
                      <h4 className="font-bold">{t('Innovation')}</h4>
                      <p>{t('We constantly explore new technologies and approaches to deliver the best solutions.')}</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 rounded-full w-6 h-6 flex items-center justify-center bg-primary text-white">3</div>
                    <div>
                      <h4 className="font-bold">{t('Client Success')}</h4>
                      <p>{t('Our success is measured by the success of our clients. We\'re partners in your journey.')}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Timeline Section */}
        {/*  
        <section className="py-16 bg-gray-50/50 dark:bg-gray-900/30">
          <div className="consularity-container">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('Our Journey')}</h2>
            
            <div className="relative">
              {/ Timeline Track /}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200 dark:bg-gray-700" />
              
              <div className="space-y-16 relative z-10">
                {/ Timeline Item 1 /}
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-gray-900" />
                  <div className="md:w-5/12 md:pr-8 md:text-right ml-auto">
                    <h3 className="font-bold text-2xl mb-2">2018</h3>
                    <h4 className="font-medium text-lg text-primary mb-2">{t('Company Founded')}</h4>
                    <p>{t('Consularity was established with the vision of bringing enterprise-grade technology to small and midsize businesses.')}</p>
                  </div>
                </div>
                
                {/ Timeline Item 2 /}
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-gray-900" />
                  <div className="md:w-5/12 md:pl-8 md:text-left">
                    <h3 className="font-bold text-2xl mb-2">2020</h3>
                    <h4 className="font-medium text-lg text-primary mb-2">{t('AWS Partnership')}</h4>
                    <p>{t('Became an official AWS Partner, expanding our cloud services capabilities to deliver more value to our clients.')}</p>
                  </div>
                </div>
                
                {/ Timeline Item 3 /}
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-gray-900" />
                  <div className="md:w-5/12 md:pr-8 md:text-right ml-auto">
                    <h3 className="font-bold text-2xl mb-2">2022</h3>
                    <h4 className="font-medium text-lg text-primary mb-2">{t('AI Integration Launch')}</h4>
                    <p>{t('Launched our AI reporting and automation services, bringing cutting-edge machine learning to business operations.')}</p>
                  </div>
                </div>
                
                {/ Timeline Item 4 /}
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-gray-900" />
                  <div className="md:w-5/12 md:pl-8 md:text-left">
                    <h3 className="font-bold text-2xl mb-2">2024</h3>
                    <h4 className="font-medium text-lg text-primary mb-2">{t('International Expansion')}</h4>
                    <p>{t('Expanded our services to new regions, helping more businesses leverage the power of technology.')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        */}
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
