import Image from "next/image";
import { CheckCircle2, Eye, Target } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { ABOUT_US_PAGE, STATS, BRAND } from "@/lib/data";

export const metadata = {
  title: "About Us | Praaroop Media — Marketing Agency in Udaipur",
  description:
    "Learn about Praaroop Media, Udaipur's premier 360° marketing and branding agency. Our vision, mission, and team.",
};

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-20">
      
      {/* Hero Header */}
      <section className="py-16 bg-surface-light border-b border-surface-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-brand-tint text-brand text-xs font-bold uppercase tracking-wider">
            Praaroop Media
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ink tracking-tight">
            {ABOUT_US_PAGE.h1}
          </h1>
        </div>
      </section>

      {/* Main Body Paragraphs + Office Photo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal className="space-y-4">
              <p className="text-ink text-lg sm:text-xl font-medium leading-relaxed">
                {ABOUT_US_PAGE.body1}
              </p>
              <p className="text-ink-body text-base leading-relaxed">
                {ABOUT_US_PAGE.body2}
              </p>
              <p className="text-ink-body text-base leading-relaxed">
                {ABOUT_US_PAGE.body3}
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="left" className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border border-brand/20">
              <Image
                src={ABOUT_US_PAGE.image}
                alt="Praaroop Media Team & Office in Udaipur"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="bg-surface-light py-20 border-y border-surface-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision */}
          <ScrollReveal className="p-8 rounded-3xl bg-white border border-surface-mid space-y-4 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-brand-tint text-brand flex items-center justify-center font-bold">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="font-display text-2xl font-bold text-ink">
              {ABOUT_US_PAGE.visionH2}
            </h2>
            <p className="text-ink-body text-base leading-relaxed">
              {ABOUT_US_PAGE.visionBody}
            </p>
          </ScrollReveal>

          {/* Mission */}
          <ScrollReveal delay={0.1} className="p-8 rounded-3xl bg-white border border-surface-mid space-y-4 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-brand-tint text-brand flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="font-display text-2xl font-bold text-ink">
              {ABOUT_US_PAGE.missionH2}
            </h2>
            <p className="text-ink-body text-sm font-medium">
              {ABOUT_US_PAGE.missionIntro}
            </p>
            <ul className="space-y-2.5 text-ink-body text-sm pt-2">
              {ABOUT_US_PAGE.missionPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

        </div>
      </section>

      {/* Closing Line */}
      <section className="max-w-4xl mx-auto text-center px-4">
        <ScrollReveal className="p-8 rounded-3xl bg-brand text-white space-y-4 shadow-xl">
          <p className="font-display text-xl sm:text-2xl font-bold">
            {ABOUT_US_PAGE.closing}
          </p>
          <div className="pt-2">
            <a
              href="https://api.whatsapp.com/send?phone=918696940199&text=Hello"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand font-bold px-8 py-3 rounded-full hover:bg-surface-light transition-all shadow-md"
            >
              <span>Get in touch</span>
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Animated Stat Counters (count up from 0 on scroll) */}
      <section className="py-16 bg-brand text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divider-y md:divider-y-0 md:divider-x divider-white/10">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.15} className="py-4 space-y-2">
                <div className="font-display text-5xl sm:text-6xl font-bold text-white flex items-center justify-center">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2.5} />
                </div>
                <p className="text-white/85 text-base font-medium tracking-wide uppercase">
                  {stat.label}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
