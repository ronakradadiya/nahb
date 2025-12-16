/**
 * Badge Component
 * 
 * Small label for tags, status, etc.
 */

import { cn } from "@/lib/utils";

const variants = {
  default: "bg-dun text-ebony",
  primary: "bg-reseda text-white",
  secondary: "bg-sage text-white",
  outline: "border border-reseda text-reseda bg-transparent",
};

const sizes = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base",
};

export function Badge({
  children,
  variant = "default",
  size = "md",
  className,
  ...props
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;