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
    <div className="relative w-full py-6 select-none">
      {/* Interactive Prompt */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-white/90 shadow-md">
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
            rotate: 20,
            stretch: 0,
            depth: 250,
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
          className="w-full !py-8"
        >
          {CAMPAIGN_POSTS.map((post, idx) => (
            <SwiperSlide
              key={post.slug}
              className="!w-[340px] sm:!w-[440px] transition-all duration-300"
            >
              {({ isActive }) => (
                <div
                  className={`group relative flex flex-col justify-between h-[520px] sm:h-[560px] rounded-3xl overflow-hidden border transition-all duration-500 bg-[#141A29] ${
                    isActive
                      ? "border-white/40 shadow-[0_20px_50px_rgba(0,128,203,0.35)] scale-100 ring-2 ring-[#0080CB]/50"
                      : "border-white/15 shadow-xl scale-95 opacity-80"
                  }`}
                >
                  {/* Glowing Accent Top Bar */}
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-[#0080CB] z-20" />

                  {/* Card Image Banner */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 320px, 440px"
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
                      <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono text-white border border-white/20">
                        0{idx + 1} / 0{CAMPAIGN_POSTS.length}
                      </span>
                    </div>
                  </div>

                  {/* Card Body Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 relative z-20">
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-black text-white leading-snug group-hover:text-[#38BDF8] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 font-normal">
                        {post.description}
                      </p>
                    </div>

                    {/* CTA Link Button */}
                    <div className="pt-2">
                      <Link
                        href={`/${post.slug}/`}
                        className="w-full inline-flex items-center justify-between px-4 py-3 rounded-2xl bg-white hover:bg-[#0080CB] text-[#0A0A0A] hover:text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all duration-300 shadow-md group/btn"
                      >
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#0080CB] group-hover/btn:text-white" />
                          <span>View Full Case Study</span>
                        </span>
                        <div className="w-7 h-7 rounded-full bg-black/10 group-hover/btn:bg-white/20 text-[#0A0A0A] group-hover/btn:text-white flex items-center justify-center transition-colors">
                          <ArrowUpRight className="w-4 h-4" />
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
        <div className="flex items-center justify-between max-w-sm mx-auto mt-4 px-4">
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous campaign slide"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all active:scale-95 shadow-md cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {CAMPAIGN_POSTS.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => swiperRef.current?.slideToLoop(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === dotIdx
                    ? "w-7 bg-[#0080CB]"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next campaign slide"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all active:scale-95 shadow-md cursor-pointer"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
