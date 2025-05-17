
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow consularity-container py-16">
        <h1 className="text-4xl font-bold mb-8">{t('Privacy Policy')}</h1>
        <div className="prose max-w-none prose-headings:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:mt-6 prose-h3:mb-3 prose-p:mb-4 prose-a:text-primary prose-a:no-underline hover:prose-a:underline dark:prose-invert">
          <p>Last updated: May 15, 2025</p>
          
          <h2>Introduction</h2>
          <p>
            {t('This Privacy Policy describes how Consularity ("we", "us", or "our") collects, uses, and discloses your information when you use our website and services. We are committed to protecting your personal information and your right to privacy.')}
          </p>
          
          <h2>{t('Information We Collect')}</h2>
          <p>
            {t('We collect personal information that you provide to us when you register on our website, express an interest in obtaining information about us or our products and services, participate in activities on our website, or otherwise contact us.')}
          </p>
          <p>
            {t('The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use.')}
          </p>
          
          <h3>{t('Personal Information You Disclose to Us')}</h3>
          <ul>
            <li>{t('Name and contact details')}</li>
            <li>{t('Email address')}</li>
            <li>{t('Phone number')}</li>
            <li>{t('Business information')}</li>
            <li>{t('Payment information')}</li>
          </ul>
          
          <h3>{t('Information Automatically Collected')}</h3>
          <p>
            {t('We automatically collect certain information when you visit, use, or navigate our website. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our website, and other technical information.')}
          </p>
          
          <h2>{t('How We Use Your Information')}</h2>
          <p>
            {t('We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.')}
          </p>
          
          <h2>{t('Disclosure of Your Information')}</h2>
          <p>
            {t('We may share your information with our business partners to offer you certain products, services, or promotions. We may also share your information with third-party service providers who perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.')}
          </p>
          
          <h2>{t('Your Privacy Rights')}</h2>
          <p>
            {t('Depending on where you are located, you may have certain rights regarding your personal information. These may include the right to access, correct, or delete your personal information, as well as the right to restrict or object to certain processing activities.')}
          </p>
          
          <h2>{t('Data Security')}</h2>
          <p>
            {t('We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.')}
          </p>
          
          <h2>{t('Changes to This Privacy Policy')}</h2>
          <p>
            {t('We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.')}
          </p>
          
          <h2>{t('Contact Us')}</h2>
          <p>
            {t('If you have questions or comments about this policy, you may contact us at privacy@consularity.com.')}
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
