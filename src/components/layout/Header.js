/**
 * Header Component
 * 
 * Main site header with logo and navigation
 */

import { cn } from "@/lib/utils";
import { Container } from "@/components/shared";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export function Header({ className, ...props }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-bone/95 backdrop-blur-sm",
        "border-b border-dun-200",
        className
      )}
      {...props}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo />

          {/* Navigation */}
          <Navigation />
        </div>
      </Container>
    </header>
  );
}

export default Header;