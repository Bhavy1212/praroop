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
    <AnimatePresence>
      {(isVisible || isOpen) && (
        <motion.header
          ref={navRef}
          role="banner"
          initial={{ y: -60, opacity: 0, x: "-50%" }}
          animate={{ y: 0, opacity: 1, x: "-50%" }}
          exit={{ y: -60, opacity: 0, x: "-50%" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={`fixed left-1/2 z-[999] w-[calc(100%-1.5rem)] pointer-events-auto select-none transition-all duration-300 ${
            isScrolled
              ? "top-2.5 sm:top-3.5 max-w-[560px] md:max-w-[640px]"
              : "top-3.5 sm:top-5 max-w-[580px] md:max-w-[680px]"
          }`}
        >
          {/* ── Main Top Floating Capsule (Always Stable, No Shape Morph Freeze) ── */}
          <div className="relative w-full rounded-full bg-[#070C15]/85 border border-white/20 shadow-[0_15px_45px_rgba(0,0,0,0.7)] backdrop-blur-xl overflow-hidden hover:border-white/30 transition-all duration-200">
            {/* Appinventiv Liquid Glass Background Scroll Fill Capsule */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-full p-1">
              <motion.div
                style={{ width: scrollProgressWidth }}
                className="h-full rounded-full bg-gradient-to-r from-white/[0.12] via-white/[0.25] to-white/[0.15] border border-white/25 shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-[width] duration-75 ease-out"
              />
            </div>

            {/* Top Pill Controls */}
            <div className="relative z-10 flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2 sm:py-2.5">
              {/* Logo */}
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="relative flex items-center shrink-0 group focus:outline-none"
              >
                <div className="relative h-8 w-28 sm:h-9 sm:w-34 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/praaroop-Media-and-Adv-1.png"
                    alt="Praaroop Media"
                    fill
                    priority
                    sizes="150px"
                    className="object-contain filter brightness-125 drop-shadow-[0_0_10px_rgba(0,128,203,0.3)]"
                  />
                </div>
              </Link>

              {/* Right Action Group */}
              <div className="flex items-center gap-2">
                {/* Contact Us CTA Button */}
                <Link
                  href="/contact-us"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-1.5 sm:gap-2 bg-white hover:bg-slate-100 text-[#070D18] text-[11px] sm:text-xs font-black uppercase tracking-wider px-3.5 sm:px-4 py-2 rounded-full transition-all duration-200 shadow-md hover:scale-105 active:scale-95 shrink-0"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0080CB] fill-current" />
                  <span>Contact Us</span>
                </Link>

                {/* Animated 3-Lines Hamburger Menu Trigger */}
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={isOpen}
                  className={`group relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full transition-all duration-300 ${
                    isOpen
                      ? "bg-white/20 text-white border border-white/35 shadow-inner"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/15 hover:border-white/30 active:scale-95"
                  }`}
                >
                  <div className="relative w-4.5 h-3.5 flex flex-col justify-between items-center pointer-events-none">
                    {/* Line 1 (Top) */}
                    <span
                      className={`h-0.5 w-4.5 bg-white rounded-full transition-all duration-300 origin-center ${
                        isOpen ? "rotate-45 translate-y-[6px]" : ""
                      }`}
                    />
                    {/* Line 2 (Middle) */}
                    <span
                      className={`h-0.5 w-3 bg-[#0C9DA8] rounded-full transition-all duration-200 ${
                        isOpen ? "opacity-0 scale-0" : "group-hover:w-4.5"
                      }`}
                    />
                    {/* Line 3 (Bottom) */}
                    <span
                      className={`h-0.5 w-4.5 bg-white rounded-full transition-all duration-300 origin-center ${
                        isOpen ? "-rotate-45 -translate-y-[6px]" : ""
                      }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* ── Separate Dropdown Menu Panel (GPU Hardware-Accelerated, Tall & Spacious) ── */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ willChange: "transform, opacity" }}
                className="mt-3 w-full rounded-[2rem] bg-[#070C15]/95 border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.9)] backdrop-blur-2xl ring-1 ring-white/10 overflow-hidden"
              >
                <div className="p-5 sm:p-7 space-y-5">
                  {/* Primary Navigation Links (Matching praaroop.com) */}
                  <nav className="space-y-2" aria-label="Main menu">
                    {NAV_LINKS.map((link, idx) => {
                      const active = isLinkActive(link.href);
                      const numStr = `0${idx + 1}`;

                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => handleLinkClick(link.href)}
                          className={`group flex items-center justify-between px-4 py-2.5 sm:py-3 rounded-2xl transition-all duration-200 ${
                            active
                              ? "bg-white/15 text-white border border-white/25 shadow-md"
                              : "text-slate-200 hover:text-white hover:bg-white/[0.08] border border-transparent hover:border-white/10"
                          }`}
                        >
                          <div className="flex items-center gap-3.5">
                            <span
                              className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg transition-colors ${
                                active
                                  ? "bg-[#0C9DA8] text-white"
                                  : "bg-white/10 text-white/50 group-hover:text-white/90 group-hover:bg-white/20"
                              }`}
                            >
                              {numStr}
                            </span>
                            <span className="text-base sm:text-lg md:text-xl font-black tracking-tight">
                              {link.name}
                            </span>
                          </div>

                          <div className="flex items-center gap-2.5">
                            {active && (
                              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#0080CB]/30 text-[#38BDF8] border border-[#0080CB]/40">
                                Active
                              </span>
                            )}
                            <ArrowUpRight
                              className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-200 ${
                                active
                                  ? "text-[#0C9DA8] translate-x-0.5 -translate-y-0.5"
                                  : "text-white/30 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              }`}
                            />
                          </div>
                        </Link>
                      );
                    })}
                  </nav>

                  {/* ── 3 Core Service Divisions Explorer (Praaroop Marketing Pillars) ── */}
                  <div className="pt-4 border-t border-white/10 space-y-2.5">
                    <div className="flex items-center justify-between px-1">
                      <span className="text-xs font-mono uppercase tracking-widest text-white/60 flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#0C9DA8]" />
                        <span>Marketing Divisions</span>
                      </span>
                      <span className="text-[11px] font-mono text-white/40">360° Solutions</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {SERVICE_PILLARS.map((pillar) => {
                        return (
                          <Link
                            key={pillar.id}
                            href={pillar.href}
                            onClick={() => handleLinkClick(pillar.href)}
                            className="group flex flex-col justify-between p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-white/25 transition-all duration-200 shadow-sm"
                          >
                            <div className="flex items-center gap-2">
                              <span
                                className="w-2 h-2 rounded-full shrink-0 shadow-sm"
                                style={{ backgroundColor: pillar.accent }}
                              />
                              <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#38BDF8] transition-colors leading-tight">
                                {pillar.title}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono text-white/50 pt-2">
                              {pillar.count}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* ── Footer Actions Inside Menu Drawer ── */}
                  <div className="pt-4 border-t border-white/10 space-y-3">
                    {/* WhatsApp Direct Action Button */}
                    <a
                      href={BRAND.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 bg-[#0C9DA8] hover:bg-[#0080CB] text-white text-xs sm:text-sm font-black uppercase tracking-wider py-3.5 rounded-2xl shadow-xl transition-all active:scale-[0.98]"
                    >
                      <div className="relative flex items-center justify-center">
                        <MessageSquare className="w-4 h-4" />
                        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#10B981]" />
                      </div>
                      <span>Chat on WhatsApp</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    {/* Call & Social Row */}
                    <div className="flex items-center justify-between px-1 text-xs text-white/70">
                      <a
                        href={`tel:${BRAND.whatsappNumber}`}
                        className="inline-flex items-center gap-2 hover:text-white font-semibold transition-colors text-xs sm:text-sm"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#0C9DA8]" />
                        <span>{BRAND.phone}</span>
                      </a>

                      {/* Social Channels */}
                      <div className="flex items-center gap-2">
                        <a
                          href={BRAND.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#D10B6A] border border-white/10 flex items-center justify-center text-white transition-all"
                          aria-label="Instagram"
                        >
                          <InstagramIcon className="w-4 h-4" />
                        </a>
                        <a
                          href={BRAND.socials.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#0080CB] border border-white/10 flex items-center justify-center text-white transition-all"
                          aria-label="Facebook"
                        >
                          <FacebookIcon className="w-4 h-4" />
                        </a>
                        <a
                          href={BRAND.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#0C9DA8] border border-white/10 flex items-center justify-center text-white transition-all"
                          aria-label="LinkedIn"
                        >
                          <LinkedinIcon className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
