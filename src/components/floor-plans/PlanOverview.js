/**
 * PlanOverview Component
 * 
 * Displays plan details on the single floor plan page
 * Shows name, specs, price, and key highlights
 */

import { cn } from "@/lib/utils";
import { formatPrice, formatSqft } from "@/lib/formatters";
import { Badge } from "@/components/ui";

export function PlanOverview({ plan, className, ...props }) {
  const {
    name,
    ogName,
    lotSize,
    sqft,
    beds,
    baths,
    garage,
    hasLoft,
    houseWidth,
    basePrice,
    description,
    highlights,
  } = plan;

  return (
    <div className={cn("", className)} {...props}>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-medium text-ebony">
              {name}
            </h1>
            {ogName && (
              <p className="text-ebony/50 mt-1">{ogName}</p>
            )}
          </div>
          
          {hasLoft && (
            <Badge variant="secondary" size="lg">
              Loft Available
            </Badge>
          )}
        </div>
      </div>

      {/* Description */}
      {description && (
        <p className="text-ebony/70 leading-relaxed mb-8">
          {description}
        </p>
      )}

      {/* Specs Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <SpecItem
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          }
          label="Square Feet"
          value={formatSqft(sqft)}
        />
        
        <SpecItem
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          }
          label="Lot Size"
          value={`${lotSize.toLocaleString()} sq ft`}
        />
        
        <SpecItem
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          }
          label="Bedrooms"
          value={`${beds} Bed`}
        />
        
        <SpecItem
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
          }
          label="Bathrooms"
          value={`${baths} Bath`}
        />
        
        <SpecItem
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          }
          label="Garage"
          value={`${garage} Car`}
        />
        
        <SpecItem
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          }
          label="House Width"
          value={houseWidth}
        />
      </div>

      {/* Base Price */}
      <div className="bg-dun/30 rounded-lg p-4 mb-8">
        <p className="text-sm text-ebony/60 uppercase tracking-wide mb-1">
          Base Price Starting At
        </p>
        <p className="text-3xl font-semibold text-reseda">
          {formatPrice(basePrice)}
        </p>
      </div>

      {/* Highlights */}
      {highlights && highlights.length > 0 && (
        <div>
          <h3 className="font-display text-lg font-medium text-ebony mb-3">
            Key Features
          </h3>
          <ul className="space-y-2">
            {highlights.map((highlight, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-ebony/70"
              >
                <svg
                  className="w-5 h-5 text-sage flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// Helper component for spec items
function SpecItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-dun-200">
      <div className="text-sage">{icon}</div>
      <div>
        <p className="text-xs text-ebony/50 uppercase tracking-wide">{label}</p>
        <p className="font-medium text-ebony">{value}</p>
      </div>
    </div>
  );
}

export default PlanOverview;