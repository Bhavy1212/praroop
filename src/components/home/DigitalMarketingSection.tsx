"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DIGITAL_MARKETING_ITEMS } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Section from "@/components/ui/Section";
import { TrendingUp, Share2, Globe, Award, Video, Users, CheckCircle2 } from "lucide-react";

const ICONS = [TrendingUp, Share2, Globe, Award, Video, Users];

// Original relevant service tile graphics from live site
const DIGITAL_MARKETING_IMAGES: Record<string, string> = {
  "Brand strategy / Performance marketing": "/services/analysis.webp",
  "Digital marketing / Social media marketing": "/services/social-media.webp",
  "Website Development": "/services/app-development.webp",
  "Political Campaign/ Narrative Building": "/services/banner.webp",
  "Content Marketing / Content Creation": "/services/content-creation.webp",
  "Influencer Marketing": "/services/influencer.webp",
};

// Key points for each of the 6 exact Digital Marketing topics
const DIGITAL_MARKETING_DETAILS: Record<string, string[]> = {
  "Brand strategy / Performance marketing": [
    "Targeted ROI & Conversion Funnels",
    "Brand Positioning & Identity",
    "Data-Driven Audience Segmentation",
  ],
  "Digital marketing / Social media marketing": [
    "Meta & Google Performance Ads",
    "Social Media Account Growth",
    "Community Engagement & Analytics",
  ],
  "Website Development": [
    "High-Speed Responsive Websites",
    "Modern UI/UX & Glassmorphism Design",
    "Search Engine Optimization (SEO)",
  ],
  "Political Campaign/ Narrative Building": [
    "Constituency Sentiment Analytics",
    "Digital War Room & Voter Outreach",
    "Strategic Narrative Building",
  ],
  "Content Marketing / Content Creation": [
    "High-Converting Ad Copy & Scripts",
    "Visual Storytelling & Video Reels",
    "Brand Identity & Graphic Assets",
  ],
  "Influencer Marketing": [
    "Regional Rajasthan Creator Network",
    "Brand Ambassador Partnerships",
    "High-Impact Sponsored Reach",
  ],
};

export default function DigitalMarketingSection() {
  return (
    <Section id="services" className="bg-white border-b border-surface-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-brand-tint text-brand text-xs font-bold uppercase tracking-wider">
            Digital Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
            Digital Marketing
          </h2>
          <p className="text-ink-body text-base max-w-2xl mx-auto">
            Comprehensive digital marketing, brand positioning, web development, and creator campaign solutions.
          </p>
        </ScrollReveal>

        {/* 6 Cards with Original Relevant Service Tile Imagery & Hover Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIGITAL_MARKETING_ITEMS.map((item, index) => {
            const Icon = ICONS[index] || TrendingUp;
            const points = DIGITAL_MARKETING_DETAILS[item] || [];
            const tileImg = DIGITAL_MARKETING_IMAGES[item] || "/services/analysis.webp";

            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="relative rounded-3xl bg-surface-light border border-surface-mid hover:border-brand/40 shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden flex flex-col justify-between"
              >
                {/* Relevant Service Graphic Header */}
                <div className="relative h-48 w-full overflow-hidden bg-brand-dark/5 p-4 flex items-center justify-center">
                  <Image
                    src={tileImg}
                    alt={`${item} service tile`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-light via-transparent to-black/10" />
                  
                  {/* Top Badge Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-brand flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-ink shadow-sm border border-white/50">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="font-display text-xl font-bold text-ink group-hover:text-brand transition-colors">
                      {item}
                    </h3>

                    {/* Key Service Features */}
                    <div className="pt-2 border-t border-surface-mid/60 space-y-2">
                      {points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-2 text-xs font-medium text-ink-body"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
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
