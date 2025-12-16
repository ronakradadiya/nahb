"use client";

/**
 * PriceSummary Component
 * 
 * Live price calculator showing breakdown:
 * - Base price
 * - Selected upgrade options total
 * - Selected upgrade package price
 * - Final total
 */

import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/formatters";

export function PriceSummary({
  breakdown,
  className,
  ...props
}) {
  const {
    basePrice = 0,
    optionsTotal = 0,
    packagePrice = 0,
    packageName = null,
    totalPrice = 0,
    selectedOptions = [],
  } = breakdown || {};

  return (
    <div
      className={cn(
        "bg-white rounded-lg border border-dun-200 overflow-hidden",
        "sticky top-24",
        className
      )}
      {...props}
    >
      {/* Header */}
      <div className="bg-ebony text-white p-4">
        <h3 className="font-display text-lg font-medium">
          Price Summary
        </h3>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Base Price */}
        <div className="flex justify-between items-center">
          <span className="text-ebony/70">Base Price</span>
          <span className="font-medium text-ebony">{formatPrice(basePrice)}</span>
        </div>

        {/* Selected Options */}
        {selectedOptions.length > 0 && (
          <div className="border-t border-dun-200 pt-4">
            <p className="text-sm text-ebony/50 uppercase tracking-wide mb-2">
              Selected Upgrades
            </p>
            <ul className="space-y-2">
              {selectedOptions.map((option) => (
                <li key={option.id} className="flex justify-between items-center text-sm">
                  <span className="text-ebony/70">{option.name}</span>
                  <span className="text-ebony">+{formatPrice(option.price)}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-3 pt-2 border-t border-dun-100">
              <span className="text-sm text-ebony/70">Options Subtotal</span>
              <span className="font-medium text-ebony">+{formatPrice(optionsTotal)}</span>
            </div>
          </div>
        )}

        {/* Package */}
        {packageName && packagePrice > 0 && (
          <div className="flex justify-between items-center border-t border-dun-200 pt-4">
            <span className="text-ebony/70">{packageName}</span>
            <span className="font-medium text-ebony">+{formatPrice(packagePrice)}</span>
          </div>
        )}

        {/* Total */}
        <div className="border-t-2 border-reseda pt-4 mt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-display font-medium text-ebony">
              Total Price
            </span>
            <span className="text-2xl font-semibold text-reseda">
              {formatPrice(totalPrice)}
            </span>
          </div>
          <p className="text-xs text-ebony/50 mt-2">
            *Prices are estimates and subject to change. Contact sales for final pricing.
          </p>
        </div>
      </div>

      {/* CTA */}
      {/* <div className="p-4 bg-dun/30">
        <button
          type="button"
          className="w-full btn-primary py-3"
        >
          Schedule a Tour
        </button>
        <button
          type="button"
          className="w-full mt-2 text-sm text-reseda hover:text-reseda-600 transition-colors"
        >
          Download Brochure
        </button>
      </div> */}
    </div>
  );
}

export default PriceSummary;