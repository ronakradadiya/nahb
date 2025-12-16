/**
 * Root Layout
 * 
 * Main application layout with header and footer
 * Applies global styles and fonts
 */

import { Inter, Playfair_Display } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import { siteConfig } from "@/config/site";
import "./globals.css";

// Primary font - Clean sans-serif for body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Display font - Elegant serif for headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// Metadata
export const metadata = {
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.description,
  openGraph: {
    type: siteConfig.seo.openGraph.type,
    locale: siteConfig.seo.openGraph.locale,
    siteName: siteConfig.seo.openGraph.siteName,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-bone text-ebony antialiased">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}