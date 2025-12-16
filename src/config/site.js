/**
 * Site Configuration
 * Global site settings and metadata
 */

export const siteConfig = {
  name: "Silver Wood Heights",
  tagline: "Luxury Single Family Homes",
  description:
    "Discover premium single family homes at Silver Wood Heights. Thoughtfully designed floor plans with customizable upgrade options for modern living.",
  url: "https://silverwoodheights.com",
  
  // Contact Information
  contact: {
    phone: "(555) 123-4567",
    email: "info@silverwoodheights.com",
    address: {
      street: "123 Silver Wood Drive",
      city: "Phoenix",
      state: "AZ",
      zip: "85001",
    },
  },

  // Sales Center Hours
  hours: {
    weekdays: "10:00 AM - 6:00 PM",
    saturday: "10:00 AM - 5:00 PM",
    sunday: "12:00 PM - 5:00 PM",
  },

  // Social Media Links
  social: {
    facebook: "https://facebook.com/silverwoodheights",
    instagram: "https://instagram.com/silverwoodheights",
    pinterest: "https://pinterest.com/silverwoodheights",
  },

  // SEO Defaults
  seo: {
    titleTemplate: "%s | Silver Wood Heights",
    defaultTitle: "Silver Wood Heights | Luxury Single Family Homes",
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Silver Wood Heights",
    },
  },
};