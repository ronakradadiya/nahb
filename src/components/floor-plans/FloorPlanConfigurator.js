"use client";

/**
 * FloorPlanConfigurator Component
 * 
 * Client component that wraps the interactive elements:
 * - Upgrade Options (multi-select)
 * - Upgrade Packages (single-select)
 * - Price Summary (live updates)
 * 
 * Uses usePriceCalculator hook for state management
 */

import { usePriceCalculator } from "@/hooks";
import { UpgradeOptions } from "./UpgradeOptions";
import { UpgradePackages } from "./UpgradePackages";
import { PriceSummary } from "./PriceSummary";

export function FloorPlanConfigurator({
  plan,
  upgradePackages = [],
}) {
  const {
    selectedOptionIds,
    selectedPackageId,
    breakdown,
    toggleOption,
    selectPackage,
  } = usePriceCalculator({
    basePrice: plan.basePrice,
    availableOptions: plan.upgradeOptions || [],
    availablePackages: upgradePackages,
  });

  const hasOptions = plan.upgradeOptions && plan.upgradeOptions.length > 0;
  const hasPackages = upgradePackages && upgradePackages.length > 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Options & Packages Column */}
      <div className="lg:col-span-2 space-y-8">
        {/* Upgrade Options - Only rendered if plan has options */}
        {hasOptions && (
          <UpgradeOptions
            options={plan.upgradeOptions}
            selectedIds={selectedOptionIds}
            onToggle={toggleOption}
          />
        )}

        {/* Upgrade Packages - Global, always available */}
        {hasPackages && (
          <UpgradePackages
            packages={upgradePackages}
            selectedId={selectedPackageId}
            onSelect={selectPackage}
          />
        )}

        {/* Message if no options or packages */}
        {!hasOptions && !hasPackages && (
          <div className="bg-dun/30 rounded-lg p-6 text-center">
            <p className="text-ebony/60">
              No upgrade options or packages are currently available for this plan.
            </p>
          </div>
        )}
      </div>

      {/* Price Summary Column */}
      <div className="lg:col-span-1">
        <PriceSummary breakdown={breakdown} />
      </div>
    </div>
  );
}

export default FloorPlanConfigurator;