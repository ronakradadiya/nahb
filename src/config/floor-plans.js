/**
 * Floor Plans Configuration
 * 
 * EXTENSIBILITY NOTES:
 * - Add new lot sizes to the lotSizes array
 * - Add new plans to the floorPlans array
 * - Each plan can have optional upgradeOptions (or omit entirely)
 * - Images array can contain any number of images
 * - All prices are in USD
 */

// ===========================================
// LOT SIZES - Add new sizes here
// ===========================================

import HavenwoodExterior from "@/assets/plans/havenwood/exterior.png";
import HavenwoodElevation1 from "@/assets/plans/havenwood/elevation-1.png";

import SterlingExterior from "@/assets/plans/sterling/exterior.png";
import SterlingElevation1 from "@/assets/plans/sterling/elevation-1.png";
import SterlingElevation2 from "@/assets/plans/sterling/elevation-2.png";

import BrooksideExterior from "@/assets/plans/brookside/exterior.png";
import BrooksideElevation1 from "@/assets/plans/brookside/elevation-1.png";

import KirkwoodExterior from "@/assets/plans/kirkwood/exterior.png";
import KirkwoodElevation1 from "@/assets/plans/kirkwood/elevation-1.png";
import KirkwoodElevation2 from "@/assets/plans/kirkwood/elevation-2.png";

import IngramExterior from "@/assets/plans/ingram/exterior.png";
import IngramElevation1 from "@/assets/plans/ingram/elevation-1.png";
import IngramElevation2 from "@/assets/plans/ingram/elevation-2.png";

import RiverbendExterior from "@/assets/plans/riverbend/exterior.png";
import RiverbendElevation1 from "@/assets/plans/riverbend/elevation-1.png";
import RiverbendElevation2 from "@/assets/plans/riverbend/elevation-2.png";

export const lotSizes = [
  {
    id: "7500",
    label: "Lot A - 7,500 sq ft",
    value: 7500,
  },
  {
    id: "9000",
    label: "Lot B - 9,000 sq ft",
    value: 9000,
  },
];

