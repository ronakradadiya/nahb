"use client";

/**
 * Global Error Component
 * 
 * Shown when an error occurs
 */

import { useEffect } from "react";
import { Section, Container } from "@/components/shared";
import { Button } from "@/components/ui";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <Section background="default" padding="lg">
      <Container size="sm">
        <div className="text-center">
          {/* Error Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-100 mb-8">
            <svg
              className="w-12 h-12 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          {/* Content */}
          <h1 className="text-4xl font-display font-medium text-ebony mb-4">
            Something Went Wrong
          </h1>
          <p className="text-lg text-ebony/60 mb-8 max-w-md mx-auto">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => reset()}>
              Try Again
            </Button>
            <Button href="/" variant="outline">
              Go Home
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}