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
  ExternalLink,
  MessageSquare,
  Globe,
  Radio,
  Share2,
  Tv,
  LayoutGrid,
  FileText,
  MapPin,
  Mail,
} from "lucide-react";
import { BRAND } from "@/lib/data";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

const SERVICES_MENU = [
  {
    id: "seo",
    title: "SEO & AI Visibility",
    count: "5 services",
    href: "/services/seo",
    icon: Globe,
    accent: "#0080CB",
  },
  {
    id: "social",
    title: "Social Media & Viral",
    count: "6 services",
    href: "/services/social-media-marketing",
    icon: Share2,
    accent: "#D10B6A",
  },
  {
    id: "outdoor",
    title: "Outdoor & Billboards",
    count: "12 services",
    href: "/#outdoor",
    icon: MapPin,
    accent: "#0C9DA8",
  },
  {
    id: "performance",
    title: "Performance Ads",
    count: "4 services",
    href: "/#services",
    icon: Sparkles,
    accent: "#0080CB",
  },
  {
    id: "web",
    title: "Web & Tech Engineering",
    count: "3 services",
    href: "/services/web-development",
    icon: LayoutGrid,
    accent: "#6366F1",
  },
  {
    id: "content",
    title: "Media Production",
    count: "4 services",
    href: "/#services",
    icon: Tv,
    accent: "#D10B6A",
  },
  {
    id: "branding",
    title: "Brand Strategy",
    count: "5 services",
    href: "/#services",
    icon: FileText,
    accent: "#0C9DA8",
  },
  {
    id: "activations",
    title: "Mall & Event Activations",
    count: "6 services",
    href: "/#activations",
    icon: Radio,
    accent: "#F59E0B",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  // Scroll Progress Tracking for the Appinventiv pill fill animation
  const { scrollYProgress, scrollY } = useScroll();
  const scrollProgressWidth = useTransform(scrollYProgress, [0, 1], ["12%", "100%"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show navbar when scrolled past banner threshold (~120px) on homepage, or always show on subpages
    if (pathname !== "/") {
      setIsVisible(true);
    } else {
      setIsVisible(latest > 120);
    }

    if (latest > 180) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
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

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <AnimatePresence>
      {(isVisible || isOpen) && (
        <motion.header
          ref={navRef}
          initial={{ y: -60, opacity: 0, x: "-50%" }}
          animate={{ y: 0, opacity: 1, x: "-50%" }}
          exit={{ y: -60, opacity: 0, x: "-50%" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={`fixed left-1/2 z-[999] w-[calc(100%-1.5rem)] pointer-events-auto select-none transition-all duration-300 ${
            isScrolled
              ? "top-2.5 sm:top-3.5 max-w-[510px] md:max-w-[560px] scale-[0.98]"
              : "top-3.5 sm:top-5 max-w-[540px] md:max-w-[590px] scale-100"
          }`}
        >
          {/* ── Main Floating Bar Container ── */}
          <div
            className={`relative w-full overflow-hidden transition-all duration-400 ease-out border shadow-2xl backdrop-blur-2xl ${
              isOpen
                ? "rounded-3xl bg-[#090E17]/95 border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.85)]"
                : isScrolled
                ? "rounded-full bg-black/80 border-white/25 shadow-[0_15px_40px_rgba(0,0,0,0.7)]"
                : "rounded-full bg-black/60 border-white/15 hover:border-white/30 shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
            }`}
          >
            {/* Appinventiv Liquid Glass Background Scroll Fill Capsule */}
            {!isOpen && (
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-full p-1">
                <motion.div
                  style={{
                    width: scrollProgressWidth,
                  }}
                  className="h-full rounded-full bg-white/[0.18] backdrop-blur-xl border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.12)] transition-[width] duration-75 ease-out"
                />
              </div>
            )}


        {/* Compact Top Bar */}
        <div className="relative z-10 flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2 sm:py-2.5">

          {/* Logo */}
          <Link href="/" className="relative flex items-center shrink-0 group">
            <div className="relative h-8 w-28 sm:h-9 sm:w-36 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/praaroop-Media-and-Adv-1.png"
                alt="Praaroop Media"
                fill
                priority
                className="object-contain filter brightness-125 drop-shadow-[0_0_10px_rgba(0,128,203,0.3)]"
              />
            </div>
          </Link>

          {/* Right Action Group */}
          <div className="flex items-center gap-2">
            {/* White Rounded Contact Us CTA Button */}
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-white hover:bg-slate-100 text-[#070D18] text-[11px] sm:text-xs font-black uppercase tracking-wider px-3.5 sm:px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:scale-105 active:scale-95 shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-[#0080CB] fill-current" />
              <span>Contact Us</span>
            </Link>

            {/* Appinventiv-Style Animated 4-Dot Grid / Close Trigger */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              className={`relative flex h-10 w-10 sm:h-10 sm:w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl transition-all duration-300 ${
                isOpen
                  ? "bg-white/20 text-white rotate-90 border border-white/30"
                  : "bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-white/20"
              }`}
            >
              <div className="relative h-4 w-4 flex items-center justify-center">
                {isOpen ? (
                  // Animated 'X' Cross when menu is open
                  <motion.div
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    className="relative w-4 h-4 flex items-center justify-center"
                  >
                    <span className="absolute w-4 h-0.5 bg-white rotate-45 rounded-full" />
                    <span className="absolute w-4 h-0.5 bg-white -rotate-45 rounded-full" />
                  </motion.div>
                ) : (
                  // 2x2 Dots Grid when menu is closed
                  <div className="grid grid-cols-2 gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-white transition-all duration-300 group-hover:scale-125" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white transition-all duration-300 group-hover:scale-125" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white transition-all duration-300 group-hover:scale-125" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0C9DA8] transition-all duration-300 group-hover:scale-125" />
                  </div>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* ── Expanding Mega Menu Panel (Appinventiv Style) ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-white/10"
            >
              <div className="p-4 sm:p-5 max-h-[75vh] overflow-y-auto overscroll-contain space-y-4 scrollbar-thin scrollbar-thumb-white/20">
                {/* Main Navigation Links */}
                <nav className="space-y-1">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-xl text-lg font-bold text-white hover:text-[#38BDF8] hover:bg-white/5 transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-xl text-lg font-bold text-white hover:text-[#38BDF8] hover:bg-white/5 transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/campaigns"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-xl text-lg font-bold text-white hover:text-[#38BDF8] hover:bg-white/5 transition-colors"
                  >
                    Campaigns & Case Studies
                  </Link>

                  {/* Expandable Services Accordion */}
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => setServicesExpanded(!servicesExpanded)}
                      className="flex w-full items-center justify-between px-3 py-2 rounded-xl text-lg font-bold text-white hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <span>Services</span>
                        <span className="text-xs font-mono font-medium text-white/50 bg-white/10 px-2 py-0.5 rounded-full">
                          ({SERVICES_MENU.length})
                        </span>
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-white/70 transition-transform duration-300 ${
                          servicesExpanded ? "rotate-180 text-[#0C9DA8]" : ""
                        }`}
                      />
                    </button>

                    {/* 2-Column Frosted Services Grid */}
                    <AnimatePresence>
                      {servicesExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden pt-2"
                        >
                          <div className="grid grid-cols-2 gap-2">
                            {SERVICES_MENU.map((srv) => {
                              const Icon = srv.icon;
                              return (
                                <Link
                                  key={srv.id}
                                  href={srv.href}
                                  onClick={() => setIsOpen(false)}
                                  className="group flex flex-col justify-between p-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/25 transition-all duration-200 min-h-[82px]"
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-mono text-white/50">
                                      {srv.count}
                                    </span>
                                    <Icon
                                      className="w-3.5 h-3.5 text-white/60 group-hover:text-white transition-colors"
                                      style={{ color: srv.accent }}
                                    />
                                  </div>
                                  <span className="text-xs font-bold text-white leading-snug group-hover:text-[#38BDF8] transition-colors">
                                    {srv.title}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    href="/contact-us"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-xl text-lg font-bold text-white hover:text-[#38BDF8] hover:bg-white/5 transition-colors"
                  >
                    Contact Us
                  </Link>
                </nav>

                {/* Footer Section inside Drawer */}
                <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
                  {/* WhatsApp Direct Action Button */}
                  <a
                    href={BRAND.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0C9DA8] hover:bg-[#0080CB] text-white text-xs font-black uppercase tracking-wider py-3 rounded-xl shadow-lg transition-transform active:scale-98"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  {/* Social & Contact Row */}
                  <div className="flex items-center justify-between px-2 pt-1 text-xs text-white/60">
                    <div className="flex items-center gap-3">
                      <a
                        href={BRAND.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#D10B6A] transition-colors"
                        aria-label="Instagram"
                      >
                        <InstagramIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={BRAND.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0080CB] transition-colors"
                        aria-label="Facebook"
                      >
                        <FacebookIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={BRAND.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0C9DA8] transition-colors"
                        aria-label="LinkedIn"
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                    </div>
                    <span className="font-mono text-[11px] text-white/40">
                      Udaipur • India
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )}
</AnimatePresence>
  );
}


