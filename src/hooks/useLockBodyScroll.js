"use client";

/**
 * useLockBodyScroll Hook
 * 
 * Lock body scroll when modal/drawer is open
 * 
 * @param {boolean} lock - Whether to lock scroll
 * 
 * @example
 * useLockBodyScroll(isModalOpen);
 */

import { useEffect } from "react";

export function useLockBodyScroll(lock = true) {
  useEffect(() => {
    if (!lock) return;

    // Save original body overflow style
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Get scrollbar width
    const scrollbarWidth = 
      window.innerWidth - document.documentElement.clientWidth;

    // Lock scroll and add padding to prevent layout shift
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    // Cleanup: restore original styles
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [lock]);
}

export default useLockBodyScroll;