"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CLIENT_LOGOS } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ClientMarquee() {
  return (
    <section id="client" className="py-20 bg-surface-light border-b border-surface-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <ScrollReveal className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-full bg-brand-tint text-brand text-xs font-bold uppercase tracking-wider">
            Trusted By Industry Leaders
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
            Clients
          </h2>
          <p className="text-ink-body text-base">
            From healthcare giants and luxury hospitality resorts to automotive networks and political leaders.
          </p>
        </ScrollReveal>

        {/* Clean, Full-Color Responsive Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {CLIENT_LOGOS.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="h-28 sm:h-32 rounded-2xl bg-white border border-surface-mid hover:border-brand/40 shadow-sm hover:shadow-lg flex items-center justify-center p-4 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative w-full h-full">
                <Image
                  src={client.logo}
                  alt={`${client.name} client logo`}
                  fill
                  className="object-contain p-1"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
