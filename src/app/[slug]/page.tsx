import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CAMPAIGN_POSTS } from "@/lib/data";
import { Calendar, Tag, ArrowLeft, ArrowRight, ArrowUpRight, Share2, Sparkles, Layers, Eye } from "lucide-react";
import Footer from "@/components/layout/Footer";

export function generateStaticParams() {
  return CAMPAIGN_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = CAMPAIGN_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Campaign Not Found" };

  return {
    title: `${post.title} | Praaroop Media Campaigns`,
    description: post.description,
  };
}

export default async function CampaignDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postIndex = CAMPAIGN_POSTS.findIndex((p) => p.slug === slug);
  if (postIndex === -1) {
    notFound();
  }

  const post = CAMPAIGN_POSTS[postIndex];

  // Prev / Next Navigation
  const prevPost =
    postIndex > 0 ? CAMPAIGN_POSTS[postIndex - 1] : CAMPAIGN_POSTS[CAMPAIGN_POSTS.length - 1];
  const nextPost =
    postIndex < CAMPAIGN_POSTS.length - 1 ? CAMPAIGN_POSTS[postIndex + 1] : CAMPAIGN_POSTS[0];

  // Additional gallery images excluding main hero image
  const additionalGallery = post.gallery.filter((imgSrc) => imgSrc !== post.image);

  // Related campaigns (pick 3 other campaigns)
  const relatedCampaigns = CAMPAIGN_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="relative bg-[#07090E] text-white min-h-screen pt-24 selection:bg-[#0080CB] selection:text-white">
      <div className="space-y-16 pb-0 relative z-10">
        <article className="space-y-16">
          {/* Header & Breadcrumbs */}
          <header className="py-12 bg-white/[0.04] backdrop-blur-xl border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
              {/* Breadcrumb */}
              <nav className="text-xs text-slate-400 flex items-center gap-2 font-semibold" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-[#38BDF8] transition-colors">Home</Link>
                <span>/</span>
                <Link href="/campaigns/" className="hover:text-[#38BDF8] transition-colors">Campaigns</Link>
                <span>/</span>
                <span className="text-white font-bold">{post.title}</span>
              </nav>

              {/* Badges */}
              <div className="flex items-center gap-3 pt-2">
                <span className="px-3.5 py-1 rounded-full bg-[#0080CB] text-white text-xs font-bold flex items-center gap-1 shadow-md">
                  <Tag className="w-3 h-3" /> {post.category}
                </span>
                <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#0C9DA8]" /> {post.date}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
                {post.title}
              </h1>
            </div>
          </header>

          {/* Featured Hero Slide Image */}
          <section className="max-w-5xl mx-auto px-4">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-[#0B132B]">
              <Image
                src={post.image}
                alt={post.title}
                width={1400}
                height={900}
                priority
                className="w-full h-auto object-contain max-h-[720px] mx-auto"
              />
            </div>
          </section>

          {/* Description & Social Share */}
          <section className="max-w-5xl mx-auto px-4 space-y-8">
            <div className="text-base sm:text-lg font-light text-slate-200 bg-white/[0.05] p-6 sm:p-8 rounded-3xl border border-white/15 leading-relaxed shadow-xl backdrop-blur-2xl">
              {post.description}
            </div>

            {/* Social Share Bar */}
            <div className="flex items-center justify-between py-4 border-y border-white/10">
              <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Share2 className="w-4 h-4 text-[#0080CB]" /> Share this campaign:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://praaroop.com/${post.slug}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white font-semibold text-xs hover:bg-[#0080CB] transition-all"
                >
                  Facebook
                </a>
              </div>
            </div>
          </section>

          {/* Additional Gallery / Campaign Creatives */}
          {additionalGallery.length > 0 && (
            <section className="max-w-5xl mx-auto px-4 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#0C9DA8]" /> Campaign Creatives
                </h2>
                <span className="text-xs text-white/50 font-mono">{additionalGallery.length} Additional Creatives</span>
              </div>

              <div className="space-y-8">
                {additionalGallery.map((imgSrc, i) => (
                  <div
                    key={i}
                    className="relative w-full rounded-3xl overflow-hidden border border-white/20 bg-[#0B132B] shadow-2xl"
                  >
                    <Image
                      src={imgSrc}
                      alt={`${post.title} creative asset ${i + 2}`}
                      width={1400}
                      height={900}
                      className="w-full h-auto object-contain max-h-[850px] mx-auto"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Prev/Next Switcher */}
          <section className="max-w-5xl mx-auto px-4 pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-8">
              <Link
                href={`/${prevPost.slug}/`}
                className="p-5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.10] border border-white/15 hover:border-white/30 transition-all flex items-center gap-3 group shadow-xl backdrop-blur-2xl"
              >
                <ArrowLeft className="w-5 h-5 text-[#0080CB] group-hover:-translate-x-1 transition-transform" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-white/40">Previous Campaign</span>
                  <p className="font-bold text-base text-white group-hover:text-[#38BDF8] transition-colors line-clamp-1">
                    {prevPost.title}
                  </p>
                </div>
              </Link>

              <Link
                href={`/${nextPost.slug}/`}
                className="p-5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.10] border border-white/15 hover:border-white/30 transition-all flex items-center justify-end gap-3 text-right group shadow-xl backdrop-blur-2xl"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase text-white/40">Next Campaign</span>
                  <p className="font-bold text-base text-white group-hover:text-[#38BDF8] transition-colors line-clamp-1">
                    {nextPost.title}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#0080CB] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </section>

          {/* ── Related Campaigns Showcase Section ── */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-white/10 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#0C9DA8]">
                  <Layers className="w-4 h-4" />
                  <span>Related Case Studies</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  Explore Related <span className="text-[#0080CB]">Campaigns</span>
                </h2>
              </div>
              <Link
                href="/campaigns/"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38BDF8] hover:text-white transition-colors"
              >
                <span>View All Campaigns</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 3 Related Campaign Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCampaigns.map((rc) => (
                <Link
                  key={rc.slug}
                  href={`/${rc.slug}/`}
                  className="group flex flex-col justify-between h-[440px] rounded-3xl bg-white/[0.05] hover:bg-white/[0.10] border border-white/15 hover:border-white/30 transition-all duration-300 overflow-hidden shadow-2xl hover:shadow-[0_15px_30px_rgba(0,128,203,0.3)] hover:-translate-y-1.5 backdrop-blur-2xl"
                >
                  {/* Photo Canvas */}
                  <div className="relative h-52 w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={rc.image}
                      alt={rc.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060B16] via-transparent to-black/30 pointer-events-none" />

                    {/* Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#0080CB] text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                        <Tag className="w-2.5 h-2.5" /> {rc.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <div className="text-[9px] font-mono text-white/40 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#0C9DA8]" /> {rc.date}
                      </div>
                      <h3 className="text-lg font-extrabold text-white group-hover:text-[#38BDF8] transition-colors line-clamp-2 leading-snug">
                        {rc.title}
                      </h3>
                      <p className="text-xs text-slate-300 line-clamp-2 font-normal leading-relaxed">
                        {rc.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <span className="text-[10px] font-bold text-[#38BDF8] uppercase tracking-wider flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" /> View Campaign
                      </span>
                      <div className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:bg-[#0080CB] transition-colors">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </article>

        <Footer />
      </div>
    </main>
  );
}
