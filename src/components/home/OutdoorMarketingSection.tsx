"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Plane,
  Building2,
  Film,
  Bus,
  Car,
  Newspaper,
  Bike,
  ShieldAlert,
  Radio,
  Truck,
  FileText,
  Compass,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { OUTDOOR_MARKETING_ITEMS } from "@/lib/data";

const OUTDOOR_ITEMS_DATA = [
  {
    title: OUTDOOR_MARKETING_ITEMS[0],
    icon: Plane,
    desc: "High-impact placements at Maharana Pratap Airport Udaipur reaching corporate decision makers and premium tourists.",
    bullets: ["Terminal Gate Placements", "Luggage Belt Screens", "Executive Traveler Demographics"],
    color: "#0080CB",
  },
  {
    title: OUTDOOR_MARKETING_ITEMS[1],
    icon: Building2,
    desc: "Prime arterial road billboards and high-traffic intersection hoardings across Rajasthan's major urban centers.",
    bullets: ["Unmatched Roadway Scale", "24/7 Illumination Features", "Highest Daily Footfall Nodes"],
    color: "#0C9DA8",
  },
  {
    title: OUTDOOR_MARKETING_ITEMS[2],
    icon: Film,
    desc: "On-screen cinema jingles, lobby standees, and multiplex ticket branding in PVR, INOX, and single-screens.",
    bullets: ["Captive Audience Attention", "Dolby Audio & HD Video", "Peak Weekend Audience Reach"],
    color: "#D10B6A",
  },
  {
    title: OUTDOOR_MARKETING_ITEMS[3],
    icon: Bus,
    desc: "Full bus wraps, side panel banners, and rear panel branding on city transit fleets and intercity buses.",
    bullets: ["City-Wide Rolling Coverage", "High Frequency Impressions", "Mass Commuter Targeting"],
    color: "#0080CB",
  },
  {
    title: OUTDOOR_MARKETING_ITEMS[4],
    icon: Car,
    desc: "Mobile auto-rickshaw hood and back panel branding covering all residential, commercial, and market zones.",
    bullets: ["Hyper-Local Penetration", "Continuous Mobile Exposure", "Cost-Effective Urban Mass Reach"],
    color: "#0C9DA8",
  },
  {
    title: OUTDOOR_MARKETING_ITEMS[5],
    icon: Newspaper,
    desc: "Front page display ads, jacket wraps, and targeted insert campaigns in Rajasthan's highest-circulated dailies.",
    bullets: ["Immediate Mass Awareness", "Front-Page Impact Jackets", "High Credibility Print Reader Base"],
    color: "#D10B6A",
  },
  {
    title: OUTDOOR_MARKETING_ITEMS[6],
    icon: Bike,
    desc: "Eco-friendly mobile tri-cycle branding for hyper-local market promotions and crowded bazaar corridors.",
    bullets: ["Crowded Bazaar Access", "Pedestrian-Eye-Level Display", "High Street Engagement"],
    color: "#0080CB",
  },
  {
    title: OUTDOOR_MARKETING_ITEMS[7],
    icon: ShieldAlert,
    desc: "Residential and commercial no-parking board branding across high-density neighborhoods and market gates.",
    bullets: ["Permanent Neighborhood Presence", "Continuous Daily Sightlines", "High ROI Micro-Targeting"],
    color: "#0C9DA8",
  },
  {
    title: OUTDOOR_MARKETING_ITEMS[8],
    icon: Compass,
    desc: "Street light pole kiosks and avenue banners along main commercial avenues and heritage tourist routes.",
    bullets: ["Sequential Brand Repeating", "Avenue-Long Visual Domination", "Heritage Corridor Presence"],
    color: "#D10B6A",
  },
  {
    title: OUTDOOR_MARKETING_ITEMS[9],
    icon: Radio,
    desc: "Catchy radio jingles, RJ mentions, and sponsored shows on leading FM channels across Rajasthan.",
    bullets: ["High Prime-Time FM Frequency", "Popular RJ Endorsements", "Sonic Brand Recall"],
    color: "#0080CB",
  },
  {
    title: OUTDOOR_MARKETING_ITEMS[10],
    icon: Truck,
    desc: "LED screen mobile vans and campaign floats for live broadcasting, product unveils, and political rallies.",
    bullets: ["On-Demand Location Setup", "Live Broadcast LED Screens", "Stage Sound System Mobile Unit"],
    color: "#0C9DA8",
  },
  {
    title: OUTDOOR_MARKETING_ITEMS[11],
    icon: FileText,
    desc: "Direct door-to-door newspaper pamphlet insertion reaching targeted residential pin-codes overnight.",
    bullets: ["Targeted Household Delivery", "Direct Consumer Handset", "Custom Promotion Coupons"],
    color: "#D10B6A",
  },
];

