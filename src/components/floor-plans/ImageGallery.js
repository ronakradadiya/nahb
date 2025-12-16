"use client";

/**
 * ImageGallery Component
 * 
 * Displays floor plan images with thumbnail navigation
 * Supports both grid and carousel-style viewing
 */

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ImageGallery({ images = [], planName = "", className, ...props }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="aspect-[16/9] bg-dun-100 rounded-lg flex items-center justify-center">
        <p className="text-ebony/40">No images available</p>
      </div>
    );
  }

  const activeImage = images[activeIndex];

  return (
    <div className={cn("", className)} {...props}>
      {/* Main Image */}
      <div className="relative aspect-[16/9] bg-dun-100 rounded-lg overflow-hidden mb-4">
        <Image
          src={activeImage.src}
          alt={activeImage.alt || `${planName} image ${activeIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 60vw"
          priority={activeIndex === 0}
        />

        {/* Image Type Badge */}
        {activeImage.type && (
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 bg-ebony/70 text-white text-sm rounded-full capitalize">
              {activeImage.type}
            </span>
          </div>
        )}

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5 text-ebony" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all"
              aria-label="Next image"
            >
              <svg className="w-5 h-5 text-ebony" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 px-3 py-1 bg-ebony/70 text-white text-sm rounded-full">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative aspect-[4/3] rounded overflow-hidden",
                "border-2 transition-all duration-200",
                activeIndex === index
                  ? "border-reseda"
                  : "border-transparent hover:border-dun-300"
              )}
            >
              <Image
                src={image.src}
                alt={image.alt || `${planName} thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="100px"
              />
              {activeIndex === index && (
                <div className="absolute inset-0 bg-reseda/10" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageGallery;