/**
 * Floor Plans Listing Page
 * 
 * Displays all floor plans with lot size filtering
 * Server component with client filter
 */

import { Section, SectionHeading } from "@/components/shared";
import { floorPlans, lotSizes, getAvailableLotSizes } from "@/config/floor-plans";
import { FloorPlansClient } from "./FloorPlansClient";

// Page metadata
export const metadata = {
  title: "Floor Plans",
  description: "Explore our collection of thoughtfully designed floor plans. Find the perfect home layout for your family at Silver Wood Heights.",
};

export default function FloorPlansPage() {
  // Get available lot sizes (only those with plans)
  const availableLotSizes = getAvailableLotSizes();

  return (
    <Section background="default" padding="default">
      {/* Page Header */}
      <SectionHeading
        title="Our Floor Plans"
        subtitle="Discover the perfect home for your lifestyle. Filter by lot size to find plans that fit your needs."
      />

      {/* Client component handles filtering */}
      <FloorPlansClient
        plans={floorPlans}
        lotSizes={availableLotSizes}
      />
    </Section>
  );
}