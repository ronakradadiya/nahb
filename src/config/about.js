/**
 * About Page Configuration
 * Company information and history
 */

export const aboutConfig = {
  // Hero Section
  hero: {
    title: "Building Dreams, Creating Communities",
    subtitle:
      "Silverwood Heights represents our commitment to quality craftsmanship and timeless design.",
    image: "/assets/about/hero.jpg",
  },

  // Story Section
  story: {
    title: "Our Story",
    content: [
      "Silverwood Heights was born from a vision to create homes that blend architectural excellence with sustainable living. Our team of experienced builders, architects, and designers work together to deliver homes that exceed expectations.",
      "Every detail matters at Silverwood Heights. From the initial design phase to the final walkthrough, we maintain the highest standards of quality and craftsmanship. Our homes are not just structures—they are foundations for memories.",
      "We believe that a home should reflect the unique personality of its owners while providing comfort, efficiency, and lasting value. That's why we offer customizable floor plans and premium upgrade options to make your dream home a reality.",
    ],
  },

  // Values Section
  values: {
    title: "Our Values",
    items: [
      {
        id: "quality",
        title: "Quality Craftsmanship",
        description:
          "We use only premium materials and employ skilled craftsmen who take pride in their work.",
        icon: "hammer",
      },
      {
        id: "sustainability",
        title: "Sustainable Building",
        description:
          "Energy-efficient designs and eco-friendly materials reduce your footprint and utility costs.",
        icon: "leaf",
      },
      {
        id: "integrity",
        title: "Integrity",
        description:
          "Transparent pricing, honest communication, and promises kept—every step of the way.",
        icon: "handshake",
      },
      {
        id: "innovation",
        title: "Innovation",
        description:
          "We embrace modern building techniques and smart home technology for better living.",
        icon: "lightbulb",
      },
    ],
  },

  // Stats Section
  stats: [
    { label: "Homes Built", value: "500+" },
    { label: "Years Experience", value: "25" },
    { label: "Customer Satisfaction", value: "98%" },
    { label: "Awards Won", value: "15" },
  ],

  // CTA Section
  cta: {
    title: "Ready to Find Your Dream Home?",
    description:
      "Explore our floor plans and discover the perfect home for your family.",
    buttonText: "View Floor Plans",
    buttonLink: "/floor-plans",
  },
};