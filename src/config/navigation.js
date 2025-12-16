/**
 * Navigation Configuration
 * Define all navigation links for header and footer
 */

export const mainNavigation = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "floor-plans",
    label: "Floor Plans",
    href: "/floor-plans",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
  },
  {
    id: "features-options",
    label: "Features & Options",
    href: "/features-options",
  },
];

export const footerNavigation = {
  // Quick Links Section
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Floor Plans", href: "/floor-plans" },
    { label: "About Us", href: "/about" },
    { label: "Features & Options", href: "/features-options" },
  ],

  // Legal Links
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Accessibility", href: "/accessibility" },
  ],
};