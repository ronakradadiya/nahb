/**
 * Hero Component
 * 
 * Homepage hero section with text on left and image on right
 */

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared";
import { Button } from "@/components/ui";
import { siteConfig } from "@/config/site";
import HeroImage from "@/assets/hero.png";

export function Hero({ className, ...props }) {
  return (
    <section
      className={cn(
        "py-16 md:py-24 bg-bone",
        className
      )}
      {...props}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Tagline */}
            <p className="text-sage font-medium tracking-wide uppercase mb-4">
              Welcome to {siteConfig.name}
            </p>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-ebony leading-tight mb-6">
              Where Luxury Meets
              <span className="block text-sage">Modern Living</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-ebony/70 leading-relaxed mb-8 max-w-lg">
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
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-dun-100">
            <Image
              src={HeroImage}
              alt="Silver Wood Heights luxury home exterior"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Placeholder if no image */}
            <div className="absolute inset-0 flex items-center justify-center text-ebony/20">
              <svg
                className="w-24 h-24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={0.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 22V12h6v10"
                />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;