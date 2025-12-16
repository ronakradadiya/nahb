/**
 * Home Page
 * 
 * Landing page featuring hero, featured plans, and CTAs
 */

import { Hero, FeaturedPlans, Features, CallToAction } from "@/components/home";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Featured Floor Plans */}
      <FeaturedPlans />

      {/* Features/Benefits */}
      <Features />

      {/* Call to Action */}
      <CallToAction />
    </>
  );
}