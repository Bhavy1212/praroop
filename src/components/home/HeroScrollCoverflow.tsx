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
    subtitle: "Targeted ROI, brand authority, and data-driven audience conversion funnels.",
    image: "/services/analysis.webp",
    video: "/services/videos/brand-strategy.mp4",
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
    subtitle: "Organic viral growth and high-conversion paid multi-platform campaigns.",
    image: "/services/social-media.webp",
    video: "/services/videos/social-marketing.mp4",
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
    subtitle: "High-speed modern digital web platforms built with glassmorphism UX.",
    image: "/services/app-development.webp",
    video: "/services/videos/web-development.mp4",
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
    subtitle: "Strategic voter outreach, sentiment analytics, and digital war room ops.",
    image: "/services/banner.webp",
    video: "/services/videos/political-campaign.mp4",
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
    subtitle: "Captivating copy, video production reels, and visual storytelling.",
    image: "/services/content-creation.webp",
    video: "/services/videos/content-creation.mp4",
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
    subtitle: "Regional creator partnerships driving authentic high-impact sponsored reach.",
    image: "/services/influencer.webp",
    video: "/services/videos/influencer-marketing.mp4",
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
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Manage video playback — autoplay active center tile, pause inactive tiles
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

  // Compute exact 3D Coverflow Transform properties according to spec
  const getCardStyle = (offset: number) => {
    if (isMobile) {
      if (offset === 0) {
        return {
          x: "0%",
          z: 0,
          rotateY: 0,
          scale: 1,
          opacity: 1,
          filter: "brightness(1)",
          zIndex: 30,
        };
      }
      return {
        x: offset > 0 ? "100%" : "-100%",
        z: -100,
        rotateY: 0,
        scale: 0.85,
        opacity: 0,
        filter: "brightness(0.5)",
        zIndex: 10,
      };
    }

    if (offset === 0) {
      // Active center card
      return {
        x: "0%",
        z: 0,
        rotateY: 0,
        scale: 1,
        opacity: 1,
        filter: "brightness(1)",
        zIndex: 30,
      };
    }
    if (offset === 1) {
      // Immediate right card
      return {
        x: "55%",
        z: -200,
        rotateY: -35,
        scale: 0.8,
        opacity: 0.55,
        filter: "brightness(0.5)",
        zIndex: 20,
      };
    }
    if (offset === -1) {
      // Immediate left card
      return {
        x: "-55%",
        z: -200,
        rotateY: 35,
        scale: 0.8,
        opacity: 0.55,
        filter: "brightness(0.5)",
        zIndex: 20,
      };
    }
    if (offset === 2) {
      // Far right card
      return {
        x: "90%",
        z: -400,
        rotateY: -45,
        scale: 0.65,
        opacity: 0.25,
        filter: "brightness(0.3)",
        zIndex: 10,
      };
    }
    if (offset === -2) {
      // Far left card
      return {
        x: "-90%",
        z: -400,
        rotateY: 45,
        scale: 0.65,
        opacity: 0.25,
        filter: "brightness(0.3)",
        zIndex: 10,
      };
    }
    return {
      x: offset > 0 ? "120%" : "-120%",
      z: -500,
      rotateY: offset > 0 ? -45 : 45,
      scale: 0.5,
      opacity: 0,
      filter: "brightness(0.2)",
      zIndex: 1,
    };
  };

  // Navigate directly to slide index & sync ScrollTrigger pinned scroll position
  const goToIndex = (targetIdx: number) => {
    const clampedIdx = Math.max(0, Math.min(SLIDES_DATA.length - 1, targetIdx));
    setActiveIndex(clampedIdx);

    if (scrollTriggerRef.current && !isMobile && !reducedMotion) {
      const st = scrollTriggerRef.current;
      const progress = clampedIdx / (SLIDES_DATA.length - 1);
      const targetScroll = st.start + progress * (st.end - st.start);
      gsap.to(window, {
        scrollTo: targetScroll,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  };

  const goNext = () => goToIndex(activeIndex + 1);
  const goPrev = () => goToIndex(activeIndex - 1);

  // GSAP + ScrollTrigger Pinned Stepped Scroll Interception
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const checkSettings = () => {
      setIsMobile(window.innerWidth < 768);
      setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    };

    checkSettings();
    window.addEventListener("resize", checkSettings);

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
          const step = Math.round(self.progress * (SLIDES_DATA.length - 1));
          if (step !== activeIndexRef.current && step >= 0 && step < SLIDES_DATA.length) {
            setActiveIndex(step);
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
      {/* Background Soft Radial Glow Blobs for Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0080CB]/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/3 w-[500px] h-[500px] rounded-full bg-[#0C9DA8]/12 blur-[100px] pointer-events-none" />

      {/* PINNED VIEWPORT CONTAINER (100vh) */}
      <div
        ref={pinContainerRef}
        className="min-h-screen h-screen flex flex-col justify-between items-center relative py-8 px-4 z-20"
      >
        {/* Right-Side Vertical Dot Indicators */}
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3 bg-black/50 backdrop-blur-md p-3 rounded-full border border-white/15 shadow-2xl">
          {SLIDES_DATA.map((slide, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={slide.id}
                onClick={() => goToIndex(idx)}
                aria-label={`Go to slide ${slide.number}`}
                className="group relative flex items-center justify-center p-1 focus:outline-none"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-3.5 h-3.5 bg-[#0C9DA8] shadow-[0_0_10px_#0C9DA8] scale-110"
                      : "w-2.5 h-2.5 border border-white/40 bg-transparent group-hover:bg-white/60"
                  }`}
                />
                <span className="absolute right-8 px-2.5 py-1 rounded-md bg-black/90 border border-white/15 text-[11px] font-bold text-white whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-xl">
                  {slide.chip}
                </span>
              </button>
            );
          })}
        </div>

        {/* Section Header */}
        <div className="relative text-center pt-2 mb-2 select-none max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-[#0C9DA8]">
            <Sparkles className="w-3.5 h-3.5 text-[#0C9DA8]" />
            <span>360° Core Digital Capabilities</span>
          </div>

          <div className="relative h-[90px] sm:h-[100px] flex flex-col justify-center items-center overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="space-y-2 w-full text-center"
              >
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-display">
                  {activeSlide.title}
                </h2>

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
        </div>

        {/* 3D STAGE CONTAINER (perspective: 1500px, transform-style: preserve-3d) */}
        <div
          className="relative w-full max-w-7xl h-[420px] sm:h-[480px] md:h-[540px] flex items-center justify-center my-auto"
          style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
        >
          {SLIDES_DATA.map((slide, i) => {
            const offset = i - activeIndex;
            const styleConfig = getCardStyle(offset);
            const isCenter = offset === 0;

            return (
              <motion.div
                key={slide.id}
                onClick={() => goToIndex(i)}
                animate={{
                  x: styleConfig.x,
                  z: styleConfig.z,
                  rotateY: styleConfig.rotateY,
                  scale: styleConfig.scale,
                  opacity: styleConfig.opacity,
                  filter: styleConfig.filter,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.4, 0, 0.2, 1], // cubic-bezier(0.4, 0, 0.2, 1)
                }}
                className="carousel-panel absolute w-[94%] max-w-[900px] h-full rounded-[24px] overflow-hidden bg-[#111111] border border-white/20 shadow-[0_30px_80px_rgba(0,0,0,0.95)] flex flex-col justify-end p-6 sm:p-10 cursor-pointer transform-gpu"
                style={{
                  zIndex: styleConfig.zIndex,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Background Video with Poster Fallback */}
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[i] = el;
                  }}
                  src={slide.video}
                  poster={slide.image}
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.75] contrast-[1.05]"
                />

                {/* Poster Image for Reduced Motion */}
                {reducedMotion && (
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
                    priority={i === 0}
                    className="object-cover filter brightness-[0.75] contrast-[1.05]"
                  />
                )}

                {/* Dark Gradient Overlay from Bottom (rgba(0,0,0,0.75) to transparent) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 pointer-events-none" />

                {/* Top-Left Floating Badge Chip */}
                <div className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs sm:text-sm font-bold text-white shadow-xl">
                  <Sparkles className="w-4 h-4 text-[#FFE600]" />
                  <span>{slide.chip}</span>
                </div>

                {/* Top-Right Counter "01/06" on Active Card */}
                <div className="absolute top-6 right-6 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-mono text-white/90">
                  <span>{slide.number}</span>
                  <span className="text-white/40">/ 06</span>
                </div>

                {/* Card Heading & Subheading Centered Over Image (Lower-Center) */}
                <div className="relative z-20 text-center mx-auto space-y-2 max-w-2xl pointer-events-none">
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-display drop-shadow-2xl">
                    {slide.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#CBD5E1] font-normal leading-relaxed line-clamp-2">
                    {slide.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Controls Bar Below Carousel */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-4 z-40">
          {/* Previous Arrow Pill Button */}
          <button
            onClick={goPrev}
            disabled={activeIndex === 0}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/30 bg-black/50 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none backdrop-blur-md shadow-xl"
            aria-label="Previous Capability"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Center CTA Pill Button */}
          <a
            href={BRAND.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-transparent border border-white/40 hover:bg-white/15 text-white font-extrabold text-xs sm:text-sm px-6 sm:px-8 py-3.5 rounded-full transition-all duration-300 backdrop-blur-md shadow-2xl uppercase tracking-wider"
          >
            <span>Tell us what you're looking for</span>
            <ArrowUpRight className="w-4 h-4 text-[#FFE600]" />
          </a>

          {/* Next Arrow Pill Button */}
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
