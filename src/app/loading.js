/**
 * Global Loading Component
 * 
 * Shown during page transitions
 */

import { Container } from "@/components/shared";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Container>
        <div className="text-center">
          {/* Loading Spinner */}
          <div className="inline-block w-12 h-12 border-4 border-dun-300 border-t-reseda rounded-full animate-spin mb-4" />
          
          <p className="text-ebony/60">Loading...</p>
        </div>
      </Container>
    </div>
  );
}