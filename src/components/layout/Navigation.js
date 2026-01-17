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
  const [isClosing, setIsClosing] = useState(false);

  // Lock body scroll when mobile menu is open
  useLockBodyScroll(mobileMenuOpen);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setIsClosing(false);
    }, 300); // Match animation duration
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        {mainNavigation.map((item) => {
          const isActive = pathname === item.href;

          // Highlighted link (Internal Dashboard)
          if (item.isHighlighted) {
            return (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-highlight inline-flex items-center gap-2 px-5 py-2.5 text-white font-medium text-sm transition-all duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                {item.label}
                <svg
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            );
          }

          // External link (non-highlighted)
          if (item.isExternal) {
            return (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-ebony hover:text-reseda transition-colors duration-200"
              >
                {item.label}
              </a>
            );
          }

          // Regular internal link
          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors duration-200",
                "hover:text-reseda",
                isActive ? "text-reseda" : "text-ebony",
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
          {/* Backdrop - MUST be clicked to close */}
          <div 
            className="absolute inset-0 bg-ebony/50"
            style={{ 
              animation: isClosing ? 'fadeOut 0.3s ease-in-out' : 'fadeIn 0.3s ease-in-out' 
            }}
            onClick={handleClose}
          />
          
          {/* Menu Panel - positioned above backdrop */}
          <div 
            className="relative top-0 left-0 right-0 w-full bg-bone shadow-lg flex flex-col max-h-[80vh] overflow-y-auto"
            style={{ 
              animation: isClosing ? 'slideUp 0.3s ease-in-out' : 'slideDown 0.3s ease-in-out' 
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-dun-200 bg-bone">
              <span className="font-display text-lg font-semibold text-ebony">
                Menu
              </span>
              <button
                type="button"
                className="p-2 text-ebony hover:text-reseda transition-colors"
                onClick={handleClose}
                aria-label="Close menu"
              >
                <Icon name="close" size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-4 bg-bone">
              <ul className="space-y-2">
                {mainNavigation.map((item) => {
                  const isActive = pathname === item.href;

                  // Highlighted link (Internal Dashboard)
                  if (item.isHighlighted) {
                    return (
                      <li key={item.id}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="nav-highlight flex items-center justify-between gap-2 px-5 py-3.5 text-white font-medium transition-all duration-300"
                          onClick={handleClose}
                        >
                          <span className="flex items-center gap-2">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>
                            {item.label}
                          </span>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </li>
                    );
                  }

                  // External link (non-highlighted)
                  if (item.isExternal) {
                    return (
                      <li key={item.id}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "flex items-center justify-between gap-2 px-4 py-3 rounded-lg",
                            "bg-ebony text-bone font-medium",
                            "hover:bg-reseda transition-colors duration-200",
                            "ring-2 ring-sage ring-offset-2",
                          )}
                          onClick={handleClose}
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  }

                  // Regular internal link
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-4 py-3 rounded-lg text-base font-medium",
                          "transition-colors duration-200",
                          isActive
                            ? "bg-reseda text-white"
                            : "text-ebony hover:bg-dun-200",
                        )}
                        onClick={handleClose}
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
