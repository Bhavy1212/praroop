import Image from "next/image";
import Link from "next/link";
import { CAMPAIGN_POSTS } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Calendar, Tag, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Campaigns | Praaroop Media — Creative Branding & Digital Agency in Udaipur",
  description:
    "Explore our campaign portfolio in Udaipur, Rajasthan. Event branding, outdoor advertising, and marketing showcases.",
};

export default function CampaignsPage() {
  return (
    <div className="space-y-16 pb-20">
      
      {/* Header */}
      <section className="py-16 bg-surface-light border-b border-surface-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-brand-tint text-brand text-xs font-bold uppercase tracking-wider">
            Praaroop Media Portfolio
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ink tracking-tight">
            Campaigns
          </h1>
        </div>
      </section>

      {/* Grid of 8 Real Linked Campaign Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAMPAIGN_POSTS.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.08}>
              <Link
                href={`/${post.slug}/`}
                className="group rounded-3xl bg-white border border-surface-mid hover:border-brand/40 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-full cursor-pointer block"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative h-60 w-full bg-surface-light overflow-hidden border-b border-surface-mid">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full bg-brand text-white shadow-md flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {post.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-medium text-ink-muted">
                      <Calendar className="w-3.5 h-3.5 text-brand" />
                      <span>{post.date}</span>
                    </div>

                    <h2 className="font-display font-bold text-xl text-ink group-hover:text-brand transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-ink-body text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </div>

                {/* Footer Link Indicator */}
                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-surface-light flex items-center justify-between text-xs font-semibold text-brand">
                    <span>Read Campaign Story</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="max-w-4xl mx-auto text-center px-4 pt-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-brand text-white space-y-4 shadow-xl">
          <h2 className="font-display text-3xl font-bold">Have a Campaign in Mind?</h2>
          <p className="text-white/80 text-sm max-w-xl mx-auto">
            Book a campaign strategy session with Praaroop Media in Udaipur.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=918696940199&text=Hello"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand font-bold px-8 py-3.5 rounded-full hover:bg-surface-light transition-all shadow-md"
          >
            <span>Get in touch</span>
          </a>
        </div>
      </section>

    </div>
  );
}
