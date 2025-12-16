/**
 * Features & Options Page
 * 
 * Display standard features included in all homes
 * and overview of upgrade options
 */

import { Section, SectionHeading, Container, Icon } from "@/components/shared";
import { Button } from "@/components/ui";
import { standardFeatures } from "@/config/standard-features";
import upgradePackages from "@/config/upgrade-packages.json";
import { formatPrice } from "@/lib/formatters";

// Page metadata
export const metadata = {
  title: "Features & Options",
  description: "Explore the standard features included in every Silverwood Heights home, plus available upgrade packages to customize your dream home.",
};

export default function FeaturesOptionsPage() {
  return (
    <>
      {/* Page Header */}
      <Section background="dun" padding="default">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-medium text-ebony mb-4">
            Features & Options
          </h1>
          <p className="text-lg text-ebony/70">
            Every Silverwood Heights home comes with exceptional standard features. 
            Elevate your home further with our curated upgrade packages.
          </p>
        </div>
      </Section>

      {/* Standard Features Section */}
      <Section background="white">
        <SectionHeading
          title={standardFeatures.title}
          subtitle={standardFeatures.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standardFeatures.categories.map((category) => (
            <div
              key={category.id}
              className="bg-bone rounded-lg p-6 border border-dun-200"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center text-reseda">
                  <Icon name={category.icon} size={20} />
                </div>
                <h3 className="font-display text-lg font-medium text-ebony">
                  {category.name}
                </h3>
              </div>

              {/* Features List */}
              <ul className="space-y-2">
                {category.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-ebony/70"
                  >
                    <svg
                      className="w-4 h-4 text-sage flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Upgrade Packages Section */}
      <Section background="default">
        <SectionHeading
          title="Upgrade Packages"
          subtitle="Choose from our carefully curated upgrade packages to elevate your home's finishes and features."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upgradePackages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`
                relative bg-white rounded-lg overflow-hidden border-2 transition-shadow
                ${index === 1 ? "border-reseda shadow-premium md:-mt-4 md:mb-4" : "border-dun-200"}
              `}
            >
              {/* Popular Badge */}
              {index === 1 && (
                <div className="absolute top-0 right-0 bg-reseda text-white text-xs font-medium px-3 py-1 rounded-bl">
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className={`p-6 ${index === 1 ? "bg-reseda/10" : "bg-dun/30"}`}>
                <p className="text-sm text-ebony/60 uppercase tracking-wide mb-1">
                  {pkg.tier} Package
                </p>
                <h3 className="font-display text-2xl font-medium text-ebony">
                  {pkg.name}
                </h3>
                <p className="text-3xl font-semibold text-reseda mt-2">
                  {formatPrice(pkg.price)}
                </p>
                {pkg.description && (
                  <p className="text-sm text-ebony/60 mt-2">
                    {pkg.description}
                  </p>
                )}
              </div>

              {/* Items */}
              <div className="p-6">
                <p className="text-sm font-medium text-ebony mb-3">
                  Package Includes:
                </p>
                <ul className="space-y-3">
                  {pkg.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-sm text-ebony/70"
                    >
                      <svg
                        className="w-5 h-5 text-sage flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-ebony/60 mb-4">
            See how these upgrades look in your favorite floor plan
          </p>
          <Button href="/floor-plans" size="lg">
            Explore Floor Plans
          </Button>
        </div>
      </Section>

      {/* Note Section */}
      <Section background="white" padding="sm">
        <Container size="sm">
          <div className="bg-dun/30 rounded-lg p-6 text-center">
            <p className="text-sm text-ebony/70">
              <strong className="text-ebony">Note:</strong> Additional upgrade options 
              may be available on individual floor plans. Prices shown are estimates 
              and subject to change. Contact our sales team for the most current pricing 
              and availability.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}