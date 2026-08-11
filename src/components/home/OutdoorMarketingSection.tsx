"use client";

import { motion } from "framer-motion";
import { OUTDOOR_MARKETING_ITEMS } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
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
    "Lobby Canopy & Ticket Counter Banners",
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
    "High Response Rate Promotional Flys",
  ],
};

export default function OutdoorMarketingSection() {
  return (
    <section className="py-20 bg-surface-light border-b border-surface-mid">
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

        {/* 12 Professional Spacious Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {OUTDOOR_MARKETING_ITEMS.map((item, index) => {
            const Icon = ICONS[index] || Maximize;
            const points = OUTDOOR_DETAILS[item] || [];

            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
                whileHover={{ y: -6 }}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-surface-mid hover:border-brand/40 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between cursor-pointer min-h-[260px]"
              >
                <div className="space-y-4">
                  
                  {/* Top Icon & Number Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-brand-tint text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-surface-light text-ink-muted border border-surface-mid">
                      #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-ink group-hover:text-brand transition-colors duration-300 leading-snug">
                    {item}
                  </h3>

                  {/* Placement Features */}
                  <div className="pt-3 border-t border-surface-mid/60 space-y-2">
                    {points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2 text-xs font-medium text-ink-body group-hover:text-ink transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
