"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Target,
  Compass,
  Megaphone,
  Globe,
  Share2,
  Code,
  Laptop,
  Cpu,
  Users,
  Flag,
  TrendingUp,
  Layers,
  Video as VideoIcon,
  Sparkles,
  Heart,
  Award,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import { BRAND } from "@/lib/data";

/* ── Card Data ────────────────────────────────────────────── */
const SERVICES = [
  {
    id: "brand-strategy",
    title: "Brand Strategy &\nPerformance",
    description:
      "Targeted ROI, brand authority, and data-driven audience conversion funnels across regional and national markets.",
    videoSrc: "/services/videos/brand-strategy.mp4",
    imageSrc: "/services/analysis.webp",
    icons: [Target, BarChart3, Compass],
    chip: "ROI & Strategy",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing &\nSocial Media",
    description:
      "Meta & Google performance campaigns, social growth, community engagement, high-CTR creatives, and analytics.",
    videoSrc: "/services/videos/social-marketing.mp4",
    imageSrc: "/services/social-media.webp",
    icons: [Megaphone, Globe, Share2],
    chip: "Social & Paid Ads",
  },
  {
    id: "website-development",
    title: "Website\nDevelopment",
    description:
      "High-speed responsive websites with modern UI/UX, conversion-focused experiences, and technical SEO.",
    videoSrc: "/services/videos/web-development.mp4",
    imageSrc: "/services/app-development.webp",
    icons: [Code, Laptop, Cpu],
    chip: "Fullstack Web",
  },
  {
    id: "political-campaigns",
    title: "Political Campaigns\n& Narrative",
    description:
      "Constituency sentiment analytics, digital war rooms, voter outreach, and strategic regional narrative building.",
    videoSrc: "/services/videos/political-campaign.mp4",
    imageSrc: "/services/banner.webp",
    icons: [Users, Flag, TrendingUp],
    chip: "Elections & PR",
  },
  {
    id: "content-marketing",
    title: "Content Marketing\n& Creation",
    description:
      "High-converting copy, scripts, visual storytelling, reels, cinema-grade video, and brand identity assets.",
    videoSrc: "/services/videos/content-creation.mp4",
    imageSrc: "/services/content-creation.webp",
    icons: [Layers, VideoIcon, Sparkles],
    chip: "Creative & Media",
  },
  {
    id: "influencer-marketing",
    title: "Influencer\nMarketing",
    description:
      "Regional creator networks, brand ambassador partnerships, and high-impact sponsored audience reach.",
    videoSrc: "/services/videos/influencer-marketing.mp4",
    imageSrc: "/services/influencer.webp",
    icons: [Sparkles, Heart, Award],
    chip: "Creator Networks",
  },
];

const N = SERVICES.length;
const ANGLE_STEP = 360 / N; // 60° per card
const DRUM_RADIUS = 760;

