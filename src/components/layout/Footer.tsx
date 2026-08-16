import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { BRAND, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B1220] text-white pt-16 pb-12 border-t border-slate-800 overflow-hidden">
      {/* Background Subtle Brand Blue Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-[#0080CB]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Col 1 — Brand info & Tagline (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-48">
                <Image
                  src="/praaroop-Media-and-Adv-1.png"
                  alt="Praaroop Media — 360° Marketing Agency in Udaipur"
                  fill
                  className="object-contain filter brightness-110 drop-shadow-[0_0_12px_rgba(0,128,203,0.3)]"
                />
              </div>
            </Link>

            <p className="text-base text-slate-300 leading-relaxed max-w-md font-medium">
              {BRAND.tagline}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-[#D10B6A]/20 border border-white/10 hover:border-[#D10B6A]/50 rounded-xl text-white transition-all duration-300 group"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-transform text-slate-300 group-hover:text-white" />
              </a>
              <a
                href={BRAND.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-[#0080CB]/20 border border-white/10 hover:border-[#0080CB]/50 rounded-xl text-white transition-all duration-300 group"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5 group-hover:scale-110 transition-transform text-slate-300 group-hover:text-white" />
              </a>
              <a
                href={BRAND.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-[#0C9DA8]/20 border border-white/10 hover:border-[#0C9DA8]/50 rounded-xl text-white transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition-transform text-slate-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase border-b border-slate-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0C9DA8] group-hover:scale-150 transition-transform" />
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#0080CB]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact Information (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase border-b border-slate-800 pb-2">
              Contact Agency
            </h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0080CB] shrink-0 mt-0.5" />
                <span className="leading-snug">{BRAND.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0C9DA8] shrink-0" />
                <a
                  href={`tel:${BRAND.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-white transition-colors font-semibold"
                >
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D10B6A] shrink-0" />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="hover:text-white transition-colors"
                >
                  {BRAND.email}
                </a>
              </li>
            </ul>

            {/* Google Maps link button */}
            <div className="pt-2">
              <a
                href={BRAND.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2.5 rounded-xl transition-all"
              >
                <span>Find us on Google Maps</span>
                <ArrowUpRight className="w-4 h-4 text-[#0080CB]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{BRAND.copyright}</p>
          <p className="flex items-center gap-2">
            <span>Designed for Praaroop Media — 360° Marketing Agency, Udaipur</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
