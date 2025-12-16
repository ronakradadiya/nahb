"use client";

/**
 * UpgradePackages Component
 * 
 * Single-select upgrade packages (global, applies to all plans)
 * Data loaded from /config/upgrade-packages.json
 */

import { cn } from "@/lib/utils";
import { RadioGroup } from "@/components/ui";

export function UpgradePackages({
  packages = [],
  selectedId = null,
  onSelect,
  className,
  ...props
}) {
  // Don't render if no packages available
  if (!packages || packages.length === 0) {
    return null;
  }

  return (
    <div className={cn("", className)} {...props}>
      {/* Header */}
      <div className="mb-4">
        <h3 className="font-display text-xl font-medium text-ebony">
          Upgrade Packages
        </h3>
        <p className="text-sm text-ebony/60 mt-1">
          Choose one package to enhance your home
        </p>
      </div>

      {/* Package Options */}
      <RadioGroup
        name="upgrade-package"
        options={packages}
        value={selectedId}
        onChange={onSelect}
      />

      {/* Optional: Clear Selection Button */}
      {selectedId && (
        <button
          type="button"
          onClick={() => onSelect?.(null)}
          className="mt-4 text-sm text-reseda hover:text-reseda-600 transition-colors"
        >
          Clear package selection
        </button>
      )}
    </div>
  );
}

export default UpgradePackages;