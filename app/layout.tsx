import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

// TODO: replace with the site's real production domain once the custom
// domain is connected — this powers canonical URLs and Open Graph tags.
const siteUrl = "https://serenityvastukala.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Serenity Vastukala — Interior Designer in Jogeshwari West, Mumbai",
    template: "%s",
  },
  description:
    "Serenity Vastukala is a luxury interior design studio in Jogeshwari West, Mumbai, designing residences across Mumbai around light, material and the quiet rituals of daily life.",
  keywords: [
    "interior designer Mumbai",
    "interior designer Jogeshwari West",
    "interior design studio Mumbai",
    "luxury interior design Mumbai",
    "home interior designer Jogeshwari West",
    "vastu interior design Mumbai",
  ],
  openGraph: {
    title: "Serenity Vastukala — Interior Designer in Jogeshwari West, Mumbai",
    description:
      "Homes designed to feel like you. Interior architecture, styling and end-to-end execution in Jogeshwari West, Mumbai.",
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Serenity Vastukala",
  },
  alternates: {
    canonical: siteUrl,
  },
};

// Structured data so Google understands this as a local business in
// Jogeshwari West, Mumbai — helps with map-pack and "near me" style results.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InteriorDesigner",
  name: "Serenity Vastukala",
  image: `${siteUrl}/og-image.jpg`,
  url: siteUrl,
  telephone: "+91-79779-53526",
  email: "serenityvastukala@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jogeshwari West",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Mumbai",
  },
  priceRange: "₹₹₹",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
