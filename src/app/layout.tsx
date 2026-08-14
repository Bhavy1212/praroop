import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import WhatsAppFAB from "@/components/ui/WhatsAppFAB";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import { BRAND } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const scriptFont = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Praroop Media - 360° Marketing & Branding Agency in Udaipur",
  description:
    "Praroop Media is Udaipur's premier 360° marketing agency offering strategic branding, performance marketing, outdoor hoardings, airport advertising, and modern web development.",
  keywords: [
    "Praroop Media",
    "360 marketing agency Udaipur",
    "branding agency Udaipur",
    "outdoor advertising Udaipur",
    "hoarding advertising Udaipur",
    "airport advertising Rajasthan",
    "website development Udaipur",
  ],
  authors: [{ name: "Praaroop Media" }],
  openGraph: {
    title: "Praroop Media - 360° Marketing & Branding Agency in Udaipur",
    description:
      "Praroop Media is Udaipur's premier 360° marketing agency offering strategic branding, performance marketing, outdoor hoardings, and web development.",
    url: "https://praaroop.com/",
    siteName: "Praaroop Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praroop Media - 360° Marketing & Branding Agency in Udaipur",
    description:
      "Praroop Media is Udaipur's premier 360° marketing agency offering strategic branding, performance marketing, and outdoor advertising.",
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
    <html lang="en-US" className={`${inter.variable} ${displayFont.variable} ${scriptFont.variable}`}>
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
      <body className="min-h-screen flex flex-col font-sans bg-[#0A0A0A] text-white antialiased selection:bg-[#0080CB] selection:text-white">
        <SmoothScrollProvider>
          <ScrollProgressBar />
          <CustomCursor />
          <Navbar />
          <main className="flex-1 pt-0">{children}</main>
          <WhatsAppFAB />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
