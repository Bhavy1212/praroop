"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { OUTDOOR_MARKETING_ITEMS } from "@/lib/data";

const OUTDOOR_ITEMS_DATA = [
  {
    title: OUTDOOR_MARKETING_ITEMS[0],
    icon: Plane,
    desc: "High-impact placements at Maharana Pratap Airport Udaipur reaching corporate decision makers and premium tourists.",
    bullets: ["Terminal Gate Placements", "Luggage Belt Screens", "Executive Traveler Demographics"],
    color: "#0080CB",
  },
  {
    title: OUTDOOR_MARKETING_ITEMS[1],
    icon: Building2,
    desc: "Prime arterial road billboards and high-traffic intersection hoardings across Rajasthan's major urban centers.",
    bullets: ["Unmatched Roadway Scale", "24/7 Illumination Features", "Highest Daily Footfall Nodes"],
    color: "#0C9DA8",
  },
  {
    title: OUTDOOR_MARKETING_ITEMS[2],
    icon: Film,
    desc: "On-screen cinema jingles, lobby standees, and multiplex ticket branding in PVR, INOX, and single-screens.",
    bullets: ["Captive Audience Attention", "Dolby Audio & HD Video", "Peak Weekend Audience Reach"],
    color: "#D10B6A",
  },
  {
    title: OUTDOOR_MARKETING_ITEMS[3],
    icon: Bus,
    desc: "Full bus wraps, side panel banners, and rear panel branding on city transit fleets and intercity buses.",
    bullets: ["City-Wide Rolling Coverage", "High Frequency Impressions", "Mass Commuter Targeting"],
    color: "#0080CB",
  },
  {
    title: OUTDOOR_MARKETING_ITEMS[4],
    icon: Car,
    desc: "Mobile auto-rickshaw hood and back panel branding covering all residential, commercial, and market zones.",
    bullets: ["Hyper-Local Penetration", "Continuous Mobile Exposure", "Cost-Effective Urban Mass Reach"],
    color: "#0C9DA8",
  },
  {
    title: OUTDOOR_MARKETING_ITEMS[5],
    icon: Newspaper,
    desc: "Front page newspaper jacket ads, inserts, and magazine spread features in leading regional dailies.",
    bullets: ["Mass Household Reach", "High Editorial Trust", "Targeted Geographic Print Runs"],
    color: "#D10B6A",
  },
  {
    title: OUTDOOR_MARKETING_ITEMS[6],
    icon: Bike,
    desc: "Branded delivery fleet wraps and e-commerce delivery box branding traversing high-density urban areas.",
    bullets: ["Continuous Mobile Visibility", "High-Impression Urban Density", "Targeted E-Commerce Audience"],
    color: "#0080CB",
  },
  {
    title: OUTDOOR_MARKETING_ITEMS[7],
    icon: ShieldAlert,
    desc: "Branded traffic police barricades at strategic highway check-points and city roundabouts.",
    bullets: ["Commanding Road Visibility", "24/7 Vehicle Stop-Line Placement", "High Civic Authority Recall"],
    color: "#0C9DA8",
  },
  {
    title: OUTDOOR_MARKETING_ITEMS[8],
    icon: Radio,
    desc: "Prime-time FM radio audio ads, RJ mentions, and station sponsorship tags across 93.5 RED FM & 94.3 MY FM.",
    bullets: ["High Morning/Evening Listenership", "Influential RJ Endorsements", "Frequency-Driven Brand Recall"],
    color: "#D10B6A",
  },
  {
    title: OUTDOOR_MARKETING_ITEMS[9],
    icon: Truck,
    desc: "High-definition mobile LED display trucks equipped with surround sound for high-impact city roadshows.",
    bullets: ["Dynamic Video Content", "Flexible Route Scheduling", "Interactive On-Road Engagement"],
    color: "#0080CB",
  },
  {
    title: OUTDOOR_MARKETING_ITEMS[10],
    icon: FileText,
    desc: "Targeted direct mailers, door-to-door pamphlet drops, and localized promotional flyer distributions.",
    bullets: ["Direct Household Delivery", "High Local Footfall Conversion", "Targeted Pin-Code Mapping"],
    color: "#0C9DA8",
  },
  {
    title: OUTDOOR_MARKETING_ITEMS[11],
    icon: Compass,
    desc: "Strategic railway station platform hoardings, entry gate arches, and train coach panel branding.",
    bullets: ["Heavy Commuter Footfall", "Regional Transit Reach", "Long Dwell-Time Impressions"],
    color: "#D10B6A",
  },
];

