"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Tag, Sparkles } from "lucide-react";
import { CAMPAIGN_POSTS } from "@/lib/data";

// Flatten campaign showcase items including signature gallery hero shots
const ALL_SHOWCASE_CARDS = [
  // Column 1 items
  {
    id: "sc-1",
    slug: CAMPAIGN_POSTS[0].slug,
    title: CAMPAIGN_POSTS[0].title,
    category: CAMPAIGN_POSTS[0].category,
    image: CAMPAIGN_POSTS[0].image,
    description: CAMPAIGN_POSTS[0].description,
  },
  {
    id: "sc-2",
    slug: CAMPAIGN_POSTS[1].slug,
    title: CAMPAIGN_POSTS[1].title,
    category: CAMPAIGN_POSTS[1].category,
    image: CAMPAIGN_POSTS[1].image,
    description: CAMPAIGN_POSTS[1].description,
  },
  {
    id: "sc-3",
    slug: CAMPAIGN_POSTS[2].slug,
    title: CAMPAIGN_POSTS[2].title,
    category: CAMPAIGN_POSTS[2].category,
    image: CAMPAIGN_POSTS[2].image,
    description: CAMPAIGN_POSTS[2].description,
  },
  {
    id: "sc-4",
    slug: CAMPAIGN_POSTS[3].slug,
    title: CAMPAIGN_POSTS[3].title,
    category: CAMPAIGN_POSTS[3].category,
    image: CAMPAIGN_POSTS[3].image,
    description: CAMPAIGN_POSTS[3].description,
  },

  // Column 2 items
  {
    id: "sc-5",
    slug: CAMPAIGN_POSTS[4].slug,
    title: CAMPAIGN_POSTS[4].title,
    category: CAMPAIGN_POSTS[4].category,
    image: CAMPAIGN_POSTS[4].image,
    description: CAMPAIGN_POSTS[4].description,
  },
  {
    id: "sc-6",
    slug: CAMPAIGN_POSTS[5].slug,
    title: CAMPAIGN_POSTS[5].title,
    category: CAMPAIGN_POSTS[5].category,
    image: CAMPAIGN_POSTS[5].image,
    description: CAMPAIGN_POSTS[5].description,
  },
  {
    id: "sc-7",
    slug: CAMPAIGN_POSTS[6].slug,
    title: CAMPAIGN_POSTS[6].title,
    category: CAMPAIGN_POSTS[6].category,
    image: CAMPAIGN_POSTS[6].image,
    description: CAMPAIGN_POSTS[6].description,
  },
  {
    id: "sc-8",
    slug: CAMPAIGN_POSTS[7].slug,
    title: CAMPAIGN_POSTS[7].title,
    category: CAMPAIGN_POSTS[7].category,
    image: CAMPAIGN_POSTS[7].image,
    description: CAMPAIGN_POSTS[7].description,
  },

  // Column 3 items (Additional real gallery visuals)
  {
    id: "sc-9",
    slug: CAMPAIGN_POSTS[0].slug,
    title: "Field Club Dandiya Nights",
    category: "Outdoor & Stage",
    image: CAMPAIGN_POSTS[0].gallery[1] || CAMPAIGN_POSTS[0].image,
    description: "Multi-archway lighting and high-impact ground branding.",
  },
  {
    id: "sc-10",
    slug: CAMPAIGN_POSTS[1].slug,
    title: "Udaipur Civic Movement",
    category: "Transit Media",
    image: CAMPAIGN_POSTS[1].gallery[1] || CAMPAIGN_POSTS[1].image,
    description: "Citywide transit hoardings and awareness campaign.",
  },
  {
    id: "sc-11",
    slug: CAMPAIGN_POSTS[2].slug,
    title: "Denim Retail Activation",
    category: "Mall Experience",
    image: CAMPAIGN_POSTS[2].gallery[1] || CAMPAIGN_POSTS[2].image,
    description: "Interactive youth fashion kiosk and point-of-sale popups.",
  },
  {
    id: "sc-12",
    slug: CAMPAIGN_POSTS[5].slug,
    title: "TiEcon Rajasthan Summit",
    category: "Corporate Summit",
    image: CAMPAIGN_POSTS[5].gallery[1] || CAMPAIGN_POSTS[5].image,
    description: "Executive stage presence and keynote conference design.",
  },
];

