import Link from "next/link";
import { Sparkles, MessageSquare, ArrowUpRight, Building2 } from "lucide-react";
import { BRAND } from "@/lib/data";
import Footer from "@/components/layout/Footer";
import ClientMarquee from "@/components/home/ClientMarquee";
import Testimonials from "@/components/home/Testimonials";

export const metadata = {
  title: "Our Clients | Praaroop Media — Brands We Have Elevated",
  description:
    "Explore the brands and organizations elevated by Praaroop Media in Udaipur. Automotive, healthcare, retail, corporate, and event partners.",
};

const SECTORS = [
  {
    name: "Automotive & Mobility",
    desc: "Avenue hoardings, transit LED van campaigns, and dealership launches for premier auto brands including Volkswagen.",
    count: "6+ Brands",
    accent: "#0080CB",
  },
  {
    name: "Healthcare & Hospitals",
    desc: "Strategic public awareness campaigns, OPD outreach, and multi-location outdoor presence for healthcare leaders like PIMS Hospital.",
    count: "5+ Networks",
    accent: "#0C9DA8",
  },
  {
    name: "Retail, Fashion & Lifestyle",
    desc: "Mall activations, footfall conversion funnels, and experiential pop-up promotions across Rajasthan avenues.",
    count: "8+ Retailers",
    accent: "#D10B6A",
  },
  {
    name: "Corporate & Summits",
    desc: "End-to-end event branding, stage design, and digital registration drives for TiEcon, Heritage Business Forum, and trade bodies.",
    count: "10+ Summits",
    accent: "#0080CB",
  },
];

export default function ClientsPage() {
  return (
    <main className="relative text-white min-h-screen pt-20 sm:pt-24 selection:bg-[#0080CB] selection:text-white">
      <div className="space-y-16 sm:space-y-24 pb-0 relative z-10">
        {/* ── Header Hero Banner ── */}
        <section className="pt-12 sm:pt-20 pb-6 text-center space-y-6 max-w-5xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-[#0C9DA8] shadow-sm backdrop-blur-xl">
            <Sparkles className="w-3.5 h-3.5 text-[#0C9DA8]" />
            <span>Trusted Brand Partnerships • Praaroop Media</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-tight">
            Our <span className="text-[#0080CB]">Clients</span>
          </h1>

          <p className="text-xl sm:text-3xl font-extrabold text-white max-w-3xl mx-auto tracking-tight leading-snug">
            Brands We Have <span className="text-[#0C9DA8]">Elevated</span>
          </p>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Trusted by corporate leaders, automotive giants, healthcare networks, and regional visionaries across Rajasthan and India.
          </p>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-mono text-white/90">
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 shadow-sm backdrop-blur-md">
              🏢 100+ Satisfied Clients
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 shadow-sm backdrop-blur-md">
              ⭐ 5.0 Partner Satisfaction
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 shadow-sm backdrop-blur-md">
              📍 Pan-India Campaigns
            </span>
          </div>
        </section>

        {/* ── Interactive Dual-Orbit Brand Showcase ── */}
        <section className="relative overflow-hidden py-12 border-y border-white/10">
          <ClientMarquee />
        </section>

        {/* ── Industry Sectors We Power ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-[#38BDF8] backdrop-blur-xl">
              <Building2 className="w-3.5 h-3.5 text-[#0080CB]" />
              <span>Cross-Sector Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Industries We <span className="text-[#0080CB]">Transform</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECTORS.map((sec) => (
              <div
                key={sec.name}
                className="group relative rounded-3xl p-6 sm:p-7 bg-white/[0.05] hover:bg-white/[0.10] border border-white/15 hover:border-white/30 transition-all duration-300 shadow-2xl backdrop-blur-2xl flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
              >
                <div
                  className="absolute top-0 inset-x-0 h-1.5"
                  style={{ backgroundColor: sec.accent }}
                />

                <div className="space-y-3">
                  <span
                    className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider inline-block"
                    style={{
                      backgroundColor: `${sec.accent}25`,
                      color: sec.accent,
                      border: `1px solid ${sec.accent}50`,
                    }}
                  >
                    {sec.count}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#38BDF8] transition-colors leading-snug">
                    {sec.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                    {sec.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-white/50">Verified Partners</span>
                  <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-white/20 text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Client Testimonials ── */}
        <section className="border-t border-white/10 py-12">
          <Testimonials />
        </section>

        {/* ── Closing Collaboration CTA ── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl p-10 sm:p-14 bg-[#0080CB] text-white text-center space-y-6 shadow-2xl overflow-hidden border border-white/20">
            <div className="space-y-3 max-w-xl mx-auto relative z-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Partner With Praaroop Media
              </h2>
              <p className="text-sm sm:text-base text-white/90 font-light">
                Join Rajasthan&apos;s leading brands in executing high-ROI outdoor, digital, and activation campaigns.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#070D18] font-black uppercase tracking-wider text-xs px-8 py-4 rounded-full hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all shadow-xl"
              >
                <MessageSquare className="w-4 h-4 text-[#0080CB]" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <Link
                href="/contact-us/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black/30 hover:bg-black/50 text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full border border-white/25 transition-all"
              >
                <span>Request Media Kit</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Global Footer */}
        <Footer />
      </div>
    </main>
  );
}
