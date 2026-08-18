"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Tag, Sparkles } from "lucide-react";
import { CAMPAIGN_POSTS } from "@/lib/data";

// 9 Rich Campaign Items distributed across 3 vertical columns
const COL_1_CARDS = [
  CAMPAIGN_POSTS[0], // Field Club Dandiya
  CAMPAIGN_POSTS[3], // Mewar Tourism Cup
  CAMPAIGN_POSTS[6], // Udaipur Tea Fest
];

const COL_2_CARDS = [
  CAMPAIGN_POSTS[1], // #MakingUdaipurProud
  CAMPAIGN_POSTS[4], // HBF
  CAMPAIGN_POSTS[7], // Udaipur Winter Carnival
];

const COL_3_CARDS = [
  CAMPAIGN_POSTS[2], // The Greatest Denim Fest
  CAMPAIGN_POSTS[5], // TiEcon 2023 & 2025
  {
    slug: "field-club-dandiya-2023-2025",
    title: "Field Club Dandiya Nights",
    category: "Outdoor & Stage",
    date: "Annual Flagship",
    image: CAMPAIGN_POSTS[0].gallery[1] || CAMPAIGN_POSTS[0].image,
    description:
      "Illuminated entry gate archways, stage backdrop, and ground activation in Udaipur.",
  },
];

export default function CampaignsGridShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-6">
      {/* ── 3-Column Staggered Layout (Compact Cards with Middle Column Downward Offset) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-7 items-start">
        
        {/* ── COLUMN 1 (Left: Top Level) ── */}
        <div className="space-y-4 sm:space-y-6 flex flex-col">
          {COL_1_CARDS.map((post, idx) => (
            <CampaignCard key={`col1-${post.slug}-${idx}`} post={post} index={idx} />
          ))}
        </div>

        {/* ── COLUMN 2 (Middle: Shifted Downward) ── */}
        <div className="space-y-4 sm:space-y-6 flex flex-col lg:mt-16">
          {COL_2_CARDS.map((post, idx) => (
            <CampaignCard key={`col2-${post.slug}-${idx}`} post={post} index={idx + 3} />
          ))}
        </div>

        {/* ── COLUMN 3 (Right: Top Level) ── */}
        <div className="space-y-4 sm:space-y-6 flex flex-col">
          {COL_3_CARDS.map((post, idx) => (
            <CampaignCard key={`col3-${post.slug}-${idx}`} post={post} index={idx + 6} />
          ))}
        </div>

      </div>
    </div>
  );
}

// ── Single Compact Campaign Card with Fully-Visible Image ──
function CampaignCard({
  post,
  index,
}: {
  post: {
    slug: string;
    title: string;
    category: string;
    image: string;
    description: string;
  };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: (index % 3) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full"
    >
      <Link
        href={`/${post.slug}/`}
        className="group relative h-[210px] sm:h-[240px] lg:h-[260px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,128,203,0.18)] border border-slate-200/90 bg-white block transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
      >
        {/* Full Image Container — 100% Fully Visible Graphic */}
        <div className="relative w-full h-full p-2 sm:p-3 bg-white flex items-center justify-center overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-1 sm:p-1.5 transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        {/* Top Format Pill */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className="px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[#0F172A] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-2xs border border-slate-200">
            <Tag className="w-2.5 h-2.5 text-[#0080CB]" />
            <span>{post.category}</span>
          </span>
        </div>

        {/* ── Hover Reveal Overlay (Displays Name & CTA on Hover) ── */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5 z-20">
          <div className="space-y-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#0080CB] text-white text-[9px] font-bold uppercase tracking-widest">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Case Study</span>
            </div>

            <h3 className="text-base sm:text-lg font-black text-white font-display leading-tight drop-shadow-md line-clamp-1">
              {post.title}
            </h3>

            <p className="text-[11px] sm:text-xs text-slate-200 line-clamp-1 leading-snug font-normal">
              {post.description}
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 bg-white hover:bg-[#0080CB] text-[#0F172A] hover:text-white font-bold text-[11px] px-3.5 py-1.5 rounded-full transition-all shadow-md">
                <span>View Case Study</span>
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}