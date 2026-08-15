import Image from "next/image";
import { CheckCircle2, Eye, Target, Sparkles, MessageSquare } from "lucide-react";
import { ABOUT_US_PAGE, STATS, BRAND } from "@/lib/data";
import Footer from "@/components/layout/Footer";
import AmbientBackground from "@/components/ui/AmbientBackground";

export const metadata = {
  title: "About Us | Praaroop Media — 360° Marketing Agency in Udaipur",
  description:
    "Learn about Praaroop Media, Udaipur's premier 360° marketing and branding agency. Discover our vision, mission, and agency philosophy.",
};

export default function AboutPage() {
  return (
    <main className="relative bg-white text-[#0B1220] min-h-screen pt-24 selection:bg-[#0080CB] selection:text-white">
      <AmbientBackground />

      <div className="space-y-24 pb-0 relative z-10">
        {/* Hero Header */}
        <section className="py-20 bg-slate-50/60 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#0C9DA8] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0C9DA8]" />
              <span>Praaroop Media Agency</span>
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-[#0B1220] tracking-tight">
              {ABOUT_US_PAGE.h1}
            </h1>
          </div>
        </section>

        {/* Main Body Paragraphs + Office Photo */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xl sm:text-2xl font-bold text-[#0B1220] leading-relaxed">
                {ABOUT_US_PAGE.body1}
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                {ABOUT_US_PAGE.body2}
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                {ABOUT_US_PAGE.body3}
              </p>
            </div>

            <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
              <Image
                src={ABOUT_US_PAGE.image}
                alt="Praaroop Media Team & Office in Udaipur"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Vision & Mission Cards */}
        <section className="py-20 border-y border-slate-100 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 space-y-4 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#0080CB]/10 text-[#0080CB] flex items-center justify-center font-bold border border-[#0080CB]/20">
                <Eye className="w-6 h-6 text-[#0080CB]" />
              </div>
              <h2 className="text-2xl font-extrabold text-[#0B1220]">
                {ABOUT_US_PAGE.visionH2}
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                {ABOUT_US_PAGE.visionBody}
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 space-y-4 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#0C9DA8]/10 text-[#0C9DA8] flex items-center justify-center font-bold border border-[#0C9DA8]/20">
                <Target className="w-6 h-6 text-[#0C9DA8]" />
              </div>
              <h2 className="text-2xl font-extrabold text-[#0B1220]">
                {ABOUT_US_PAGE.missionH2}
              </h2>
              <p className="text-slate-700 text-sm font-semibold">
                {ABOUT_US_PAGE.missionIntro}
              </p>
              <ul className="space-y-3 text-slate-600 text-sm pt-2">
                {ABOUT_US_PAGE.missionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0C9DA8] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="max-w-4xl mx-auto text-center px-4">
          <div className="p-10 sm:p-14 rounded-3xl bg-[#0C9DA8] text-white space-y-6 shadow-2xl">
            <p className="text-2xl sm:text-3xl font-extrabold text-white">
              {ABOUT_US_PAGE.closing}
            </p>
            <div>
              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white text-[#0B1220] font-extrabold px-8 py-4 rounded-full hover:bg-slate-100 transition-all shadow-xl"
              >
                <MessageSquare className="w-5 h-5 text-[#0080CB]" />
                <span>Get in touch on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
