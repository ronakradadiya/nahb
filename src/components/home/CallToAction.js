/**
 * CallToAction Component
 * 
 * Homepage CTA section encouraging visitors to take action
 */

import { cn } from "@/lib/utils";
import { Container } from "@/components/shared";
import { Button } from "@/components/ui";

export function CallToAction({ className, ...props }) {
  return (
    <section
      className={cn(
        "relative py-20 md:py-28 bg-reseda",
        className
      )}
      {...props}
    >
      {/* Content */}
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white mb-6">
            Ready to Find Your Dream Home?
          </h2>
          
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Schedule a tour of our model homes and discover the Silverwood Heights 
            difference. Our team is ready to help you find the perfect floor plan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/floor-plans" size="lg">
              View Floor Plans
            </Button>
            <Button 
              href="/about" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:!text-ebony"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CallToAction;