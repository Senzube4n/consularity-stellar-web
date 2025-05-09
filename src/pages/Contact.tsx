
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
      duration: 3000,
    });
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
                Have questions? Ready to start your digital transformation?
                Get in touch with our team.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-16">
          <div className="consularity-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="p-8 bg-white dark:bg-gray-900/50 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block font-medium">Name</label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="w-full"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-medium">Email</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block font-medium">Subject</label>
                    <Input
                      id="subject"
                      placeholder="How can we help?"
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block font-medium">Message</label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full min-h-[150px]"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="cta-button">
                    Send Message
                  </Button>
                </form>
              </div>
              
              <div>
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 rounded-full w-10 h-10 flex items-center justify-center bg-primary/10 text-primary">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold">Email</h3>
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
                        <h3 className="font-bold">Phone</h3>
                        <a href="tel:+31612345678" className="text-primary hover:underline">
                          +31 6 1234 5678
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
                  <div className="space-y-2">
                    <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM CET</p>
                    <p><span className="font-medium">Saturday - Sunday:</span> Closed</p>
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