// ===========================================
// FLOOR PLANS - Add new plans here
// ===========================================
export const floorPlans = [
  // -----------------------------------------
  // PLAN 1: HavenWood (Lot A - 7500)
  // -----------------------------------------
  {
    id: "havenwood",
    name: "HavenWood",
    ogName: null,
    slug: "havenwood",
    
    // Lot & Sizing
    lotSize: 7500,
    sqft: 2156,
    houseWidth: "46'9\"",
    
    // Room Configuration
    beds: 3,
    baths: 2.5,
    garage: 2,
    hasLoft: false,
    
    // Pricing
    basePrice: 385000,
    
    // Description
    description:
      "The HavenWood features a versatile flex room perfect for a home office or playroom. With an open layout and thoughtful design, this home adapts to your lifestyle.",
    
    // Features Highlights
    highlights: [
      "3 bedrooms plus flexible bonus room",
      "Open-concept living and dining",
      "Spacious kitchen with island",
      "2-car garage with storage",
      "Covered patio",
    ],
    
    // Images
    images: [
      {
        src: HavenwoodExterior,
        alt: "HavenWood - Elevation",
        type: "elevation",
      },
      {
        src: HavenwoodElevation1,
        alt: "HavenWood - Elevation 1",
        type: "elevation",
      },
    ],
    
    // NO upgradeOptions - no upgrades available for this plan
  },

  // -----------------------------------------
  // PLAN 2: The Sterling (Lot A - 7500) - WITH LOFT OPTION
  // -----------------------------------------
  {
    id: "the-sterling",
    name: "The Sterling",
    ogName: null,
    slug: "the-sterling",
    
    lotSize: 7500,
    sqft: 2212,
    houseWidth: "51'9\"",
    
    beds: 3,
    baths: 2,
    garage: 2,
    hasLoft: true,
    
    basePrice: 395000,
    
    description:
      "The Sterling combines elegance with functionality. This well-appointed home offers generous living spaces and modern conveniences throughout.",
    
    highlights: [
      "Open floor plan design",
      "Large owner's suite",
      "Gourmet kitchen with pantry",
      "Dedicated laundry room",
      "Optional loft addition available",
    ],
    
    images: [
      {
        src: SterlingExterior,
        alt: "The Sterling - Elevation",
        type: "elevation",
      },
      {
        src: SterlingElevation1,
        alt: "The Sterling - Elevation 1",
        type: "elevation",
      },
      {
        src: SterlingElevation2,
        alt: "The Sterling - Elevation 2",
        type: "elevation",
      },
    ],
    
    // ONLY upgrade option: Loft
    upgradeOptions: [
      {
        id: "loft",
        name: "Loft Addition",
        description: "Convert bonus space to finished loft with additional living area",
        price: 18000,
      },
    ],
  },

  // -----------------------------------------
  // PLAN 3: Brookside (Lot B - 7500)
  // -----------------------------------------
  {
    id: "brookside",
    name: "Brookside",
    ogName: null,
    slug: "brookside",
    
    lotSize: 7500,
    sqft: 2327,
    houseWidth: "36'7\"",
    
    beds: 4,
    baths: 2.5,
    garage: 2,
    hasLoft: false,
    
    basePrice: 445000,
    
    description:
      "The Brookside offers a perfect balance of space and style. With four bedrooms and well-designed living areas, this home is ideal for growing families.",
    
    highlights: [
      "4 spacious bedrooms",
      "Open-concept main level",
      "Walk-in closets",
      "Upstairs laundry",
      "Private owner's suite",
    ],
    
    images: [
      {
        src: BrooksideExterior,
        alt: "Brookside - Elevation",
        type: "elevation",
      },
      {
        src: BrooksideElevation1,
        alt: "Brookside - Elevation 1",
        type: "elevation",
      },
    ],
    
    // NO upgradeOptions - no upgrades available for this plan
  },

  // -----------------------------------------
  // PLAN 4: Kirkwood (Lot B - 9000)
  // -----------------------------------------
  {
    id: "kirkwood",
    name: "Kirkwood",
    ogName: null,
    slug: "kirkwood",
    
    lotSize: 9000,
    sqft: 2696,
    houseWidth: "36'7\"",
    
    beds: 4,
    baths: 2.5,
    garage: 2,
    hasLoft: false,
    
    basePrice: 485000,
    
    description:
      "The Kirkwood delivers exceptional living space with thoughtful details throughout. This home offers room to grow with luxurious touches in every corner.",
    
    highlights: [
      "Generous room sizes",
      "Chef-inspired kitchen",
      "Luxurious owner's bath",
      "Flex space options",
      "Covered outdoor living",
    ],
    
    images: [
      {
        src: KirkwoodExterior,
        alt: "Kirkwood - Elevation",
        type: "elevation",
      },
      {
        src: KirkwoodElevation1,
        alt: "Kirkwood - Elevation 1",
        type: "elevation",
      },
      {
        src: KirkwoodElevation2,
        alt: "Kirkwood - Elevation 2",
        type: "elevation",
      },
    ],
    
    // NO upgradeOptions - no upgrades available for this plan
  },

  // -----------------------------------------
  // PLAN 5: Ingram (Lot B - 9000)
  // -----------------------------------------
  {
    id: "ingram",
    name: "Ingram",
    ogName: null,
    slug: "ingram",
    
    lotSize: 9000,
    sqft: 2705,
    houseWidth: "47'5\"",
    
    beds: 5,
    baths: 2.5,
    garage: 2,
    hasLoft: false,
    
    basePrice: 495000,
    
    description:
      "The Ingram offers maximum flexibility with five bedrooms. Whether you need home offices, guest rooms, or space for a large family, this home delivers.",
    
    highlights: [
      "5 bedrooms for ultimate flexibility",
      "Large great room",
      "Gourmet kitchen with butler's pantry",
      "Dual walk-in closets in owner's suite",
      "Main level guest suite option",
    ],
    
    images: [
      {
        src: IngramExterior,
        alt: "Ingram - Elevation",
        type: "elevation",
      },
      {
        src: IngramElevation1,
        alt: "Ingram - Elevation 1",
        type: "elevation",
      },
      {
        src: IngramElevation2,
        alt: "Ingram - Elevation 2",
        type: "elevation",
      },
    ],
    
    // NO upgradeOptions - no upgrades available for this plan
  },

  // -----------------------------------------
  // PLAN 6: The Riverbend (Lot B - 9000)
  // -----------------------------------------
  {
    id: "the-riverbend",
    name: "The Riverbend",
    ogName: null,
    slug: "the-riverbend",
    
    lotSize: 9000,
    sqft: 2924,
    houseWidth: "47'",
    
    beds: 4,
    baths: 2.5,
    garage: 2,
    hasLoft: false,
    
    basePrice: 525000,
    
    description:
      "The Riverbend is our premier home offering expansive living spaces and premium finishes. This home showcases the best of modern design and timeless elegance.",
    
    highlights: [
      "Nearly 3,000 sq ft of living space",
      "Impressive great room with high ceilings",
      "Gourmet kitchen with island",
      "Spa-inspired owner's suite",
      "Generous outdoor living space",
    ],
    
    images: [
      {
        src: RiverbendExterior,
        alt: "The Riverbend - Elevation",
        type: "elevation",
      },
      {
        src: RiverbendElevation1,
        alt: "The Riverbend - Elevation 1",
        type: "elevation",
      },
      {
        src: RiverbendElevation2,
        alt: "The Riverbend - Elevation 2",
        type: "elevation",
      },
    ],
    
    // NO upgradeOptions - no upgrades available for this plan
  },
];

// ===========================================
// HELPER FUNCTIONS
// ===========================================

/**
 * Get all plans for a specific lot size
 * @param {number} lotSize - Lot size in sq ft
 * @returns {Array} Filtered floor plans
 */
export function getPlansByLotSize(lotSize) {
  if (!lotSize) return floorPlans;
  return floorPlans.filter((plan) => plan.lotSize === lotSize);
}

/**
 * Get a single plan by ID or slug
 * @param {string} identifier - Plan ID or slug
 * @returns {Object|undefined} Floor plan object
 */
export function getPlanByIdOrSlug(identifier) {
  return floorPlans.find(
    (plan) => plan.id === identifier || plan.slug === identifier
  );
}

/**
 * Get all unique lot sizes from available plans
 * @returns {Array} Array of unique lot sizes
 */
export function getAvailableLotSizes() {
  const sizes = [...new Set(floorPlans.map((plan) => plan.lotSize))];
  return lotSizes.filter((lot) => sizes.includes(lot.value));
}

/**
 * Get the thumbnail image for a plan
 * @param {Object} plan - Floor plan object
 * @returns {Object} First image object
 */
export function getPlanThumbnail(plan) {
  return plan.images?.[0] || null;
}