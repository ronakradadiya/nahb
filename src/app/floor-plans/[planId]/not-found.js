/**
 * Floor Plan Not Found Page
 * 
 * Custom 404 for invalid plan IDs
 */

import Link from "next/link";
import { Section, SectionHeading } from "@/components/shared";
import { Button } from "@/components/ui";

export default function FloorPlanNotFound() {
  return (
    <Section background="default" padding="default">
      <div className="text-center max-w-lg mx-auto">
        <SectionHeading
          title="Floor Plan Not Found"
          subtitle="Sorry, we couldn't find the floor plan you're looking for. It may have been removed or the link may be incorrect."
        />

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/floor-plans">
            View All Floor Plans
          </Button>
          <Button href="/" variant="outline">
            Go Home
          </Button>
        </div>
      </div>
    </Section>
  );
}