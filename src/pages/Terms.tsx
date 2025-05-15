
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';

const Terms = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="consularity-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('Terms of Service')}</h1>
              <p className="text-xl text-muted-foreground">
                {t('Last updated: May 15, 2025')}
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="consularity-container max-w-4xl">
            <div className="prose dark:prose-invert mx-auto">
              <h2>{t('Agreement to Terms')}</h2>
              <p>
                {t('These Terms of Service ("Terms") govern your access to and use of the services provided by Consularity ("we", "our", or "us"). Please read these Terms carefully before using our website or services.')}
              </p>
              
              <h2>{t('Use of Services')}</h2>
              <p>
                {t('By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access our services.')}
              </p>
              
              <h2>{t('Intellectual Property')}</h2>
              <p>
                {t('The content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, are owned by Consularity or its licensors and are protected by copyright, trademark, and other intellectual property laws.')}
              </p>
              
              <h2>{t('User Content')}</h2>
              <p>
                {t('You may provide content through our services, including but not limited to text, files, images, and feedback ("User Content"). By providing User Content, you grant us a non-exclusive, royalty-free, worldwide license to use, store, display, reproduce, and distribute your User Content in connection with our services.')}
              </p>
              
              <h2>{t('Limitation of Liability')}</h2>
              <p>
                {t('In no event shall Consularity, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.')}
              </p>
              
              <h2>{t('Indemnification')}</h2>
              <p>
                {t('You agree to indemnify and hold Consularity and its affiliates, officers, agents, and employees harmless from any claim or demand, including reasonable attorneys\' fees, made by any third party due to or arising out of your breach of these Terms, your violation of any law, or your violation of the rights of a third party.')}
              </p>
              
              <h2>{t('Governing Law')}</h2>
              <p>
                {t('These Terms shall be governed by and construed in accordance with the laws of the Netherlands, without regard to its conflict of law provisions.')}
              </p>
              
              <h2>{t('Changes to Terms')}</h2>
              <p>
                {t('We reserve the right to modify these Terms at any time. We will provide notice of any significant changes by updating the "Last updated" date at the top of these Terms. Your continued use of our services after any changes indicates your acceptance of the modified Terms.')}
              </p>
              
              <h2>{t('Contact Us')}</h2>
              <p>
                {t('If you have any questions about these Terms, please contact us at:')}
              </p>
              <p>
                Email: <a href="mailto:legal@consularity.com">legal@consularity.com</a><br />
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

export default Terms;
