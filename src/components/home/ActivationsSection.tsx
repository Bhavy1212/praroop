"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ACTIVATIONS_ITEMS } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Store, ShoppingBag, Building2, GraduationCap } from "lucide-react";

const ICONS = [Store, ShoppingBag, Building2, GraduationCap];

// Real local event photography for the 4 Activations cards (Zero stock photos)
const ACTIVATION_IMAGES: Record<string, string> = {
  Mall: "/campaigns/the-greatestest-denim-fest_0.jpg",
  Retail: "/campaigns/udaipur-tea-fest_0.jpg",
  Corporate: "/campaigns/hbf_0.jpg",
  "SCHOOL/COLLEGE": "/campaigns/field-club-dandiya-2023-2025_0.jpg",
};

export default function ActivationsSection() {
  return (
    <section id="activations" className="py-20 bg-white border-b border-surface-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-brand-tint text-brand text-xs font-bold uppercase tracking-wider">
            On-Ground Engagement
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
            Activations
          </h2>
          <p className="text-ink-body text-base max-w-2xl mx-auto">
            High-conversion experiential marketing and live audience engagement activations.
          </p>
        </ScrollReveal>

        {/* 4 Cards with Real Campaign Photography Backgrounds */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACTIVATIONS_ITEMS.map((item, index) => {
            const Icon = ICONS[index] || Store;
            const realImg = ACTIVATION_IMAGES[item] || "/campaigns/makingudaipurproud_0.jpg";

            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="relative h-80 rounded-3xl overflow-hidden border border-surface-mid shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-pointer flex flex-col justify-between p-6"
              >
                {/* Background Real Event Photo */}
                <Image
                  src={realImg}
                  alt={`${item} activation real photo`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 group-hover:via-black/50 transition-colors duration-500" />

                {/* Top Icon Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md text-brand flex items-center justify-center shadow-lg group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-ink shadow-md">
                    0{index + 1}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 space-y-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-light">
                    On-Ground Format
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                    {item}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
