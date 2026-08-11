"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { OUTDOOR_MARKETING_ITEMS } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Section from "@/components/ui/Section";
import {
  Plane,
  Maximize,
  Tv,
  Bus,
  Navigation,
  Newspaper,
  Bike,
  ShieldAlert,
  Zap,
  Radio,
  Truck,
  FileText,
  CheckCircle2,
} from "lucide-react";

const ICONS = [
  Plane,
  Maximize,
  Tv,
  Bus,
  Navigation,
  Newspaper,
  Bike,
  ShieldAlert,
  Zap,
  Radio,
  Truck,
  FileText,
];

// Real local campaign photography for all 12 Outdoor Marketing formats
const REAL_OUTDOOR_IMAGES: Record<string, string> = {
  "Airport Advertising": "/campaigns/mewar-tourism-cup_0.jpg",
  "Hoarding Advertising": "/campaigns/field-club-dandiya-2023-2025_0.jpg",
  "Theater Advertising": "/campaigns/makingudaipurproud_0.jpg",
  "Bus Advertising": "/campaigns/udaipur-winter-carnival_0.jpg",
  "Auto Hood Advertising": "/campaigns/field-club-dandiya-2023-2025_3.jpg",
  "Newspaper Advertising": "/campaigns/makingudaipurproud_3.jpg",
  "Tri-Cycle Advertising": "/campaigns/hbf_0.jpg",
  "No Parking Board Advertising": "/campaigns/tiecon-2023-and-2025_0.jpg",
  "Pole Advertising": "/campaigns/udaipur-tea-fest_0.jpg",
  "Radio Advertising": "/campaigns/the-greatestest-denim-fest_0.jpg",
  "Mobile Van Advertising": "/campaigns/udaipur-winter-carnival_4.jpg",
  "Newspaper Pamphlet Insert Advertising": "/campaigns/mewar-tourism-cup_3.jpg",
};

// High-impact placement features for all 12 Outdoor Marketing formats
const OUTDOOR_DETAILS: Record<string, string[]> = {
  "Airport Advertising": [
    "Maharana Pratap Airport Lounges",
    "Baggage Conveyor LED Screens",
    "High-Net-Worth Passenger Reach",
  ],
  "Hoarding Advertising": [
    "Prime Highway Junction Billboards",
    "Arterial Road High-Traffic Sites",
    "Illuminated Night-lit Displays",
  ],
  "Theater Advertising": [
    "PVR & Cinepolis Cinema Screens",
    "Pre-Movie On-Screen Slides",
    "Lobby Canopy & Ticket Banners",
  ],
  "Bus Advertising": [
    "Full RSRTC & City Bus Wraps",
    "Side Banners & Back Wraps",
    "Mass Urban Commuter Reach",
  ],
  "Auto Hood Advertising": [
    "High-Frequency City Auto Banners",
    "High-Density Market Route Banners",
    "Cost-Effective Local Reach",
  ],
  "Newspaper Advertising": [
    "Front Page Front-Jacket Banners",
    "Dainik Bhaskar & Patrika Display",
    "High-Credibility Reader Reach",
  ],
  "Tri-Cycle Advertising": [
    "Eco-Friendly Mobile Banners",
    "Narrow Market Street Outreach",
    "Targeted Neighborhood Campaigns",
  ],
  "No Parking Board Advertising": [
    "Residential & Commercial Gates",
    "Hyper-Local Daily Footfall Impact",
    "High-Retention Street Level Ads",
  ],
  "Pole Advertising": [
    "Street Light Pole Kiosks",
    "Consecutive Avenue Repetition",
    "Major Traffic Corridor Placement",
  ],
  "Radio Advertising": [
    "94.3 FM Prime-Time Audio Jingles",
    "Popular RJ Mentions & Contests",
    "City-Wide Driver & Home Listeners",
  ],
  "Mobile Van Advertising": [
    "High-Brightness Outdoor LED Screens",
    "Interactive Sound System Roadshows",
    "Custom Event & District Routes",
  ],
  "Newspaper Pamphlet Insert Advertising": [
    "Direct Morning Doorstep Delivery",
    "Pincode-Specific Household Target",
    "High Response Rate Promotional Banners",
  ],
};

export default function OutdoorMarketingSection() {
  return (
    <Section id="outdoor" className="bg-surface-light border-b border-surface-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-brand-tint text-brand text-xs font-bold uppercase tracking-wider">
            Outdoor Media
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
            Outdoor Marketing
          </h2>
          <p className="text-ink-body text-base max-w-2xl mx-auto">
            High-impact transit, billboard, cinema, and aerial placement media solutions across Rajasthan.
          </p>
        </ScrollReveal>

        {/* 12 Outdoor Media Cards - Horizontal Snap Scroll on Mobile/Tablet + Responsive Grid on Desktop */}
        <div className="flex md:grid md:grid-cols-3 xl:grid-cols-4 gap-6 overflow-x-auto pb-4 snap-x-container no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {OUTDOOR_MARKETING_ITEMS.map((item, index) => {
            const Icon = ICONS[index] || Maximize;
            const points = OUTDOOR_DETAILS[item] || [];
            const realImg = REAL_OUTDOOR_IMAGES[item] || "/campaigns/makingudaipurproud_0.jpg";

            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
                whileHover={{ y: -6 }}
                className="snap-x-item w-[280px] sm:w-[320px] md:w-auto shrink-0 rounded-3xl bg-white border border-surface-mid hover:border-brand/40 shadow-sm hover:shadow-2xl transition-all duration-300 group overflow-hidden flex flex-col justify-between"
              >
                {/* Real Event Photo Header */}
                <div className="relative h-44 w-full bg-brand-dark overflow-hidden">
                  <Image
                    src={realImg}
                    alt={`${item} real photography`}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30" />
                  
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <div className="w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md text-brand flex items-center justify-center shadow-md">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-ink shadow-sm">
                      #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <h3 className="font-display text-base font-bold text-ink group-hover:text-brand transition-colors leading-snug">
                    {item}
                  </h3>

                  {/* Placement Features */}
                  <div className="pt-2 border-t border-surface-mid/60 space-y-1.5">
                    {points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2 text-xs font-medium text-ink-body"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand shrink-0" />
                        <span className="line-clamp-1">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </Section>
  );
}
