"use client";

/**
 * LotSizeFilter Component
 * 
 * Dropdown filter for lot sizes on floor plans page
 */

import { cn } from "@/lib/utils";
import { Dropdown } from "@/components/ui";

export function LotSizeFilter({
  lotSizes = [],
  selectedLotSize,
  onLotSizeChange,
  className,
  ...props
}) {
  // Convert lot sizes to dropdown options
  const options = [
    { value: "all", label: "All Lot Sizes" },
    ...lotSizes.map((lot) => ({
      value: lot.value.toString(),
      label: lot.label,
    })),
  ];

  const handleChange = (value) => {
    if (value === "all") {
      onLotSizeChange?.(null);
    } else {
      onLotSizeChange?.(parseInt(value, 10));
    }
  };

  return (
    <div className={cn("w-full max-w-xs", className)} {...props}>
      <Dropdown
        options={options}
        value={selectedLotSize?.toString() || "all"}
        onChange={handleChange}
        label="Filter by Lot Size"
      />
    </div>
  );
}

export default LotSizeFilter;