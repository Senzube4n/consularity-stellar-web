
import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Timeline Component
 * 
 * A vertical timeline component that displays a series of events in chronological order.
 * Used to visualize project phases, history, or any sequential information.
 * 
 * @see https://ui.shadcn.com/docs/components/timeline - Timeline component documentation concept
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
 */
interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative pl-8", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TimelineItem.displayName = "TimelineItem";

/**
 * TimelineItemIndicator Component
 * 
 * The visual indicator on the timeline that represents the event.
 * Typically contains an icon, number, or other visual element.
 */
const TimelineItemIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "absolute left-0 flex items-center justify-center -translate-x-[calc(50%+1px)]",
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
 */
const TimelineItemContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("pt-1", className)} {...props}>
      {children}
    </div>
  );
});
TimelineItemContent.displayName = "TimelineItemContent";

// Attach sub-components to TimelineItem
TimelineItem.Indicator = TimelineItemIndicator;
TimelineItem.Content = TimelineItemContent;

export { Timeline, TimelineItem };
