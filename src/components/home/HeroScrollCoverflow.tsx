"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { BRAND } from "@/lib/data";

const SLIDES_DATA = [
  {
    id: "brand-strategy",
    number: "01",
    chip: "Brand Strategy & Performance",
    title: "Brand strategy / Performance marketing",
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
  const swiperRef = useRef<SwiperClass | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Manage video playback — only play active center tile video for 60fps performance
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

  // Handle slide index navigation & sync Swiper
  const goToIndex = (targetIdx: number) => {
    const clampedIdx = Math.max(0, Math.min(SLIDES_DATA.length - 1, targetIdx));
    setActiveIndex(clampedIdx);
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(clampedIdx);
    }

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

    if (window.innerWidth < 768 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => window.removeEventListener("resize", checkSettings);
    }

    const ctx = gsap.context(() => {
      const st = ScrollTrigger.create({
        trigger: pinContainerRef.current,
        start: "top top",
        end: () => "+=" + (SLIDES_DATA.length * 380),
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const step = Math.round(self.progress * (SLIDES_DATA.length - 1));
          if (step !== activeIndexRef.current && step >= 0 && step < SLIDES_DATA.length) {
            setActiveIndex(step);
            if (swiperRef.current) {
              swiperRef.current.slideToLoop(step);
            }
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
        {/* Synchronized Text Header (Title, Pill Badge & Bullets slide/crossfade smoothly on index shift) */}
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
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-2 w-full text-center"
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
        </div>

        {/* 3D Coverflow Swiper Viewport Container */}
        <div
          className="relative w-full max-w-7xl h-[420px] sm:h-[480px] md:h-[540px] flex items-center justify-center my-auto"
          style={{ perspective: "1200px" }}
        >
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 28,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            className="w-full !overflow-visible"
          >
            {SLIDES_DATA.map((slide, i) => (
              <SwiperSlide
                key={slide.id}
                className="!w-[88%] sm:!w-[70%] md:!w-[58%] lg:!w-[54%] max-w-[900px] transition-all duration-500"
              >
                {/* 3D Card Chrome Frame */}
                <div className="relative h-[420px] sm:h-[480px] md:h-[540px] rounded-[36px] overflow-hidden bg-[#111111] border border-white/20 shadow-[0_35px_80px_rgba(0,0,0,0.95)] flex flex-col justify-end p-6 sm:p-10 group transform-gpu">
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
                    className="absolute inset-0 w-full h-full object-cover filter brightness-[0.75] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Poster Image Overlay for Reduced Motion or Video Fallback */}
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

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10 pointer-events-none" />

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
                  <div className="relative z-20 text-left space-y-3 max-w-2xl pointer-events-none">
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-display drop-shadow-2xl">
                      {slide.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
