"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { BRAND } from "@/lib/data";

const CATEGORIES_NAV = [
  { label: "Brand Strategy", index: 0 },
  { label: "Digital Marketing", index: 1 },
  { label: "Website Development", index: 2 },
  { label: "Political Campaigns", index: 3 },
  { label: "Content Creation", index: 4 },
  { label: "Influencer Marketing", index: 5 },
];

const SERVICES_DATA = [
  {
    id: "slide-01",
    counter: "01 / 06",
    pillLabel: "✦ Brand Strategy & Performance",
    navLabel: "Brand Strategy",
    title: "Brand strategy /\nPerformance marketing",
    description: "Targeted ROI, brand authority, and data-driven audience conversion funnels.",
    image: "/services/analysis.webp",
    video: "/services/videos/brand-strategy.mp4",
  },
  {
    id: "slide-02",
    counter: "02 / 06",
    pillLabel: "✦ Digital Marketing & Social Media",
    navLabel: "Digital Marketing",
    title: "Digital marketing /\nSocial media marketing",
    description: "Meta & Google performance campaigns, social growth, community engagement and analytics.",
    image: "/services/social-media.webp",
    video: "/services/videos/social-marketing.mp4",
  },
  {
    id: "slide-03",
    counter: "03 / 06",
    pillLabel: "✦ Web Development",
    navLabel: "Website Development",
    title: "Website development",
    description: "High-speed responsive websites with modern UI/UX, conversion-focused experiences and SEO.",
    image: "/services/app-development.webp",
    video: "/services/videos/web-development.mp4",
  },
  {
    id: "slide-04",
    counter: "04 / 06",
    pillLabel: "✦ Political Campaigns",
    navLabel: "Political Campaigns",
    title: "Political campaign /\nNarrative building",
    description: "Constituency sentiment analytics, digital war rooms, voter outreach and strategic narrative building.",
    image: "/services/banner.webp",
    video: "/services/videos/political-campaign.mp4",
  },
  {
    id: "slide-05",
    counter: "05 / 06",
    pillLabel: "✦ Content",
    navLabel: "Content Creation",
    title: "Content marketing /\nContent creation",
    description: "High-converting copy, scripts, visual storytelling, reels and brand identity assets.",
    image: "/services/content-creation.webp",
    video: "/services/videos/content-creation.mp4",
  },
  {
    id: "slide-06",
    counter: "06 / 06",
    pillLabel: "✦ Influencer Marketing",
    navLabel: "Influencer Marketing",
    title: "Influencer marketing",
    description: "Regional creator networks, brand ambassador partnerships and high-impact sponsored reach.",
    image: "/services/influencer.webp",
    video: "/services/videos/influencer-marketing.mp4",
  },
];

