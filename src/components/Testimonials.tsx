
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';

/**
 * Testimonials Component
 * 
 * Displays client testimonials in a responsive grid or carousel format.
 * Each testimonial includes a client photo, quote, client name, and company information.
 * 
 * @see https://ui.shadcn.com/docs/components/avatar - Avatar component documentation
 * @see https://ui.shadcn.com/docs/components/card - Card component documentation
 */
const Testimonials = () => {
  const isMobile = useIsMobile();
  
  // Testimonial data - would typically come from a CMS or API
  const testimonials = [
    {
      quote: "Consularity transformed our entire business operations. Their SAP implementation was smooth and their ongoing support has been exceptional.",
      name: "Sarah Johnson",
      title: "CFO",
      company: "TechGrowth Solutions",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      quote: "The AI-powered reporting tools have given us insights we never thought possible. We can now make data-driven decisions with confidence.",
      name: "Michael Chen",
      title: "CTO",
      company: "InnovateTech Inc",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      quote: "Our AWS cloud migration with Consularity was flawless. We've seen marked improvements in system performance and significant cost savings.",
      name: "Jessica Patel",
      title: "Operations Director",
      company: "Global Logistics Group",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      quote: "The team at Consularity doesn't just implement solutions; they become true partners in your business success. Highly recommended.",
      name: "Robert Alvarez",
      title: "CEO",
      company: "Meridian Manufacturing",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  // On mobile, only show 2 testimonials to save space
  const displayTestimonials = isMobile ? testimonials.slice(0, 2) : testimonials;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayTestimonials.map((testimonial, index) => (
          <Card key={index} className="overflow-hidden border-border hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                <div className="relative">
                  <span className="absolute top-0 left-0 text-6xl text-primary opacity-20">"</span>
                  <p className="text-lg pt-6 pb-2 italic relative z-10">
                    {testimonial.quote}
                  </p>
                </div>
                
                <div className="flex items-center space-x-4 pt-2">
                  <Avatar className="h-12 w-12">
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
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
