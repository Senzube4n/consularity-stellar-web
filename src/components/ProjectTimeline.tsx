
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { Clock, Clock1, Clock2, Clock3, Clock4, Clock5 } from "lucide-react";

/**
 * ProjectTimeline Component
 * 
 * Visualizes the typical progression of implementation projects over time.
 * This component uses a timeline visualization to show the major phases
 * of project implementation at Consularity.
 * 
 * The timeline is responsive and adapts to different screen sizes.
 * 
 * @see https://ui.shadcn.com/docs/components/card - Card component documentation
 * @see https://lucide.dev/icons - Lucide icons documentation
 */
const ProjectTimeline = () => {
  // Project phases data with descriptions
  const projectPhases = [
    {
      title: "Discovery & Planning",
      icon: <Clock className="h-6 w-6" />,
      duration: "Weeks 1-2",
      description: "Initial consultation, business process analysis, and project scope definition. We identify key requirements and establish project milestones."
    },
    {
      title: "System Design",
      icon: <Clock1 className="h-6 w-6" />,
      duration: "Weeks 3-4",
      description: "Solution architecture design, data migration planning, and system configuration blueprint. We design a solution tailored to your specific needs."
    },
    {
      title: "Development",
      icon: <Clock2 className="h-6 w-6" />,
      duration: "Weeks 5-8",
      description: "System configuration, customization, integration development, and data migration preparation. This phase builds the foundation of your solution."
    },
    {
      title: "Testing",
      icon: <Clock3 className="h-6 w-6" />,
      duration: "Weeks 9-10",
      description: "User acceptance testing, quality assurance, performance testing, and refinements based on feedback. We ensure everything works as expected."
    },
    {
      title: "Deployment",
      icon: <Clock4 className="h-6 w-6" />,
      duration: "Week 11",
      description: "Data migration, go-live preparation, user training, and system launch. The transition to the new system is carefully managed."
    },
    {
      title: "Post-Implementation Support",
      icon: <Clock5 className="h-6 w-6" />,
      duration: "Weeks 12+",
      description: "Ongoing support, performance optimization, and continuous improvement. We stay by your side to ensure lasting success."
    }
  ];

  return (
    <div className="w-full">
      <div className="mx-auto max-w-4xl">
        <Timeline>
          {projectPhases.map((phase, index) => (
            <TimelineItem key={index} className="pb-8">
              <TimelineItem.Indicator>
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {phase.icon}
                </div>
              </TimelineItem.Indicator>
              <TimelineItem.Content>
                <Card>
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
