"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FOOTER_CTA_CARDS } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FooterCtaCards() {
  return (
    <section className="py-16 bg-surface-light border-b border-surface-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FOOTER_CTA_CARDS.map((card, i) => {
            const isExternal = card.link.startsWith("http");

            return (
              <ScrollReveal key={card.title} delay={i * 0.1}>
                {isExternal ? (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-8 rounded-3xl bg-white border border-surface-mid hover:border-brand/40 shadow-sm hover:shadow-xl transition-all duration-300 group flex items-center justify-between cursor-pointer"
                  >
                    <span className="font-display text-xl font-bold text-ink group-hover:text-brand transition-colors">
                      {card.title}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-brand-tint text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </a>
                ) : (
                  <Link
                    href={card.link}
                    className="p-8 rounded-3xl bg-white border border-surface-mid hover:border-brand/40 shadow-sm hover:shadow-xl transition-all duration-300 group flex items-center justify-between cursor-pointer"
                  >
                    <span className="font-display text-xl font-bold text-ink group-hover:text-brand transition-colors">
                      {card.title}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-brand-tint text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
