"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BRAND } from "@/lib/data";

const SLIDES_DATA = [
  {
    id: "brand-strategy",
    number: "01",
    chip: "Brand Strategy & Performance",
    title: "Brand strategy / Performance marketing",
    image: "/services/analysis.webp",
    points: [
      "Targeted ROI & Conversion Funnels",
      "Brand Positioning & Identity",
      "Data-Driven Audience Segmentation",
    ],
  },
  {
    id: "social-media",
    number: "02",
    chip: "Social Media & Ads",
    title: "Digital marketing / Social media marketing",
    image: "/services/social-media.webp",
    points: [
      "Meta & Google Performance Ads",
      "Social Media Account Growth",
      "Community Engagement & Analytics",
    ],
  },
  {
    id: "web-development",
    number: "03",
    chip: "Web & UI/UX Design",
    title: "Website Development",
    image: "/services/app-development.webp",
    points: [
      "High-Speed Responsive Websites",
      "Modern UI/UX & Glassmorphism Design",
      "Search Engine Optimization (SEO)",
    ],
  },
  {
    id: "political-campaign",
    number: "04",
    chip: "Political PR & Strategy",
    title: "Political Campaign / Narrative Building",
    image: "/services/banner.webp",
    points: [
      "Constituency Sentiment Analytics",
      "Digital War Room & Voter Outreach",
      "Strategic Narrative Building",
    ],
  },
  {
    id: "content-creation",
    number: "05",
    chip: "Content & Media",
    title: "Content Marketing / Content Creation",
    image: "/services/content-creation.webp",
    points: [
      "High-Converting Ad Copy & Scripts",
      "Visual Storytelling & Video Reels",
      "Brand Identity & Graphic Assets",
    ],
  },
  {
    id: "influencer-marketing",
    number: "06",
    chip: "Creator Network",
    title: "Influencer Marketing",
    image: "/services/influencer.webp",
    points: [
      "Regional Rajasthan Creator Network",
      "Brand Ambassador Partnerships",
      "High-Impact Sponsored Reach",
    ],
  },
];

