/**
 * Button Component
 * 
 * Reusable button with multiple variants
 * Supports primary, secondary, outline styles
 */

import Link from "next/link";
import { cn } from "@/lib/utils";

// Button style variants - includes explicit hover text colors to override global anchor styles
const variants = {
  primary: 
    "bg-reseda text-white hover:bg-reseda-600 hover:text-white focus:ring-reseda-400",
  secondary: 
    "bg-dun text-ebony hover:bg-dun-300 hover:text-ebony focus:ring-dun-400",
  outline: 
    "border-2 border-reseda text-reseda hover:bg-reseda hover:text-white focus:ring-reseda-400",
  ghost: 
    "text-reseda hover:bg-reseda/10 hover:text-reseda focus:ring-reseda-400",
};

// Button sizes
const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  disabled = false,
  fullWidth = false,
  ...props
}) {
  // Base styles
  const baseStyles = cn(
    "inline-flex items-center justify-center font-medium rounded",
    "transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className
  );

  // Render as Link if href is provided
  if (href && !disabled) {
    return (
      <Link href={href} className={baseStyles} {...props}>
        {children}
      </Link>
    );
  }

  // Render as button
  return (
    <button className={baseStyles} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

export default Button;