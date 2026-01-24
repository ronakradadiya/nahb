/**
 * Home Page
 * 
 * Landing page featuring hero, featured plans, and CTAs
 */

import { Hero, MasterPlan, FeaturedPlans, Features, CallToAction } from "@/components/home";
import { PremiumLots } from "@/components/shared";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Master Plan Section */}
      <MasterPlan />

      {/* Featured Floor Plans */}
      <FeaturedPlans />

      {/* Features/Benefits */}
      <Features />

      {/* Premium Lots Pricing */}
      <PremiumLots />

      {/* Call to Action */}
      <CallToAction />
    </>
  );
}