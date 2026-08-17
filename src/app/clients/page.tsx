import Link from "next/link";
import { Sparkles, MessageSquare, ArrowUpRight } from "lucide-react";
import { BRAND } from "@/lib/data";
import Footer from "@/components/layout/Footer";
import ClientMarquee from "@/components/home/ClientMarquee";

export const metadata = {
  title: "Our Clients | Praaroop Media — Brands We Have Elevated",
  description:
    "Explore the brands and organizations elevated by Praaroop Media in Udaipur. Automotive, healthcare, retail, corporate, and event partners.",
};

const CLIENT_SECTORS = [
  { name: "Automotive", count: "Volkswagen & Dealerships", color: "#0080CB" },
  { name: "Healthcare", count: "PIMS Hospital & Clinics", color: "#0C9DA8" },
  { name: "Retail & Malls", count: "Fashion & Lifestyle Hubs", color: "#D10B6A" },
  { name: "Corporate", count: "TiEcon & Business Summits", color: "#0080CB" },
];

export default function ClientsPage() {
  return (
    <main className="relative bg-[#F6F6F4] text-[#0F172A] min-h-screen pt-16 sm:pt-20 flex flex-col justify-between selection:bg-[#0080CB] selection:text-white">
      {/* ── Single-Screen Centered Client Brands Section (Light Theme) ── */}
      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-5 space-y-3 sm:space-y-4">
        {/* Compact Hero Header */}
        <div className="text-center space-y-1.5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white border border-slate-200 text-[11px] font-mono font-bold uppercase tracking-wider text-[#0080CB] shadow-2xs">
            <Sparkles className="w-3 h-3 text-[#0080CB]" />
            <span>Trusted Brand Partnerships</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-tight font-display">
            Brands We Have <span className="text-[#0080CB]">Elevated</span>
          </h1>

          <p className="text-xs sm:text-sm text-[#334155] max-w-lg mx-auto font-normal leading-relaxed">
            Trusted by 100+ corporate leaders, automotive giants, healthcare networks, and regional visionaries.
          </p>
        </div>

        {/* ── 3-Row Multi-Line Infinite Logo Marquee (Big, Crisp Logo Cards) ── */}
        <div className="w-full">
          <ClientMarquee hideHeader compact theme="light" />
        </div>

        {/* ── Compact Key Sectors & CTA Strip ── */}
        <div className="space-y-2.5 max-w-4xl mx-auto w-full pt-1">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
            {CLIENT_SECTORS.map((sector) => (
              <div
                key={sector.name}
                className="px-3 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs text-center hover:border-slate-300 transition-colors"
              >
                <span
                  className="text-[11px] font-bold uppercase tracking-wider block"
                  style={{ color: sector.color }}
                >
                  {sector.name}
                </span>
                <span className="text-[10px] text-slate-500 font-medium block truncate">
                  {sector.count}
                </span>
              </div>
            ))}
          </div>

          {/* Quick CTA Action */}
          <div className="flex items-center justify-center gap-3 pt-0.5">
            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#0080CB] hover:bg-[#0C9DA8] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all shadow-md hover:scale-105"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Partner With Us</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-1 bg-white hover:bg-slate-50 text-[#0F172A] text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-full border border-slate-200 transition-all shadow-2xs"
            >
              <span>Contact Team</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
