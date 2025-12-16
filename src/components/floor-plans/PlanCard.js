/**
 * PlanCard Component
 * 
 * Card displaying floor plan summary for listing page
 * Shows thumbnail, name, specs, and links to detail page
 */

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { formatPrice, formatSqft, formatRoomConfig } from "@/lib/formatters";
import { getPlanThumbnail } from "@/config/floor-plans";
import { Badge } from "@/components/ui";

export function PlanCard({ plan, className, ...props }) {
  const {
    id,
    name,
    ogName,
    slug,
    lotSize,
    sqft,
    beds,
    baths,
    garage,
    hasLoft,
    houseWidth,
    basePrice,
  } = plan;

  const thumbnail = getPlanThumbnail(plan);

  return (
    <Link
      href={`/floor-plans/${slug || id}`}
      className={cn(
        "group block bg-white rounded-lg overflow-hidden",
        "border border-dun-200 transition-all duration-300",
        "hover:shadow-premium hover:border-dun-300",
        className
      )}
      {...props}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-dun-100 overflow-hidden">
        {thumbnail ? (
          <Image
            src={thumbnail.src}
            alt={thumbnail.alt || `${name} exterior`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-ebony/30">
            <svg
              className="w-16 h-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
            </svg>
          </div>
        )}

        {/* Loft Badge */}
        {hasLoft && (
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" size="sm">
              Loft Available
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Plan Name & OG Name */}
        <div className="mb-3">
          <h3 className="font-display text-xl font-medium text-ebony group-hover:text-reseda transition-colors">
            {name}
          </h3>
          {ogName && (
            <p className="text-sm text-ebony/50 mt-0.5">{ogName}</p>
          )}
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-4">
          <div className="flex items-center gap-2 text-ebony/70">
            <svg className="w-4 h-4 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span>{formatSqft(sqft)}</span>
          </div>

          <div className="flex items-center gap-2 text-ebony/70">
            <svg className="w-4 h-4 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>{lotSize.toLocaleString()} sq ft lot</span>
          </div>

          <div className="flex items-center gap-2 text-ebony/70">
            <svg className="w-4 h-4 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>{beds} Bed | {baths} Bath</span>
          </div>

          <div className="flex items-center gap-2 text-ebony/70">
            <svg className="w-4 h-4 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>{garage} Car Garage</span>
          </div>
        </div>

        {/* House Width */}
        <div className="text-sm text-ebony/60 mb-4">
          House Width: <span className="text-ebony">{houseWidth}</span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-dun-200">
          <div>
            <p className="text-xs text-ebony/50 uppercase tracking-wide">Starting at</p>
            <p className="text-xl font-semibold text-reseda">
              {formatPrice(basePrice)}
            </p>
          </div>
          
          <span className="inline-flex items-center gap-1 text-sm font-medium text-reseda group-hover:gap-2 transition-all">
            View Details
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default PlanCard;