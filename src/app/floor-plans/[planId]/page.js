/**
 * Single Floor Plan Detail Page
 * 
 * Displays full plan details with:
 * 1. Plan Overview
 * 2. Image Gallery
 * 3. Upgrade Options (multi-select, per-plan)
 * 4. Upgrade Packages (single-select, global)
 * 5. Live Price Summary
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import { Section, Container, Icon } from "@/components/shared";
import { 
  PlanOverview, 
  ImageGallery, 
  FloorPlanViewer,
  FloorPlanConfigurator 
} from "@/components/floor-plans";
import { getPlanByIdOrSlug, floorPlans } from "@/config/floor-plans";
import upgradePackages from "@/config/upgrade-packages.json";

// Generate static params for all plans
export async function generateStaticParams() {
  return floorPlans.map((plan) => ({
    planId: plan.slug || plan.id,
  }));
}

// Generate metadata for each plan
export async function generateMetadata({ params }) {
  const plan = getPlanByIdOrSlug(params.planId);

  if (!plan) {
    return {
      title: "Plan Not Found",
    };
  }

  return {
    title: plan.name,
    description: plan.description || `Explore the ${plan.name} floor plan at Silverwood Heights. ${plan.sqft} sq ft, ${plan.beds} bedrooms, ${plan.baths} bathrooms.`,
  };
}

export default function FloorPlanDetailPage({ params }) {
  const plan = getPlanByIdOrSlug(params.planId);

  // Show 404 if plan not found
  if (!plan) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-dun/30 border-b border-dun-200">
        <Container>
          <nav className="py-4">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-ebony/60 hover:text-reseda transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-ebony/40">/</li>
              <li>
                <Link href="/floor-plans" className="text-ebony/60 hover:text-reseda transition-colors">
                  Floor Plans
                </Link>
              </li>
              <li className="text-ebony/40">/</li>
              <li className="text-ebony font-medium">{plan.name}</li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* Main Content */}
      <Section background="default" padding="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left Column: Gallery */}
          <div>
            <ImageGallery images={plan.images} planName={plan.name} />
          </div>

          {/* Right Column: Overview */}
          <div>
            <PlanOverview plan={plan} />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-dun-200 my-12" />

        {/* Floor Plan Viewer Section */}
        {plan.floorPlans && plan.floorPlans.length > 0 && (
          <>
            <div className="mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-medium text-ebony mb-8">
                Floor Plan
              </h2>

              <FloorPlanViewer 
                floorPlans={plan.floorPlans} 
                planName={plan.name} 
              />
            </div>

            {/* Divider */}
            <hr className="border-dun-200 my-12" />
          </>
        )}

        {/* Configurator Section */}
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-ebony mb-8">
            Customize Your Home
          </h2>

          <FloorPlanConfigurator 
            plan={plan} 
            upgradePackages={upgradePackages} 
          />
        </div>
      </Section>

      {/* Back Link */}
      <div className="bg-dun/30 border-t border-dun-200">
        <Container>
          <div className="py-6">
            <Link
              href="/floor-plans"
              className="inline-flex items-center gap-2 text-reseda hover:text-reseda-600 transition-colors"
            >
              <Icon name="chevronLeft" size={20} />
              <span>Back to All Floor Plans</span>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}