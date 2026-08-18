"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Star,
  ChevronDown,
  Phone,
  MessageSquare,
  Radio,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { BRAND } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] max-h-screen flex flex-col justify-between pt-2.5 sm:pt-4 pb-2.5 sm:pb-3 px-4 sm:px-8 lg:px-12 bg-white text-[#0F172A] overflow-hidden selection:bg-[#0080CB] selection:text-white"
    >
      {/* ── Seamless Full-Width Background with Continuous Alpha Fade (No Lines, No Edges) ── */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, transparent 22%, rgba(0,0,0,0.1) 35%, rgba(0,0,0,0.45) 48%, rgba(0,0,0,0.85) 62%, black 78%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, transparent 22%, rgba(0,0,0,0.1) 35%, rgba(0,0,0,0.45) 48%, rgba(0,0,0,0.85) 62%, black 78%)",
        }}
      >
        <Image
          src="/hero-audience-crowd-final.jpg"
          alt="Praaroop Media 360° Audience Reach & Brand Activations"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right scale-[1.01]"
        />

        {/* Soft edge blend for top and bottom bars */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/70 to-transparent" />
      </div>

      {/* ── Subtle Ambient Glows on Solid White Left ── */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#0080CB]/4 blur-[130px] pointer-events-none rounded-full z-0" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#0C9DA8]/4 blur-[120px] pointer-events-none rounded-full z-0" />

      {/* ── Top Header / Brand Bar with Official Logo ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between gap-3 py-0.5">
        {/* Official Praaroop Media Logo */}
        <Link href="/" className="inline-flex items-center group focus:outline-none">
          <div className="relative h-10 sm:h-12 md:h-13 w-40 sm:w-48 md:w-56 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/praaroop-Media-and-Adv-1.png"
              alt="Praaroop Media — 360° Marketing Agency"
              fill
              priority
              sizes="(max-width: 640px) 180px, 230px"
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Top Right Quick Contact Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <a
            href={`tel:${BRAND.phone}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white border border-slate-200/90 text-[#0F172A] text-xs font-bold transition-all shadow-xs backdrop-blur-md"
          >
            <Phone className="w-3.5 h-3.5 text-[#0080CB]" />
            <span>{BRAND.phone}</span>
          </a>

          <a
            href={BRAND.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#0080CB] to-[#0C9DA8] hover:from-[#0C9DA8] hover:to-[#0080CB] text-white text-xs sm:text-sm font-extrabold shadow-md shadow-[#0080CB]/25 transition-all duration-300 hover:scale-105"
          >
            <MessageSquare className="w-3.5 h-3.5 text-white fill-current" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>

      {/* ── Main Single-Screen Content Grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-0.5 sm:py-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">
          
          {/* Left 7 Columns: Pure White Background Content & High-Impact Typography */}
          <div className="lg:col-span-7 space-y-2.5 sm:space-y-3.5 text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50/95 border border-slate-200/90 shadow-2xs backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#0C9DA8] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-extrabold text-[#0F172A] tracking-wider uppercase font-mono">
                360° Marketing & Advertising Powerhouse • Udaipur
              </span>
            </div>

            {/* Main Headline: Both words on separate lines in Pink (#D10B6A) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] font-black uppercase tracking-tight text-[#0F172A] leading-[0.98] font-display">
              MARKETING THAT DELIVERS <br />
              <span className="text-[#D10B6A] block">MEASURABLE</span>
              <span className="text-[#D10B6A] block">GROWTH</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-[#334155] max-w-lg font-normal leading-relaxed">
              Rajasthan&apos;s premier agency fusing dominant outdoor hoarding networks with precision digital marketing, brand activations, and creative campaigns.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0080CB] to-[#0C9DA8] hover:from-[#0C9DA8] hover:to-[#0080CB] text-white text-xs sm:text-sm font-extrabold px-6 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-[#0080CB]/25 hover:scale-105"
              >
                <span>Explore 360° Services</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </a>

              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0F172A] text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full border border-slate-300 transition-all duration-300 shadow-xs hover:scale-105"
              >
                <span>Connect With Strategists</span>
              </a>
            </div>

            {/* Rating & Proof Strip (Brand Royal Blue Stars #0080CB) */}
            <div className="pt-1 flex items-center gap-2">
              <div className="inline-flex flex-wrap items-center gap-2 bg-white/95 text-[#0F172A] px-3.5 py-1.5 rounded-full shadow-xs border border-slate-200/90 text-[11px] sm:text-xs font-semibold backdrop-blur-sm">
                <div className="flex items-center text-[#0080CB]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#0080CB] text-[#0080CB]" />
                  ))}
                </div>
                <span className="font-extrabold text-[#0F172A]">4.9 / 5.0 Rating</span>
                <span className="text-slate-300">•</span>
                <span className="text-[#334155]">200+ Campaigns</span>
                <span className="text-slate-300">•</span>
                <span className="text-[#0080CB] font-bold">100+ Brands</span>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Clean breathing space for the seamless visual showcase */}
          <div className="lg:col-span-5 hidden lg:block pointer-events-none" />

        </div>
      </div>

      {/* ── Bottom Static Trust Strip ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] text-[#334155] font-mono pt-1 border-t border-slate-200/80">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0080CB]" />
          <span className="font-bold text-[#0F172A]">PRAAROOP MEDIA • STRATEGY & CREATIVE STUDIO</span>
        </span>
        <a
          href="#about"
          className="inline-flex items-center gap-1.5 text-slate-600 hover:text-[#0080CB] font-bold transition-colors"
        >
          <span>Scroll to explore</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#0080CB]" />
        </a>
      </div>
    </section>
  );
}

