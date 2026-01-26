/**
 * Logo Component
 * 
 * Site logo with link to home
 * Displays Viona Homes company logo
 */

import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import LogoImage from "@/assets/viona-homes-logo.svg";

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
      <div className="flex items-center justify-center">
        <Image
          src={LogoImage}
          alt={siteConfig.companyName}
          className="object-contain max-w-[120px] h-auto"
          priority
          style={{
            width: '80px',
            height: 'auto',
          }}
        />
      </div>

      {/* Optional: Logo Text can be uncommented if needed */}
      {/* <div className="flex flex-col">
        <span className="font-display text-lg font-semibold text-ebony leading-tight group-hover:text-reseda transition-colors">
          {siteConfig.companyName}
        </span>
        <span className="text-xs text-ebony/60 tracking-wide uppercase">
          {siteConfig.tagline}
        </span>
      </div> */}
    </Link>
  );
}

export default Logo;