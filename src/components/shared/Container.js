/**
 * Container Component
 * 
 * Consistent max-width container with responsive padding
 */

import { cn } from "@/lib/utils";

export function Container({
  children,
  size = "default",
  className,
  ...props
}) {
  const sizes = {
    sm: "max-w-4xl",
    default: "max-w-7xl",
    lg: "max-w-8xl",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;