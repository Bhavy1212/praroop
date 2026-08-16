"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  Star,
  Sparkles,
  ArrowRight,
  MapPin,
  TrendingUp,
  ChevronRight,
  ShieldCheck,
  Zap,
  BarChart3,
  Flame,
} from "lucide-react";
import { BRAND, SECTION_INTRO } from "@/lib/data";

export default function Hero() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Subtle interactive mouse spotlight on banner
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  // Scroll Progress mapped to horizontal translation [0vw → -100vw] across 2 full-screen panels
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  const x = useTransform(smoothProgress, [0, 1], ["0vw", "-100vw"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#050811] overflow-x-clip"
      style={{ height: "200vh" }}
    >
      {/* ── Sticky Viewport (Pins for the duration of the 200vh scroll budget) ── */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="sticky top-0 h-screen w-screen max-w-[100vw] overflow-hidden flex flex-col justify-between"
      >
        {/* ── Horizontal Scrolling Track (2 Full-Screen Panels: 0vw to -100vw) ── */}
        <motion.div
          style={!reducedMotion ? { x } : {}}
          className="flex flex-nowrap h-full w-[200vw] will-change-transform"
        >
          {/* ════════════════════════════════════════════════════════════════
              PANEL 1: 360° MARKETING HERO BANNER
             ════════════════════════════════════════════════════════════════ */}
          <div className="relative h-screen w-screen min-w-[100vw] max-w-[100vw] shrink-0 flex flex-col justify-between pt-16 sm:pt-20 pb-6 sm:pb-8 px-4 sm:px-8 lg:px-14 overflow-hidden bg-[#050811] text-white select-none">
            {/* Custom Praaroop Media Conceptual Marketing Hero Banner Image */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
              <img
                src="/praaroop-hero-banner.jpg"
                alt="Praaroop Media 360 Marketing Agency Banner"
                className="w-full h-full object-cover object-right sm:object-[80%_center] filter brightness-[0.92] contrast-105"
              />

              {/* Left-side Atmospheric Vignette for 100% Crystal-Clear Typography Contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent sm:w-[65%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            </div>

            {/* Top Eyebrow Tag */}
            <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 shadow-lg backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0080CB] animate-pulse" />
                <span className="text-xs sm:text-sm font-extrabold text-white tracking-wide uppercase">
                  360° Digital & Outdoor Marketing Agency • Udaipur
                </span>
              </div>
            </div>

            {/* Main Headline & CTAs (Clean, Open Layout) */}
            <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-2">
              <div className="max-w-4xl text-left space-y-4 sm:space-y-6">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.4rem] font-black uppercase tracking-tight text-white leading-[0.96] drop-shadow-lg font-display">
                  MARKETING THAT DELIVERS <br />
                  <span className="text-[#D10B6A] drop-shadow-[0_4px_25px_rgba(209,11,106,0.6)]">
                    MEASURABLE GROWTH
                  </span>
                </h1>

                <p className="text-sm sm:text-base lg:text-xl text-slate-300 max-w-2xl font-medium leading-relaxed">
                  Rajasthan&apos;s leading agency fusing massive outdoor hoarding dominance with AI-driven digital performance marketing and creative campaign storytelling.
                </p>

                {/* CTA Action Button Row */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#growth-engine"
                    className={`inline-flex items-center justify-center gap-2.5 bg-white text-slate-950 hover:bg-[#0C9DA8] hover:text-white text-sm sm:text-base font-extrabold px-8 sm:px-9 py-4 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)] ${
                      isTouchDevice ? "" : "hover:scale-105"
                    }`}
                  >
                    <span>Explore 360° Services</span>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900 group-hover:text-white" />
                  </a>

                  <a
                    href={BRAND.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 bg-[#0C9DA8] hover:bg-[#0080CB] text-white text-sm sm:text-base font-bold px-8 sm:px-9 py-4 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(12,157,168,0.35)]"
                  >
                    <span>Connect On WhatsApp</span>
                  </a>
                </div>

                {/* Rating & Proof Pill */}
                <div className="pt-2 flex items-center gap-3">
                  <div className="inline-flex items-center gap-2.5 bg-black/50 backdrop-blur-md px-4 sm:px-5 py-2.5 rounded-full border border-white/15 text-white text-xs sm:text-sm font-semibold shadow-xs">
                    <div className="flex items-center text-[#0C9DA8]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#0C9DA8] text-[#0C9DA8]" />
                      ))}
                    </div>
                    <span className="font-extrabold text-white">4.9 / 5.0 Rating</span>
                    <span className="text-white/40">•</span>
                    <span>200+ Campaigns</span>
                    <span className="text-white/40">•</span>
                    <span>100+ Leading Brands</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Scroll Prompt */}
            <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-xs text-white/60 font-mono">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0080CB] animate-ping" />
                <span>01 / 02 — HERO BANNER</span>
              </span>
              <span className="flex items-center gap-1.5 text-white/80">
                Scroll down to explore about Praaroop <ChevronRight className="w-4 h-4 text-[#0C9DA8]" />
              </span>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              PANEL 2: WE ARE THE BEST 360° MARKETING AGENCY IN UDAIPUR (100vw x 100vh)
             ════════════════════════════════════════════════════════════════ */}
          <div className="relative h-screen w-screen min-w-[100vw] max-w-[100vw] shrink-0 flex flex-col justify-between py-14 sm:py-18 px-4 sm:px-8 lg:px-16 overflow-hidden bg-[#FAFAFC] text-[#0F172A] border-l border-slate-200">
            {/* Clean Light Background with Subtle Accent */}
            <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-[#0080CB]/5 blur-3xl pointer-events-none" />

            {/* Top Eyebrow Tag */}
            <div className="relative z-10 max-w-6xl mx-auto w-full flex items-center justify-between">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0C9DA8]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0C9DA8] animate-ping" />
                <span>{SECTION_INTRO.eyebrow}</span>
              </div>
              <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                02 / 02 • ABOUT PRAAROOP
              </span>
            </div>

            {/* Main Headline & Intro Body */}
            <div className="relative z-10 max-w-5xl mx-auto w-full text-center space-y-5 my-auto">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] font-display">
                {SECTION_INTRO.h1}
              </h2>

              <p className="text-sm sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto font-medium">
                {SECTION_INTRO.body}
              </p>

              {/* 3 Core Value Highlight Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 max-w-4xl mx-auto text-left">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-9 h-9 rounded-xl bg-[#0080CB]/10 text-[#0080CB] flex items-center justify-center mb-2">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Outdoor Dominance</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">
                    Billboards, buses & transit media across Rajasthan & India.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-9 h-9 rounded-xl bg-[#0C9DA8]/10 text-[#0C9DA8] flex items-center justify-center mb-2">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Digital & Performance</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">
                    AI-powered SEO, Meta ads & viral storytelling engine.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-9 h-9 rounded-xl bg-[#D10B6A]/10 text-[#D10B6A] flex items-center justify-center mb-2">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Turnkey Activations</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">
                    Malls, colleges & experiential brand engagement events.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="relative z-10 max-w-6xl mx-auto w-full flex items-center justify-between text-xs font-mono text-slate-400">
              <span>CONTINUE SCROLLING DOWN FOR DIGITAL SERVICES ↓</span>
              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0080CB] hover:underline"
              >
                <span>Talk to our media team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
