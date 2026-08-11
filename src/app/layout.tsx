import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/ui/WhatsAppFAB";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { BRAND } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Praroop Media - Marketing Agency in Udaipur for Branding & Web",
  description:
    "Praroop Media is a marketing agency in Udaipur offering expert branding, digital marketing, airport & hoarding advertising, and web development services to elevate your business presence online.",
  keywords: [
    "Praroop Media",
    "marketing agency in Udaipur",
    "digital marketing Udaipur",
    "outdoor advertising Udaipur",
    "hoarding advertising Udaipur",
    "branding agency Rajasthan",
    "website development Udaipur",
  ],
  authors: [{ name: "Praaroop Media" }],
  openGraph: {
    title: "Praroop Media - Marketing Agency in Udaipur for Branding & Web",
    description:
      "Praroop Media is a marketing agency in Udaipur offering expert branding, digital marketing, and web development services to elevate your business presence online.",
    url: "https://praaroop.com/",
    siteName: "Praaroop Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praroop Media - Marketing Agency in Udaipur for Branding & Web",
    description:
      "Praroop Media is a marketing agency in Udaipur offering expert branding, digital marketing, and web development services to elevate your business presence online.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className={`${inter.variable} ${syne.variable}`}>
      <head>
        {/* JSON-LD Schema for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: BRAND.name,
              image: "https://praaroop.com/wp-content/uploads/2025/12/praaroop-Media-and-Adv-1.png",
              url: "https://praaroop.com/",
              telephone: BRAND.phone,
              priceRange: "₹₹",
              address: {
                "@type": "PostalAddress",
                streetAddress: "414, 4th Floor, City Centre Building, Ashok Nagar",
                addressLocality: "Udaipur",
                postalCode: "313001",
                addressRegion: "Rajasthan",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 24.5854,
                longitude: 73.7125,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "09:00",
                closes: "19:00",
              },
              sameAs: [
                BRAND.socials.facebook,
                BRAND.socials.instagram,
                BRAND.socials.linkedin,
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-ink antialiased">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1 pt-24 md:pt-28">{children}</main>
          <Footer />
          <WhatsAppFAB />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
