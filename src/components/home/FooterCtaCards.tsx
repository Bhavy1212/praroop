import Link from "next/link";
import { ArrowUpRight, MessageSquare, Layers, MapPin } from "lucide-react";
import { FOOTER_CTA_CARDS } from "@/lib/data";

const CTA_ICONS = [MessageSquare, Layers, MapPin];
const CTA_COLORS = ["#0080CB", "#0C9DA8", "#D10B6A"];

export default function FooterCtaCards() {
  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-slate-50/80 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FOOTER_CTA_CARDS.map((card, idx) => {
            const IconComp = CTA_ICONS[idx % CTA_ICONS.length];
            const color = CTA_COLORS[idx % CTA_COLORS.length];

            return (
              <Link
                key={card.title}
                href={card.link}
                className="group relative rounded-2xl bg-white border border-slate-200/80 p-6 flex items-center justify-between transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center border border-slate-100 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${color}12` }}
                  >
                    <IconComp className="w-6 h-6" style={{ color }} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B1220] group-hover:text-[#0080CB] transition-colors">
                      {card.title}
                    </h3>
                    <span className="text-xs font-semibold text-[#0C9DA8]">Explore Now →</span>
                  </div>
                </div>

                <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#0080CB] group-hover:bg-[#0080CB]/10 transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
