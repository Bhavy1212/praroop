"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { BRAND } from "@/lib/data";

export default function Hero() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-16 overflow-hidden bg-[#0077C8]">
      {/* 1. Clean Full-Bleed Split Photo (Left: Open Blue Sky for Text, Right: Newspaper Subject) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/hero-banner-appinventiv.png"
          alt="Praaroop Media — 360° Marketing Agency"
          fill
          priority
          className="object-cover object-right lg:object-center filter brightness-100 contrast-105 scale-100"
        />

        {/* Soft Blue Left Overlay ensuring 100% Text Readability over Sky */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#006dbb] via-[#0072c4]/70 to-transparent lg:w-[58%]" />
      </div>

      {/* Top Eyebrow Tag */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between">
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 shadow-sm backdrop-blur-md"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFE600] animate-pulse" />
          <span className="text-xs sm:text-sm font-extrabold text-white tracking-wide uppercase">
            360° Marketing & Branding Agency • Udaipur
          </span>
        </motion.div>
      </div>

      {/* 2. Main Clean Hero Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Stacked Condensed Headline (Exact Reference Match) */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-8 text-left space-y-6"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[5.8rem] xl:text-[6.8rem] font-black uppercase tracking-tight text-white leading-[0.92] drop-shadow-md font-display">
            MARKETING <br />
            THAT DELIVERS <br />
            <span className="text-[#FFE600] drop-shadow-[0_4px_20px_rgba(255,230,0,0.5)]">
              MEASURABLE
            </span> <br />
            GROWTH
          </h1>

          {/* Subheadline Copy */}
          <p className="text-base sm:text-xl text-white/95 max-w-xl font-medium leading-relaxed drop-shadow-sm">
            Strategic outdoor hoardings, airport media, political narratives, and high-conversion digital marketing campaigns.
          </p>

          {/* CTA Action Button Row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            {/* White Rounded Pill CTA Button */}
            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-3 bg-white text-[#0B1220] hover:bg-[#FFE600] text-base font-black px-9 py-4 rounded-full transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.2)] ${
                isTouchDevice ? "" : "hover:scale-105"
              }`}
            >
              <span>Get In Touch On WhatsApp</span>
              <ArrowUpRight className="w-5 h-5 text-[#0077C8]" />
            </a>

            <a
              href="#outdoor"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 border border-white/35 text-white text-base font-bold px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-md"
            >
              <span>Explore 360° Services</span>
            </a>
          </div>

          {/* Rating Pill */}
          <div className="pt-2 flex items-center gap-3">
            <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-xs sm:text-sm font-semibold shadow-xs">
              <div className="flex items-center text-[#FFE600]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFE600] text-[#FFE600]" />
                ))}
              </div>
              <span className="font-extrabold text-white">4.9 / 5.0 Rating</span>
              <span className="text-white/40">•</span>
              <span>200+ Campaigns</span>
              <span className="text-white/40">•</span>
              <span>100+ Clients</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. Bottom Right Floating Brand Badge (Exact Reference Match) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-2 flex justify-end">
        <div className="bg-gradient-to-r from-amber-500 to-yellow-500 border border-yellow-300/60 px-5 py-4 rounded-2xl text-black shadow-2xl flex items-center gap-4 max-w-sm">
          <div className="w-10 h-10 rounded-full bg-black text-white font-extrabold flex items-center justify-center text-sm shadow-md shrink-0">
            PM
          </div>
          <div>
            <h4 className="text-xs font-black uppercase text-black leading-snug">
              Build an Industry-Leading Brand
            </h4>
            <p className="text-[11px] font-bold text-black/85">
              Talk to Praaroop Media Experts →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
