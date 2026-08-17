import Image from "next/image";
import Link from "next/link";
import { Sparkles, MessageSquare, ArrowUpRight, Zap, Phone } from "lucide-react";
import { ABOUT_US_PAGE, BRAND } from "@/lib/data";
import Footer from "@/components/layout/Footer";
import AboutAnimatedShowcase from "@/components/about/AboutAnimatedShowcase";
import AboutVisionMission from "@/components/about/AboutVisionMission";
import AboutPillarsGrid from "@/components/about/AboutPillarsGrid";
import AboutStatsSection from "@/components/about/AboutStatsSection";

export const metadata = {
  title: "About Us | Praaroop Media — 360° Marketing Agency in Udaipur",
  description:
    "Learn about Praaroop Media, Udaipur's premier 360° marketing and branding agency. Discover our vision, mission, strategic philosophy, and agency showcase.",
};

export default function AboutPage() {
  return (
    <main className="relative bg-[#F6F6F4] text-[#0F172A] min-h-screen pt-20 sm:pt-24 selection:bg-[#0080CB] selection:text-white">
      <div className="space-y-12 sm:space-y-16 pb-0 relative z-10">
        {/* ── Section 1: Hero Banner (Light Theme) ── */}
        <section className="pt-10 sm:pt-16 pb-4 text-center space-y-4 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0080CB] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0080CB]" />
            <span>Praaroop Media • Agency DNA & Vision</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#0F172A] tracking-tight leading-tight font-display">
            About <span className="text-[#0080CB]">Us</span>
          </h1>

          <p className="text-xl sm:text-3xl font-extrabold text-[#0F172A] max-w-3xl mx-auto tracking-tight leading-snug">
            Shaping Relevance in a <span className="text-[#0C9DA8]">Connected World</span>
          </p>

          <p className="text-sm sm:text-base text-[#334155] max-w-2xl mx-auto font-normal leading-relaxed">
            From perception to participation across business, culture, and governance. We are Udaipur&apos;s premier 360° creative and performance marketing powerhouse.
          </p>

          {/* Feature highlights bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2 text-xs font-mono text-[#334155]">
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs font-semibold">
              ⚡ 360° Full Spectrum
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs font-semibold">
              🎯 Precision Performance Ads
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs font-semibold">
              🏢 High-Impact Outdoor Media
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs font-semibold">
              📍 Udaipur • Pan-India
            </span>
          </div>
        </section>

        {/* ── Section 2: Interactive Studio & Story ── */}
        <AboutAnimatedShowcase />

        {/* ── Section 3: Vision & Mission Dual Cards ── */}
        <AboutVisionMission />

        {/* ── Section 4: 4-Pillars Strategic DNA Matrix ── */}
        <AboutPillarsGrid />

        {/* ── Section 5: Stats Counter ── */}
        <AboutStatsSection />

        {/* ── Section 6: Closing CTA Banner ── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl p-10 sm:p-14 bg-[#0080CB] text-white text-center space-y-6 shadow-2xl overflow-hidden border border-white/20">
            <div className="space-y-3 max-w-xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/20 text-[11px] font-mono text-white border border-white/20">
                <Zap className="w-3.5 h-3.5 text-amber-300" />
                <span>Ready to Elevate Your Brand?</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                {ABOUT_US_PAGE.closing}
              </h2>

              <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed">
                Connect with our media strategists and creative team in Udaipur to engineer your next campaign.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 relative z-10">
              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#070D18] font-black uppercase tracking-wider text-xs px-7 py-3.5 rounded-full hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all shadow-xl"
              >
                <MessageSquare className="w-4 h-4 text-[#0080CB]" />
                <span>Get in touch on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${BRAND.whatsappNumber}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black/30 hover:bg-black/50 text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full border border-white/25 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>
        </section>

        {/* Global Footer */}
        <Footer />
      </div>
    </main>
  );
}
