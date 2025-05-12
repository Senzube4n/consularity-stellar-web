
import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Timeline Component
 * 
 * A vertical timeline component that displays a series of events in chronological order.
 * Used to visualize project phases, history, or any sequential information.
 * 
 * Features:
 * - Clean, vertical timeline layout
 * - Interactive hover effects with laser-like animation
 * - Customizable indicator positioning
 * - Responsive design that works on all screen sizes
 * 
 * Implementation Details:
 * - Uses CSS Grid and Flexbox for layout
 * - Laser animation uses CSS keyframes and transform properties
 * - Custom hover states with pseudo-elements for interactive feedback
 * 
 * @see https://ui.shadcn.com/docs/components/timeline - Timeline component documentation concept
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations - CSS Animations reference
 */
interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative ml-4 border-l border-muted pb-6", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Timeline.displayName = "Timeline";

/**
 * TimelineItem Component
 * 
 * An individual item on the timeline. Contains an indicator (typically an icon or number)
 * and content (typically a card with information about the event).
 * 
 * Features:
 * - Hover animation with laser-like glow effect
 * - Interactive state changes
 * - Seamless integration with TimelineItemIndicator and TimelineItemContent
 */
interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * TimelineItemIndicator Component
 * 
 * The visual indicator on the timeline that represents the event.
 * Typically contains an icon, number, or other visual element.
 * 
 * Features:
 * - Customizable positioning along the timeline
 * - Support for icons, numbers, or custom elements
 * - Interactive glow effect on parent hover
 */
interface TimelineItemIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {}

const TimelineItemIndicator = React.forwardRef<
  HTMLDivElement,
  TimelineItemIndicatorProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "absolute left-0 flex items-center justify-center -translate-x-[calc(50%+1px)]",
        "timeline-indicator",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
TimelineItemIndicator.displayName = "TimelineItemIndicator";

/**
 * TimelineItemContent Component
 * 
 * The content associated with a timeline item. Contains information about the event.
 * 
 * Features:
 * - Clean layout with appropriate spacing
 * - Support for any React component as content
 * - Smooth transition effects on parent hover
 */
interface TimelineItemContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const TimelineItemContent = React.forwardRef<
  HTMLDivElement,
  TimelineItemContentProps
>(({ className, children, ...props }, ref) => {
  return (
    <div 
      ref={ref} 
      className={cn("pt-1 timeline-content", className)} 
      {...props}
    >
      {children}
    </div>
  );
});
TimelineItemContent.displayName = "TimelineItemContent";

// Define the TimelineItem component with properly typed subcomponents
type TimelineItemComponentType = React.ForwardRefExoticComponent<
  TimelineItemProps & React.RefAttributes<HTMLDivElement>
> & {
  Indicator: typeof TimelineItemIndicator;
  Content: typeof TimelineItemContent;
};

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative pl-8 group timeline-item", 
          "before:hidden before:opacity-0 before:content-[''] before:absolute before:top-[50%] before:left-[-0.25rem] before:h-[1px] before:w-8 before:bg-gradient-to-r before:from-primary/30 before:to-primary",
          "hover:before:block hover:before:opacity-100 hover:before:animate-laser-scan",
          "after:hidden after:opacity-0 after:content-[''] after:absolute after:top-[50%] after:left-[-0.25rem] after:h-[1px] after:w-8 after:bg-gradient-to-r after:from-primary/10 after:to-primary/80 after:blur-[2px]",
          "hover:after:block hover:after:opacity-100 hover:after:animate-laser-glow",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
) as TimelineItemComponentType;

TimelineItem.displayName = "TimelineItem";

// Properly attach subcomponents to TimelineItem
TimelineItem.Indicator = TimelineItemIndicator;
TimelineItem.Content = TimelineItemContent;

export { Timeline, TimelineItem };
