"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, MessageSquare } from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { BRAND, NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/80 py-3 shadow-[0_4px_25px_rgba(0,128,203,0.06)]"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div className="relative h-10 w-36 sm:h-11 sm:w-44 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/praaroop-Media-and-Adv-1.png"
                alt="Praaroop Media — 360° Marketing Agency in Udaipur"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-semibold transition-colors duration-200 py-1 ${
                    isActive ? "text-[#0080CB] font-bold" : "text-slate-700 hover:text-[#0080CB]"
                  }`}
                >
                  {link.name}
                  {isActive ? (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0080CB] via-[#0C9DA8] to-[#D10B6A] rounded-full shadow-[0_0_8px_#0080CB]" />
                  ) : (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0C9DA8] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Social Icons & CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-2 pr-2 border-r border-slate-200">
              <a
                href={BRAND.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-slate-600 hover:text-[#D10B6A] hover:bg-slate-100 rounded-full transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={BRAND.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-slate-600 hover:text-[#0080CB] hover:bg-slate-100 rounded-full transition-all duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={BRAND.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-slate-600 hover:text-[#0C9DA8] hover:bg-slate-100 rounded-full transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center gap-2 bg-gradient-to-r from-[#0080CB] to-[#0C9DA8] hover:from-[#0066A3] hover:to-[#0A828B] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_4px_15px_rgba(0,128,203,0.3)] hover:shadow-[0_6px_20px_rgba(12,157,168,0.5)] whatsapp-pulse-ring"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>Get in touch</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#D10B6A]" />
              ) : (
                <Menu className="w-6 h-6 text-slate-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-6 pt-6 pb-8 shadow-2xl transition-all duration-300">
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-slate-800 hover:text-[#0080CB] transition-colors py-2 border-b border-slate-100 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#0C9DA8]">→</span>
              </Link>
            ))}

            {/* Mobile Socials */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={BRAND.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-700 hover:text-[#D10B6A] bg-slate-100 rounded-xl border border-slate-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={BRAND.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-700 hover:text-[#0080CB] bg-slate-100 rounded-xl border border-slate-200"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={BRAND.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-700 hover:text-[#0C9DA8] bg-slate-100 rounded-xl border border-slate-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-3">
              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#0080CB] via-[#0C9DA8] to-[#D10B6A] text-white font-bold py-3.5 rounded-xl shadow-lg"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Get in touch on WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
