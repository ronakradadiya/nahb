/**
 * Hero Component
 * 
 * Homepage hero section with background image and CTA
 */

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared";
import { Button } from "@/components/ui";
import { siteConfig } from "@/config/site";

export function Hero({ className, ...props }) {
  return (
    <section
      className={cn(
        "relative min-h-[70vh] md:min-h-[80vh] flex items-center",
        className
      )}
      {...props}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero/hero-main.jpg"
          alt="Silverwood Heights luxury home exterior"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-ebony/80 via-ebony/50 to-transparent" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-2xl">
          {/* Tagline */}
          <p className="text-sage font-medium tracking-wide uppercase mb-4">
            Welcome to {siteConfig.name}
          </p>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-tight mb-6">
            Where Luxury Meets
            <span className="block text-sage">Modern Living</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
            Discover thoughtfully designed single-family homes with premium 
            finishes and customizable options to match your lifestyle.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/floor-plans" size="lg">
              Explore Floor Plans
            </Button>
            <Button 
              href="/about" 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:!text-ebony"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;