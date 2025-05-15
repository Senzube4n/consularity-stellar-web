
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Form schema definition
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize form with validation
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send this data to your backend
      // For now, we'll simulate a successful submission with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", data);
      
      // Show success message
      toast({
        title: t("Message Sent"),
        description: t("We'll get back to you as soon as possible."),
        duration: 5000,
      });
      
      // Reset the form
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: t("Error"),
        description: t("There was an error sending your message. Please try again."),
        variant: "destructive",
        duration: 5000,
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
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel>{t('Name')}</FormLabel>
                            <FormControl>
                              <Input placeholder={t('Your name')} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel>{t('Email')}</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder={t('your.email@example.com')} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>{t('Subject')}</FormLabel>
                          <FormControl>
                            <Input placeholder={t('How can we help?')} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>{t('Message')}</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder={t('Tell us about your project or inquiry...')} 
                              className="min-h-[150px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="cta-button" disabled={isSubmitting}>
                      {isSubmitting ? t('Sending...') : t('Send Message')}
                    </Button>
                  </form>
                </Form>
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