export default function HeroScrollCoverflow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const tilesRef = useRef<HTMLDivElement[]>([]);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Compute 3D Coverflow Transforms based on offset from center (-2, -1, 0, 1, 2)
  const getTransformConfig = (offset: number) => {
    const clamped = Math.max(-2, Math.min(2, offset));
    const configs: Record<number, { xPercent: number; rotateY: number; scale: number; opacity: number; zIndex: number }> = {
      0:   { xPercent: 0,   rotateY: 0,   scale: 1,    opacity: 1,    zIndex: 30 },
      1:   { xPercent: 55,  rotateY: -35, scale: 0.78, opacity: 0.55, zIndex: 20 },
      "-1": { xPercent: -55, rotateY: 35,  scale: 0.78, opacity: 0.55, zIndex: 20 },
      2:   { xPercent: 90,  rotateY: -45, scale: 0.55, opacity: 0,    zIndex: 10 },
      "-2": { xPercent: -90, rotateY: 45,  scale: 0.55, opacity: 0,    zIndex: 10 },
    };
    return configs[clamped] || { xPercent: 0, rotateY: 0, scale: 1, opacity: 0, zIndex: 1 };
  };

  // Perform 3D Coverflow Arc Shift Animation using GSAP
  const animateCoverflow = (newIdx: number, duration = 0.5) => {
    const tiles = tilesRef.current.filter(Boolean);
    if (!tiles.length) return;

    tiles.forEach((tile, i) => {
      const offset = i - newIdx;
      const t = getTransformConfig(offset);

      if (reducedMotion) {
        gsap.to(tile, {
          opacity: i === newIdx ? 1 : 0,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(tile, {
          xPercent: t.xPercent,
          rotateY: t.rotateY,
          scale: t.scale,
          opacity: t.opacity,
          zIndex: t.zIndex,
          force3D: true,
          duration: duration,
          ease: "power3.out",
        });
      }
    });
  };

  // Navigate directly to a specific slide index and sync ScrollTrigger progress
  const goToIndex = (targetIdx: number) => {
    const clampedIdx = Math.max(0, Math.min(SLIDES_DATA.length - 1, targetIdx));
    setActiveIndex(clampedIdx);
    animateCoverflow(clampedIdx);

    // Scroll window smoothly to match ScrollTrigger pinned progress position
    if (scrollTriggerRef.current && !isMobile && !reducedMotion) {
      const st = scrollTriggerRef.current;
      const progress = clampedIdx / (SLIDES_DATA.length - 1);
      const targetScroll = st.start + progress * (st.end - st.start);
      gsap.to(window, {
        scrollTo: targetScroll,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const goNext = () => goToIndex(activeIndex + 1);
  const goPrev = () => goToIndex(activeIndex - 1);

  // Setup GSAP + ScrollTrigger Pinned Stepped Scroll Interception
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const checkSettings = () => {
      setIsMobile(window.innerWidth < 768);
      setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    };

    checkSettings();
    window.addEventListener("resize", checkSettings);

    const tiles = tilesRef.current.filter(Boolean);
    if (!tiles.length) return;

    // Set initial 3D positions
    tiles.forEach((tile, i) => {
      const offset = i - 0;
      const t = getTransformConfig(offset);
      gsap.set(tile, {
        xPercent: t.xPercent,
        rotateY: t.rotateY,
        scale: t.scale,
        opacity: t.opacity,
        zIndex: t.zIndex,
        force3D: true,
      });
    });

    if (window.innerWidth < 768 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => window.removeEventListener("resize", checkSettings);
    }

    const ctx = gsap.context(() => {
      const st = ScrollTrigger.create({
        trigger: pinContainerRef.current,
        start: "top top",
        end: () => "+=" + (SLIDES_DATA.length * 360),
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          // Snap discretely per tile index based on scroll progress
          const step = Math.round(self.progress * (SLIDES_DATA.length - 1));
          if (step !== activeIndexRef.current && step >= 0 && step < SLIDES_DATA.length) {
            setActiveIndex(step);
            animateCoverflow(step);
          }
        },
      });

      scrollTriggerRef.current = st;
    }, sectionRef);

    return () => {
      window.removeEventListener("resize", checkSettings);
      ctx.revert();
    };
  }, []);

  const activeSlide = SLIDES_DATA[activeIndex] || SLIDES_DATA[0];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-[#0A0A0A] bg-noise border-t border-white/5 text-white overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0080CB]/15 via-transparent to-transparent pointer-events-none" />

      {/* PINNED VIEWPORT CONTAINER (100vh) */}
      <div
        ref={pinContainerRef}
        className="min-h-screen h-screen flex flex-col justify-between items-center relative py-8 px-4 z-20"
      >
        {/* Synchronized Section Header (Title & Subtitle change smoothly with active tile) */}
        <div className="relative text-center pt-2 mb-2 select-none max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-[#0C9DA8]">
            <Sparkles className="w-3.5 h-3.5 text-[#0C9DA8]" />
            <span>360° Core Digital Capabilities</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-2"
            >
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-display">
                {activeSlide.title}
              </h2>

              {/* Bullet Chips for Active Slide */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                {activeSlide.points.map((pt) => (
                  <span
                    key={pt}
                    className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-xs font-semibold text-[#CBD5E1]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0C9DA8]" />
                    {pt}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3D Coverflow Viewport Container */}
        <div
          className="relative w-full max-w-7xl h-[420px] sm:h-[480px] md:h-[540px] flex items-center justify-center my-auto"
          style={{ perspective: "1400px" }}
        >
          {SLIDES_DATA.map((slide, i) => {
            const offset = i - activeIndex;

            return (
              <div
                key={slide.id}
                ref={(el) => {
                  if (el) tilesRef.current[i] = el;
                }}
                onClick={() => goToIndex(i)}
                className="carousel-panel absolute w-[94%] max-w-[920px] h-full rounded-[36px] overflow-hidden bg-[#111111] border border-white/20 shadow-[0_35px_80px_rgba(0,0,0,0.95)] flex flex-col justify-end p-6 sm:p-10 cursor-pointer transform-gpu transition-shadow duration-300 group"
                style={{
                  pointerEvents: Math.abs(offset) <= 1 ? "auto" : "none",
                }}
              >
                {/* Full-Bleed Optimized Image Background */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 920px"
                  priority={i === 0}
                  className="object-cover filter brightness-[0.72] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10" />

                {/* Top-Left Floating Badge Chip */}
                <div className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs sm:text-sm font-bold text-white shadow-xl">
                  <Sparkles className="w-4 h-4 text-[#FFE600]" />
                  <span>{slide.chip}</span>
                </div>

                {/* Top-Right Counter */}
                <div className="absolute top-6 right-6 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-mono text-white/90">
                  <span>{slide.number}</span>
                  <span className="text-white/40">/ 06</span>
                </div>

                {/* Bottom Content inside Card */}
                <div className="relative z-20 text-left space-y-3 max-w-2xl">
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-display drop-shadow-2xl">
                    {slide.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Controls Bar & Progress Indicator */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-4 z-40">
          {/* Previous Arrow Button */}
          <button
            onClick={goPrev}
            disabled={activeIndex === 0}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/30 bg-black/50 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none backdrop-blur-md shadow-xl"
            aria-label="Previous Capability"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Progress Counter Indicator */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 border border-white/20 backdrop-blur-md">
            {SLIDES_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? "w-6 bg-[#0C9DA8] shadow-[0_0_8px_#0C9DA8]"
                    : "w-2 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Center Pill CTA Button */}
          <a
            href={BRAND.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-transparent border border-white/40 hover:bg-white/15 text-white font-extrabold text-xs sm:text-sm px-6 sm:px-8 py-3.5 rounded-full transition-all duration-300 backdrop-blur-md shadow-2xl uppercase tracking-wider"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-4 h-4 text-[#FFE600]" />
          </a>

          {/* Next Arrow Button */}
          <button
            onClick={goNext}
            disabled={activeIndex === SLIDES_DATA.length - 1}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/30 bg-black/50 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none backdrop-blur-md shadow-xl"
            aria-label="Next Capability"
          >
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

      </div>
    </section>
  );
}
