import { BRAND } from "@/lib/data";
import { ArrowUpRight, Sparkles, MessageSquare } from "lucide-react";
import Footer from "@/components/layout/Footer";
import CampaignsGridShowcase from "@/components/campaigns/CampaignsGridShowcase";

export const metadata = {
  title: "Campaigns Portfolio | Praaroop Media — 360° Marketing Agency in Udaipur",
  description:
    "Explore our 360° marketing and activation campaigns in Udaipur, Rajasthan. Event branding, outdoor advertising, and brand showcases.",
};

export default function CampaignsPage() {
  return (
    <main className="relative bg-[#F6F6F4] text-[#0F172A] min-h-screen pt-20 sm:pt-24 selection:bg-[#0080CB] selection:text-white">
      <div className="space-y-12 sm:space-y-16 pb-0 relative z-10">
        {/* Hero Header Banner */}
        <section className="pt-10 sm:pt-16 pb-2 text-center space-y-3 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0080CB] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0080CB]" />
            <span>Curated Portfolio Showcase</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#0F172A] tracking-tight leading-tight font-display">
            Our 360° <span className="text-[#0080CB]">Campaigns</span>
          </h1>

          <p className="text-sm sm:text-base text-[#334155] max-w-2xl mx-auto font-normal leading-relaxed">
            Explore our signature brand activations, outdoor takeovers, and event branding across Rajasthan. Hover over any campaign card to explore the work.
          </p>
        </section>

        {/* ── Static 3-Column Grid Showcase (Craywingz Style) ── */}
        <section className="relative">
          <CampaignsGridShowcase />
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 pb-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0080CB] text-white text-center space-y-6 shadow-2xl relative overflow-hidden border border-white/20">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
              Have a Campaign in Mind?
            </h2>
            <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
              Book a campaign strategy session with Praaroop Media in Udaipur. Let&apos;s build an unforgettable narrative for your brand.
            </p>
            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#070D18] font-black uppercase tracking-wider text-xs px-8 py-3.5 rounded-full hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all shadow-xl"
            >
              <MessageSquare className="w-4 h-4 text-[#0080CB]" />
              <span>Get in touch on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
