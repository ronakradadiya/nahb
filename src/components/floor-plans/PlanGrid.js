/**
 * PlanGrid Component
 * 
 * Responsive grid layout for floor plan cards
 */

import { cn } from "@/lib/utils";
import { PlanCard } from "./PlanCard";

export function PlanGrid({ plans = [], className, ...props }) {
  if (plans.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-ebony/60 text-lg">
          No floor plans found matching your criteria.
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
        className
      )}
      {...props}
    >
      {plans.map((plan) => (
        <PlanCard key={plan.id} plan={plan} />
      ))}
    </div>
  );
}

export default PlanGrid;