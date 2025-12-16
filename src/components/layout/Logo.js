/**
 * Logo Component
 * 
 * Site logo with link to home
 */

import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function Logo({ className, ...props }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 group",
        className
      )}
      {...props}
    >
      {/* Logo Icon */}
      <div className="w-10 h-10 bg-reseda rounded flex items-center justify-center">
        <svg
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 21V9L12 3L21 9V21H15V14H9V21H3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Logo Text */}
      <div className="flex flex-col">
        <span className="font-display text-lg font-semibold text-ebony leading-tight group-hover:text-reseda transition-colors">
          {siteConfig.name}
        </span>
        <span className="text-xs text-ebony/60 tracking-wide uppercase">
          {siteConfig.tagline}
        </span>
      </div>
    </Link>
  );
}

export default Logo;