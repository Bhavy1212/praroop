import { Phone, Mail, MapPin, Sparkles, MessageSquare, Clock, ArrowUpRight } from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { BRAND } from "@/lib/data";
import ObfuscatedEmail from "@/components/ui/ObfuscatedEmail";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Contact Us | Praaroop Media — 360° Marketing Agency in Udaipur",
  description:
    "Get in touch with Praaroop Media in Udaipur. Reach out to our team for digital marketing campaigns, outdoor hoardings, and branding solutions.",
};

export default function ContactPage() {
  return (
    <main className="relative bg-[#F6F6F4] text-[#0F172A] min-h-screen pt-20 sm:pt-24 selection:bg-[#0080CB] selection:text-white">
      <div className="space-y-12 sm:space-y-16 pb-0 relative z-10">
        {/* Header Hero */}
        <section className="pt-10 sm:pt-16 pb-4 text-center space-y-3 max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono font-bold uppercase tracking-wider text-[#D10B6A] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D10B6A]" />
            <span>Direct Agency Connect</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#0F172A] tracking-tight leading-tight font-display">
            Get in <span className="text-[#0080CB]">Touch</span>
          </h1>

          <p className="text-sm sm:text-base text-[#334155] font-normal max-w-xl mx-auto leading-relaxed">
            Have a project, campaign, or branding requirement? Connect with our strategic planners and creative media team in Udaipur.
          </p>
        </section>

        {/* ── Main Contact Grid: Cards & Direct Channels ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            
            {/* Card 1: Office Headquarters (Sky Blue Accent) */}
            <div className="h-full rounded-3xl bg-white border border-slate-200/90 hover:border-[#0080CB]/60 p-8 space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,128,203,0.12)] transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0080CB]/10 border border-[#0080CB]/25 text-[#0080CB] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] font-display">Our Office</h3>
                <p className="text-sm text-[#334155] font-normal leading-relaxed">
                  {BRAND.address}
                </p>
              </div>

              <a
                href={BRAND.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0080CB] hover:text-[#0C9DA8] pt-4 border-t border-slate-100 transition-colors"
              >
                <span>Find Us On Google Maps</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 2: Phone & WhatsApp Direct (Aqua Teal Accent) */}
            <div className="h-full rounded-3xl bg-white border border-slate-200/90 hover:border-[#0C9DA8]/60 p-8 space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(12,157,168,0.12)] transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0C9DA8]/10 border border-[#0C9DA8]/25 text-[#0C9DA8] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] font-display">Call & WhatsApp</h3>
                <p className="text-sm text-[#334155] font-normal leading-relaxed">
                  Direct line for campaign inquiries, quotes, and media placements.
                </p>
                <div className="text-lg font-black text-[#0F172A] font-mono">
                  {BRAND.phone}
                </div>
              </div>

              <a
                href={`tel:${BRAND.whatsappNumber}`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0C9DA8] hover:text-[#0080CB] pt-4 border-t border-slate-100 transition-colors"
              >
                <span>Call Directly</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 3: Official Email & Working Hours (Magenta Pink Accent) */}
            <div className="h-full rounded-3xl bg-white border border-slate-200/90 hover:border-[#D10B6A]/60 p-8 space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(209,11,106,0.12)] transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#D10B6A]/10 border border-[#D10B6A]/25 text-[#D10B6A] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] font-display">Email & Hours</h3>
                <div className="space-y-2 text-sm text-[#334155] font-normal">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>{BRAND.openingHours}</span>
                  </div>
                  <div>
                    <ObfuscatedEmail className="font-mono text-xs text-[#0F172A] font-bold" />
                  </div>
                </div>
              </div>

              <a
                href={`mailto:${BRAND.email}`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D10B6A] hover:text-[#0080CB] pt-4 border-t border-slate-100 transition-colors"
              >
                <span>Send Official Mail</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ── Direct WhatsApp Floating CTA Banner ── */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0080CB] text-white text-center space-y-4 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-black font-display">Prefer Instant Communication?</h2>
            <p className="text-xs sm:text-sm text-white/90 font-light max-w-md mx-auto">
              Message our executive team directly on WhatsApp for real-time rates, billboard availability, and digital estimates.
            </p>
            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#070D18] font-black uppercase tracking-wider text-xs px-7 py-3 rounded-full hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
              <MessageSquare className="w-4 h-4 text-[#0080CB]" />
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Global Footer */}
        <Footer />
      </div>
    </main>
  );
}
