"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CLIENT_LOGOS } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ClientMarquee() {
  const track1 = CLIENT_LOGOS.slice(0, 12);
  const track2 = CLIENT_LOGOS.slice(12);

  return (
    <section id="client" className="py-20 bg-surface-light border-b border-surface-mid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <ScrollReveal className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-full bg-brand-tint text-brand text-xs font-bold uppercase tracking-wider">
            Trusted By Top Brands
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
            Clients
          </h2>
          <p className="text-ink-body text-base">
            From healthcare giants and luxury hospitality resorts to automotive networks and political leaders.
          </p>
        </ScrollReveal>

        {/* Marquee Track 1 (Left) - Pauses on Hover, Grayscale to Color Transition per Logo */}
        <div className="relative w-full overflow-hidden py-2">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-light to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-light to-transparent z-10 pointer-events-none" />

          <div className="flex gap-6 w-max animate-marquee-left">
            {[...track1, ...track1, ...track1].map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="w-44 h-24 sm:w-52 sm:h-28 rounded-2xl bg-white border border-surface-mid shadow-sm hover:shadow-md flex items-center justify-center p-4 transition-all duration-300 group cursor-pointer shrink-0"
              >
                <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300 opacity-75 group-hover:opacity-100 scale-95 group-hover:scale-105">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Track 2 (Right) */}
        <div className="relative w-full overflow-hidden py-2">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-light to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-light to-transparent z-10 pointer-events-none" />

          <div className="flex gap-6 w-max animate-marquee-left" style={{ animationDirection: "reverse" }}>
            {[...track2, ...track2, ...track2].map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="w-44 h-24 sm:w-52 sm:h-28 rounded-2xl bg-white border border-surface-mid shadow-sm hover:shadow-md flex items-center justify-center p-4 transition-all duration-300 group cursor-pointer shrink-0"
              >
                <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300 opacity-75 group-hover:opacity-100 scale-95 group-hover:scale-105">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
