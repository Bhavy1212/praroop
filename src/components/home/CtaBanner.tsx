"use client";

import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { CTA_BANNER } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CtaBanner() {
  return (
    <section className="py-16 bg-surface-light border-b border-surface-mid">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="p-8 sm:p-12 rounded-3xl bg-brand text-white text-center space-y-6 shadow-xl relative overflow-hidden">
          {/* Ambient light ring */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>{CTA_BANNER.title}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white max-w-2xl mx-auto">
            {CTA_BANNER.subhead}
          </h2>

          <p className="text-white/85 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            {CTA_BANNER.body}
          </p>

          <div className="pt-2">
            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-2 bg-white text-brand hover:bg-surface-light font-bold text-base px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>{CTA_BANNER.buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
