
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';

const TermsOfService = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow consularity-container py-16">
        <h1 className="text-4xl font-bold mb-8">{t('Terms of Service')}</h1>
        <div className="prose max-w-none prose-headings:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:mt-6 prose-h3:mb-3 prose-p:mb-4 prose-a:text-primary prose-a:no-underline hover:prose-a:underline dark:prose-invert">
          <p>Last updated: May 15, 2025</p>
          
          <h2>{t('Agreement to Terms')}</h2>
          <p>
            {t('These Terms of Service constitute a legally binding agreement made between you and Consularity ("we," "us," or "our") concerning your access to and use of our website and services. By accessing or using our services, you agree to be bound by these Terms of Service.')}
          </p>
          
          <h2>{t('Intellectual Property Rights')}</h2>
          <p>
            {t('Unless otherwise indicated, the website and all its content, features, and functionality are owned by Consularity and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws.')}
          </p>
          
          <h2>{t('User Representations')}</h2>
          <p>
            {t('By using our services, you represent and warrant that you have the legal capacity and you agree to comply with these Terms of Service. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.')}
          </p>
          
          <h2>{t('Prohibited Activities')}</h2>
          <p>
            {t('You may not access or use our services for any purpose other than that for which we make them available. We reserve the right to terminate your use of our services for violating any of the prohibited activities.')}
          </p>
          
          <h2>{t('Services Management')}</h2>
          <p>
            {t('We reserve the right, but not the obligation, to monitor the services for violations of these Terms of Service, as well as to take appropriate legal action against anyone who violates these Terms of Service including without limitation, reporting such user to law enforcement authorities.')}
          </p>
          
          <h2>{t('Term and Termination')}</h2>
          <p>
            {t('These Terms of Service shall remain in full force and effect while you use our services. We reserve the right to, in our sole discretion and without notice or liability, deny access to and use of our services to any person for any reason or for no reason, including without limitation for breach of any representation, warranty, or covenant contained in these Terms of Service.')}
          </p>
          
          <h2>{t('Modifications and Interruptions')}</h2>
          <p>
            {t('We reserve the right to change, modify, or remove the contents of our services at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of our services without notice at any time.')}
          </p>
          
          <h2>{t('Governing Law')}</h2>
          <p>
            {t('These Terms of Service and your use of our services are governed by and construed in accordance with the laws applicable to agreements made and to be entirely performed within the Netherlands, without regard to its conflict of law principles.')}
          </p>
          
          <h2>{t('Dispute Resolution')}</h2>
          <p>
            {t('Any legal action of whatever nature brought by either you or us shall be commenced or prosecuted in the courts located in Amsterdam, Netherlands, and you and we hereby consent to, and waive all defenses of lack of personal jurisdiction and forum non conveniens with respect to venue and jurisdiction in such courts.')}
          </p>
          
          <h2>{t('Corrections')}</h2>
          <p>
            {t('There may be information on our website that contains typographical errors, inaccuracies, or omissions. We reserve the right to correct any errors, inaccuracies, or omissions, and to change or update information at any time without prior notice.')}
          </p>
          
          <h2>{t('Contact Us')}</h2>
          <p>
            {t('If you have any questions about these Terms of Service, please contact us at legal@consularity.com.')}
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
