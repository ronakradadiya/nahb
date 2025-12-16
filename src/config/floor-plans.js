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
export const lotSizes = [
  {
    id: "7500",
    label: "7,500 sq ft Lot",
    value: 7500,
  },
  {
    id: "9000",
    label: "9,000 sq ft Lot",
    value: 9000,
  },
  // Add more lot sizes as needed:
  // {
  //   id: "10000",
  //   label: "10,000 sq ft Lot",
  //   value: 10000,
  // },
];

// ===========================================
// FLOOR PLANS - Add new plans here
// ===========================================
export const floorPlans = [
  // -----------------------------------------
  // PLAN 1: The Aspen (WITH upgrade options)
  // -----------------------------------------
  {
    id: "the-aspen",
    name: "The Aspen",
    ogName: "Model A-100",
    slug: "the-aspen",
    
    // Lot & Sizing
    lotSize: 7500,
    sqft: 2450,
    houseWidth: "52 ft",
    
    // Room Configuration
    beds: 4,
    baths: 3,
    garage: 2,
    hasLoft: true,
    
    // Pricing
    basePrice: 425000,
    
    // Description
    description:
      "The Aspen offers an open-concept living space perfect for modern families. Featuring a spacious great room, gourmet kitchen with island, and a luxurious owner's suite on the main level.",
    
    // Features Highlights
    highlights: [
      "Open-concept great room",
      "Gourmet kitchen with island",
      "Main level owner's suite",
      "Optional loft space",
      "Covered patio",
    ],
    
    // Images - Add/remove as needed
    // First image is used as thumbnail
    images: [
      {
        src: "/assets/plans/the-aspen/exterior.jpg",
        alt: "The Aspen - Exterior View",
        type: "exterior",
      },
      {
        src: "/assets/plans/the-aspen/great-room.jpg",
        alt: "The Aspen - Great Room",
        type: "interior",
      },
      {
        src: "/assets/plans/the-aspen/kitchen.jpg",
        alt: "The Aspen - Kitchen",
        type: "interior",
      },
      {
        src: "/assets/plans/the-aspen/owners-suite.jpg",
        alt: "The Aspen - Owner's Suite",
        type: "interior",
      },
      {
        src: "/assets/plans/the-aspen/floor-plan.jpg",
        alt: "The Aspen - Floor Plan",
        type: "floorplan",
      },
    ],
    
    // Upgrade Options (OPTIONAL - per plan)
    // Omit this array entirely if plan has no upgrade options
    upgradeOptions: [
      {
        id: "loft",
        name: "Loft Addition",
        description: "Convert bonus space to finished loft with bedroom and bath",
        price: 18000,
      },
      {
        id: "covered-patio-extension",
        name: "Extended Covered Patio",
        description: "Extend covered patio by 8 feet",
        price: 8500,
      },
      {
        id: "three-car-garage",
        name: "3-Car Garage",
        description: "Upgrade from 2-car to 3-car garage",
        price: 22000,
      },
      {
        id: "fireplace",
        name: "Gas Fireplace",
        description: "Add gas fireplace to great room",
        price: 4500,
      },
    ],
  },

  // -----------------------------------------
  // PLAN 2: The Birch (WITH upgrade options)
  // -----------------------------------------
  {
    id: "the-birch",
    name: "The Birch",
    ogName: "Model B-200",
    slug: "the-birch",
    
    lotSize: 7500,
    sqft: 2100,
    houseWidth: "48 ft",
    
    beds: 3,
    baths: 2.5,
    garage: 2,
    hasLoft: false,
    
    basePrice: 385000,
    
    description:
      "The Birch is a thoughtfully designed home that maximizes space efficiency. Perfect for growing families or those who love to entertain.",
    
    highlights: [
      "Efficient use of space",
      "Large kitchen pantry",
      "Upstairs laundry",
      "Spa-inspired owner's bath",
      "Flex room option",
    ],
    
    images: [
      {
        src: "/assets/plans/the-birch/exterior.jpg",
        alt: "The Birch - Exterior View",
        type: "exterior",
      },
      {
        src: "/assets/plans/the-birch/living-room.jpg",
        alt: "The Birch - Living Room",
        type: "interior",
      },
      {
        src: "/assets/plans/the-birch/kitchen.jpg",
        alt: "The Birch - Kitchen",
        type: "interior",
      },
      {
        src: "/assets/plans/the-birch/floor-plan.jpg",
        alt: "The Birch - Floor Plan",
        type: "floorplan",
      },
    ],
    
    upgradeOptions: [
      {
        id: "sunroom",
        name: "Sunroom Addition",
        description: "Add a beautiful sunroom off the dining area",
        price: 15000,
      },
      {
        id: "gourmet-kitchen",
        name: "Gourmet Kitchen Upgrade",
        description: "Upgraded appliances and expanded island",
        price: 12000,
      },
    ],
  },

  // -----------------------------------------
  // PLAN 3: The Cedar (WITHOUT upgrade options)
  // -----------------------------------------
  {
    id: "the-cedar",
    name: "The Cedar",
    ogName: "Model C-300",
    slug: "the-cedar",
    
    lotSize: 9000,
    sqft: 3200,
    houseWidth: "62 ft",
    
    beds: 5,
    baths: 4,
    garage: 3,
    hasLoft: true,
    
    basePrice: 575000,
    
    description:
      "The Cedar is our flagship home, offering generous living spaces and premium finishes throughout. Ideal for large families who desire luxury and comfort.",
    
    highlights: [
      "Grand two-story foyer",
      "Chef's kitchen with butler's pantry",
      "Main level guest suite",
      "Upstairs game room",
      "3-car tandem garage",
    ],
    
    images: [
      {
        src: "/assets/plans/the-cedar/exterior.jpg",
        alt: "The Cedar - Exterior View",
        type: "exterior",
      },
      {
        src: "/assets/plans/the-cedar/foyer.jpg",
        alt: "The Cedar - Grand Foyer",
        type: "interior",
      },
      {
        src: "/assets/plans/the-cedar/kitchen.jpg",
        alt: "The Cedar - Chef's Kitchen",
        type: "interior",
      },
      {
        src: "/assets/plans/the-cedar/game-room.jpg",
        alt: "The Cedar - Game Room",
        type: "interior",
      },
      {
        src: "/assets/plans/the-cedar/floor-plan.jpg",
        alt: "The Cedar - Floor Plan",
        type: "floorplan",
      },
    ],
    
    // NO upgradeOptions - this plan doesn't have any
  },

  // -----------------------------------------
  // PLAN 4: The Douglas (9000 lot, WITH options)
  // -----------------------------------------
  {
    id: "the-douglas",
    name: "The Douglas",
    ogName: "Model D-400",
    slug: "the-douglas",
    
    lotSize: 9000,
    sqft: 2850,
    houseWidth: "58 ft",
    
    beds: 4,
    baths: 3.5,
    garage: 3,
    hasLoft: false,
    
    basePrice: 525000,
    
    description:
      "The Douglas combines elegance with functionality, featuring an impressive owner's suite, spacious secondary bedrooms, and a versatile flex space.",
    
    highlights: [
      "Impressive owner's suite",
      "Jack-and-Jill bathroom",
      "Versatile flex space",
      "Mud room with lockers",
      "Covered outdoor living",
    ],
    
    images: [
      {
        src: "/assets/plans/the-douglas/exterior.jpg",
        alt: "The Douglas - Exterior View",
        type: "exterior",
      },
      {
        src: "/assets/plans/the-douglas/owners-suite.jpg",
        alt: "The Douglas - Owner's Suite",
        type: "interior",
      },
      {
        src: "/assets/plans/the-douglas/kitchen.jpg",
        alt: "The Douglas - Kitchen",
        type: "interior",
      },
      {
        src: "/assets/plans/the-douglas/floor-plan.jpg",
        alt: "The Douglas - Floor Plan",
        type: "floorplan",
      },
    ],
    
    upgradeOptions: [
      {
        id: "outdoor-kitchen",
        name: "Outdoor Kitchen",
        description: "Built-in grill, refrigerator, and prep area",
        price: 28000,
      },
      {
        id: "pool-prep",
        name: "Pool Preparation Package",
        description: "Plumbing and electrical prep for future pool",
        price: 7500,
      },
      {
        id: "smart-home",
        name: "Smart Home Package",
        description: "Integrated smart home system with hub",
        price: 9500,
      },
    ],
  },

  // -----------------------------------------
  // PLAN 5: The Elm (7500 lot, minimal options)
  // -----------------------------------------
  {
    id: "the-elm",
    name: "The Elm",
    ogName: "Model E-500",
    slug: "the-elm",
    
    lotSize: 7500,
    sqft: 1850,
    houseWidth: "44 ft",
    
    beds: 3,
    baths: 2,
    garage: 2,
    hasLoft: false,
    
    basePrice: 345000,
    
    description:
      "The Elm is an elegant starter home that doesn't compromise on style. Smart design choices create a spacious feel throughout.",
    
    highlights: [
      "Smart space utilization",
      "Open kitchen/dining",
      "Private owner's retreat",
      "Low-maintenance living",
      "Energy-efficient design",
    ],
    
    images: [
      {
        src: "/assets/plans/the-elm/exterior.jpg",
        alt: "The Elm - Exterior View",
        type: "exterior",
      },
      {
        src: "/assets/plans/the-elm/interior.jpg",
        alt: "The Elm - Interior",
        type: "interior",
      },
      {
        src: "/assets/plans/the-elm/floor-plan.jpg",
        alt: "The Elm - Floor Plan",
        type: "floorplan",
      },
    ],
    
    upgradeOptions: [
      {
        id: "solar-ready",
        name: "Solar Ready Package",
        description: "Pre-wiring and roof prep for solar panels",
        price: 3500,
      },
    ],
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