"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Keyboard, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { CAMPAIGN_POSTS } from "@/lib/data";
import { Calendar, Tag, ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function CampaignsCoverflowSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full py-4 select-none">
      {/* Interactive Prompt */}
      <div className="text-center mb-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-[#0080CB] shadow-2xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#0080CB] animate-ping" />
          <span>DRAG / SWIPE TO EXPLORE 3D CAROUSEL</span>
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[EffectCoverflow, Autoplay, Keyboard, Mousewheel]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          speed={600}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          keyboard={{ enabled: true }}
          mousewheel={{ forceToAxis: true, sensitivity: 0.8 }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          className="w-full !py-6"
        >
          {CAMPAIGN_POSTS.map((post, idx) => (
            <SwiperSlide
              key={post.slug}
              className="!w-[330px] sm:!w-[420px] transition-all duration-300"
            >
              {({ isActive }) => (
                <div
                  className={`group relative flex flex-col justify-between h-[500px] sm:h-[540px] rounded-3xl overflow-hidden border transition-all duration-500 bg-white ${
                    isActive
                      ? "border-[#0080CB]/60 shadow-[0_20px_50px_rgba(0,128,203,0.18)] scale-100 ring-2 ring-[#0080CB]/40"
                      : "border-slate-200 shadow-md scale-95 opacity-80"
                  }`}
                >
                  {/* Glowing Accent Top Bar */}
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-[#0080CB] z-20" />

                  {/* Card Image Banner */}
                  <div className="relative h-60 sm:h-68 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 320px, 420px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Category & Date Badges */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 rounded-full bg-[#0080CB] text-white text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                        <Tag className="w-3 h-3" /> {post.category}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-mono border border-white/20 flex items-center gap-1 shadow-xs">
                        <Calendar className="w-3 h-3 text-[#0C9DA8]" /> {post.date}
                      </span>
                    </div>

                    {/* Card Slide Number */}
                    <div className="absolute bottom-3 right-4 z-20">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white border border-white/20">
                        0{idx + 1} / 0{CAMPAIGN_POSTS.length}
                      </span>
                    </div>
                  </div>

                  {/* Card Body Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3 relative z-20 bg-white">
                    <div className="space-y-1.5">
                      <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] leading-snug group-hover:text-[#0080CB] transition-colors line-clamp-2 font-display">
                        {post.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#334155] leading-relaxed line-clamp-3 font-normal">
                        {post.description}
                      </p>
                    </div>

                    {/* CTA Link Button */}
                    <div className="pt-2">
                      <Link
                        href={`/${post.slug}/`}
                        className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-2xl bg-slate-50 hover:bg-[#0080CB] text-[#0F172A] hover:text-white font-bold text-xs uppercase tracking-wider border border-slate-200 transition-all duration-300 shadow-2xs group/btn"
                      >
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#0080CB] group-hover/btn:text-white" />
                          <span>View Full Case Study</span>
                        </span>
                        <div className="w-6 h-6 rounded-full bg-slate-200 group-hover/btn:bg-white/20 text-[#0F172A] group-hover/btn:text-white flex items-center justify-center transition-colors">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Controls */}
        <div className="flex items-center justify-between max-w-sm mx-auto mt-2 px-4">
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous campaign slide"
            className="p-3 rounded-full bg-white hover:bg-slate-100 text-[#0F172A] border border-slate-200 transition-all active:scale-95 shadow-md cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Real-time Indicator Dots */}
          <div className="flex items-center gap-1.5">
            {CAMPAIGN_POSTS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => swiperRef.current?.slideToLoop(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === i ? "w-7 bg-[#0080CB]" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next campaign slide"
            className="p-3 rounded-full bg-white hover:bg-slate-100 text-[#0F172A] border border-slate-200 transition-all active:scale-95 shadow-md cursor-pointer"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
