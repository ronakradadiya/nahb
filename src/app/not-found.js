/**
 * Global 404 Page
 * 
 * Shown when a page is not found
 */

import Link from "next/link";
import { Section, Container } from "@/components/shared";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <Section background="default" padding="lg">
      <Container size="sm">
        <div className="text-center">
          {/* 404 Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-dun mb-8">
            <svg
              className="w-12 h-12 text-ebony/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>

          {/* Content */}
          <h1 className="text-4xl md:text-5xl font-display font-medium text-ebony mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-ebony/60 mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. 
            It may have been moved or no longer exists.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/">
              Go Home
            </Button>
            <Button href="/floor-plans" variant="outline">
              View Floor Plans
            </Button>
          </div>

          {/* Help Text */}
          <p className="text-sm text-ebony/50 mt-8">
            Need help? {" "}
            <Link href="/about" className="text-reseda hover:underline">
              Contact us
            </Link>
          </p>
        </div>
      </Container>
    </Section>
  );
}