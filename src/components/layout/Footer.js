/**
 * Footer Component
 * 
 * Site footer with links and contact info
 */

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container, Icon } from "@/components/shared";
import { siteConfig } from "@/config/site";
import { footerNavigation } from "@/config/navigation";
import { formatPhone, formatAddress } from "@/lib/formatters";

export function Footer({ className, ...props }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn("bg-ebony text-white", className)}
      {...props}
    >
      {/* Main Footer */}
      <div className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-reseda rounded flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 21V9L12 3L21 9V21H15V14H9V21H3Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-display text-xl font-semibold">
                  {siteConfig.name}
                </span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                {siteConfig.description}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg font-medium mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {footerNavigation.quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-sage transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display text-lg font-medium mb-4">
                Contact Us
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <Icon name="location" size={18} className="text-sage flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">
                    {formatAddress(siteConfig.contact.address)}
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Icon name="phone" size={18} className="text-sage flex-shrink-0" />
                  <Link
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-white/70 hover:text-sage transition-colors"
                  >
                    {formatPhone(siteConfig.contact.phone)}
                  </Link>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Icon name="email" size={18} className="text-sage flex-shrink-0" />
                  <Link
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-white/70 hover:text-sage transition-colors"
                  >
                    {siteConfig.contact.email}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-display text-lg font-medium mb-4">
                Sales Center Hours
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span>{siteConfig.hours.weekdays}</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>{siteConfig.hours.saturday}</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>{siteConfig.hours.sunday}</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/50">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              {footerNavigation.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-sage transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;