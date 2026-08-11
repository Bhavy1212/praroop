"use client";

import { motion } from "framer-motion";
import { ACTIVATIONS_ITEMS } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ShoppingBag, Store, Building2, GraduationCap } from "lucide-react";

const ICONS = [ShoppingBag, Store, Building2, GraduationCap];

export default function ActivationsSection() {
  return (
    <section className="py-20 bg-white border-b border-surface-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-brand-tint text-brand text-xs font-bold uppercase tracking-wider">
            Brand Activations
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink tracking-tight">
            Activations
          </h2>
        </ScrollReveal>

        {/* 4 Cards in Exact Order */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACTIVATIONS_ITEMS.map((item, index) => {
            const Icon = ICONS[index] || Store;
            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-white via-surface-light to-brand-tint/20 border border-brand/20 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer text-center flex flex-col items-center justify-between"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-brand uppercase tracking-wider block mb-1">
                    Activation #{index + 1}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-ink group-hover:text-brand transition-colors">
                    {item}
                  </h3>
                </div>
                <div className="mt-6 pt-4 border-t border-surface-mid/60 w-full text-xs font-bold text-brand">
                  <span>Explore Setups &rarr;</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
