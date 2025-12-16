/**
 * SectionHeading Component
 * 
 * Consistent heading style for page sections
 */

import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
  subtitleClassName,
  ...props
}) {
  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div
      className={cn(
        "mb-10 md:mb-12",
        alignments[align],
        className
      )}
      {...props}
    >
      <h2
        className={cn(
          "text-3xl md:text-4xl font-display font-medium text-ebony",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-lg text-ebony/70 max-w-2xl",
            align === "center" && "mx-auto",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;