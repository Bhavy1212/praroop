"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Plane,
  Building2,
  Film,
  Bus,
  Car,
  Newspaper,
  Bike,
  ShieldAlert,
  Radio,
  Truck,
  FileText,
  Compass,
} from "lucide-react";
import { OUTDOOR_MARKETING_ITEMS } from "@/lib/data";

const OUTDOOR_ITEMS_DATA = [
  { title: OUTDOOR_MARKETING_ITEMS[0], icon: Plane, desc: "High-impact placements at Maharana Pratap Airport Udaipur reaching executive travelers.", color: "#0080CB" },
  { title: OUTDOOR_MARKETING_ITEMS[1], icon: Building2, desc: "Prime arterial road billboards and high-traffic intersection hoardings across Rajasthan.", color: "#0C9DA8" },
  { title: OUTDOOR_MARKETING_ITEMS[2], icon: Film, desc: "On-screen cinema jingles and lobby branding in major multiplexes.", color: "#D10B6A" },
  { title: OUTDOOR_MARKETING_ITEMS[3], icon: Bus, desc: "Full bus wraps and rear panel branding on city and intercity transit fleets.", color: "#0080CB" },
  { title: OUTDOOR_MARKETING_ITEMS[4], icon: Car, desc: "Mobile auto-rickshaw hood and back panel branding covering all city zones.", color: "#0C9DA8" },
  { title: OUTDOOR_MARKETING_ITEMS[5], icon: Newspaper, desc: "Front page display ads, jacket wraps, and targeted classified insertions.", color: "#D10B6A" },
  { title: OUTDOOR_MARKETING_ITEMS[6], icon: Bike, desc: "Eco-friendly mobile tri-cycle branding for hyper-local market promotions.", color: "#0080CB" },
  { title: OUTDOOR_MARKETING_ITEMS[7], icon: ShieldAlert, desc: "Residential and commercial no-parking board branding across high-density neighborhoods.", color: "#0C9DA8" },
  { title: OUTDOOR_MARKETING_ITEMS[8], icon: Compass, desc: "Street light pole kiosks and avenue banners along main commercial corridors.", color: "#D10B6A" },
  { title: OUTDOOR_MARKETING_ITEMS[9], icon: Radio, desc: "Catchy radio jingles and RJ mentions on leading FM channels.", color: "#0080CB" },
  { title: OUTDOOR_MARKETING_ITEMS[10], icon: Truck, desc: "LED screen mobile vans and campaign floats for live event broadcasting.", color: "#0C9DA8" },
  { title: OUTDOOR_MARKETING_ITEMS[11], icon: FileText, desc: "Direct door-to-door newspaper pamphlet insertion reaching thousands of households.", color: "#D10B6A" },
];

export default function OutdoorMarketingSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const newIdx = Math.round(scrollLeft / (clientWidth * 0.8));
    setActiveIndex(Math.min(newIdx, OUTDOOR_ITEMS_DATA.length - 1));
  };

  return (
    <section id="outdoor" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#0080CB]">
            High-Impact Outdoor & Transit Media
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B1220] tracking-tight">
            Outdoor <span className="text-gradient-tri">Marketing</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Strategic physical media placements designed to dominate urban landscapes and connect with audiences on the move.
          </p>
        </div>

        {/* Desktop / Tablet Grid Layout (3x4 or 4x3) */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {OUTDOOR_ITEMS_DATA.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative rounded-2xl bg-white border border-slate-200/80 p-6 flex flex-col justify-between transition-all duration-300 hover:border-slate-300 hover:shadow-[0_10px_25px_-5px_rgba(0,128,203,0.1)] hover:-translate-y-1"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center border border-slate-100 mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}12` }}
                  >
                    <IconComp className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1220] mb-2 leading-snug group-hover:text-[#0080CB] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Horizontal Scroll-Snap Row (Peeking cards layout) */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 px-1"
          >
            {OUTDOOR_ITEMS_DATA.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="snap-center shrink-0 w-[82vw] max-w-[320px] rounded-2xl bg-white border border-slate-200/80 p-6 flex flex-col justify-between shadow-md"
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center border border-slate-100 mb-4"
                      style={{ backgroundColor: `${item.color}12` }}
                    >
                      <IconComp className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <h3 className="text-base font-bold text-[#0B1220] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Scroll Indicator Dots */}
          <div className="flex items-center justify-center gap-1.5 pt-4">
            {OUTDOOR_ITEMS_DATA.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === i ? "w-6 bg-[#0080CB]" : "w-1.5 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
