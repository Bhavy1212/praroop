"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const outdoorItems = [
  { id: "airport", number: "1", title: "Airport Advertising", description: "Maharana Pratap Airport Lounges, Baggage Conveyor LED Screens, High-Net-Worth Passenger Reach", image: "/services/outdoor/airport.webp", icon: Plane, bullets: ["Terminal Gate Placements", "Luggage Belt Screens", "Executive Traveler Demographics"], color: "#0080CB" },
  { id: "hoarding", number: "2", title: "Hoarding Advertising", description: "Prime Highway Junction Billboards, Arterial Road High-Traffic Sites, Illuminated Night-lit Displays", image: "/services/outdoor/hoarding.webp", icon: Building2, bullets: ["Unmatched Roadway Scale", "24/7 Illumination Features", "Highest Daily Footfall Nodes"], color: "#0C9DA8" },
  { id: "theater", number: "3", title: "Theater Advertising", description: "PVR & Cinepolis Cinema Screens, Pre-Movie On-Screen Slides, Lobby Canopy & Ticket Banners", image: "/services/outdoor/theater.webp", icon: Film, bullets: ["Captive Audience Attention", "Dolby Audio & HD Video", "Peak Weekend Audience Reach"], color: "#D10B6A" },
  { id: "bus", number: "4", title: "Bus Advertising", description: "Full RSRTC & City Bus Wraps, Side Banners & Back Wraps, Mass Urban Commuter Reach", image: "/services/outdoor/bus.webp", icon: Bus, bullets: ["City-Wide Rolling Coverage", "High Frequency Impressions", "Mass Commuter Targeting"], color: "#0080CB" },
  { id: "auto-hood", number: "5", title: "Auto Hood Advertising", description: "High-Frequency City Auto Banners, High-Density Market Route Banners, Cost-Effective Local Reach", image: "/services/outdoor/auto-hood.webp", icon: Car, bullets: ["Hyper-Local Penetration", "Continuous Mobile Exposure", "Cost-Effective Urban Mass Reach"], color: "#0C9DA8" },
  { id: "newspaper", number: "6", title: "Newspaper Advertising", description: "Front Page Front-Jacket Banners, Dainik Bhaskar & Patrika Display, High-Credibility Reader Reach", image: "/services/outdoor/newspaper.webp", icon: Newspaper, bullets: ["Mass Household Reach", "High Editorial Trust", "Targeted Geographic Print Runs"], color: "#D10B6A" },
  { id: "tricycle", number: "7", title: "Tri-Cycle Advertising", description: "Eco-Friendly Mobile Banners, Narrow Market Street Outreach, Targeted Neighborhood Campaigns", image: "/services/outdoor/tricycle.webp", icon: Bike, bullets: ["Continuous Mobile Visibility", "High-Impression Urban Density", "Targeted E-Commerce Audience"], color: "#0080CB" },
  { id: "no-parking", number: "8", title: "No Parking Board Advertising", description: "Residential & Commercial Gates, Hyper-Local Daily Footfall Impact, High-Retention Street Level Ads", image: "/services/outdoor/no-parking.webp", icon: ShieldAlert, bullets: ["Residential & Commercial Gates", "Hyper-Local Daily Footfall", "High-Retention Street Level Ads"], color: "#0C9DA8" },
  { id: "pole", number: "9", title: "Pole Advertising", description: "Street Light Pole Kiosks, Consecutive Avenue Repetition, Major Traffic Corridor Placement", image: "/services/outdoor/pole.webp", icon: Compass, bullets: ["Street Light Pole Kiosks", "Consecutive Avenue Repetition", "Major Traffic Corridor Placement"], color: "#D10B6A" },
  { id: "radio", number: "10", title: "Radio Advertising", description: "94.3 FM Prime-Time Audio Jingles, Popular RJ Mentions & Contests, City-Wide Driver & Home Listeners", image: "/services/outdoor/radio.webp", icon: Radio, bullets: ["High Morning/Evening Listenership", "Influential RJ Endorsements", "Frequency-Driven Brand Recall"], color: "#0080CB" },
  { id: "mobile-van", number: "11", title: "Mobile Van Advertising", description: "High-Brightness Outdoor LED Screens, Interactive Sound System Roadshows, Custom Event & District Routes", image: "/services/outdoor/mobile-van.webp", icon: Truck, bullets: ["Dynamic Video Content", "Flexible Route Scheduling", "Interactive On-Road Engagement"], color: "#0C9DA8" },
  { id: "pamphlet", number: "12", title: "Newspaper Pamphlet Insert Advertising", description: "Direct Morning Doorstep Delivery, Pincode-Specific Household Target, High Response Rate Promotional Banners", image: "/services/outdoor/pamphlet.webp", icon: FileText, bullets: ["Direct Household Delivery", "High Local Footfall Conversion", "Targeted Pin-Code Mapping"], color: "#D10B6A" },
];

