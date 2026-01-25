"use client";

/**
 * FloorPlanViewer Component
 * 
 * Interactive floor plan viewer with zoom, flip, and reset controls
 * Similar to Taylor Morrison's floor plan viewer
 */

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function FloorPlanViewer({ floorPlans = [], planName = "", className, ...props }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  if (floorPlans.length === 0) {
    return null;
  }

  const activeFloorPlan = floorPlans[activeIndex];

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleReset = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle wheel event with non-passive listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      setZoom((prev) => Math.max(0.5, Math.min(3, prev + delta)));
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className={cn("", className)} {...props}>
      {/* Floor Plan Display */}
      <div
        ref={containerRef}
        className="relative bg-white border border-dun-200 rounded-lg overflow-hidden"
        style={{
          minHeight: "600px",
          cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className="relative w-full h-full flex items-center justify-center p-8"
          style={{ minHeight: "600px" }}
        >
          <div
            style={{
              transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
              transition: isDragging ? "none" : "transform 0.2s ease-out",
              transformOrigin: "center center",
            }}
            className="relative max-w-full max-h-full"
          >
            <Image
              src={activeFloorPlan.src}
              alt={activeFloorPlan.alt || `${planName} floor plan`}
              width={1200}
              height={800}
              className="w-auto h-auto max-w-full max-h-[800px] object-contain"
              quality={95}
              priority
              draggable={false}
            />
          </div>
        </div>

        {/* Zoom Hint */}
        {zoom > 1 && (
          <div className="absolute top-4 left-4 bg-ebony/70 text-white text-sm px-3 py-1 rounded-full">
            Drag to pan
          </div>
        )}

        {/* Controls Bar - Bottom Right */}
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm border border-dun-200 rounded-lg shadow-lg p-4">
          <div className="flex flex-col gap-3">
            {/* Floor Plan Selector (if multiple) */}
            {floorPlans.length > 1 && (
              <div className="flex items-center gap-2 pb-3 border-b border-dun-200">
                <span className="text-sm font-medium text-ebony whitespace-nowrap">Floor:</span>
                <div className="flex gap-2">
                  {floorPlans.map((plan, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveIndex(index);
                        handleReset();
                      }}
                      className={cn(
                        "px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap",
                        activeIndex === index
                          ? "bg-reseda text-white"
                          : "bg-dun-100 text-ebony hover:bg-dun-200"
                      )}
                    >
                      {plan.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Zoom and Action Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleZoomOut}
                disabled={zoom <= 0.5}
                className={cn(
                  "w-10 h-10 rounded-md flex items-center justify-center transition-all",
                  zoom <= 0.5
                    ? "bg-dun-100 text-ebony/30 cursor-not-allowed"
                    : "bg-dun-100 text-ebony hover:bg-dun-200"
                )}
                aria-label="Zoom out"
                title="Zoom out"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>

              <span className="text-sm font-medium text-ebony min-w-[55px] text-center">
                {Math.round(zoom * 100)}%
              </span>

              <button
                onClick={handleZoomIn}
                disabled={zoom >= 3}
                className={cn(
                  "w-10 h-10 rounded-md flex items-center justify-center transition-all",
                  zoom >= 3
                    ? "bg-dun-100 text-ebony/30 cursor-not-allowed"
                    : "bg-dun-100 text-ebony hover:bg-dun-200"
                )}
                aria-label="Zoom in"
                title="Zoom in"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>

              {/* Reset Button */}
              <div className="w-px h-8 bg-dun-200 mx-1"></div>
              <button
                onClick={handleReset}
                className="w-10 h-10 rounded-md flex items-center justify-center bg-reseda text-white hover:bg-reseda-600 transition-all"
                aria-label="Reset view"
                title="Reset view"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floor Plan Info */}
      {activeFloorPlan.label && (
        <div className="mt-4 text-center text-sm text-ebony/70">
          {activeFloorPlan.label}
        </div>
      )}
    </div>
  );
}

export default FloorPlanViewer;
