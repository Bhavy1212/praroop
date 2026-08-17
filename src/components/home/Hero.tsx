"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Star,
  ChevronDown,
  Phone,
  MessageSquare,
} from "lucide-react";
import { BRAND } from "@/lib/data";

export default function Hero() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] max-h-screen flex flex-col justify-between pt-3 sm:pt-5 pb-3 sm:pb-5 px-4 sm:px-8 lg:px-14 overflow-hidden bg-[#FAFAFC] text-[#0F172A]"
    >
      {/* ── Background Banner Image with Light Architectural Overlay ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="/praaroop-light-hero.jpg"
          alt="Praaroop Media 360 Marketing Agency"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right lg:object-[78%_center] filter brightness-[1.02] contrast-[1.02]"
        />

        {/* Clean Light-Mode Gradient Overlays for Crystal-Clear Typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFC] via-[#FAFAFC]/92 to-transparent lg:w-[62%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFC] via-transparent to-[#FAFAFC]/40" />
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#0080CB]/6 blur-[100px] pointer-events-none" />
      </div>

      {/* ── Top Header / Brand Bar with Official Praaroop Media Logo ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between gap-4 py-1">
        {/* Official Praaroop Media Logo (Renders perfectly in full color on light background) */}
        <Link href="/" className="inline-flex items-center group focus:outline-none">
          <div className="relative h-10 sm:h-12 w-36 sm:w-48 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/praaroop-Media-and-Adv-1.png"
              alt="Praaroop Media — 360° Marketing Agency"
              fill
              priority
              sizes="(max-width: 640px) 150px, 200px"
              className="object-contain"
            />
          </div>
        </Link>

        {/* Top Right Quick Contact Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${BRAND.phone}`}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-white border border-slate-200/90 shadow-xs text-slate-800 text-xs sm:text-sm font-bold backdrop-blur-md transition-all duration-200 hover:border-slate-300"
          >
            <Phone className="w-3.5 h-3.5 text-[#0080CB]" />
            <span>{BRAND.phone}</span>
          </a>

          <a
            href={BRAND.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0080CB] hover:bg-[#0066A3] text-white text-xs sm:text-sm font-extrabold shadow-[0_4px_16px_rgba(0,128,203,0.3)] transition-all duration-300 hover:scale-105"
          >
            <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>

      {/* ── Main Banner Content & Headline (Proportioned to fit 1 screen) ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-2 sm:py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl text-left space-y-3.5 sm:space-y-5"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/90 shadow-xs backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0080CB] animate-pulse" />
            <span className="text-xs sm:text-sm font-extrabold text-slate-800 tracking-wide uppercase">
              360° Digital & Outdoor Marketing Agency • Udaipur
            </span>
          </div>

          {/* Banner Main Headline (Light Theme with solid color accent) */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[3.8rem] xl:text-[4.4rem] font-black uppercase tracking-tight text-slate-900 leading-[0.98] font-display">
            MARKETING THAT DELIVERS <br />
            <span className="text-[#D10B6A]">MEASURABLE GROWTH</span>
          </h1>

          {/* Subheading */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 max-w-xl font-medium leading-relaxed">
            Rajasthan&apos;s leading agency fusing massive outdoor hoarding dominance with AI-driven digital performance marketing and creative campaign storytelling.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#about"
              className={`inline-flex items-center justify-center gap-2.5 bg-[#0F172A] hover:bg-[#0080CB] text-white text-xs sm:text-sm lg:text-base font-extrabold px-7 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-300 shadow-md ${
                isTouchDevice ? "" : "hover:scale-105"
              }`}
            >
              <span>Explore 360° Services</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </a>

            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#0C9DA8] hover:bg-[#0A828B] text-white text-xs sm:text-sm lg:text-base font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-300 shadow-xs hover:scale-105"
            >
              <span>Connect On WhatsApp</span>
            </a>
          </div>

          {/* Rating & Proof Pill */}
          <div className="pt-1 flex items-center gap-3">
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold shadow-xs">
              <div className="flex items-center text-[#0C9DA8]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#0C9DA8] text-[#0C9DA8]" />
                ))}
              </div>
              <span className="font-extrabold text-slate-900">4.9 / 5.0 Rating</span>
              <span className="text-slate-300">•</span>
              <span>200+ Campaigns</span>
              <span className="text-slate-300">•</span>
              <span>100+ Leading Brands</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Bottom Indicator ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-xs text-slate-500 font-mono pt-2 border-t border-slate-200/80">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0080CB] animate-ping" />
          <span className="font-bold text-slate-700">PRAAROOP MEDIA • UDAIPUR</span>
        </span>
        <a
          href="#about"
          className="inline-flex items-center gap-1.5 text-slate-600 hover:text-[#0080CB] font-bold transition-colors"
        >
          <span>Scroll to explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#0080CB]" />
        </a>
      </div>
    </section>
  );
}
