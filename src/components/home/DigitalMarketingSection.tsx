"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DIGITAL_MARKETING_ITEMS } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { TrendingUp, Share2, Globe, Award, Video, Users, CheckCircle2 } from "lucide-react";

const ICONS = [TrendingUp, Share2, Globe, Award, Video, Users];

// Related showcase images shown on tile hover (replacing default text content)
const HOVER_IMAGES: Record<string, string> = {
  "Brand strategy / Performance marketing":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  "Digital marketing / Social media marketing":
    "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
  "Website Development":
    "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop",
  "Political Campaign/ Narrative Building":
    "/campaigns/makingudaipurproud_0.jpg",
  "Content Marketing / Content Creation":
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
  "Influencer Marketing":
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
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
    <section id="services" className="py-16 sm:py-20 bg-white border-b border-surface-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-brand-tint text-brand text-xs font-bold uppercase tracking-wider">
            Digital Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink tracking-tight">
            Digital Marketing
          </h2>
        </ScrollReveal>

        {/* 6 Cards with Hover Content Swap (Text hides, Image replaces on hover) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIGITAL_MARKETING_ITEMS.map((item, index) => {
            const Icon = ICONS[index] || TrendingUp;
            const points = DIGITAL_MARKETING_DETAILS[item] || [];
            const hoverImg = HOVER_IMAGES[item];

            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="relative p-6 sm:p-8 rounded-3xl bg-surface-light border border-surface-mid hover:border-brand/40 shadow-sm hover:shadow-2xl transition-all duration-300 group overflow-hidden flex flex-col justify-between cursor-pointer min-h-[300px]"
              >
                
                {/* DEFAULT STATE: Text Content & Key Points (fades out on hover) */}
                <div className="relative z-10 space-y-4 transition-opacity duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
                  
                  {/* Top Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-brand-tint text-brand flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-white text-ink-muted border border-surface-mid">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-ink">
                    {item}
                  </h3>

                  {/* Key Points */}
                  <div className="pt-3 border-t border-surface-mid/60 space-y-2">
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

                {/* HOVER STATE: Full Tile Image Swap (reveals on hover, replacing content) */}
                {hoverImg && (
                  <div className="absolute inset-0 z-20 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400 ease-out flex flex-col justify-between p-4 bg-brand">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner">
                      <Image
                        src={hoverImg}
                        alt={item}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-brand-light block">
                            Service Showcase 0{index + 1}
                          </span>
                          <h4 className="font-display font-bold text-base text-white">
                            {item}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
