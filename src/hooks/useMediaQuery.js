"use client";

/**
 * useMediaQuery Hook
 * 
 * Detect if a media query matches (for responsive behavior)
 * 
 * @param {string} query - Media query string
 * @returns {boolean} Whether the query matches
 * 
 * @example
 * const isMobile = useMediaQuery("(max-width: 768px)");
 */

import { useState, useEffect } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(query);
    
    // Set initial value
    setMatches(mediaQuery.matches);

    // Handler for changes
    const handleChange = (event) => {
      setMatches(event.matches);
    };

    // Listen for changes
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

// Preset breakpoint hooks for convenience
export function useIsMobile() {
  return useMediaQuery("(max-width: 767px)");
}

export function useIsTablet() {
  return useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
}

export function useIsDesktop() {
  return useMediaQuery("(min-width: 1024px)");
}

export default useMediaQuery;