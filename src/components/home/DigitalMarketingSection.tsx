"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Target, Megaphone, Globe, Vote, PenTool, Share2, ArrowUpRight, Sparkles } from "lucide-react";
import { DIGITAL_MARKETING_ITEMS } from "@/lib/data";

const SERVICE_DETAILS = [
  {
    title: DIGITAL_MARKETING_ITEMS[0],
    icon: Target,
    accent: "#0080CB",
    description:
      "Data-driven performance campaigns and long-term brand positioning built to capture market share and maximize return on ad spend.",
    tags: ["Market Analysis", "ROI Optimization", "Brand Positioning"],
  },
  {
    title: DIGITAL_MARKETING_ITEMS[1],
    icon: Megaphone,
    accent: "#0C9DA8",
    description:
      "Comprehensive social media management, organic viral growth, and targeted multi-platform digital ad strategies.",
    tags: ["Social Media", "Paid Ads", "Audience Growth"],
  },
  {
    title: DIGITAL_MARKETING_ITEMS[2],
    icon: Globe,
    accent: "#D10B6A",
    description:
      "High-converting, fast-loading digital web platforms designed with modern aesthetics, animations, and seamless UX.",
    tags: ["Modern Web", "SEO Ready", "Interactive UX"],
  },
  {
    title: DIGITAL_MARKETING_ITEMS[3],
    icon: Vote,
    accent: "#0080CB",
    description:
      "Strategic constituency sentiment mapping, narrative building, public relations management, and high-impact digital political outreach.",
    tags: ["Constituency Outreach", "Public Relations", "Narrative Building"],
  },
  {
    title: DIGITAL_MARKETING_ITEMS[4],
    icon: PenTool,
    accent: "#0C9DA8",
    description:
      "Captivating copywriting, high-definition video production, graphics, and multi-channel storytelling that converts viewers into loyal advocates.",
    tags: ["Video Production", "Copywriting", "Visual Assets"],
  },
  {
    title: DIGITAL_MARKETING_ITEMS[5],
    icon: Share2,
    accent: "#D10B6A",
    description:
      "KOL and regional creator partnerships that drive authentic brand recommendations and massive localized engagement across Rajasthan & India.",
    tags: ["Creator Network", "Regional KOLs", "Viral Campaigns"],
  },
];

export default function DigitalMarketingSection() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-[#0C9DA8]">
            <Sparkles className="w-3.5 h-3.5 text-[#0C9DA8]" />
            <span>Core Digital Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Digital Marketing <span className="text-gradient-tri">Solutions</span>
          </h2>
          <p className="text-base sm:text-lg text-[#CBD5E1] font-normal">
            Strategic digital capabilities engineered to elevate your brand presence and deliver measurable growth across every channel.
          </p>
        </motion.div>

        {/* 6 Grid Cards with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_DETAILS.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl bg-[#111111]/90 border border-white/10 p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/30 hover:bg-[#141414] hover:shadow-[0_15px_35px_-10px_rgba(0,128,203,0.25)] border-gradient-glow"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 transition-transform duration-300 group-hover:scale-110"
                      style={{ boxShadow: `0 0 20px ${service.accent}20` }}
                    >
                      <IconComp className="w-7 h-7" style={{ color: service.accent }} />
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-white/10 transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#0C9DA8] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#CBD5E1] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-[#CBD5E1] border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
