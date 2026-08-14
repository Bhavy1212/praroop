"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Target, Megaphone, Globe, Vote, PenTool, Share2, ArrowUpRight } from "lucide-react";
import { DIGITAL_MARKETING_ITEMS } from "@/lib/data";

const SERVICE_DETAILS = [
  {
    title: DIGITAL_MARKETING_ITEMS[0], // Brand strategy / Performance marketing
    icon: Target,
    accent: "#0080CB",
    description:
      "Data-driven performance campaigns and long-term brand positioning built to capture market share and maximize return on ad spend.",
    tags: ["Market Analysis", "ROI Optimization", "Brand Positioning"],
  },
  {
    title: DIGITAL_MARKETING_ITEMS[1], // Digital marketing / Social media marketing
    icon: Megaphone,
    accent: "#0C9DA8",
    description:
      "Comprehensive social media management, organic viral growth, and targeted multi-platform digital ad strategies.",
    tags: ["Social Media", "Paid Ads", "Audience Growth"],
  },
  {
    title: DIGITAL_MARKETING_ITEMS[2], // Website Development
    icon: Globe,
    accent: "#D10B6A",
    description:
      "High-converting, fast-loading digital web platforms designed with modern aesthetics, animations, and seamless UX.",
    tags: ["Modern Web", "SEO Ready", "Interactive UX"],
  },
  {
    title: DIGITAL_MARKETING_ITEMS[3], // Political Campaign/ Narrative Building
    icon: Vote,
    accent: "#0080CB",
    description:
      "Strategic constituency sentiment mapping, narrative building, public relations management, and high-impact digital political outreach.",
    tags: ["Constituency Outreach", "Public Relations", "Narrative Building"],
  },
  {
    title: DIGITAL_MARKETING_ITEMS[4], // Content Marketing / Content Creation
    icon: PenTool,
    accent: "#0C9DA8",
    description:
      "Captivating copywriting, high-definition video production, graphics, and multi-channel storytelling that converts viewers into loyal advocates.",
    tags: ["Video Production", "Copywriting", "Visual Assets"],
  },
  {
    title: DIGITAL_MARKETING_ITEMS[5], // Influencer Marketing
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
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#0C9DA8] shadow-xs">
            Core Digital Services
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B1220] tracking-tight">
            Digital Marketing <span className="text-gradient-tri">Solutions</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Strategic digital capabilities engineered to elevate your brand presence and deliver measurable growth across every channel.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_DETAILS.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl bg-white border border-slate-200/80 p-8 flex flex-col justify-between transition-all duration-300 hover:border-slate-300 hover:shadow-[0_15px_35px_-10px_rgba(0,128,203,0.12)] hover:-translate-y-1"
              >
                <div>
                  {/* Top Row: Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center border border-slate-100 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${service.accent}12` }}
                    >
                      <IconComp className="w-7 h-7" style={{ color: service.accent }} />
                    </div>
                    <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#0080CB] group-hover:bg-[#0080CB]/10 transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0B1220] mb-3 group-hover:text-[#0080CB] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/60"
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
