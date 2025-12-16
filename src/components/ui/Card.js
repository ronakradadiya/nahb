/**
 * Card Component
 * 
 * Flexible card container with optional header and footer
 */

import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  hover = true,
  padding = true,
  ...props
}) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg overflow-hidden",
        "border border-dun-200",
        "transition-shadow duration-200",
        hover && "hover:shadow-premium",
        padding && "p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }) {
  return (
    <div
      className={cn("mb-4 pb-4 border-b border-dun-200", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, className, as: Component = "h3", ...props }) {
  return (
    <Component
      className={cn("text-xl font-display font-medium text-ebony", className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardDescription({ children, className, ...props }) {
  return (
    <p className={cn("text-ebony/70 mt-1", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className, ...props }) {
  return (
    <div
      className={cn("mt-4 pt-4 border-t border-dun-200", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;