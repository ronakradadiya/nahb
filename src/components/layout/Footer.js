/**
 * Footer Component
 * 
 * Site footer with links and branding
 */

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared";
import { siteConfig } from "@/config/site";
import { footerNavigation } from "@/config/navigation";

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div>
              <h4 className="font-display text-xl font-semibold text-white mb-4">
                {siteConfig.name}
              </h4>
              <p className="text-white/70 text-sm leading-relaxed max-w-md">
                {siteConfig.description}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg font-semibold text-white mb-4">
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
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <Container>
          <p className="text-sm text-white/50 text-center">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;