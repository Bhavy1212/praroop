import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CAMPAIGN_POSTS } from "@/lib/data";
import { Calendar, Tag, ArrowLeft, ArrowRight, Layers, Sparkles } from "lucide-react";
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
    <main className="relative bg-[#F6F6F4] text-[#0F172A] min-h-screen pt-20 sm:pt-24 selection:bg-[#0080CB] selection:text-white">
      <div className="space-y-12 sm:space-y-16 pb-0 relative z-10">
        <article className="space-y-10 sm:space-y-16">
          {/* Header & Breadcrumbs */}
          <header className="py-8 sm:py-12 bg-white border-b border-slate-200 shadow-2xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
              {/* Breadcrumb */}
              <nav className="text-xs text-slate-500 flex items-center gap-2 font-semibold" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-[#0080CB] transition-colors">Home</Link>
                <span>/</span>
                <Link href="/campaigns/" className="hover:text-[#0080CB] transition-colors">Campaigns</Link>
                <span>/</span>
                <span className="text-[#0F172A] font-bold truncate max-w-xs sm:max-w-md">{post.title}</span>
              </nav>

              {/* Badges */}
              <div className="flex items-center gap-3 pt-1">
                <span className="px-3.5 py-1 rounded-full bg-[#0080CB] text-white text-xs font-bold flex items-center gap-1 shadow-xs">
                  <Tag className="w-3 h-3" /> {post.category}
                </span>
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#0C9DA8]" /> {post.date}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#0F172A] tracking-tight font-display">
                {post.title}
              </h1>
            </div>
          </header>

          {/* ── Massive Hero Campaign Image (Direct, No Frame Borders) ── */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl bg-black/5">
              <Image
                src={post.image}
                alt={post.title}
                width={1800}
                height={1200}
                priority
                className="w-full h-auto object-cover rounded-3xl sm:rounded-[2.5rem]"
              />
            </div>
          </section>

          {/* Description & Campaign Info */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="text-base sm:text-lg lg:text-xl font-normal text-[#334155] bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 leading-relaxed shadow-sm">
              {post.description}
            </div>

            {/* Campaign Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-center space-y-1">
                <span className="text-xs text-slate-500 font-mono">Location</span>
                <p className="font-bold text-[#0F172A] text-sm sm:text-base">Udaipur, Rajasthan</p>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-center space-y-1">
                <span className="text-xs text-slate-500 font-mono">Format</span>
                <p className="font-bold text-[#0080CB] text-sm sm:text-base">{post.category}</p>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-center space-y-1">
                <span className="text-xs text-slate-500 font-mono">Agency</span>
                <p className="font-bold text-[#0F172A] text-sm sm:text-base">Praaroop Media</p>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-center space-y-1">
                <span className="text-xs text-slate-500 font-mono">Status</span>
                <p className="font-bold text-[#0C9DA8] text-sm sm:text-base">Successfully Executed ✓</p>
              </div>
            </div>
          </section>

          {/* ── BIG & PROMINENT Photo Gallery Section (Full-Width High-Res Visuals) ── */}
          {additionalGallery.length > 0 && (
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <Layers className="w-7 h-7 text-[#0080CB]" />
                <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] font-display tracking-tight">
                  High-Resolution Campaign Gallery
                </h2>
              </div>

              {/* Massive, Big High-Impact Image Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                {additionalGallery.map((imgSrc, i) => (
                  <div
                    key={i}
                    className="relative w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer transition-transform duration-500 hover:scale-[1.015]"
                  >
                    <Image
                      src={imgSrc}
                      alt={`${post.title} gallery photo ${i + 1}`}
                      width={1800}
                      height={1200}
                      className="w-full h-auto object-cover rounded-3xl sm:rounded-[2.5rem] group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── Prev / Next Campaign Navigator ── */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-8 border-t border-b border-slate-200">
              <Link
                href={`/${prevPost.slug}/`}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#0080CB] transition-all flex items-center gap-4 group shadow-2xs"
              >
                <div className="w-12 h-12 rounded-full bg-slate-100 group-hover:bg-[#0080CB] text-[#0F172A] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                  <ArrowLeft className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-slate-500 font-mono uppercase tracking-wider block">Previous Campaign</span>
                  <p className="font-bold text-[#0F172A] group-hover:text-[#0080CB] transition-colors truncate text-sm sm:text-base">
                    {prevPost.title}
                  </p>
                </div>
              </Link>

              <Link
                href={`/${nextPost.slug}/`}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#0080CB] transition-all flex items-center justify-between group shadow-2xs text-right"
              >
                <div className="min-w-0 text-left sm:text-right">
                  <span className="text-xs text-slate-500 font-mono uppercase tracking-wider block">Next Campaign</span>
                  <p className="font-bold text-[#0F172A] group-hover:text-[#0080CB] transition-colors truncate text-sm sm:text-base">
                    {nextPost.title}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-slate-100 group-hover:bg-[#0080CB] text-[#0F172A] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </Link>
            </div>
          </section>

          {/* ── Related Campaigns Showcase ── */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] font-display">
              More Featured Campaigns
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {relatedCampaigns.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}/`}
                  className="group rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-[#0080CB] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-[#0080CB] text-white text-xs font-bold uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="font-bold text-[#0F172A] group-hover:text-[#0080CB] transition-colors text-lg line-clamp-1 font-display">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </article>

        {/* Global Footer */}
        <Footer />
      </div>
    </main>
  );
}
