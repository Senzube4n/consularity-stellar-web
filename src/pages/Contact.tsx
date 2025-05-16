
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Log the form data (in a real app, you would send this to a server)
      console.log('Form submitted:', formData);
      
      // Show success message
      toast({
        title: t("Message Sent"),
        description: t("We'll get back to you as soon as possible."),
        duration: 3000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: t("Error"),
        description: t("There was a problem sending your message. Please try again."),
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="consularity-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('Contact')}</h1>
              <p className="text-xl text-muted-foreground">
                {t('Have questions? Ready to start your digital transformation? Get in touch with our team.')}
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-16">
          <div className="consularity-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="p-8 bg-white dark:bg-gray-900/50 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <h2 className="text-2xl font-bold mb-6">{t('Send us a message')}</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block font-medium">{t('Name')}</label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('Your name')}
                        className="w-full"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-medium">{t('Email')}</label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('your.email@example.com')}
                        className="w-full"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block font-medium">{t('Subject')}</label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t('How can we help?')}
                      className="w-full"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block font-medium">{t('Message')}</label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('Tell us about your project or inquiry...')}
                      className="w-full min-h-[150px]"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <Button type="submit" className="cta-button" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t('Sending...')}
                      </>
                    ) : (
                      t('Send Message')
                    )}
                  </Button>
                </form>
              </div>
              
              <div>
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-6">{t('Contact Information')}</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 rounded-full w-10 h-10 flex items-center justify-center bg-primary/10 text-primary">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold">{t('Email')}</h3>
                        <a href="mailto:info@consularity.com" className="text-primary hover:underline">
                          info@consularity.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 rounded-full w-10 h-10 flex items-center justify-center bg-primary/10 text-primary">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold">{t('Phone')}</h3>
                        <a href="tel:+40721354551" className="text-primary hover:underline">
                          +40 721 354 551
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-6">{t('Office Hours')}</h2>
                  <div className="space-y-2">
                    <p><span className="font-medium">{t('Monday - Friday:')}</span> {t('9:00 AM - 6:00 PM CET')}</p>
                    <p><span className="font-medium">{t('Saturday - Sunday:')}</span> {t('Closed')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
