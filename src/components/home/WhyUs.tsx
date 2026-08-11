"use client";

import Image from "next/image";
import Link from "next/link";
import { Target, Sparkles, Cpu, HeartHandshake, ArrowRight, CheckCircle2 } from "lucide-react";
import { WHY_US_PILLARS } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";

const ICON_MAP = [Target, Sparkles, Cpu, HeartHandshake];

export default function WhyUs() {
  return (
    <section className="py-20 bg-white border-b border-surface-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Exact Verbatim Original Content */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal className="space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-brand-tint text-brand text-xs font-bold uppercase tracking-wider">
                Praaroop Media
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
                Why Choose Praaroop Media in Udaipur?
              </h2>
              <p className="text-ink-body text-base leading-relaxed">
                What sets Praaroop Media apart is our unwavering commitment to quality and our personalised approach to every project. We understand that every client is unique and that every story deserves to be told in the most authentic way possible. Our client-focused philosophy ensures that we listen to your needs, embrace your vision, and deliver results that exceed your expectations.
              </p>
            </ScrollReveal>

            {/* Subheading: What Sets Us Apart */}
            <ScrollReveal delay={0.15} className="pt-2 space-y-4">
              <h3 className="font-display text-2xl font-bold text-ink border-l-4 border-brand pl-4">
                What Sets Us Apart
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {WHY_US_PILLARS.map((pillar, i) => {
                  const Icon = ICON_MAP[i] || Target;
                  return (
                    <ScrollReveal
                      key={pillar.title}
                      delay={i * 0.1}
                      className="p-6 rounded-2xl bg-surface-light border border-surface-mid hover:border-brand/30 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-brand-tint text-brand flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-white transition-colors duration-300 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-display text-lg font-bold text-ink group-hover:text-brand transition-colors mb-2">
                        {pillar.title}
                      </h4>
                      <p className="text-ink-body text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                    </ScrollReveal>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Sticky About Us Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <ScrollReveal direction="left" className="relative rounded-3xl overflow-hidden border border-brand/20 shadow-xl bg-gradient-to-b from-white to-surface-light p-6 space-y-6">
              
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-inner">
                <Image
                  src="/IMG_1116.jpg"
                  alt="About Us — Praaroop Media Udaipur"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand/80 backdrop-blur-sm">
                    About Us
                  </span>
                  <h4 className="font-display font-bold text-lg mt-1">
                    Praaroop Media
                  </h4>
                </div>
              </div>

              {/* Original About Us Copy */}
              <div className="space-y-4">
                <h4 className="font-display text-xl font-bold text-ink">
                  About Us
                </h4>
                <p className="text-ink-body text-sm leading-relaxed font-medium">
                  Welcome to Praaroop Media, your trusted partner in transforming ideas into impactful stories. We are a forward-thinking media and marketing agency committed to helping brands thrive in a world of ever-evolving possibilities
                </p>

                <ul className="space-y-2 text-xs font-semibold text-ink-body pt-1">
                  <li className="flex items-center gap-2 text-brand">
                    <CheckCircle2 className="w-4 h-4" /> Personalised approach to every project
                  </li>
                  <li className="flex items-center gap-2 text-brand">
                    <CheckCircle2 className="w-4 h-4" /> Strategic Excellence & Creative Brilliance
                  </li>
                </ul>

                <Link
                  href="/about-us/"
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md"
                >
                  <span>Read Full About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
