
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';

const Privacy = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="consularity-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('Privacy Policy')}</h1>
              <p className="text-xl text-muted-foreground">
                {t('Last updated: May 15, 2025')}
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="consularity-container max-w-4xl">
            <div className="prose dark:prose-invert mx-auto">
              <h2>{t('Introduction')}</h2>
              <p>
                {t('Consularity ("we", "our", or "us") respects your privacy and is committed to protecting it through our compliance with this policy.')}
              </p>
              <p>
                {t('This Privacy Policy describes how we collect, use, store, and share your information when you use our website, services, and products.')}
              </p>
              
              <h2>{t('Information We Collect')}</h2>
              <p>{t('We may collect several types of information from and about users of our website, including:')}</p>
              <ul>
                <li>{t('Personal information such as name, email address, and phone number when you contact us or sign up for our services.')}</li>
                <li>{t('Information about your internet connection, the equipment you use to access our website, and usage details.')}</li>
                <li>{t('Information collected through cookies, web beacons, and other tracking technologies.')}</li>
              </ul>
              
              <h2>{t('How We Use Your Information')}</h2>
              <p>{t('We may use the information we collect about you for various purposes, including:')}</p>
              <ul>
                <li>{t('To provide, maintain, and improve our website and services.')}</li>
                <li>{t('To respond to your inquiries and fulfill your requests.')}</li>
                <li>{t('To send you administrative information, marketing communications, and promotional content.')}</li>
                <li>{t('To personalize your experience on our website.')}</li>
                <li>{t('To analyze usage patterns and improve our website and services.')}</li>
              </ul>
              
              <h2>{t('Cookies and Tracking Technologies')}</h2>
              <p>
                {t('We use cookies and similar tracking technologies to track activity on our website and collect certain information. Cookies are small files placed on your device that enable us to provide features and functionality.')}
              </p>
              <p>
                {t('You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. If you disable or refuse cookies, some parts of the website may be inaccessible or not function properly.')}
              </p>
              
              <h2>{t('Google Analytics')}</h2>
              <p>
                {t('We use Google Analytics to help us understand how our users engage with the website. Google Analytics uses cookies to collect information such as how often users visit the website, which pages they visit, and which features they use.')}
              </p>
              <p>
                {t('You can opt-out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on, available at: https://tools.google.com/dlpage/gaoptout')}
              </p>
              
              <h2>{t('Data Security')}</h2>
              <p>
                {t('We implement appropriate data collection, storage, and processing practices, as well as security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.')}
              </p>
              
              <h2>{t('Your Rights')}</h2>
              <p>{t('Depending on your location, you may have certain rights regarding your personal information, such as:')}</p>
              <ul>
                <li>{t('The right to access your personal information.')}</li>
                <li>{t('The right to rectify or update your personal information.')}</li>
                <li>{t('The right to erase your personal information.')}</li>
                <li>{t('The right to restrict or object to processing of your personal information.')}</li>
                <li>{t('The right to data portability.')}</li>
              </ul>
              
              <h2>{t('Contact Us')}</h2>
              <p>
                {t('If you have any questions about this Privacy Policy or our privacy practices, please contact us at:')}
              </p>
              <p>
                Email: <a href="mailto:privacy@consularity.com">privacy@consularity.com</a><br />
                {t('Phone')}: <a href="tel:+40721354551">+40 721 354 551</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
