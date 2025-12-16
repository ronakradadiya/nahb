/**
 * Features Component
 * 
 * Highlight key features/benefits on homepage
 */

import { cn } from "@/lib/utils";
import { Section, SectionHeading, Icon } from "@/components/shared";

const features = [
  {
    id: "quality",
    icon: "shield",
    title: "Quality Construction",
    description:
      "Built with premium materials and expert craftsmanship, backed by comprehensive warranties.",
  },
  {
    id: "energy",
    icon: "leaf",
    title: "Energy Efficient",
    description:
      "ENERGY STAR® certified homes with high-efficiency systems to reduce your environmental footprint.",
  },
  {
    id: "customization",
    icon: "home",
    title: "Customizable Options",
    description:
      "Choose from upgrade packages and options to personalize your home to match your style.",
  },
  {
    id: "location",
    icon: "star",
    title: "Prime Location",
    description:
      "Situated in a desirable neighborhood with easy access to schools, shopping, and recreation.",
  },
];

export function Features({ className, ...props }) {
  return (
    <Section background="dun" className={className} {...props}>
      <SectionHeading
        title="Why Silverwood Heights?"
        subtitle="Every home is built with care, designed for comfort, and crafted to last."
      />

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="text-center"
          >
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-reseda/10 text-reseda mb-4">
              <Icon name={feature.icon} size={28} strokeWidth={1.5} />
            </div>

            {/* Title */}
            <h3 className="font-display text-lg font-medium text-ebony mb-2">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-ebony/70 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Features;