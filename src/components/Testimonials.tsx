
import React, { useEffect, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';
import { useLanguage } from '@/hooks/useLanguage';

/**
 * Testimonials Component
 * 
 * Displays client testimonials in a responsive grid or carousel format with animations.
 * Each testimonial includes a client photo, quote, client name, and company information.
 * 
 * Features:
 * - Responsive design (2 columns on desktop, 1 column on mobile)
 * - Scroll-triggered animations for each testimonial card
 * - Hover effects for enhanced interactivity
 * - Translated content based on selected language
 * 
 * Implementation Notes:
 * - Uses Intersection Observer API for scroll detection
 * - Implements staggered animations with delayed entries
 * - Optimizes for performance on mobile devices
 * 
 * @see https://ui.shadcn.com/docs/components/avatar - Avatar component documentation
 * @see https://ui.shadcn.com/docs/components/card - Card component documentation
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API - Intersection Observer API
 */
const Testimonials = () => {
  const isMobile = useIsMobile();
  const { t } = useLanguage();
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Testimonial data - would typically come from a CMS or API
  const testimonials = [
    {
      quote: t("Consularity transformed our entire business operations. Their SAP implementation was smooth and their ongoing support has been exceptional."),
      name: "Sarah Johnson",
      title: t("CFO"),
      company: "TechGrowth Solutions",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      quote: t("The AI-powered reporting tools have given us insights we never thought possible. We can now make data-driven decisions with confidence."),
      name: "Michael Chen",
      title: t("CTO"),
      company: "InnovateTech Inc",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      quote: t("Our AWS cloud migration with Consularity was flawless. We've seen marked improvements in system performance and significant cost savings."),
      name: "Jessica Patel",
      title: t("Operations Director"),
      company: "Global Logistics Group",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      quote: t("The team at Consularity doesn't just implement solutions; they become true partners in your business success. Highly recommended."),
      name: "Robert Alvarez",
      title: t("CEO"),
      company: "Meridian Manufacturing",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  // On mobile, only show 2 testimonials to save space
  const displayTestimonials = isMobile ? testimonials.slice(0, 2) : testimonials;

  /**
   * Sets up the Intersection Observer to animate testimonial cards as they come into view
   * Uses a staggered animation approach for a more dynamic visual effect
   */
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // Staggered animation with 100ms delay between items
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
            }, i * 100);
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    testimonialRefs.current.forEach((item) => {
      if (item) {
        // Set initial state
        item.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');
        observer.observe(item);
      }
    });
    
    return () => {
      testimonialRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, [displayTestimonials.length]);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayTestimonials.map((testimonial, index) => (
          <div 
            key={index} 
            ref={el => testimonialRefs.current[index] = el}
            className="transform transition-all"
          >
            <Card className="overflow-hidden border-border hover:shadow-lg transition-shadow duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4 h-full">
                  <div className="relative flex-grow">
                    <span className="absolute top-0 left-0 text-6xl text-primary opacity-20">"</span>
                    <p className="text-lg pt-6 pb-2 italic relative z-10">
                      {testimonial.quote}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-4 pt-2">
                    <Avatar className="h-12 w-12 transition-all duration-300 hover:scale-110">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-sm">{testimonial.title}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
