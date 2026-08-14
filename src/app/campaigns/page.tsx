import Image from "next/image";
import Link from "next/link";
import { CAMPAIGN_POSTS, BRAND } from "@/lib/data";
import { Calendar, Tag, ArrowUpRight, Sparkles, MessageSquare } from "lucide-react";
import Footer from "@/components/layout/Footer";
import AmbientBackground from "@/components/ui/AmbientBackground";

export const metadata = {
  title: "Campaigns Portfolio | Praaroop Media — 360° Marketing Agency in Udaipur",
  description:
    "Explore our campaign portfolio in Udaipur, Rajasthan. Event branding, outdoor advertising, and marketing showcases.",
};

export default function CampaignsPage() {
  return (
    <main className="relative bg-white text-[#0B1220] min-h-screen pt-24 selection:bg-[#0080CB] selection:text-white">
      <AmbientBackground />

      <div className="space-y-20 pb-0 relative z-10">
        {/* Header Hero Banner */}
        <section className="py-20 bg-slate-50/60 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#0080CB] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0080CB]" />
              <span>Agency Portfolio</span>
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-[#0B1220] tracking-tight">
              Campaigns <span className="text-gradient-tri">Showcase</span>
            </h1>
          </div>
        </section>

        {/* Grid List of All Campaigns */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAMPAIGN_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/${post.slug}/`}
                className="group flex flex-col justify-between h-[460px] rounded-3xl bg-white border border-slate-200/80 hover:border-slate-300 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(0,128,203,0.15)] hover:-translate-y-1"
              >
                {/* Photo Canvas */}
                <div className="relative h-60 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />

                  {/* Category & Date Badges */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-[#0080CB] text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                      <Tag className="w-2.5 h-2.5" /> {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-700 text-[10px] font-bold border border-slate-200 flex items-center gap-1 shadow-xs">
                      <Calendar className="w-3 h-3 text-[#0C9DA8]" /> {post.date}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h2 className="text-xl font-extrabold text-[#0B1220] group-hover:text-[#0080CB] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-[#0080CB] uppercase tracking-wider">
                      Read Showcase →
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center group-hover:bg-[#0080CB] group-hover:text-white transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4">
          <div className="p-10 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0080CB] via-[#0C9DA8] to-[#D10B6A] text-white text-center space-y-6 shadow-2xl">
            <h2 className="text-3xl font-extrabold text-white">Have a Campaign in Mind?</h2>
            <p className="text-white/90 text-base max-w-xl mx-auto">
              Book a campaign strategy session with Praaroop Media in Udaipur.
            </p>
            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0B1220] font-extrabold px-8 py-3.5 rounded-full hover:bg-slate-100 transition-all shadow-xl"
            >
              <MessageSquare className="w-5 h-5 text-[#0080CB]" />
              <span>Get in touch on WhatsApp</span>
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