export default function GrowthEngine3DCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const cb = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", cb);

    return () => {
      window.removeEventListener("resize", handleResize);
      mq.removeEventListener("change", cb);
    };
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? N - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === N - 1 ? 0 : prev + 1));
  };

  const currentService = SERVICES[activeIndex];
  const targetRotation = -activeIndex * ANGLE_STEP;

  return (
    <section
      id="services"
      className="relative w-full bg-[#050505] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden select-none"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[radial-gradient(ellipse_at_center,_rgba(0,128,203,0.18),_transparent_70%)] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#D10B6A]/10 blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 space-y-8 sm:space-y-10">
        {/* ── Section Header ── */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-[11px] font-mono font-bold uppercase tracking-widest text-[#0C9DA8] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Our 360° Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight font-display">
            Our <span className="text-[#0080CB]">360° Digital</span>{" "}
            <span className="text-[#D10B6A]">Services</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto font-normal leading-relaxed">
            Data-backed digital growth, paid performance, web ecosystems, and brand storytelling crafted for maximum conversion.
          </p>
        </div>

        {/* ── Quick Service Tab Chips ── */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-4xl mx-auto z-20">
          {SERVICES.map((s, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-[#0080CB] to-[#0C9DA8] text-white shadow-md shadow-[#0080CB]/30 scale-105"
                    : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                }`}
              >
                {s.chip}
              </button>
            );
          })}
        </div>

        {/* ── 3D Drum Stage for Desktop / Showcase Card on Mobile ── */}
        <div className="relative w-full h-[420px] sm:h-[480px] md:h-[520px] flex items-center justify-center">
          {isDesktop ? (
            <div
              className="relative w-full h-full flex items-center justify-center"
              style={{
                perspective: "1600px",
                perspectiveOrigin: "50% 50%",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Centered Heading in Background at Z = 0 */}
              <div
                className="absolute pointer-events-none select-none text-center flex flex-col items-center justify-center"
                style={{
                  transform: "translateZ(0px)",
                  transformStyle: "preserve-3d",
                }}
              >
                <span className="block font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#0C9DA8] mb-1">
                  PRAAROOP
                </span>
                <span className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white/20 font-display">
                  360° DIGITAL
                </span>
              </div>

              {/* The Rotating 3D Drum */}
              <motion.div
                className="relative w-0 h-0"
                animate={{ rotateY: targetRotation }}
                transition={{
                  type: "spring",
                  stiffness: 75,
                  damping: 18,
                  mass: 0.9,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {SERVICES.map((card, i) => {
                  const cardAngle = i * ANGLE_STEP;
                  const isCurrent = i === activeIndex;

                  return (
                    <div
                      key={card.id}
                      onClick={() => setActiveIndex(i)}
                      className={`absolute top-1/2 left-1/2 w-[280px] h-[210px] sm:w-[320px] sm:h-[240px] md:w-[360px] md:h-[270px] lg:w-[390px] lg:h-[290px] -ml-[140px] sm:-ml-[160px] md:-ml-[180px] lg:-ml-[195px] -mt-[105px] sm:-mt-[120px] md:-mt-[135px] lg:-mt-[145px] rounded-[22px] overflow-hidden cursor-pointer select-none will-change-transform transform-gpu transition-all duration-300 ${
                        isCurrent
                          ? "ring-2 ring-[#0080CB] shadow-[0_0_40px_rgba(0,128,203,0.4)]"
                          : "opacity-85 hover:opacity-100"
                      }`}
                      style={{
                        transform: `rotateY(${cardAngle}deg) translateZ(${DRUM_RADIUS}px)`,
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-white/[0.08] backdrop-blur-md border border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
                        {card.videoSrc ? (
                          <video
                            src={card.videoSrc}
                            poster={card.imageSrc}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.75] contrast-[1.05]"
                          />
                        ) : (
                          <Image
                            src={card.imageSrc}
                            alt={card.title}
                            fill
                            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.75] contrast-[1.05]"
                          />
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/5 pointer-events-none z-10" />

                        {/* Top floating icons row */}
                        <div className="relative z-20 p-3 md:p-4 flex items-center justify-between w-full pointer-events-none">
                          <div className="flex gap-1.5">
                            {card.icons.map((IconComp, idx) => (
                              <div
                                key={idx}
                                className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-sm"
                              >
                                <IconComp className="w-3 h-3 md:w-3.5 md:h-3.5 text-white/90" />
                              </div>
                            ))}
                          </div>
                          <div className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[9px] font-mono text-white/90">
                            0{i + 1} / 0{N}
                          </div>
                        </div>

                        {/* Card text content */}
                        <div className="absolute inset-x-0 bottom-3.5 md:bottom-4 px-4 text-center z-20 pointer-events-none space-y-1">
                          <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#0080CB]/40 border border-[#0080CB]/60 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-[#38BDF8] mb-0.5">
                            {card.chip}
                          </div>
                          <h3 className="text-base sm:text-lg md:text-xl font-black text-white leading-tight drop-shadow-md whitespace-pre-line">
                            {card.title}
                          </h3>
                          <p className="text-[10px] sm:text-[11px] text-white/85 font-light max-w-[260px] mx-auto line-clamp-2 leading-tight">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          ) : (
            /* Mobile Card View */
            <div className="w-full max-w-sm h-[400px] rounded-3xl overflow-hidden bg-white/[0.08] backdrop-blur-md border border-white/20 shadow-2xl relative flex flex-col justify-between p-6">
              {currentService.videoSrc ? (
                <video
                  src={currentService.videoSrc}
                  poster={currentService.imageSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover brightness-[0.72] -z-10"
                />
              ) : (
                <Image
                  src={currentService.imageSrc}
                  alt={currentService.title}
                  fill
                  className="absolute inset-0 w-full h-full object-cover brightness-[0.72] -z-10"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent -z-10" />

              <div className="flex items-center justify-between z-10">
                <div className="flex gap-1.5">
                  {currentService.icons.map((IC, idx) => (
                    <div
                      key={idx}
                      className="w-7 h-7 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center"
                    >
                      <IC className="w-3.5 h-3.5 text-white/90" />
                    </div>
                  ))}
                </div>
                <span className="px-2.5 py-1 rounded-full bg-black/60 text-xs font-mono text-white/90 border border-white/20">
                  0{activeIndex + 1} / 0{N}
                </span>
              </div>

              <div className="space-y-2 text-center z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-[#0080CB]/30 border border-[#0080CB]/50 text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                  {currentService.chip}
                </span>
                <h3 className="text-2xl font-black text-white leading-tight whitespace-pre-line font-display">
                  {currentService.title}
                </h3>
                <p className="text-xs text-white/90 font-light leading-relaxed">
                  {currentService.description}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ── Interactive Navigation Buttons & Dots Bar ── */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 z-30 select-none">
          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous digital service"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#0080CB] text-white border border-white/20 hover:border-[#0080CB] flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-md group"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 shadow-md">
            {SERVICES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Jump to service ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? "w-8 bg-gradient-to-r from-[#0080CB] to-[#0C9DA8] shadow-[0_0_12px_rgba(0,128,203,0.8)]"
                    : "w-2.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next digital service"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#0080CB] text-white border border-white/20 hover:border-[#0080CB] flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-md group"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
