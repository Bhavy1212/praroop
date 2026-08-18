"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import {
  Phone,
  ChevronDown,
  ArrowUpRight,
  Sparkles,
  MessageSquare,
  Globe,
  MapPin,
  Building2,
  Megaphone,
} from "lucide-react";
import {
  BRAND,
  NAV_LINKS,
  DIGITAL_MARKETING_ITEMS,
  OUTDOOR_MARKETING_ITEMS,
  ACTIVATIONS_ITEMS,
} from "@/lib/data";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

// ── 3 Core Pillars of Praaroop Media (as on praaroop.com) ──
const SERVICE_PILLARS = [
  {
    id: "digital",
    title: "Digital Marketing",
    count: `${DIGITAL_MARKETING_ITEMS.length} Services`,
    href: "/#services",
    icon: Globe,
    accent: "#0080CB",
    items: DIGITAL_MARKETING_ITEMS,
  },
  {
    id: "outdoor",
    title: "Outdoor Marketing",
    count: `${OUTDOOR_MARKETING_ITEMS.length} Media Formats`,
    href: "/#outdoor",
    icon: Megaphone,
    accent: "#0C9DA8",
    items: OUTDOOR_MARKETING_ITEMS,
  },
  {
    id: "activations",
    title: "Activations",
    count: `${ACTIVATIONS_ITEMS.length} Formats`,
    href: "/#activations",
    icon: Building2,
    accent: "#D10B6A",
    items: ACTIVATIONS_ITEMS,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeServicePillar, setActiveServicePillar] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  // Liquid Scroll Progress Fill Capsule
  const { scrollYProgress, scrollY } = useScroll();
  const scrollProgressWidth = useTransform(scrollYProgress, [0, 1], ["12%", "100%"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (pathname !== "/") {
      setIsVisible(true);
    } else {
      setIsVisible(latest > 120);
    }
    setIsScrolled(latest > 180);
  });

  // Initial check on mount & pathname changes
  useEffect(() => {
    if (pathname !== "/") {
      setIsVisible(true);
    } else {
      setIsVisible(window.scrollY > 120);
    }
  }, [pathname]);

  // Close drawer on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Lock background page scroll when menu is opened
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.start();
      }
    }

    return () => {
      document.body.style.overflow = "";
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.start();
      }
    };
  }, [isOpen]);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveServicePillar(null);
  }, [pathname]);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);

    // If anchor link on home page, smoothly scroll using Lenis
    if (href.includes("#")) {
      const hash = href.substring(href.indexOf("#"));
      if (pathname === "/") {
        const el = document.querySelector(hash) as HTMLElement;
        if (el) {
          const lenis = (window as any).__lenis;
          if (lenis) {
            lenis.scrollTo(el, { offset: -20, duration: 1.2 });
          } else {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }
    }
  };

  const isLinkActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href.startsWith("/about-us")) return pathname.startsWith("/about-us");
    if (href.startsWith("/clients")) return pathname.startsWith("/clients");
    if (href.startsWith("/campaigns")) return pathname.startsWith("/campaigns");
    if (href.startsWith("/contact-us")) return pathname.startsWith("/contact-us");
    return false;
  };

  return (
    <>
      <AnimatePresence>
        {(isVisible || isOpen) && (
          <motion.header
            ref={navRef}
            role="banner"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 inset-x-0 w-full z-[999] pointer-events-auto select-none bg-white/85 sm:bg-white/90 backdrop-blur-2xl border-b border-slate-200/70 shadow-[0_4px_25px_rgba(0,0,0,0.06)]"
          >
            {/* ── Full-Width Fixed Top Navigation Bar (Flush & Non-Floating) ── */}
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
              {/* Left: Praaroop Media Official Logo */}
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="relative flex items-center shrink-0 group focus:outline-none"
              >
                <div className="relative h-8 w-32 sm:h-10 sm:w-40 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/praaroop-Media-and-Adv-1.png"
                    alt="Praaroop Media"
                    fill
                    priority
                    sizes="(max-width: 640px) 130px, 170px"
                    className="object-contain"
                  />
                </div>
              </Link>

              {/* Center: Desktop Navigation Links */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
                {NAV_LINKS.map((link) => {
                  const active = isLinkActive(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                        active
                          ? "bg-[#0080CB] text-white shadow-md shadow-[#0080CB]/25"
                          : "text-slate-700 hover:text-[#0080CB] hover:bg-slate-100/90"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Right: Quick Action & Hamburger Menu */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                {/* Direct Call / Contact Button */}
                <Link
                  href="/contact-us"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0080CB] to-[#0C9DA8] hover:from-[#0C9DA8] hover:to-[#0080CB] text-white text-xs font-extrabold uppercase tracking-wider px-4 sm:px-5 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-[#0080CB]/25 hover:shadow-lg hover:shadow-[#0080CB]/35 hover:scale-105 active:scale-95 shrink-0"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span className="hidden sm:inline">Contact Us</span>
                </Link>

                {/* Hamburger Button for Mobile & Expanded Menu */}
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={isOpen}
                  className={`group relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-2xl transition-all duration-300 ${
                    isOpen
                      ? "bg-[#0080CB] text-white border border-[#0080CB] shadow-md"
                      : "bg-slate-100/90 hover:bg-slate-200/90 text-slate-800 border border-slate-200/80 hover:border-slate-300 active:scale-95 shadow-xs"
                  }`}
                >
                  <div className="relative w-4.5 h-3.5 flex flex-col justify-between items-center pointer-events-none">
                    <span
                      className={`h-0.5 w-4.5 rounded-full transition-all duration-300 origin-center ${
                        isOpen ? "bg-white rotate-45 translate-y-[6px]" : "bg-slate-800"
                      }`}
                    />
                    <span
                      className={`h-0.5 w-3 bg-[#0080CB] rounded-full transition-all duration-200 ${
                        isOpen ? "opacity-0 scale-0" : "group-hover:w-4.5"
                      }`}
                    />
                    <span
                      className={`h-0.5 w-4.5 rounded-full transition-all duration-300 origin-center ${
                        isOpen ? "bg-white -rotate-45 -translate-y-[6px]" : "bg-slate-800"
                      }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* ── Full-Screen Vertical Menu (Covers Screen Vertically) ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 w-full h-[100dvh] z-[1000] bg-white/95 sm:bg-white/95 backdrop-blur-3xl overflow-y-auto flex flex-col justify-between text-slate-900"
          >
            {/* Top Bar inside Vertical Menu */}
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4 border-b border-slate-200/70 shrink-0">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="relative flex items-center shrink-0 group focus:outline-none"
              >
                <div className="relative h-8 w-32 sm:h-10 sm:w-40 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/praaroop-Media-and-Adv-1.png"
                    alt="Praaroop Media"
                    fill
                    priority
                    sizes="(max-width: 640px) 130px, 170px"
                    className="object-contain"
                  />
                </div>
              </Link>

              <div className="flex items-center gap-3">
                <Link
                  href="/contact-us"
                  onClick={() => setIsOpen(false)}
                  className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-[#0080CB] to-[#0C9DA8] hover:from-[#0C9DA8] hover:to-[#0080CB] text-white text-xs font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-[#0080CB]/25 hover:scale-105 active:scale-95 shrink-0"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>Contact Us</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close navigation menu"
                  className="group relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-2xl bg-[#0080CB] text-white shadow-md transition-all duration-300 active:scale-95"
                >
                  <div className="relative w-4.5 h-3.5 flex flex-col justify-between items-center pointer-events-none">
                    <span className="h-0.5 w-4.5 bg-white rounded-full transition-all duration-300 origin-center rotate-45 translate-y-[6px]" />
                    <span className="h-0.5 w-3 bg-transparent rounded-full opacity-0 scale-0" />
                    <span className="h-0.5 w-4.5 bg-white rounded-full transition-all duration-300 origin-center -rotate-45 -translate-y-[6px]" />
                  </div>
                </button>
              </div>
            </div>

            {/* Middle Section: Full Vertical Navigation Links & Marketing Divisions */}
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex-1 flex flex-col justify-center gap-4 sm:gap-6">
              {/* Primary Navigation Links */}
              <nav className="space-y-1 sm:space-y-2" aria-label="Main menu">
                {NAV_LINKS.map((link, idx) => {
                  const active = isLinkActive(link.href);
                  const numStr = `0${idx + 1}`;

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className={`group flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-2xl transition-all duration-200 ${
                        active
                          ? "bg-[#0080CB]/10 text-[#0080CB] border border-[#0080CB]/25 shadow-xs font-bold"
                          : "text-slate-800 hover:text-[#0080CB] hover:bg-slate-100/80 border border-transparent hover:border-slate-200/60"
                      }`}
                    >
                      <div className="flex items-center gap-4 sm:gap-6">
                        <span
                          className={`text-xs sm:text-sm font-mono font-bold px-3 py-1 rounded-xl transition-colors ${
                            active
                              ? "bg-[#0080CB] text-white"
                              : "bg-slate-100 text-slate-500 group-hover:text-[#0080CB] group-hover:bg-[#0080CB]/10"
                          }`}
                        >
                          {numStr}
                        </span>
                        <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight">
                          {link.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        {active && (
                          <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider px-2.5 sm:px-3 py-1 rounded-full bg-[#0080CB]/15 text-[#0080CB] border border-[#0080CB]/30">
                            Active
                          </span>
                        )}
                        <ArrowUpRight
                          className={`w-4 h-4 sm:w-6 sm:h-6 transition-all duration-200 ${
                            active
                              ? "text-[#0080CB] translate-x-1 -translate-y-1"
                              : "text-slate-400 group-hover:text-[#0080CB] group-hover:translate-x-1 group-hover:-translate-y-1"
                          }`}
                        />
                      </div>
                    </Link>
                  );
                })}
              </nav>

              {/* 3 Core Service Divisions Explorer */}
              <div className="pt-3 sm:pt-4 border-t border-slate-200/80 space-y-2.5">
                <div className="flex items-center justify-between px-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-500 flex items-center gap-2 font-bold">
                    <Sparkles className="w-4 h-4 text-[#0080CB]" />
                    <span>Marketing Divisions</span>
                  </span>
                  <span className="text-xs font-mono text-slate-400">360° Solutions</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  {SERVICE_PILLARS.map((pillar) => {
                    return (
                      <Link
                        key={pillar.id}
                        href={pillar.href}
                        onClick={() => handleLinkClick(pillar.href)}
                        className="group flex flex-col justify-between p-3 sm:p-4 rounded-2xl bg-slate-50/90 hover:bg-slate-100/90 border border-slate-200/80 hover:border-[#0080CB]/30 transition-all duration-200 shadow-xs"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2.5 h-2.5 rounded-full shrink-0 shadow-xs"
                            style={{ backgroundColor: pillar.accent }}
                          />
                          <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#0080CB] transition-colors leading-tight">
                            {pillar.title}
                          </span>
                        </div>
                        <span className="text-[10px] sm:text-xs font-mono text-slate-500 pt-1.5 font-medium">
                          {pillar.count}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Footer Action Bar in Fullscreen Menu */}
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border-t border-slate-200/80 shrink-0 space-y-2.5">
              {/* WhatsApp Direct Action Button */}
              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#0C9DA8] to-[#0080CB] hover:from-[#0080CB] hover:to-[#0C9DA8] text-white text-xs sm:text-sm font-black uppercase tracking-wider py-3 sm:py-3.5 rounded-2xl shadow-lg shadow-[#0C9DA8]/20 transition-all active:scale-[0.98]"
              >
                <div className="relative flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#10B981]" />
                </div>
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              {/* Call & Social Row */}
              <div className="flex items-center justify-between px-1 text-xs text-slate-600">
                <a
                  href={`tel:${BRAND.whatsappNumber}`}
                  className="inline-flex items-center gap-2 hover:text-[#0080CB] font-bold transition-colors text-xs sm:text-sm text-slate-700"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0080CB]" />
                  <span>{BRAND.phone}</span>
                </a>

                {/* Social Channels */}
                <div className="flex items-center gap-2">
                  <a
                    href={BRAND.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-[#D10B6A] hover:text-white border border-slate-200 flex items-center justify-center text-slate-700 transition-all"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={BRAND.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-[#0080CB] hover:text-white border border-slate-200 flex items-center justify-center text-slate-700 transition-all"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={BRAND.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-[#0C9DA8] hover:text-white border border-slate-200 flex items-center justify-center text-slate-700 transition-all"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
