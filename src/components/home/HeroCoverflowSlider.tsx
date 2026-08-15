"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

export default function HeroCoverflowSlider() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="services"
      className="relative bg-[#0A0A0A] bg-noise py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 text-white overflow-hidden"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0080CB]/15 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-[#0C9DA8]">
            <Sparkles className="w-3.5 h-3.5 text-[#0C9DA8]" />
            <span>360° Core Digital Capabilities</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
            Digital Marketing <span className="text-gradient-tri">Solutions</span>
          </h2>

          {/* Subhead */}
          <p className="text-sm sm:text-base text-[#CBD5E1] font-normal leading-relaxed max-w-2xl mx-auto">
            Strategic digital capabilities engineered to elevate your brand presence and deliver measurable growth across every channel.
          </p>
        </div>

        {/* 3D Coverflow Swiper Carousel */}
        <div className="relative w-full py-4">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 35,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
            className="w-full !overflow-visible"
          >
            {SLIDES_DATA.map((slide, idx) => (
              <SwiperSlide
                key={slide.id}
                className="!w-[88%] sm:!w-[70%] md:!w-[60%] lg:!w-[56%] max-w-[850px] transition-all duration-300"
              >
                <div className="relative h-[420px] sm:h-[480px] md:h-[520px] rounded-[32px] overflow-hidden bg-[#111111] border border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.9)] flex flex-col justify-end p-6 sm:p-10 group">
                  {/* Background Image */}
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 850px"
                    priority={idx === 0}
                    className="object-cover filter brightness-[0.7] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-transparent z-10" />

                  {/* Top-Left Floating Badge Chip */}
                  <div className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-bold text-white shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-[#0C9DA8]" />
                    <span>{slide.chip}</span>
                  </div>

                  {/* Top-Right Counter */}
                  <div className="absolute top-6 right-6 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/15 text-xs font-mono text-white/90">
                    <span>{slide.number}</span>
                    <span className="text-white/40">/ 06</span>
                  </div>

                  {/* Bottom Slide Content */}
                  <div className="relative z-20 text-left space-y-4 max-w-2xl">
                    <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight font-display drop-shadow-lg">
                      {slide.title}
                    </h3>

                    {/* Key Bullet Chips */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {slide.points.map((point) => (
                        <div
                          key={point}
                          className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-xs font-semibold text-white/90"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0C9DA8]" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Controls & Progress Counter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 max-w-4xl mx-auto border-t border-white/10">
          {/* Progress Dots Indicator */}
          <div className="flex items-center gap-2">
            {SLIDES_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => swiperRef.current?.slideToLoop(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? "w-8 bg-[#0C9DA8] shadow-[0_0_10px_#0C9DA8]"
                    : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Controls Bar (Prev Arrow | CTA Pill | Next Arrow) */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full border border-white/30 bg-black/40 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-xl"
              aria-label="Previous Slide"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-transparent border border-white/40 hover:bg-white/15 text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-300 backdrop-blur-md shadow-2xl uppercase tracking-wider"
            >
              <span>Tell Us What You're Looking For</span>
              <ArrowUpRight className="w-4 h-4 text-[#0C9DA8]" />
            </a>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full border border-white/30 bg-black/40 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-xl"
              aria-label="Next Slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
