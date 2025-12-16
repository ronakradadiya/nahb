/**
 * Logo Component
 * 
 * Site logo with link to home
 */

import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import LogoImage from "@/assets/logo.png";

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
      <div className="rounded flex items-center justify-center">
        <Image
          src={LogoImage}
          alt="Silverwood Heights"
          className="object-contain max-w-[95px]"
          priority
        />
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