interface ServiceCardProps {
  item: typeof outdoorItems[0];
  active: boolean;
}

function ServiceCard({ item, active }: ServiceCardProps) {
  return (
    <div
      aria-label={item.title}
      className={`service-card relative w-[300px] md:w-[350px] lg:w-[390px] shrink-0 h-full border-r border-white/15 overflow-hidden group flex flex-col justify-between pt-28 pb-16 px-8 lg:px-10 select-none transition-colors duration-500 bg-black`}
    >
      {/* Background image — revealed smoothly on hover */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, 390px"
        priority={item.number === "1" || item.number === "2"}
        className="object-cover opacity-0 scale-105 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100"
      />
      {/* Dark gradient so text stays ultra-sharp and legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 opacity-80 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

      {/* Top Giant Number */}
      <div className="relative z-10">
        <span className="text-5xl md:text-6xl lg:text-7xl font-black font-sans tracking-tight text-white transition-transform duration-500 group-hover:translate-x-1 inline-block">
          {item.number}
        </span>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 space-y-2">
        <h3 className="text-xl md:text-2xl font-black text-white leading-tight font-display tracking-tight group-hover:text-white transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-xs md:text-sm text-white/70 leading-relaxed font-normal">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function OutdoorMarketingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Responsive & prefers-reduced-motion check
  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 1024 || window.matchMedia("(pointer: coarse)").matches);
      setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  // GSAP Horizontal Pinned Scroll (Zero-gap full height translation)
  useEffect(() => {
    if (isMobile || reducedMotion) return;

    const track = trackRef.current;
    const section = containerRef.current;
    if (!track || !section) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        const containerWidth = track.parentElement ? track.parentElement.clientWidth : window.innerWidth * 0.65;
        return Math.max(0, track.scrollWidth - containerWidth);
      };

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.min(
              outdoorItems.length - 1,
              Math.max(0, Math.floor(self.progress * outdoorItems.length))
            );
            setActiveIndex(idx);
          },
        },
      });
    }, section);

    const t1 = setTimeout(() => ScrollTrigger.refresh(), 100);
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 500);
    const t3 = setTimeout(() => ScrollTrigger.refresh(), 1200);

    return () => {
      ctx.revert();
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isMobile, reducedMotion]);

  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const { scrollLeft, clientWidth } = mobileScrollRef.current;
    const newIdx = Math.round(scrollLeft / (clientWidth * 0.8));
    setActiveIndex(Math.min(newIdx, outdoorItems.length - 1));
  };

  return (
    <section id="outdoor" className="relative bg-black text-white border-t border-white/10">
      {reducedMotion || isMobile ? (
        <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 bg-[#FAFAFC] text-[#0F172A]">
          {/* Mobile Header */}
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
              {outdoorItems.map((item) => {
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
                      <p className="text-xs text-slate-600 mb-4 leading-relaxed">{item.description}</p>
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
                {outdoorItems.map((item) => {
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
                        <p className="text-xs text-slate-600 mb-4 leading-relaxed">{item.description}</p>
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
                {outdoorItems.map((_, i) => (
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
        /* DESKTOP PINNED HORIZONTAL SHOWCASE SECTION (SEAMLESS APPINVENTIV STYLE) */
        <div ref={containerRef} className="relative bg-black text-white">
          <div className="h-screen w-full overflow-hidden flex items-stretch">
            
            {/* Left Info Panel */}
            <div className="w-[38%] lg:w-[34%] shrink-0 h-full flex flex-col justify-between pt-28 pb-16 px-8 lg:px-12 border-r border-white/15 bg-black z-20 relative">
              
              {/* Top Header & Big Arrow */}
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-start justify-between">
                  <span className="text-xs lg:text-sm font-bold uppercase tracking-[0.2em] text-white/80">
                    OUR SERVICES
                  </span>

                  {/* Pink Accent Arrow (matching reference screenshot) */}
                  <svg
                    className="w-12 h-12 lg:w-20 lg:h-20 text-[#E274A8] stroke-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white leading-[0.95] tracking-tight font-display">
                  THE ENGINE
                  <br />
                  <span className="text-[#0080CB]">
                    FOR GROWTH
                  </span>
                </h2>
              </div>

              {/* Bottom Subcopy */}
              <div className="pt-4">
                <p className="text-xs sm:text-sm lg:text-base text-white/80 font-normal leading-relaxed max-w-sm">
                  We run these verticals as one integrated force to ensure your 360° growth is never lost in translation.
                </p>
              </div>
            </div>

            {/* Horizontally translating track (Zero gap, full height) */}
            <div className="flex-1 h-full overflow-hidden flex items-stretch z-10 bg-black">
              <div ref={trackRef} className="flex h-full will-change-transform pr-24 lg:pr-36">
                {outdoorItems.map((item, i) => (
                  <ServiceCard key={item.id} item={item} active={i === activeIndex} />
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
