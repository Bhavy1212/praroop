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
    <main className="relative text-white min-h-screen pt-20 sm:pt-24 selection:bg-[#0080CB] selection:text-white">
      <div className="space-y-16 sm:space-y-20 pb-0 relative z-10">
        {/* Header Hero */}
        <section className="pt-12 sm:pt-20 pb-6 text-center space-y-4 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-[#D10B6A] shadow-md backdrop-blur-xl">
            <Sparkles className="w-3.5 h-3.5 text-[#D10B6A]" />
            <span>Direct Agency Connect</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-tight">
            Get in <span className="text-[#0080CB]">Touch</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Have a project, campaign, or branding requirement? Connect with our strategic planners and creative media team in Udaipur.
          </p>
        </section>

        {/* ── Main Contact Grid: Cards & Direct Channels ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card 1: Office Headquarters (Sky Blue Accent) */}
            <div className="rounded-3xl bg-white/[0.05] hover:bg-white/[0.10] border border-white/15 hover:border-[#0080CB]/60 p-8 space-y-6 shadow-2xl backdrop-blur-2xl transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0080CB]/20 border border-[#0080CB]/40 text-[#38BDF8] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Our Office</h3>
                <p className="text-sm text-slate-300 font-normal leading-relaxed">
                  {BRAND.address}
                </p>
              </div>

              <a
                href={BRAND.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38BDF8] hover:text-white pt-4 border-t border-white/10 transition-colors"
              >
                <span>Find Us On Google Maps</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 2: Phone & WhatsApp Direct (Aqua Teal Accent) */}
            <div className="rounded-3xl bg-white/[0.05] hover:bg-white/[0.10] border border-white/15 hover:border-[#0C9DA8]/60 p-8 space-y-6 shadow-2xl backdrop-blur-2xl transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0C9DA8]/20 border border-[#0C9DA8]/40 text-[#0C9DA8] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Call & WhatsApp</h3>
                <p className="text-sm text-slate-300 font-normal leading-relaxed">
                  Direct line for campaign inquiries, quotes, and media placements.
                </p>
                <div className="text-base font-bold text-white font-mono">
                  {BRAND.phone}
                </div>
              </div>

              <a
                href={`tel:${BRAND.whatsappNumber}`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0C9DA8] hover:text-white pt-4 border-t border-white/10 transition-colors"
              >
                <span>Call Directly</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 3: Official Email & Working Hours (Magenta Pink Accent) */}
            <div className="rounded-3xl bg-white/[0.05] hover:bg-white/[0.10] border border-white/15 hover:border-[#D10B6A]/60 p-8 space-y-6 shadow-2xl backdrop-blur-2xl transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#D10B6A]/20 border border-[#D10B6A]/40 text-[#D10B6A] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Email & Hours</h3>
                <div className="space-y-2 text-sm text-slate-300 font-normal">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-white/50" />
                    <span>{BRAND.openingHours}</span>
                  </div>
                  <div>
                    <ObfuscatedEmail className="font-mono text-xs text-white" />
                  </div>
                </div>
              </div>

              <a
                href={`mailto:${BRAND.email}`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D10B6A] hover:text-white pt-4 border-t border-white/10 transition-colors"
              >
                <span>Send Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* ── Direct WhatsApp Action & Social Dock ── */}
          <div className="mt-10 rounded-3xl bg-[#0080CB] text-white p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/20">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Instant WhatsApp Consultation
              </h2>
              <p className="text-sm text-white/90 font-light">
                Chat directly with our media planners and receive quick campaign estimates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-[#070D18] font-black uppercase tracking-wider text-xs px-8 py-4 rounded-full shadow-xl hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#0080CB]" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Social Channels */}
              <div className="flex items-center gap-3">
                <a
                  href={BRAND.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/15 hover:bg-[#D10B6A] border border-white/20 flex items-center justify-center text-white transition-all shadow-md"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5 fill-current" />
                </a>
                <a
                  href={BRAND.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/15 hover:bg-blue-600 border border-white/20 flex items-center justify-center text-white transition-all shadow-md"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-5 h-5 fill-current" />
                </a>
                <a
                  href={BRAND.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/15 hover:bg-[#0077B5] border border-white/20 flex items-center justify-center text-white transition-all shadow-md"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5 text-current" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Global Footer */}
        <Footer />
      </div>
    </main>
  );
}
