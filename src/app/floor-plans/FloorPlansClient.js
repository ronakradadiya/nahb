"use client";

/**
 * FloorPlansClient Component
 * 
 * Client component for floor plans page
 * Handles lot size filtering with state
 */

import { useState, useMemo } from "react";
import { LotSizeFilter, PlanGrid } from "@/components/floor-plans";

export function FloorPlansClient({ plans = [], lotSizes = [] }) {
  const [selectedLotSize, setSelectedLotSize] = useState(null);

  // Filter plans based on selected lot size
  const filteredPlans = useMemo(() => {
    if (!selectedLotSize) return plans;
    return plans.filter((plan) => plan.lotSize === selectedLotSize);
  }, [plans, selectedLotSize]);

  return (
    <div>
      {/* Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <LotSizeFilter
          lotSizes={lotSizes}
          selectedLotSize={selectedLotSize}
          onLotSizeChange={setSelectedLotSize}
        />

        {/* Results Count */}
        <p className="text-ebony/60 text-sm">
          Showing {filteredPlans.length} of {plans.length} floor plans
        </p>
      </div>

      {/* Plans Grid */}
      <PlanGrid plans={filteredPlans} />
    </div>
  );
}

export default FloorPlansClient;