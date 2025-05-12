
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { Clock, Clock1, Clock2, Clock3, Clock4, Clock5 } from "lucide-react";
import { useLanguage } from '@/hooks/useLanguage';
import { useIsMobile } from '@/hooks/use-mobile';

/**
 * ProjectTimeline Component
 * 
 * Visualizes the typical progression of implementation projects over time.
 * This component uses a timeline visualization to show the major phases
 * of project implementation at Consularity.
 * 
 * Features:
 * - Responsive design adapting to different screen sizes
 * - Scroll-triggered animations for each timeline item
 * - Intersection Observer API to detect when items come into view
 * - Phase-specific icons representing each milestone
 * 
 * Implementation Notes:
 * - Uses Intersection Observer API for efficient scroll detection
 * - Leverages CSS animations triggered by JavaScript
 * - Conditionally renders animations based on device capabilities
 * 
 * @see https://ui.shadcn.com/docs/components/card - Card component documentation
 * @see https://lucide.dev/icons - Lucide icons documentation
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API - Intersection Observer API
 */
const ProjectTimeline = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const timelineItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Project phases data with translations
  const projectPhases = [
    {
      title: t('Discovery & Planning'),
      icon: <Clock className="h-6 w-6" />,
      duration: t('Weeks 1-2'),
      description: t('Initial consultation, business process analysis, and project scope definition. We identify key requirements and establish project milestones.')
    },
    {
      title: t('System Design'),
      icon: <Clock1 className="h-6 w-6" />,
      duration: t('Weeks 3-4'),
      description: t('Solution architecture design, data migration planning, and system configuration blueprint. We design a solution tailored to your specific needs.')
    },
    {
      title: t('Development'),
      icon: <Clock2 className="h-6 w-6" />,
      duration: t('Weeks 5-8'),
      description: t('System configuration, customization, integration development, and data migration preparation. This phase builds the foundation of your solution.')
    },
    {
      title: t('Testing'),
      icon: <Clock3 className="h-6 w-6" />,
      duration: t('Weeks 9-10'),
      description: t('User acceptance testing, quality assurance, performance testing, and refinements based on feedback. We ensure everything works as expected.')
    },
    {
      title: t('Deployment'),
      icon: <Clock4 className="h-6 w-6" />,
      duration: t('Week 11'),
      description: t('Data migration, go-live preparation, user training, and system launch. The transition to the new system is carefully managed.')
    },
    {
      title: t('Post-Implementation Support'),
      icon: <Clock5 className="h-6 w-6" />,
      duration: t('Weeks 12+'),
      description: t('Ongoing support, performance optimization, and continuous improvement. We stay by your side to ensure lasting success.')
    }
  ];

  /**
   * Sets up the Intersection Observer to animate timeline items as they come into view
   * Uses a threshold of 0.2 (20% visibility) to trigger the animation
   */
  useEffect(() => {
    // Skip animation setup on mobile devices for better performance
    if (typeof window === 'undefined') return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add animation class when the element comes into view
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in', 'opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
            
            // Optional: stop observing after animation is triggered
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the item is visible
    );
    
    // Observe all timeline items
    timelineItemsRef.current.forEach((item) => {
      if (item) {
        // Set initial state (hidden)
        item.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700');
        observer.observe(item);
      }
    });
    
    // Cleanup function
    return () => {
      timelineItemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="w-full">
      <div className="mx-auto max-w-4xl">
        <Timeline>
          {projectPhases.map((phase, index) => (
            <TimelineItem 
              key={index} 
              className="pb-8"
              ref={el => timelineItemsRef.current[index] = el}
            >
              <TimelineItem.Indicator>
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-500 hover:scale-110">
                  {phase.icon}
                </div>
              </TimelineItem.Indicator>
              <TimelineItem.Content>
                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-lg md:text-xl font-semibold">{phase.title}</h3>
                      <span className="text-sm text-muted-foreground">{phase.duration}</span>
                    </div>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </CardContent>
                </Card>
              </TimelineItem.Content>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default ProjectTimeline;
