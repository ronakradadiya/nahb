/**
 * FeaturedPlans Component
 * 
 * Showcase featured floor plans on homepage
 */

import { cn } from "@/lib/utils";
import { Section, SectionHeading, Container } from "@/components/shared";
import { Button } from "@/components/ui";
import { PlanCard } from "@/components/floor-plans";
import { floorPlans } from "@/config/floor-plans";

export function FeaturedPlans({ className, ...props }) {
  // Get first 3 plans as featured (could be made configurable)
  const featuredPlans = floorPlans.slice(0, 3);

  return (
    <Section background="white" className={className} {...props}>
      <SectionHeading
        title="Our Floor Plans"
        subtitle="Explore our collection of thoughtfully designed homes, each offering unique layouts and premium features."
      />

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
        {featuredPlans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>

      {/* View All CTA */}
      <div className="text-center">
        <Button href="/floor-plans" variant="outline" size="lg">
          View All Floor Plans
        </Button>
      </div>
    </Section>
  );
}

export default FeaturedPlans;