export default function DigitalServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Track vertical scroll progress inside 550vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const checkSettings = () => {
      setIsMobile(window.innerWidth < 768);
      setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    };

    checkSettings();
    window.addEventListener("resize", checkSettings);
    return () => window.removeEventListener("resize", checkSettings);
  }, []);

  // Video Playback Management — Only play active center card video for 60fps performance
  useEffect(() => {
    videoRefs.current.forEach((vid, idx) => {
      if (!vid) return;
      if (idx === activeIndex && !reducedMotion) {
        vid.play().catch(() => {});
      } else {
        vid.pause();
      }
    });
  }, [activeIndex, reducedMotion]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const clamped = Math.max(0, Math.min(1, latest));
    setScrollProgress(clamped);

    const calculatedIndex = Math.min(
      SERVICES_DATA.length - 1,
      Math.max(0, Math.round(clamped * (SERVICES_DATA.length - 1)))
    );

    if (calculatedIndex !== activeIndex) {
      setActiveIndex(calculatedIndex);
    }
  });

  const scrollToSlideIndex = (index: number) => {
    if (!containerRef.current) return;
    const targetEl = containerRef.current;
    const totalScrollableHeight = targetEl.offsetHeight - window.innerHeight;
    const progressStep = index / (SERVICES_DATA.length - 1);
    const targetScrollY = targetEl.offsetTop + progressStep * totalScrollableHeight;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  };

  const goToNext = () => {
    const nextIdx = Math.min(SERVICES_DATA.length - 1, activeIndex + 1);
    scrollToSlideIndex(nextIdx);
  };

  const goToPrev = () => {
    const prevIdx = Math.max(0, activeIndex - 1);
    scrollToSlideIndex(prevIdx);
  };

  const activeSlide = SERVICES_DATA[activeIndex];

  const get3DOrbitTransform = (cardIndex: number) => {
    const offset = cardIndex - activeIndex;

    if (reducedMotion || isMobile) {
      if (offset === 0) {
        return {
          xPercent: 0,
          z: 0,
          rotateY: 0,
          scale: 1,
          opacity: 1,
          blur: "0px",
          brightness: 1,
          zIndex: 30,
        };
      }
      return {
        xPercent: offset > 0 ? 100 : -100,
        z: -100,
        rotateY: 0,
        scale: 0.85,
        opacity: 0,
        blur: "8px",
        brightness: 0.5,
        zIndex: 10,
      };
    }

    // Active centered card
    if (offset === 0) {
      return {
        xPercent: 0,
        z: 0,
        rotateY: 0,
        scale: 1,
        opacity: 1,
        blur: "0px",
        brightness: 1,
        zIndex: 30,
      };
    }

    // First card to the left
    if (offset === -1) {
      return {
        xPercent: -62,
        z: -180,
        rotateY: 30,
        scale: 0.84,
        opacity: 0.65,
        blur: "2px",
        brightness: 0.75,
        zIndex: 20,
      };
    }

    // First card to the right
    if (offset === 1) {
      return {
        xPercent: 62,
        z: -180,
        rotateY: -30,
        scale: 0.84,
        opacity: 0.65,
        blur: "2px",
        brightness: 0.75,
        zIndex: 20,
      };
    }

    // Secondary cards further to the left
    if (offset === -2) {
      return {
        xPercent: -110,
        z: -360,
        rotateY: 45,
        scale: 0.72,
        opacity: 0.25,
        blur: "4px",
        brightness: 0.55,
        zIndex: 10,
      };
    }

    // Secondary cards further to the right
    if (offset === 2) {
      return {
        xPercent: 110,
        z: -360,
        rotateY: -45,
        scale: 0.72,
        opacity: 0.25,
        blur: "4px",
        brightness: 0.55,
        zIndex: 10,
      };
    }

    // Out of view / far away cards
    if (offset < -2) {
      return {
        xPercent: -160,
        z: -500,
        rotateY: 60,
        scale: 0.6,
        opacity: 0,
        blur: "8px",
        brightness: 0.4,
        zIndex: 5,
      };
    }

    // Outer right cards
    return {
      xPercent: 160,
      z: -500,
      rotateY: -60,
      scale: 0.6,
      opacity: 0,
      blur: "8px",
      brightness: 0.4,
      zIndex: 5,
    };
  };

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative w-full bg-[#FAFAFC] bg-noise text-[#0F172A] border-t border-slate-200/80"
      style={{ height: isMobile ? "auto" : "550vh" }}
    >
      {/* PINNED STICKY VIEWPORT (100vh) */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between items-center py-6 px-4 sm:px-6 lg:px-8 overflow-hidden z-20">
        
        {/* Soft Radial Ambient Blue Glow behind active card */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(0, 128, 203, 0.12), transparent 55%)",
          }}
        />

        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center justify-between flex-1 space-y-4">
          
          {/* TOP CAPABILITY BADGE */}
          <div className="pt-2 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm backdrop-blur-md text-[11px] font-extrabold uppercase tracking-widest text-[#0080CB]">
              <Sparkles className="w-3.5 h-3.5 text-[#0080CB]" />
              <span>✦ 360° CORE DIGITAL CAPABILITIES</span>
            </div>
          </div>

          {/* HORIZONTAL CATEGORY NAVIGATION PILLS */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 z-30">
            {CATEGORIES_NAV.map((cat) => {
              const isActive = activeIndex === cat.index;
              return (
                <button
                  key={cat.label}
                  onClick={() => scrollToSlideIndex(cat.index)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 backdrop-blur-md ${
                    isActive
                      ? "bg-[#0080CB] text-white shadow-[0_4px_14px_rgba(0,128,203,0.35)] scale-105"
                      : "bg-white/90 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-white shadow-xs"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* 3D CIRCULAR ROLLING DECK STAGE */}
          <div
            className="relative w-full max-w-[1200px] h-[460px] sm:h-[520px] md:h-[560px] flex items-center justify-center my-auto px-2"
            style={{ perspective: "1400px", transformStyle: "preserve-3d" }}
          >
            {SERVICES_DATA.map((slide, i) => {
              const transform3D = get3DOrbitTransform(i);
              const isCenter = i === activeIndex;
              const isHovered = hoveredIndex === i;

              // Apply extremely subtle hover scale/brightness zoom to active card
              const finalScale = isCenter && isHovered ? (transform3D.scale * 1.025) : transform3D.scale;
              const finalBrightness = isCenter && isHovered ? (transform3D.brightness * 1.06) : transform3D.brightness;

              return (
                <div
                  key={slide.id}
                  onClick={() => scrollToSlideIndex(i)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="carousel-panel absolute w-[90vw] sm:w-[84vw] max-w-[1050px] h-full rounded-[36px] overflow-hidden bg-white border border-slate-200/80 shadow-[0_25px_60px_rgba(15,23,42,0.12)] flex flex-col justify-between p-6 sm:p-12 cursor-pointer transform-gpu transition-shadow duration-300 select-none"
                  style={{
                    transform: `translateX(${transform3D.xPercent}%) translateZ(${transform3D.z}px) rotateY(${transform3D.rotateY}deg) scale(${finalScale})`,
                    opacity: transform3D.opacity,
                    filter: `blur(${transform3D.blur}) brightness(${finalBrightness})`,
                    zIndex: transform3D.zIndex,
                    pointerEvents: transform3D.opacity > 0.2 ? "auto" : "none",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.85s cubic-bezier(0.25, 1, 0.33, 1), opacity 0.85s cubic-bezier(0.25, 1, 0.33, 1), filter 0.85s cubic-bezier(0.25, 1, 0.33, 1)",
                  }}
                >
                  {/* Direct CDN Looping Video Background with Poster Fallback */}
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[i] = el;
                    }}
                    src={slide.video}
                    poster={slide.image}
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover filter brightness-[0.8] contrast-[1.05]"
                  />

                  {/* Fallback Image for Reduced Motion */}
                  {reducedMotion && (
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 1050px"
                      priority={i === 0}
                      className="object-cover filter brightness-[0.8] contrast-[1.05]"
                    />
                  )}

                  {/* Dark Radial Scrim Overlay ensuring 100% Text Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/20 z-10 pointer-events-none" />

                  {/* Upper Floating Badge & Counter */}
                  <div className="relative z-20 flex items-center justify-between w-full pointer-events-none">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30 text-xs font-bold text-white shadow-lg">
                      <Sparkles className="w-3.5 h-3.5 text-[#FFE600]" />
                      <span>{slide.pillLabel}</span>
                    </div>

                    <div className="inline-flex items-center gap-1 bg-slate-900/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-mono text-white">
                      <span className="font-bold">{slide.counter}</span>
                    </div>
                  </div>

                  {/* Centered Animated Heading & Subtitle (Synchronized Slide Up/Down Animation) */}
                  <div className="relative z-20 text-center max-w-3xl mx-auto my-auto space-y-4 pointer-events-none px-4 min-h-[140px] flex flex-col items-center justify-center overflow-hidden">
                    <AnimatePresence mode="popLayout">
                      {isCenter && (
                        <motion.div
                          key={slide.id}
                          initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          className="space-y-3"
                        >
                          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight font-display tracking-tight drop-shadow-2xl whitespace-pre-line">
                            {slide.title}
                          </h3>

                          <p className="text-sm sm:text-lg text-slate-100 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                            {slide.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CONTROLS BAR BELOW (LIGHT MODE POLISH) */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 pb-2 z-40">
            {/* Left Arrow Button */}
            <button
              onClick={goToPrev}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-slate-200 bg-white hover:bg-slate-100 hover:scale-105 text-slate-800 flex items-center justify-center transition-all duration-300 shadow-md"
              aria-label="Previous Capability"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800" />
            </button>

            {/* Center Pill CTA Button */}
            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 bg-[#0080CB] hover:bg-[#006BB5] text-white font-extrabold text-xs sm:text-sm px-7 sm:px-9 py-3.5 rounded-full transition-all duration-300 shadow-[0_6px_20px_rgba(0,128,203,0.3)] hover:shadow-[0_10px_25px_rgba(0,128,203,0.4)] uppercase tracking-wider"
            >
              <span>TELL US WHAT YOU'RE LOOKING FOR</span>
              <ArrowUpRight className="w-4 h-4 text-[#FFE600] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>

            {/* Right Arrow Button */}
            <button
              onClick={goToNext}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-slate-200 bg-white hover:bg-slate-100 hover:scale-105 text-slate-800 flex items-center justify-center transition-all duration-300 shadow-md"
              aria-label="Next Capability"
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
