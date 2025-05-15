
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="consularity-container prose prose-gray dark:prose-invert max-w-none">
          <h1>{t('Privacy Policy')}</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="my-8">
            <h2>{t('Introduction')}</h2>
            <p>
              {t('At Consularity, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.')}
            </p>
          </section>
          
          <section className="my-8">
            <h2>{t('The Data We Collect')}</h2>
            <p>
              {t('We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:')}
            </p>
            <ul>
              <li>
                <strong>{t('Identity Data')}</strong>: {t('includes first name, last name, username or similar identifier')}
              </li>
              <li>
                <strong>{t('Contact Data')}</strong>: {t('includes email address and telephone numbers')}
              </li>
              <li>
                <strong>{t('Technical Data')}</strong>: {t('includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website')}
              </li>
              <li>
                <strong>{t('Usage Data')}</strong>: {t('includes information about how you use our website, products and services')}
              </li>
            </ul>
          </section>
          
          <section className="my-8">
            <h2>{t('How We Use Your Data')}</h2>
            <p>
              {t('We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:')}
            </p>
            <ul>
              <li>{t('Where we need to perform the contract we are about to enter into or have entered into with you.')}</li>
              <li>{t('Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.')}</li>
              <li>{t('Where we need to comply with a legal obligation.')}</li>
            </ul>
          </section>
          
          <section className="my-8">
            <h2>{t('Google Analytics')}</h2>
            <p>
              {t('We use Google Analytics to analyze the use of our website. Google Analytics gathers information about website use by means of cookies. The information gathered is used to create reports about the use of our website.')}
            </p>
            <p>
              {t('Google\'s privacy policy is available at:')} <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
            </p>
          </section>
          
          <section className="my-8">
            <h2>{t('Your Legal Rights')}</h2>
            <p>
              {t('Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:')}
            </p>
            <ul>
              <li>{t('Request access to your personal data')}</li>
              <li>{t('Request correction of your personal data')}</li>
              <li>{t('Request erasure of your personal data')}</li>
              <li>{t('Object to processing of your personal data')}</li>
              <li>{t('Request restriction of processing your personal data')}</li>
              <li>{t('Request transfer of your personal data')}</li>
              <li>{t('Right to withdraw consent')}</li>
            </ul>
          </section>
          
          <section className="my-8">
            <h2>{t('Contact Us')}</h2>
            <p>
              {t('If you have any questions about this privacy policy or our privacy practices, please contact us at:')}
            </p>
            <p>
              Email: privacy@consularity.com<br />
              Phone: +31 612345678
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
