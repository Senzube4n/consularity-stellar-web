
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="consularity-container prose prose-gray dark:prose-invert max-w-none">
          <h1>{t('Terms of Service')}</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="my-8">
            <h2>{t('Agreement to Terms')}</h2>
            <p>
              {t('By accessing our website at consularity.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.')}
            </p>
          </section>
          
          <section className="my-8">
            <h2>{t('Use License')}</h2>
            <p>
              {t('Permission is granted to temporarily download one copy of the materials on Consularity\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:')}
            </p>
            <ul>
              <li>{t('modify or copy the materials;')}</li>
              <li>{t('use the materials for any commercial purpose, or for any public display (commercial or non-commercial);')}</li>
              <li>{t('attempt to decompile or reverse engineer any software contained on Consularity\'s website;')}</li>
              <li>{t('remove any copyright or other proprietary notations from the materials; or')}</li>
              <li>{t('transfer the materials to another person or "mirror" the materials on any other server.')}</li>
            </ul>
          </section>
          
          <section className="my-8">
            <h2>{t('Disclaimer')}</h2>
            <p>
              {t('The materials on Consularity\'s website are provided on an \'as is\' basis. Consularity makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.')}
            </p>
          </section>
          
          <section className="my-8">
            <h2>{t('Limitations')}</h2>
            <p>
              {t('In no event shall Consularity or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Consularity\'s website, even if Consularity or a Consularity authorized representative has been notified orally or in writing of the possibility of such damage.')}
            </p>
          </section>
          
          <section className="my-8">
            <h2>{t('Accuracy of Materials')}</h2>
            <p>
              {t('The materials appearing on Consularity\'s website could include technical, typographical, or photographic errors. Consularity does not warrant that any of the materials on its website are accurate, complete or current. Consularity may make changes to the materials contained on its website at any time without notice. However Consularity does not make any commitment to update the materials.')}
            </p>
          </section>
          
          <section className="my-8">
            <h2>{t('Links')}</h2>
            <p>
              {t('Consularity has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Consularity of the site. Use of any such linked website is at the user\'s own risk.')}
            </p>
          </section>
          
          <section className="my-8">
            <h2>{t('Modifications')}</h2>
            <p>
              {t('Consularity may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.')}
            </p>
          </section>
          
          <section className="my-8">
            <h2>{t('Governing Law')}</h2>
            <p>
              {t('These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.')}
            </p>
          </section>
          
          <section className="my-8">
            <h2>{t('Contact Us')}</h2>
            <p>
              {t('If you have any questions about these Terms, please contact us at:')}
            </p>
            <p>
              Email: legal@consularity.com<br />
              Phone: +31 612345678
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
