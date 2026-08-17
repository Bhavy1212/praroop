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
      {/* ── Subtle Ambient Glows for Depth ── */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0080CB]/6 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#0C9DA8]/6 blur-[120px] pointer-events-none rounded-full" />

      {/* ── Top Header / Brand Bar with Official Logo ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between gap-3 py-0.5">
        {/* Official Praaroop Media Logo */}
        <Link href="/" className="inline-flex items-center group focus:outline-none">
          <div className="relative h-8 sm:h-9 w-32 sm:w-40 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/praaroop-Media-and-Adv-1.png"
              alt="Praaroop Media — 360° Marketing Agency"
              fill
              priority
              sizes="(max-width: 640px) 130px, 160px"
              className="object-contain"
            />
          </div>
        </Link>

        {/* Top Right Quick Contact Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <a
            href={`tel:${BRAND.phone}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[#0F172A] text-xs font-bold transition-all shadow-2xs"
          >
            <Phone className="w-3.5 h-3.5 text-[#0080CB]" />
            <span>{BRAND.phone}</span>
          </a>

          <a
            href={BRAND.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 sm:py-2 rounded-full bg-[#0080CB] hover:bg-[#0C9DA8] text-white text-xs sm:text-sm font-extrabold shadow-md transition-all duration-300 hover:scale-105"
          >
            <MessageSquare className="w-3.5 h-3.5 text-white fill-current" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>

      {/* ── Main Single-Screen Content Grid (100% Fits on 1 Screen without Scrolling) ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-0.5 sm:py-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">
          
          {/* Left 7 Columns: Bold Typography with "MEASURABLE" and "GROWTH" on separate lines in Pink */}
          <div className="lg:col-span-7 space-y-2 sm:space-y-3 text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-slate-50 border border-slate-200 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#0C9DA8]" />
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
            <div className="flex flex-wrap items-center gap-2.5 pt-0.5">
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 bg-[#0080CB] hover:bg-[#0C9DA8] text-white text-xs sm:text-sm font-extrabold px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg hover:scale-105"
              >
                <span>Explore 360° Services</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </a>

              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-[#0F172A] text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full border border-slate-300 transition-all duration-300 shadow-2xs hover:scale-105"
              >
                <span>Connect With Strategists</span>
              </a>
            </div>

            {/* Rating & Proof Strip (Brand Royal Blue Stars #0080CB) */}
            <div className="pt-0.5 flex items-center gap-2">
              <div className="inline-flex flex-wrap items-center gap-2 bg-slate-50 text-[#0F172A] px-3.5 py-1 rounded-full shadow-2xs border border-slate-200 text-[11px] sm:text-xs font-semibold">
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

          {/* Right 5 Columns: 3 Compact Cards */}
          <div className="lg:col-span-5 space-y-2 sm:space-y-2.5">
            
            {/* Card 1: 360° Media Dominance */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-white text-[#0F172A] shadow-md border border-slate-200 transition-transform hover:scale-[1.01] group">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#0C9DA8]/15 text-[#0C9DA8] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Radio className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0C9DA8]">
                      Full Spectrum
                    </span>
                    <span className="px-1.5 py-0.2 rounded-full bg-teal-50 text-[9px] font-bold text-[#0C9DA8]">
                      360° Reach
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-black text-[#0F172A] font-display">
                    Outdoor + Digital + Activations
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-[#334155] leading-snug">
                    Prime highway hoardings, city junctions, digital ads & ground events.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Measurable ROI & Performance */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-white text-[#0F172A] shadow-md border border-slate-200 transition-transform hover:scale-[1.01] group">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#0080CB]/15 text-[#0080CB] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0080CB]">
                      Performance Driven
                    </span>
                    <span className="px-1.5 py-0.2 rounded-full bg-blue-50 text-[9px] font-bold text-[#0080CB]">
                      Data Backed
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-black text-[#0F172A] font-display">
                    Guaranteed Brand Recall & ROI
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-[#334155] leading-snug">
                    Laser-targeted funnel marketing delivering verified leads and footfalls.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Creative Brilliance & Production */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-white text-[#0F172A] shadow-md border border-slate-200 transition-transform hover:scale-[1.01] group">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#D10B6A]/15 text-[#D10B6A] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D10B6A]">
                      Creative Studio
                    </span>
                    <span className="px-1.5 py-0.2 rounded-full bg-pink-50 text-[9px] font-bold text-[#D10B6A]">
                      Udaipur HQ
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-black text-[#0F172A] font-display">
                    Signature Storytelling & Visuals
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-[#334155] leading-snug">
                    Cinematic video production, jingles, and brand identity design.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom Static Trust Strip ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] text-[#334155] font-mono pt-1 border-t border-slate-200">
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
