"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WHY_CHOOSE_US } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ShieldCheck, Sparkles, Cpu, HeartHandshake } from "lucide-react";

const PILLAR_ICONS = [ShieldCheck, Sparkles, Cpu, HeartHandshake];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-white border-b border-surface-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-brand-tint text-brand text-xs font-bold uppercase tracking-wider">
            {WHY_CHOOSE_US.label}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
            {WHY_CHOOSE_US.h2}
          </h2>
          <p className="text-ink-body text-base leading-relaxed">
            {WHY_CHOOSE_US.body}
          </p>
        </ScrollReveal>

        {/* 2-Column Grid: Feature Cards Staggered from Left + Sticky About Us Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: 4 Feature Cards Staggering in from Left */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display text-2xl font-bold text-ink border-l-4 border-brand pl-3 mb-6">
              {WHY_CHOOSE_US.subheading}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {WHY_CHOOSE_US.pillars.map((pillar, i) => {
                const Icon = PILLAR_ICONS[i] || ShieldCheck;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="p-6 rounded-3xl bg-surface-light border border-surface-mid hover:border-brand/40 shadow-sm hover:shadow-lg transition-all duration-300 space-y-3 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white text-brand flex items-center justify-center shadow-sm group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-ink group-hover:text-brand transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-ink-body leading-relaxed">
                      {pillar.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Sticky About Us Card with Fade-In Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 sticky top-28"
          >
            <div className="p-8 rounded-3xl bg-surface-light border border-surface-mid space-y-6 shadow-xl relative overflow-hidden">
              <span className="inline-block px-3 py-1 rounded-full bg-brand text-white text-xs font-bold uppercase tracking-wider">
                {WHY_CHOOSE_US.aboutCard.label}
              </span>

              <p className="text-ink-body text-sm leading-relaxed">
                {WHY_CHOOSE_US.aboutCard.body}
              </p>

              {/* Office Photo Fade-In */}
              <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-md border border-surface-mid">
                <Image
                  src={WHY_CHOOSE_US.aboutCard.image}
                  alt="Praaroop Media Office"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
