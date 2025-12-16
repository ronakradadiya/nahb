"use client";

/**
 * UpgradeOptions Component
 * 
 * Multi-select upgrade options for a floor plan
 * Only renders if plan has upgrade options defined
 */

import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui";

export function UpgradeOptions({
  options = [],
  selectedIds = [],
  onToggle,
  className,
  ...props
}) {
  // Don't render if no options available
  if (!options || options.length === 0) {
    return null;
  }

  return (
    <div className={cn("", className)} {...props}>
      {/* Header */}
      <div className="mb-4">
        <h3 className="font-display text-xl font-medium text-ebony">
          Upgrade Options
        </h3>
        <p className="text-sm text-ebony/60 mt-1">
          Select any additional upgrades for your home
        </p>
      </div>

      {/* Options List */}
      <div className="space-y-3">
        {options.map((option) => (
          <Checkbox
            key={option.id}
            id={`option-${option.id}`}
            checked={selectedIds.includes(option.id)}
            onChange={() => onToggle?.(option.id)}
            label={option.name}
            description={option.description}
            price={option.price}
          />
        ))}
      </div>
    </div>
  );
}

export default UpgradeOptions;