export default function CampaignsVerticalShowcase() {
  const col1 = ALL_SHOWCASE_CARDS.slice(0, 4);
  const col2 = ALL_SHOWCASE_CARDS.slice(4, 8);
  const col3 = ALL_SHOWCASE_CARDS.slice(8, 12);

  // Duplicate each column for continuous 100% infinite vertical loop
  const col1Items = [...col1, ...col1];
  const col2Items = [...col2, ...col2];
  const col3Items = [...col3, ...col3];

  return (
    <div className="relative w-full py-4 select-none">
      {/* Interactive Hover Pill Instruction */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono text-[#0080CB] shadow-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#0C9DA8]" />
          <span>HOVER OVER ANY CARD TO REVEAL DETAILS • CLICK TO VIEW CASE STUDY</span>
        </span>
      </div>

      {/* ── 3-Column Vertical Infinite Moving Showcase Window ── */}
      <div className="relative max-w-7xl mx-auto h-[680px] sm:h-[780px] lg:h-[860px] overflow-hidden rounded-[2.5rem] bg-[#FAFAFC] border border-slate-200/80 shadow-2xs px-3 sm:px-6">
        
        {/* Soft Top & Bottom Vignette Gradient Masks */}
        <div className="absolute inset-x-0 top-0 h-28 sm:h-36 bg-gradient-to-b from-[#FAFAFC] via-[#FAFAFC]/90 to-transparent z-30 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#FAFAFC] via-[#FAFAFC]/90 to-transparent z-30 pointer-events-none" />

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 h-full">
          
          {/* ── COLUMN 1: Moves UP ── */}
          <div className="overflow-hidden h-full">
            <div className="flex flex-col gap-4 sm:gap-6 animate-marquee-up will-change-transform">
              {col1Items.map((item, idx) => (
                <CampaignCard key={`c1-${item.id}-${idx}`} item={item} />
              ))}
            </div>
          </div>

          {/* ── COLUMN 2: Moves DOWN ── */}
          <div className="overflow-hidden h-full hidden sm:block">
            <div className="flex flex-col gap-4 sm:gap-6 animate-marquee-down will-change-transform">
              {col2Items.map((item, idx) => (
                <CampaignCard key={`c2-${item.id}-${idx}`} item={item} />
              ))}
            </div>
          </div>

          {/* ── COLUMN 3: Moves UP ── */}
          <div className="overflow-hidden h-full hidden lg:block">
            <div className="flex flex-col gap-4 sm:gap-6 animate-marquee-up will-change-transform">
              {col3Items.map((item, idx) => (
                <CampaignCard key={`c3-${item.id}-${idx}`} item={item} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ── Single Campaign Card with Hover Overlay Reveal ──
function CampaignCard({
  item,
}: {
  item: {
    slug: string;
    title: string;
    category: string;
    image: string;
    description: string;
  };
}) {
  return (
    <Link
      href={`/${item.slug}/`}
      className="group relative h-[320px] sm:h-[380px] lg:h-[400px] w-full rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200/90 bg-white block transition-all duration-500 hover:scale-[1.02] shrink-0 cursor-pointer"
    >
      {/* Base Campaign Image */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
      />

      {/* Top Tag (Always Visible) */}
      <div className="absolute top-4 left-4 z-10 transition-opacity duration-300">
        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0F172A] text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md border border-white/60">
          <Tag className="w-3 h-3 text-[#0080CB]" />
          <span>{item.category}</span>
        </span>
      </div>

      {/* ── Hover Reveal Overlay (Reveals Name, Category & CTA) ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 sm:p-7 z-20">
        <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0080CB] text-white text-[10px] font-bold uppercase tracking-widest">
            <span>Case Study</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white font-display leading-snug drop-shadow-md">
            {item.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 leading-relaxed font-normal">
            {item.description}
          </p>

          <div className="pt-2">
            <span className="inline-flex items-center gap-2 bg-white hover:bg-[#0080CB] text-[#0F172A] hover:text-white font-bold text-xs px-4 py-2 rounded-full transition-all shadow-lg">
              <span>Explore Campaign</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
