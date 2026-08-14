import { Phone, Mail, MapPin, Sparkles } from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { BRAND } from "@/lib/data";
import ObfuscatedEmail from "@/components/ui/ObfuscatedEmail";
import Footer from "@/components/layout/Footer";
import AmbientBackground from "@/components/ui/AmbientBackground";
import ContactForm from "@/components/ui/ContactForm";

export const metadata = {
  title: "Contact Us | Praaroop Media — 360° Marketing Agency in Udaipur",
  description:
    "Get in touch with Praaroop Media in Udaipur. Contact our team for digital marketing campaigns, outdoor hoardings, and branding solutions.",
};

export default function ContactPage() {
  return (
    <main className="relative bg-[#0A0A0A] text-white min-h-screen pt-24 selection:bg-[#0080CB] selection:text-white">
      <AmbientBackground />

      <div className="space-y-16 pb-0 relative z-10">
        {/* Header */}
        <section className="py-20 bg-[#0A0A0A] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-[#D10B6A]">
              <Sparkles className="w-3.5 h-3.5 text-[#D10B6A]" />
              <span>Reach Out</span>
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              Connect With <span className="text-gradient-tri">Our Team</span>
            </h1>
          </div>
        </section>

        {/* Main Grid: Form + Info details */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Info Details (Left) */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-extrabold text-white">
                  Get in touch
                </h2>

                <div className="p-8 rounded-3xl bg-[#111111] border border-white/10 space-y-6 shadow-lg border-gradient-glow">
                  <h3 className="text-xl font-bold text-white border-l-4 border-[#0080CB] pl-3">
                    Our Office
                  </h3>

                  <ul className="space-y-5 text-sm text-[#CBD5E1]">
                    <li className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#0080CB] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block">Address:</span>
                        <span>{BRAND.address}</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#0C9DA8] shrink-0" />
                      <div>
                        <span className="font-bold text-white block">Phone:</span>
                        <a href={`tel:${BRAND.phone}`} className="hover:text-white font-semibold">
                          {BRAND.phone}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#D10B6A] shrink-0" />
                      <div>
                        <span className="font-bold text-white block">Email:</span>
                        <ObfuscatedEmail className="font-mono text-xs text-[#CBD5E1]" />
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Follow Us */}
                <div className="p-8 rounded-3xl bg-[#111111] border border-white/10 space-y-4 shadow-lg">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    Follow Agency
                  </h3>
                  <div className="flex items-center gap-4">
                    <a
                      href={BRAND.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#D10B6A] transition-all shadow-md"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={BRAND.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#0080CB] transition-all shadow-md"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={BRAND.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#0C9DA8] transition-all shadow-md"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#111111] border border-white/10 shadow-2xl space-y-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-white">
                    Send Us a Message
                  </h3>
                  <p className="text-[#CBD5E1] text-sm mt-1">
                    Fill out the form below and our media planning team will contact you.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
