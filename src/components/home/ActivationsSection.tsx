"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { BRAND } from "@/lib/data";

const activationItems = [
  {
    id: "mall",
    number: "01",
    title: "Mall Activations",
    description:
      "High-footfall experiential setups inside Udaipur & Rajasthan's leading malls — sampling booths, live demos, and interactive brand zones that convert browsers into customers on the spot.",
    image: "/services/activations/mall-activation.webp",
    stat: "50,000+",
    statLabel: "Average weekend footfall reached per activation",
  },
  {
    id: "retail",
    number: "02",
    title: "Retail Activations",
    description:
      "In-store brand takeovers and point-of-sale experiences designed to drive impulse engagement right where the purchase decision happens.",
    image: "/services/activations/retail-pos.webp",
    stat: "3.2x",
    statLabel: "Average uplift in in-store shopper engagement",
  },
  {
    id: "corporate",
    number: "03",
    title: "Corporate Activations",
    description:
      "Branded experiences for corporate events, conferences, and product launches that put your brand front and center for high-value B2B audiences.",
    image: "/services/activations/corporate-summit.webp",
    stat: "40+",
    statLabel: "Corporate events activated across Rajasthan",
  },
  {
    id: "school-college",
    number: "04",
    title: "School / College Activations",
    description:
      "Campus-based engagement campaigns that reach the youth demographic directly — from sampling drives to interactive contests across Udaipur's leading institutions.",
    image: "/services/activations/campus-fest.webp",
    stat: "25+",
    statLabel: "Campuses activated across the region",
  },
];

const MARQUEE_ROWS = 7;

