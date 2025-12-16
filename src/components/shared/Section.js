/**
 * Section Component
 * 
 * Consistent section wrapper with background options
 */

import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function Section({
  children,
  background = "default",
  padding = "default",
  container = true,
  containerSize = "default",
  className,
  ...props
}) {
  const backgrounds = {
    default: "bg-bone",
    white: "bg-white",
    dun: "bg-dun",
    gradient: "bg-gradient-premium",
  };

  const paddings = {
    none: "",
    sm: "py-8 md:py-12",
    default: "py-16 md:py-24",
    lg: "py-24 md:py-32",
  };

  const content = container ? (
    <Container size={containerSize}>{children}</Container>
  ) : (
    children
  );

  return (
    <section
      className={cn(
        backgrounds[background],
        paddings[padding],
        className
      )}
      {...props}
    >
      {content}
    </section>
  );
}

export default Section;