export default function OutdoorMarketingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches);
      setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  // Desktop Scroll-Jacking (Framer Motion useScroll + useTransform)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Translate horizontal row from 0% to -84% as user scrolls tall container
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-84%"]);

  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const { scrollLeft, clientWidth } = mobileScrollRef.current;
    const newIdx = Math.round(scrollLeft / (clientWidth * 0.8));
    setActiveIndex(Math.min(newIdx, OUTDOOR_ITEMS_DATA.length - 1));
  };

  return (
    <section id="outdoor" className="relative bg-[#0A0A0A] text-white">
      {/* Reduced Motion or Mobile Mode: Standard Static/Snap Layout */}
      {reducedMotion || isMobile ? (
        <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-[#0080CB]">
              <Sparkles className="w-3.5 h-3.5 text-[#0080CB]" />
              <span>360° Media Placement Engine</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Outdoor <span className="text-gradient-tri">Marketing</span>
            </h2>
            <p className="text-base sm:text-lg text-[#CBD5E1]">
              Strategic physical media placements designed to dominate urban landscapes and connect with audiences on the move.
            </p>
          </div>

          {/* Reduced Motion Static Grid */}
          {reducedMotion ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {OUTDOOR_ITEMS_DATA.map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-3xl bg-[#111111] border border-white/10 p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 mb-4"
                        style={{ boxShadow: `0 0 20px ${item.color}25` }}
                      >
                        <IconComp className="w-6 h-6" style={{ color: item.color }} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-xs text-[#CBD5E1] mb-4">{item.desc}</p>
                      <ul className="space-y-1.5 text-xs text-[#94A3B8]">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0C9DA8] shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Mobile Horizontal Scroll-Snap Row (No scroll-jacking on touch) */
            <div>
              <div
                ref={mobileScrollRef}
                onScroll={handleMobileScroll}
                className="flex gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 px-1"
              >
                {OUTDOOR_ITEMS_DATA.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="snap-center shrink-0 w-[84vw] max-w-[340px] rounded-3xl bg-[#111111] border border-white/10 p-6 flex flex-col justify-between shadow-xl"
                    >
                      <div>
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 mb-4"
                          style={{ boxShadow: `0 0 20px ${item.color}25` }}
                        >
                          <IconComp className="w-6 h-6" style={{ color: item.color }} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-xs text-[#CBD5E1] mb-4 leading-relaxed">{item.desc}</p>
                        <ul className="space-y-2 text-xs text-[#CBD5E1]">
                          {item.bullets.map((b) => (
                            <li key={b} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#0C9DA8] shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile Indicator Dots */}
              <div className="flex items-center justify-center gap-1.5 pt-4">
                {OUTDOOR_ITEMS_DATA.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === i ? "w-6 bg-[#0080CB]" : "w-1.5 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* DESKTOP PINNED HORIZONTAL SCROLL-JACKED SHOWCASE SECTION */
        <div ref={containerRef} className="relative h-[380vh]">
          <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center py-8">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-[#0080CB]">
                <Sparkles className="w-3.5 h-3.5 text-[#0080CB]" />
                <span>Our 360° Outdoor Media Engine</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                Outdoor & Transit <span className="text-gradient-tri">Advertising Showcase</span>
              </h2>
              <p className="text-base text-[#CBD5E1] max-w-2xl mx-auto">
                Scroll vertically to explore our 12 signature physical media formats across Rajasthan & India.
              </p>
            </div>

            {/* Sideways Sliding Track */}
            <div className="w-full px-8 overflow-hidden">
              <motion.div style={{ x: xTransform }} className="flex gap-8 w-max">
                {OUTDOOR_ITEMS_DATA.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="w-[420px] shrink-0 rounded-3xl bg-[#111111]/90 border border-white/10 p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl border-gradient-glow hover:border-white/30 transition-colors"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5"
                            style={{ boxShadow: `0 0 25px ${item.color}30` }}
                          >
                            <IconComp className="w-8 h-8" style={{ color: item.color }} />
                          </div>
                          <span className="text-xs font-extrabold font-mono text-white/40 border border-white/10 px-3 py-1 rounded-full">
                            FORMAT {idx + 1} / 12
                          </span>
                        </div>

                        <h3 className="text-2xl font-extrabold text-white mb-3 leading-tight">
                          {item.title}
                        </h3>

                        <p className="text-sm text-[#CBD5E1] leading-relaxed mb-6">
                          {item.desc}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-white/10 space-y-2.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#0C9DA8] block mb-1">
                          Key Capabilities
                        </span>
                        {item.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-center gap-2.5 text-xs text-[#CBD5E1]">
                            <CheckCircle2 className="w-4 h-4 text-[#0080CB] shrink-0" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
