
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import ScrollAnimation from '@/components/ScrollAnimation';

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
              <ScrollAnimation animation="slide-up">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('About Us')}</h1>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-in" delay={200}>
                <p className="text-xl text-muted-foreground">
                  {t('We\'re a team of technology experts dedicated to transforming businesses through innovative AI, cloud, and ERP solutions.')}
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16">
          <div className="consularity-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <ScrollAnimation animation="slide-up">
                  <h2 className="text-3xl font-bold mb-6">{t('Our Mission')}</h2>
                </ScrollAnimation>
                <ScrollAnimation animation="fade-in" delay={100}>
                  <p className="text-lg mb-4">
                    {t('At Consularity, we combine deep technical expertise with business acumen to deliver transformative technology solutions that drive tangible results for our clients.')}
                  </p>
                </ScrollAnimation>
                <ScrollAnimation animation="fade-in" delay={200}>
                  <p className="text-lg mb-4">
                    {t('We believe that the convergence of AI, cloud technology, and business systems creates unprecedented opportunities for businesses of all sizes.')}
                  </p>
                </ScrollAnimation>
                <ScrollAnimation animation="fade-in" delay={300}>
                  <p className="text-lg">
                    {t('Our mission is to make these cutting-edge technologies accessible and valuable to small and midsize enterprises, helping them compete and thrive in an increasingly digital world.')}
                  </p>
                </ScrollAnimation>
              </div>
              
              <ScrollAnimation animation="slide-left" delay={200}>
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
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
