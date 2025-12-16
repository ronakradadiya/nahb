"use client";

/**
 * Navigation Component
 * 
 * Desktop and mobile navigation
 */

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { mainNavigation } from "@/config/navigation";
import { Icon } from "@/components/shared";
import { useLockBodyScroll } from "@/hooks";

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useLockBodyScroll(mobileMenuOpen);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {mainNavigation.map((item) => {
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors duration-200",
                "hover:text-reseda",
                isActive ? "text-reseda" : "text-ebony"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="md:hidden p-2 text-ebony hover:text-reseda transition-colors"
        onClick={() => setMobileMenuOpen(true)}
        aria-label="Open menu"
      >
        <Icon name="menu" size={24} />
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-ebony/50"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-0 right-0 w-full max-w-sm h-full bg-bone shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-dun-200">
              <span className="font-display text-lg font-semibold text-ebony">
                Menu
              </span>
              <button
                type="button"
                className="p-2 text-ebony hover:text-reseda transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <Icon name="close" size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-4">
              <ul className="space-y-2">
                {mainNavigation.map((item) => {
                  const isActive = pathname === item.href;
                  
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-4 py-3 rounded-lg text-base font-medium",
                          "transition-colors duration-200",
                          isActive
                            ? "bg-reseda text-white"
                            : "text-ebony hover:bg-dun-200"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;