export default function ActivationsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  // Framer Motion scroll tracking across the 400vh container track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 1. Entrance (0 -> 0.15): scale(0.45 -> 1) & background pattern fade-in (0 -> 1)
  //    Exit (0.85 -> 1.0): scale(1 -> 0.85) & background pattern fade-out (1 -> 0)
  const cardScale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.45, 1, 1, 0.85]
  );

  const cardOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.92, 1],
    [0.6, 1, 1, 0]
  );

  const bgPatternOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0]
  );

  // 2. Continuous Vertical Filmstrip Transform: Moves 0% to -300% across the 4 items
  const filmstripY = useTransform(
    scrollYProgress,
    [0.15, 0.85],
    ["0%", "-300%"]
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const clamped = Math.max(0, Math.min(1, (latest - 0.15) / 0.70));
    const index = Math.min(
      activationItems.length - 1,
      Math.max(0, Math.round(clamped * (activationItems.length - 1)))
    );
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  const handleStepClick = (index: number) => {
    if (!containerRef.current) return;
    const top = containerRef.current.offsetTop;
    const height = containerRef.current.offsetHeight;
    const usableScrollHeight = height - window.innerHeight;
    const segmentOffset = 0.15 * usableScrollHeight;
    const stepHeight =
      (0.70 * usableScrollHeight) / (activationItems.length - 1 || 1);
    const targetY = top + segmentOffset + index * stepHeight;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <section
      id="activations"
      className="relative bg-[#0C9DA8] text-white border-t border-white/20"
    >
      {/* ── Mobile & Tablet Layout: Clean Stacked Cards (No 400vh track) ── */}
      <div className="block lg:hidden py-20 px-4 sm:px-6 max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/30 border border-white/30 text-xs font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Praaroop Media</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display drop-shadow-md">
            Brand Activations <span className="text-[#D10B6A]">& Events</span>
          </h2>
          <p className="text-sm sm:text-base text-white/95 max-w-xl mx-auto font-medium leading-relaxed">
            Immersive physical brand experiences that create memorable
            connections and drive immediate customer action.
          </p>
        </div>

        <div className="space-y-6">
          {activationItems.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl overflow-hidden bg-white text-slate-900 border border-white/40 shadow-2xl flex flex-col"
            >
              <div className="relative h-[240px] sm:h-[280px] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-mono font-bold border border-white/20 shadow-md">
                  {item.number} / 04
                </div>
                <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-full bg-[#0C9DA8] text-white text-xs font-semibold flex items-center gap-1.5 shadow-md">
                  <span className="font-bold">{item.stat}</span>
                  <span className="text-white/90">Impact</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-3 bg-white">
                <span className="text-3xl font-black font-mono text-[#0C9DA8] block">
                  {item.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] font-display">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-normal">
                  {item.description}
                </p>
                <p className="text-xs text-[#475569] font-medium pt-3 border-t border-slate-200">
                  {item.statLabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Desktop: 400vh Pinned Scrollytelling Section (Brand Teal Theme with Clear Viewport Clearance) ── */}
      <div
        ref={containerRef}
        className="hidden lg:block relative"
        style={{ height: `${activationItems.length * 100}vh` }}
      >
        {/* Sticky Pinned 100vh Viewport with Top Navbar Clearance (pt-20 sm:pt-24) */}
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-6 lg:px-14 overflow-hidden pt-20 sm:pt-24 pb-6">
          
          {/* ════════════════════════════════════════════════════════════════
              1. BACKGROUND MARQUEE LAYER (Continuous Edge-to-Edge Solid White Wallpaper)
             ════════════════════════════════════════════════════════════════ */}
          <motion.div
            style={!reducedMotion ? { opacity: bgPatternOpacity } : { opacity: 1 }}
            className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none flex flex-col justify-between py-2 w-full h-full will-change-opacity"
          >
            {[...Array(MARQUEE_ROWS)].map((_, rowIndex) => {
              const isEven = rowIndex % 2 === 0;
              return (
                <div
                  key={rowIndex}
                  className="relative w-full overflow-hidden flex whitespace-nowrap select-none"
                >
                  <div
                    className={`flex w-max shrink-0 items-center will-change-transform ${
                      reducedMotion
                        ? ""
                        : isEven
                        ? "animate-marquee-right"
                        : "animate-marquee-left"
                    }`}
                  >
                    {/* 4 identical repeated segments to guarantee edge-to-edge screen fill */}
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
                            ACTIVATIONS <span className="text-white/60 mx-3 text-4xl sm:text-5xl font-light">•</span>
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
          </motion.div>

          {/* Section Header (Positioned Cleanly Below Fixed Top Navbar) */}
          <div className="relative z-20 text-center max-w-xl mx-auto mb-3 sm:mb-4 pointer-events-none shrink-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/30 border border-white/30 backdrop-blur-md text-[11px] font-extrabold uppercase tracking-widest text-white shadow-lg mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Praaroop Media</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight font-display drop-shadow-md">
              Brand Activations <span className="text-[#D10B6A]">& Events</span>
            </h2>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              2. CENTERED CARD (Ultra-clean Solid White with 100% Visible Dark Text)
             ════════════════════════════════════════════════════════════════ */}
          <motion.div
            style={
              !reducedMotion ? { scale: cardScale, opacity: cardOpacity } : {}
            }
            className="relative z-20 max-w-4xl lg:max-w-5xl w-full h-[430px] lg:h-[460px] rounded-3xl overflow-hidden bg-white border border-white/60 shadow-[0_30px_90px_rgba(0,0,0,0.4)] grid grid-cols-1 md:grid-cols-2 will-change-transform shrink-0"
          >
            {/* ── Left Half: Continuous Vertical Image Filmstrip ── */}
            <div className="relative h-full w-full overflow-hidden bg-slate-900">
              <motion.div
                style={!reducedMotion ? { y: filmstripY } : {}}
                className="h-full w-full will-change-transform"
              >
                {activationItems.map((item, i) => (
                  <div
                    key={item.id}
                    className="relative h-[430px] lg:h-[460px] w-full"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority={i === 0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-mono font-bold border border-white/20 shadow-md">
                      {item.number} / 04
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Progress Dots Column (Situated on the right edge of image half) */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2.5 bg-black/70 backdrop-blur-md py-3 px-2 rounded-full border border-white/20 shadow-lg">
                {activationItems.map((item, i) => {
                  const isActive = activeIndex === i;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleStepClick(i)}
                      aria-label={`Jump to activation ${item.number}`}
                      className={`rounded-full transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "w-2.5 h-6 bg-[#0C9DA8] shadow-[0_0_10px_rgba(12,157,168,0.9)]"
                          : "w-2 h-2 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  );
                })}
              </div>
            </div>

            {/* ── Right Half: Continuous Vertical Text Filmstrip (Crystal-Clear Text Visibility) ── */}
            <div
              className="relative h-full w-full overflow-hidden select-none bg-white"
              aria-live="polite"
            >
              <motion.div
                style={!reducedMotion ? { y: filmstripY } : {}}
                className="h-full w-full will-change-transform"
              >
                {activationItems.map((item) => (
                  <div
                    key={item.id}
                    className="h-[430px] lg:h-[460px] w-full p-7 lg:p-10 flex flex-col justify-between bg-white text-slate-900"
                  >
                    {/* Step Segment Indicators */}
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#0C9DA8]">
                        Activation Format {item.number}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#0F172A] bg-slate-100 px-3 py-1 rounded-md border border-slate-300 shadow-2xs">
                        {item.number} / 04
                      </span>
                    </div>

                    {/* Title & Description with 100% High Contrast */}
                    <div className="space-y-2.5 my-auto py-1">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0F172A] leading-tight font-display tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm lg:text-base text-[#334155] font-normal leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Stat Card & CTA Row */}
                    <div className="flex items-center justify-between gap-4 pt-3.5 border-t border-slate-200">
                      <div className="inline-flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
                        <span className="text-lg sm:text-xl font-black text-[#0C9DA8] font-display">
                          {item.stat}
                        </span>
                        <span className="text-xs text-[#334155] font-semibold leading-snug">
                          {item.statLabel}
                        </span>
                      </div>

                      <a
                        href={BRAND.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline-flex items-center gap-2 text-xs font-extrabold text-white bg-[#0C9DA8] hover:bg-[#0080CB] px-4 sm:px-5 py-2.5 rounded-full transition-all shadow-md hover:scale-105"
                      >
                        <span>Plan Event</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
