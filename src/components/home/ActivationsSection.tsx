"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const activationItems = [
  {
    id: "mall",
    number: "01",
    title: "Mall Activations",
    description:
      "High-footfall experiential setups inside Udaipur & Rajasthan's leading malls — sampling booths, live demos, and interactive brand zones that convert browsers into customers on the spot.",
    image: "/services/activations/mall-activation.webp",
    stat: "50,000+",
    statLabel: "Average weekend footfall reached per mall activation",
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

export default function ActivationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches);
      setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  // GSAP ScrollTrigger Pinned Snapped Stepper
  useEffect(() => {
    if (isMobile || reducedMotion) return;

    const section = sectionRef.current;
    if (!section) return;

    const steps = activationItems.length;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${steps * window.innerHeight * 0.8}`,
        pin: true,
        scrub: 0.4,
        snap: {
          snapTo: 1 / (steps - 1),
          duration: 0.35,
          ease: "power1.inOut",
        },
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const idx = Math.min(steps - 1, Math.round(self.progress * (steps - 1)));
          setActiveIndex((prev) => {
            if (prev !== idx) {
              setRevealed(false); // reset reveal state on step change
            }
            return idx;
          });
        },
      });
    }, section);

    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, [isMobile, reducedMotion]);

  const currentItem = activationItems[activeIndex];

  return (
    <section
      id="activations"
      ref={sectionRef}
      className="relative bg-black text-white border-t border-white/10"
    >
      {reducedMotion || isMobile ? (
        /* Mobile Fallback: Normal Vertical Stack */
        <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12 bg-black text-white">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-[#D10B6A]">
              <Sparkles className="w-3.5 h-3.5 text-[#D10B6A]" />
              <span>On-Ground B2C & B2B Engagements</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
              Brand <span className="text-gradient-tri">Activations</span> & Events
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
              Immersive physical brand experiences that create memorable connections and drive immediate customer action.
            </p>
          </div>

          <div className="space-y-8">
            {activationItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl overflow-hidden bg-[#F4F2EE] text-slate-900 border border-white/10 shadow-2xl flex flex-col"
              >
                <div className="relative h-[260px] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-mono font-bold">
                    {item.number} / 04
                  </div>
                  <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-black/85 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                    <span className="font-bold text-[#CCFF00]">{item.stat}</span>
                    <span className="text-white/80">Impact</span>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="space-y-2">
                    <span className="text-5xl font-black font-sans text-slate-950 block">
                      {item.number}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 leading-tight font-display">
                      {item.title}
                    </h3>
                    <div className="w-12 h-[2px] bg-slate-300 my-2" />
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-xs font-bold text-slate-900">{item.statLabel}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Desktop: Contained Fixed-Height Module with Surrounding Margin */
        <div className="min-h-screen w-full flex flex-col justify-center py-24 relative overflow-hidden bg-black">
          
          {/* Subtle Vertical Grid Lines in Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:140px_100%] pointer-events-none" />

          {/* Section Header (Contained at top with breathing room) */}
          <div className="relative z-20 text-center max-w-3xl mx-auto px-4 mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-[#CCFF00]">
              <Sparkles className="w-3.5 h-3.5 text-[#CCFF00]" />
              <span>EXPERIENTIAL MARKETING</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black uppercase text-white tracking-tight font-display">
              Brand Activations <span className="text-[#CCFF00]">& Events</span>
            </h2>
            <p className="text-xs lg:text-sm text-white/60 max-w-xl mx-auto font-normal">
              Immersive physical brand experiences that create memorable connections and drive immediate customer action.
            </p>
          </div>

          {/* Contained Module Frame (Max-w-6xl, fixed 520px height) */}
          <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row h-[460px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-[#F4F2EE]">
              
              {/* Left Content Card (Paper Tone #F4F2EE) */}
              <div className="w-full md:w-[42%] h-full bg-[#F4F2EE] text-slate-900 flex flex-col justify-center p-8 md:p-12 lg:p-14 shrink-0 relative z-20 select-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentItem.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="space-y-4"
                  >
                    {/* Big Number */}
                    <span className="text-6xl md:text-7xl font-black font-sans tracking-tight text-slate-950 block">
                      {currentItem.number}
                    </span>

                    {/* Bold Title */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight font-display tracking-tight">
                      {currentItem.title}
                    </h3>

                    {/* Thin Divider */}
                    <div className="w-14 h-[2px] bg-slate-950 my-4" />

                    {/* Description */}
                    <p className="text-xs md:text-sm lg:text-base text-neutral-700 leading-relaxed max-w-sm font-normal">
                      {currentItem.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Image Panel (Seamlessly Joined, Same Height) */}
              <div className="relative w-full md:w-[58%] h-full overflow-hidden bg-slate-950">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentItem.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={currentItem.image}
                      alt={currentItem.title}
                      fill
                      priority
                      className="object-cover"
                    />

                    {/* Subtle bottom vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Click to Reveal Pill Button */}
                <div className="absolute bottom-6 right-6 z-30">
                  <button
                    type="button"
                    onClick={() => setRevealed((prev) => !prev)}
                    className={`px-5 py-2.5 rounded-full backdrop-blur-md text-xs font-bold tracking-wide flex items-center gap-2 shadow-2xl transition-all duration-300 cursor-pointer ${
                      revealed
                        ? "bg-[#CCFF00] text-black border border-[#CCFF00]"
                        : "bg-black/80 hover:bg-black text-white border border-white/20 hover:border-white/40"
                    }`}
                  >
                    <span>{revealed ? "Hide Details" : "Click to reveal"}</span>
                    {revealed ? (
                      <X className="w-3.5 h-3.5" />
                    ) : (
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Reveal Overlay Layer */}
                <AnimatePresence>
                  {revealed && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 bg-black/75 backdrop-blur-md flex flex-col justify-end p-8 md:p-12 z-20"
                    >
                      <div className="max-w-md space-y-2">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#CCFF00]">
                          Key Metric & Impact
                        </span>
                        <p className="text-3xl md:text-4xl font-black text-white font-display tracking-tight">
                          {currentItem.stat}
                        </p>
                        <p className="text-xs md:text-sm text-white/80 font-normal leading-relaxed">
                          {currentItem.statLabel}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>

          {/* Dot Progress Nav (Positioned cleanly relative to the viewport/module) */}
          <div className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-3 z-30">
            {activationItems.map((item, i) => (
              <button
                key={item.id}
                aria-label={`Jump to step ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === activeIndex
                    ? "w-2.5 h-7 bg-[#CCFF00] shadow-[0_0_12px_rgba(204,255,0,0.6)]"
                    : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

        </div>
      )}
    </section>
  );
}