export default function OutdoorMarketingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches);
      setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-84%"]);

  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const { scrollLeft, clientWidth } = mobileScrollRef.current;
    const newIdx = Math.round(scrollLeft / (clientWidth * 0.8));
    setActiveIndex(Math.min(newIdx, OUTDOOR_ITEMS_DATA.length - 1));
  };

  return (
    <section id="outdoor" className="relative bg-[#FAFAFC] text-[#0F172A] border-t border-slate-200/80">
      {reducedMotion || isMobile ? (
        <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-bold uppercase tracking-wider text-[#0080CB]">
              <Sparkles className="w-3.5 h-3.5 text-[#0080CB]" />
              <span>360° Media Placement Engine</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Outdoor <span className="text-gradient-tri">Marketing</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Strategic physical media placements designed to dominate urban landscapes and connect with audiences on the move.
            </p>
          </div>

          {/* Reduced Motion Static Grid */}
          {reducedMotion ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {OUTDOOR_ITEMS_DATA.map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-3xl bg-white border border-slate-200/90 p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <div>
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center border border-slate-200 bg-slate-50 mb-4"
                        style={{ boxShadow: `0 0 20px ${item.color}25` }}
                      >
                        <IconComp className="w-6 h-6" style={{ color: item.color }} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-xs text-slate-600 mb-4 leading-relaxed">{item.desc}</p>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0C9DA8] shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Mobile Horizontal Scroll Carousel */
            <div className="space-y-6">
              <div
                ref={mobileScrollRef}
                onScroll={handleMobileScroll}
                className="flex gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 px-1"
              >
                {OUTDOOR_ITEMS_DATA.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="snap-center shrink-0 w-[84vw] max-w-[340px] rounded-3xl bg-white border border-slate-200/90 p-6 flex flex-col justify-between shadow-lg"
                    >
                      <div>
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center border border-slate-200 bg-slate-50 mb-4"
                          style={{ boxShadow: `0 0 20px ${item.color}25` }}
                        >
                          <IconComp className="w-6 h-6" style={{ color: item.color }} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-xs text-slate-600 mb-4 leading-relaxed">{item.desc}</p>
                        <ul className="space-y-2 text-xs text-slate-600">
                          {item.bullets.map((b) => (
                            <li key={b} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#0C9DA8] shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile Indicator Dots */}
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
          )}
        </div>
      ) : (
        /* DESKTOP PINNED HORIZONTAL SHOWCASE SECTION */
        <div ref={containerRef} className="relative h-[380vh]">
          <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center py-8">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-bold uppercase tracking-wider text-[#0080CB]">
                <Sparkles className="w-3.5 h-3.5 text-[#0080CB]" />
                <span>Our 360° Outdoor Media Engine</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
                Outdoor & Transit <span className="text-gradient-tri">Advertising Showcase</span>
              </h2>
              <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto">
                Scroll to explore our full spectrum of strategic physical advertising formats across Udaipur & Rajasthan.
              </p>
            </div>

            {/* Horizontal Track Container */}
            <div className="w-full overflow-hidden px-8">
              <motion.div style={{ x: xTransform }} className="flex gap-6 w-max">
                {OUTDOOR_ITEMS_DATA.map((item, index) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="w-[360px] lg:w-[400px] h-[390px] rounded-3xl bg-white border border-slate-200/90 p-8 flex flex-col justify-between shadow-md hover:shadow-2xl hover:border-slate-300 transition-all duration-300 group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center border border-slate-200 bg-slate-50 group-hover:scale-110 transition-transform duration-300"
                            style={{ boxShadow: `0 0 25px ${item.color}20` }}
                          >
                            <IconComp className="w-7 h-7" style={{ color: item.color }} />
                          </div>
                          <span className="text-xs font-mono font-bold text-slate-400">
                            0{index + 1} / 12
                          </span>
                        </div>

                        <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-[#0080CB] transition-colors duration-200 font-display">
                          {item.title}
                        </h3>

                        <p className="text-sm text-slate-600 mb-6 leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>

                      <div className="border-t border-slate-100 pt-4">
                        <ul className="space-y-2 text-xs font-semibold text-slate-600">
                          {item.bullets.map((b) => (
                            <li key={b} className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#0C9DA8] shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
