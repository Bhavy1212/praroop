"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowUpRight,
  MapPin,
  Building2,
  Users2,
  GraduationCap,
} from "lucide-react";
import { BRAND } from "@/lib/data";

const activationItems = [
  {
    id: "mall",
    number: "01",
    tabTitle: "Mall Activations",
    title: "Mall Activations",
    description:
      "High-footfall experiential setups inside Udaipur & Rajasthan's leading malls — sampling booths, live demos, and interactive brand zones that convert browsers into customers on the spot.",
    image: "/services/activations/mall-activation.webp",
    stat: "50,000+",
    statLabel: "Average weekend footfall reached per activation",
    icon: Building2,
  },
  {
    id: "retail",
    number: "02",
    tabTitle: "Retail POS",
    title: "Retail Activations",
    description:
      "In-store brand takeovers and point-of-sale experiences designed to drive impulse engagement right where the purchase decision happens.",
    image: "/services/activations/retail-pos.webp",
    stat: "3.2x",
    statLabel: "Average uplift in in-store shopper engagement",
    icon: MapPin,
  },
  {
    id: "corporate",
    number: "03",
    tabTitle: "Corporate Summits",
    title: "Corporate Activations",
    description:
      "Branded experiences for corporate events, conferences, and product launches that put your brand front and center for high-value B2B audiences.",
    image: "/services/activations/corporate-summit.webp",
    stat: "40+",
    statLabel: "Corporate events activated across Rajasthan",
    icon: Users2,
  },
  {
    id: "school-college",
    number: "04",
    tabTitle: "School & College",
    title: "School / College Activations",
    description:
      "Campus-based engagement campaigns that reach the youth demographic directly — from sampling drives to interactive contests across Udaipur's leading institutions.",
    image: "/services/activations/campus-fest.webp",
    stat: "25+",
    statLabel: "Campuses activated across the region",
    icon: GraduationCap,
  },
];

const MARQUEE_ROWS = 6;

export default function ActivationsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? activationItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === activationItems.length - 1 ? 0 : prev + 1
    );
  };

  const currentItem = activationItems[activeIndex];

  return (
    <section
      id="activations"
      className="relative bg-[#0C9DA8] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/20 overflow-hidden select-none"
    >
      {/* ── 1. BACKGROUND MARQUEE LAYER (Continuous Edge-to-Edge Solid White Wallpaper) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none flex flex-col justify-between py-2 w-full h-full opacity-70">
        {[...Array(MARQUEE_ROWS)].map((_, rowIndex) => {
          const isEven = rowIndex % 2 === 0;
          return (
            <div
              key={rowIndex}
              className="relative w-full overflow-hidden flex whitespace-nowrap select-none"
            >
              <div
                className={`flex w-max shrink-0 items-center will-change-transform ${
                  isEven ? "animate-marquee-right" : "animate-marquee-left"
                }`}
              >
                {[...Array(4)].map((_, segmentIdx) => (
                  <div
                    key={segmentIdx}
                    className="flex shrink-0 items-center gap-6 pr-6"
                    aria-hidden={segmentIdx > 0}
                  >
                    {[...Array(6)].map((_, itemIdx) => (
                      <span
                        key={itemIdx}
                        className={`font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight uppercase font-display select-none leading-none ${
                          isEven ? "text-white/20" : "text-white/45"
                        }`}
                      >
                        ACTIVATIONS{" "}
                        <span className="text-white/60 mx-3 text-4xl sm:text-5xl font-light">
                          •
                        </span>
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Depth Vignette Overlay */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#0C9DA8]/25 to-[#077078]/75 pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10 space-y-8 sm:space-y-10">
        {/* ── Section Header ── */}
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/30 border border-white/30 backdrop-blur-md text-[11px] font-extrabold uppercase tracking-widest text-white shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Praaroop Media</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight font-display drop-shadow-md">
            Brand Activations <span className="text-[#D10B6A]">& Events</span>
          </h2>
          <p className="text-xs sm:text-sm text-white/95 max-w-md mx-auto font-medium leading-relaxed">
            Immersive on-ground brand activations, mall experiences, and high-conversion retail setups across Udaipur & Rajasthan.
          </p>
        </div>

        {/* ── Activation Format Tabs ── */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 z-20">
          {activationItems.map((item, idx) => {
            const isActive = activeIndex === idx;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-white text-[#0C9DA8] shadow-xl shadow-black/20 scale-105"
                    : "bg-black/30 hover:bg-black/45 text-white border border-white/30 backdrop-blur-md"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.tabTitle}</span>
              </button>
            );
          })}
        </div>

        {/* ── Main Interactive Showcase Card ── */}
        <div className="relative w-full max-w-4xl lg:max-w-5xl rounded-3xl overflow-hidden bg-white border border-white/60 shadow-[0_30px_90px_rgba(0,0,0,0.4)] grid grid-cols-1 md:grid-cols-2 shrink-0">
          {/* Left: Image Side with Smooth Crossfade */}
          <div className="relative h-[260px] sm:h-[320px] md:h-[430px] lg:h-[460px] w-full overflow-hidden bg-slate-900">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute top-4 sm:top-5 left-4 sm:left-5 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-mono font-bold border border-white/20 shadow-md">
                  {currentItem.number} / 04
                </div>

                <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 px-3.5 py-1.5 rounded-full bg-[#0C9DA8] text-white text-xs font-bold shadow-md flex items-center gap-1.5">
                  <span className="font-extrabold">{currentItem.stat}</span>
                  <span className="text-white/90">Impact</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Text & Details Side */}
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white text-slate-900 h-[280px] sm:h-[300px] md:h-[430px] lg:h-[460px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col justify-between h-full space-y-4"
              >
                {/* Step Header */}
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#0C9DA8]">
                    Activation Format {currentItem.number}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#0F172A] bg-slate-100 px-3 py-1 rounded-md border border-slate-300 shadow-2xs">
                    {currentItem.number} / 04
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2.5 my-auto">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0F172A] leading-tight font-display tracking-tight">
                    {currentItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-[#334155] font-normal leading-relaxed">
                    {currentItem.description}
                  </p>
                </div>

                {/* Bottom Stat Card & CTA Row */}
                <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-200">
                  <div className="inline-flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
                    <span className="text-lg sm:text-xl font-black text-[#0C9DA8] font-display">
                      {currentItem.stat}
                    </span>
                    <span className="text-xs text-[#334155] font-semibold leading-snug">
                      {currentItem.statLabel}
                    </span>
                  </div>

                  <a
                    href={BRAND.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-white bg-[#0C9DA8] hover:bg-[#0080CB] px-4 sm:px-5 py-2.5 rounded-full transition-all shadow-md hover:scale-105"
                  >
                    <span>Plan Event</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Interactive Navigation Buttons & Dots Bar ── */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 z-30 select-none">
          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous activation format"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-white text-white hover:text-[#0C9DA8] border border-white/30 hover:border-white flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-md group"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-md">
            {activationItems.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Jump to activation ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? "w-8 bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next activation format"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-white text-white hover:text-[#0C9DA8] border border-white/30 hover:border-white flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-md group"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
