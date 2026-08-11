"use client";

import { motion } from "framer-motion";
import { ArrowRight, Plane, Bus, Tv, Smartphone, Store, Sparkles, Phone } from "lucide-react";
import Link from "next/link";

const HERO_FEATURE_TILES = [
  { icon: Plane, title: "Airport Advertising" },
  { icon: Bus, title: "Bus Advertising" },
  { icon: Tv, title: "Theater Advertising" },
  { icon: Smartphone, title: "Digital Marketing" },
  { icon: Store, title: "Mall Activations" },
  { icon: Sparkles, title: "Brand Strategy" },
];

export default function Hero() {
  return (
    <section className="snap-section relative overflow-hidden bg-surface-light py-12 md:py-20 lg:py-24 border-b border-surface-mid">
      {/* Background ambient radial gradients */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[400px] h-[400px] bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Verbatim Hero Headlines */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow / H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display font-bold text-brand text-3xl sm:text-4xl lg:text-5xl tracking-tight"
            >
              360° Marketing and Branding Agency
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-ink text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
            >
              Delivering Innovative Marketing and Branding Strategies & Campaigns
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href="https://api.whatsapp.com/send?phone=918696940199&text=Hello"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-brand hover:bg-brand-dark text-white font-bold text-base px-7 py-3.5 rounded-full shadow-lg hover:shadow-brand transition-all duration-300 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                <span>Get in touch</span>
              </a>

              <Link
                href="/#services"
                className="inline-flex items-center gap-2 bg-white hover:bg-surface-light border border-surface-mid hover:border-brand/40 text-ink font-semibold text-base px-6 py-3.5 rounded-full transition-all duration-300 shadow-sm"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-brand" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Interactive Visual Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-brand/5 rounded-3xl transform rotate-1 scale-105 filter blur-xl" />

            <div className="relative bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-3xl border border-brand/15 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-surface-mid pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs font-mono text-ink-muted font-semibold uppercase">
                  PRAAROOP 360° MEDIA
                </span>
              </div>

              {/* 3x2 Grid */}
              <div className="grid grid-cols-2 gap-3">
                {HERO_FEATURE_TILES.map((tile, i) => {
                  const Icon = tile.icon;
                  return (
                    <motion.div
                      key={tile.title}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="p-4 rounded-2xl bg-surface-light border border-surface-mid hover:border-brand/30 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-brand-tint text-brand flex items-center justify-center shadow-sm group-hover:bg-brand group-hover:text-white transition-colors duration-300 mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display text-sm font-bold text-ink group-hover:text-brand transition-colors">
                        {tile.title}
                      </h3>
                    </motion.div>
                  );
                })}
              </div>

              <div className="bg-brand text-white p-3 rounded-xl flex items-center justify-between text-xs font-semibold shadow-md">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                  <span>Praaroop Media — Udaipur</span>
                </div>
                <span className="text-white/80 font-mono">360°</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
