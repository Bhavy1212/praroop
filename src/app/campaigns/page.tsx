import { BRAND } from "@/lib/data";
import { ArrowUpRight, Sparkles, MessageSquare } from "lucide-react";
import Footer from "@/components/layout/Footer";
import CampaignsCoverflowSlider from "@/components/campaigns/CampaignsCoverflowSlider";

export const metadata = {
  title: "Campaigns Portfolio | Praaroop Media — 360° Marketing Agency in Udaipur",
  description:
    "Explore our 3D interactive campaign portfolio in Udaipur, Rajasthan. Event branding, outdoor advertising, and marketing showcases.",
};

export default function CampaignsPage() {
  return (
    <main className="relative bg-[#0A0A0A] text-white min-h-screen pt-20 sm:pt-24 selection:bg-[#0080CB] selection:text-white">
      <div className="space-y-16 sm:space-y-24 pb-0 relative z-10">
        {/* Hero Header Banner */}
        <section className="pt-12 sm:pt-20 pb-6 text-center space-y-4 max-w-5xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-[#38BDF8] shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#0080CB]" />
            <span>Interactive Portfolio Showcase</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-tight">
            Our 360° <span className="text-[#0080CB]">Campaigns</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Explore our high-impact campaigns across Rajasthan & India. Swipe and drag with your cursor to discover our signature brand activations, outdoor takeovers, and digital narratives.
          </p>
        </section>

        {/* ── 3D Coverflow Interactive Slider ── */}
        <section className="relative overflow-hidden">
          <CampaignsCoverflowSlider />
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4">
          <div className="p-10 sm:p-14 rounded-3xl bg-[#0080CB] text-white text-center space-y-6 shadow-2xl relative overflow-hidden border border-white/20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Have a Campaign in Mind?</h2>
            <p className="text-white/90 text-base max-w-xl mx-auto font-light">
              Book a campaign strategy session with Praaroop Media in Udaipur. Let&apos;s build an unforgettable narrative for your brand.
            </p>
            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] font-black uppercase tracking-wider text-xs px-8 py-4 rounded-full hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all shadow-xl"
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
