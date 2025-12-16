/**
 * Home Page
 * 
 * Landing page featuring hero, featured plans, and CTAs
 */

import { Hero, FeaturedPlans, Features, CallToAction } from "@/components/home";
import { PremiumLots } from "@/components/shared";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

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