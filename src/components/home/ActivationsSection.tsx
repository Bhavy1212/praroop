"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
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
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Framer Motion scroll tracking across the 400vh container track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const total = activationItems.length;
    // Map progress smoothly into 4 segments (0.00-0.25, 0.25-0.50, 0.50-0.75, 0.75-1.00)
    const index = Math.min(total - 1, Math.max(0, Math.floor(latest * total)));
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  const handleStepClick = (index: number) => {
    if (!containerRef.current) return;
    const top = containerRef.current.offsetTop;
    const height = containerRef.current.offsetHeight;
    const stepHeight = (height - window.innerHeight) / (activationItems.length - 1 || 1);
    const targetY = top + index * stepHeight;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  const currentItem = activationItems[activeIndex];

  return (
    <section id="activations" className="relative bg-[#07090E] text-white border-t border-white/10">
      {/* ── Mobile & Tablet Layout: Clean Stacked Cards (No 400vh track) ── */}
      <div className="block lg:hidden py-20 px-4 sm:px-6 max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-[#0C9DA8]">
            <Sparkles className="w-3.5 h-3.5 text-[#0C9DA8]" />
            <span>EXPERIENTIAL MARKETING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
            Brand Activations <span className="text-[#D10B6A]">& Events</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Immersive physical brand experiences that create memorable connections and drive immediate customer action.
          </p>
        </div>

        <div className="space-y-6">
          {activationItems.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl overflow-hidden bg-[#0D1527] border border-white/10 shadow-2xl flex flex-col"
            >
              <div className="relative h-[240px] sm:h-[280px] w-full">
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="100vw" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-mono font-bold border border-white/15">
                  {item.number} / 04
                </div>
                <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 border border-white/15">
                  <span className="font-bold text-[#0C9DA8]">{item.stat}</span>
                  <span className="text-white/80">Impact</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-3">
                <span className="text-3xl font-black font-mono text-[#0C9DA8] block">
                  {item.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
                <p className="text-xs text-slate-400 font-medium pt-3 border-t border-white/10">
                  {item.statLabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Desktop: 400vh Pinned Scrollytelling Section (Appinventiv Pattern) ── */}
      <div
        ref={containerRef}
        className="hidden lg:block relative"
        style={{ height: `${activationItems.length * 100}vh` }}
      >
        {/* Sticky Pinned 100vh Viewport */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6 lg:px-14 overflow-hidden">
          
          {/* ════════════════════════════════════════════════════════════════
              1. BACKGROUND "WALLPAPER" MARQUEE LAYER (Behind card, full-bleed)
             ════════════════════════════════════════════════════════════════ */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none flex flex-col justify-between py-4">
            {[...Array(MARQUEE_ROWS)].map((_, rowIndex) => {
              const isEven = rowIndex % 2 === 0;
              return (
                <div
                  key={rowIndex}
                  className="flex overflow-hidden whitespace-nowrap opacity-60"
                  style={{
                    transform: `translateX(${rowIndex * -45}px)`, // Staggered brick/masonry offset
                  }}
                >
                  <div
                    className={`flex shrink-0 items-center gap-8 ${
                      isEven ? "animate-marquee-right" : "animate-marquee-left"
                    }`}
                  >
                    {[...Array(6)].map((_, j) => (
                      <span
                        key={j}
                        className="font-black text-7xl lg:text-8xl tracking-tight uppercase font-display text-transparent select-none leading-none"
                        style={{
                          WebkitTextStroke:
                            rowIndex % 3 === 0
                              ? "1.5px rgba(12, 157, 168, 0.16)"
                              : rowIndex % 3 === 1
                              ? "1.5px rgba(0, 128, 203, 0.14)"
                              : "1.5px rgba(209, 11, 106, 0.14)",
                        }}
                      >
                        ACTIVATIONS <span className="text-white/10 mx-2 text-5xl font-light">•</span>
                      </span>
                    ))}
                  </div>

                  <div
                    className={`flex shrink-0 items-center gap-8 ${
                      isEven ? "animate-marquee-right" : "animate-marquee-left"
                    }`}
                  >
                    {[...Array(6)].map((_, j) => (
                      <span
                        key={j}
                        className="font-black text-7xl lg:text-8xl tracking-tight uppercase font-display text-transparent select-none leading-none"
                        style={{
                          WebkitTextStroke:
                            rowIndex % 3 === 0
                              ? "1.5px rgba(12, 157, 168, 0.16)"
                              : rowIndex % 3 === 1
                              ? "1.5px rgba(0, 128, 203, 0.14)"
                              : "1.5px rgba(209, 11, 106, 0.14)",
                        }}
                      >
                        ACTIVATIONS <span className="text-white/10 mx-2 text-5xl font-light">•</span>
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Dark Vignette Overlay to enhance contrast for the foreground card */}
            <div className="absolute inset-0 bg-radial from-transparent via-[#07090E]/65 to-[#07090E]/95 pointer-events-none" />
          </div>

          {/* ════════════════════════════════════════════════════════════════
              2. SECTION HEADER (Pinned at top of sticky viewport)
             ════════════════════════════════════════════════════════════════ */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center max-w-xl mx-auto px-4 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md text-[11px] font-extrabold uppercase tracking-widest text-[#0C9DA8] shadow-lg mb-1.5">
              <Sparkles className="w-3 h-3 text-[#0C9DA8]" />
              <span>EXPERIENTIAL MARKETING</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-black uppercase text-white tracking-tight font-display drop-shadow-md">
              Brand Activations <span className="text-[#D10B6A]">& Events</span>
            </h2>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              3. CENTERED CARD (Foreground, Pinned)
             ════════════════════════════════════════════════════════════════ */}
          <div className="relative z-20 max-w-4xl lg:max-w-5xl w-full h-[470px] lg:h-[500px] rounded-3xl overflow-hidden bg-[#0B1220]/95 border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.85)] backdrop-blur-xl grid grid-cols-1 md:grid-cols-2 mt-12">
            
            {/* Left Half: Image (Crossfading 4 Images) */}
            <div className="relative h-full w-full overflow-hidden bg-black">
              {activationItems.map((item, i) => {
                const isActive = activeIndex === i;
                return (
                  <div
                    key={item.id}
                    style={{ willChange: "opacity, transform" }}
                    className={`absolute inset-0 transition-all duration-400 ease-out ${
                      reducedMotion
                        ? isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                        : isActive
                        ? "opacity-100 scale-100 pointer-events-auto z-10"
                        : "opacity-0 scale-105 pointer-events-none z-0"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority={i === 0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    {/* Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0B1220]" />
                    
                    {/* Top Left Step Badge */}
                    <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-mono font-bold border border-white/20 shadow-lg">
                      {item.number} / 04
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Half: Title, Description & Key Impact Metric */}
            <div className="p-8 lg:p-12 flex flex-col justify-between h-full relative z-20 select-none">
              {/* Step Segment Indicators */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  {activationItems.map((item, i) => {
                    const isActive = activeIndex === i;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleStepClick(i)}
                        aria-label={`Jump to activation ${item.number}`}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          isActive
                            ? "w-8 bg-[#0C9DA8] shadow-[0_0_12px_rgba(12,157,168,0.7)]"
                            : "w-2.5 bg-white/20 hover:bg-white/40"
                        }`}
                      />
                    );
                  })}
                </div>

                <span className="text-xs font-mono font-bold text-white/50 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                  {currentItem.number} / 04
                </span>
              </div>

              {/* Scroll-Driven Dynamic Content Transition */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                  animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-3.5 my-auto py-2"
                >
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0C9DA8]">
                    Activation Format {currentItem.number}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight font-display tracking-tight">
                    {currentItem.title}
                  </h3>
                  <p className="text-sm lg:text-base text-slate-300 font-normal leading-relaxed">
                    {currentItem.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Stat Card & CTA Row */}
              <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/[0.05] border border-white/10 shadow-xs">
                  <span className="text-xl sm:text-2xl font-black text-[#0C9DA8] font-display">
                    {currentItem.stat}
                  </span>
                  <span className="text-xs text-slate-300 font-medium leading-snug">
                    {currentItem.statLabel}
                  </span>
                </div>

                <a
                  href={BRAND.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-white/80 hover:text-[#0C9DA8] transition-colors"
                >
                  <span>Plan Event</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
