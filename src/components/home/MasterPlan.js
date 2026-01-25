/**
 * MasterPlan Component
 * 
 * Displays the master plan rendering with key development details
 */

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/shared";
import masterPlanImage from "@/assets/site-plans/final-rendering.png";

export function MasterPlan({ className, ...props }) {
  const details = [
    {
      label: "Total number of lots",
      value: "180"
    },
    {
      label: "Site area",
      value: "93 acres"
    },
    {
      label: "Green space",
      value: "40% - 37.2 acres"
    },
    {
      label: "Amenities",
      value: "2 pickle ball courts, Children's playground, Walking trail, Detention ponds"
    }
  ];

  return (
    <Section background="bone" padding="none" className={cn("pb-16 md:pb-24", className)} {...props}>
      <SectionHeading
        title="Master Plan"
        subtitle="A thoughtfully designed community with abundant green space and modern amenities"
      />

      <div className="max-w-6xl mx-auto">
        {/* Master Plan Image */}
        <div className="relative rounded-lg overflow-hidden border border-dun-200 bg-white shadow-lg mb-8">
          <Image
            src={masterPlanImage}
            alt="Silverwood Heights Master Plan Rendering"
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {details.map((detail, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-dun-200 p-6 hover:shadow-md transition-shadow"
            >
              <dt className="text-sm font-semibold text-ebony uppercase tracking-wide mb-2">
                {detail.label}
              </dt>
              <dd className="text-lg text-reseda font-medium">
                {detail.value}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default MasterPlan;
