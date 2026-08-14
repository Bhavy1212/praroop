import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CAMPAIGN_POSTS, BRAND } from "@/lib/data";
import { Calendar, Tag, ArrowLeft, ArrowRight, Share2, MessageSquare, Sparkles } from "lucide-react";
import Footer from "@/components/layout/Footer";
import AmbientBackground from "@/components/ui/AmbientBackground";

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

  return (
    <main className="relative bg-white text-[#0B1220] min-h-screen pt-24 selection:bg-[#0080CB] selection:text-white">
      <AmbientBackground />

      <div className="space-y-16 pb-0 relative z-10">
        <article className="space-y-16">
          {/* Header & Breadcrumbs */}
          <header className="py-12 bg-slate-50/60 border-b border-slate-100">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
              {/* Breadcrumb */}
              <nav className="text-xs text-slate-500 flex items-center gap-2 font-semibold" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-[#0080CB]">Home</Link>
                <span>/</span>
                <Link href="/campaigns/" className="hover:text-[#0080CB]">{post.category}</Link>
                <span>/</span>
                <span className="text-[#0B1220] font-bold">{post.title}</span>
              </nav>

              {/* Badges */}
              <div className="flex items-center gap-3 pt-2">
                <span className="px-3.5 py-1 rounded-full bg-[#0080CB] text-white text-xs font-bold flex items-center gap-1 shadow-xs">
                  <Tag className="w-3 h-3" /> {post.category}
                </span>
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#0C9DA8]" /> {post.date}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl font-black text-[#0B1220] tracking-tight">
                {post.title}
              </h1>
            </div>
          </header>

          {/* Featured Hero Image */}
          <section className="max-w-5xl mx-auto px-4">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-50">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={800}
                priority
                className="w-full h-auto object-contain max-h-[700px] mx-auto"
              />
            </div>
          </section>

          {/* Description & Details */}
          <section className="max-w-5xl mx-auto px-4 space-y-8">
            <div className="text-lg font-medium text-slate-700 bg-slate-50 p-8 rounded-3xl border border-slate-200/80 leading-relaxed shadow-xs">
              {post.description}
            </div>

            {/* Social Share */}
            <div className="flex items-center justify-between py-4 border-y border-slate-200">
              <span className="text-xs font-bold text-[#0B1220] uppercase tracking-wider flex items-center gap-2">
                <Share2 className="w-4 h-4 text-[#0080CB]" /> Share this campaign:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://praaroop.com/${post.slug}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-[#0B1220] font-semibold text-xs hover:bg-[#0080CB] hover:text-white transition-all"
                >
                  Facebook
                </a>
              </div>
            </div>
          </section>

          {/* Additional Gallery */}
          {additionalGallery.length > 0 && (
            <section className="max-w-5xl mx-auto px-4 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-extrabold text-[#0B1220] flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#0C9DA8]" /> Campaign Creatives
                </h2>
                <span className="text-xs text-slate-500 font-mono">{additionalGallery.length} Additional Creatives</span>
              </div>

              <div className="space-y-8">
                {additionalGallery.map((imgSrc, i) => (
                  <div
                    key={i}
                    className="relative w-full rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 shadow-md"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-200 pt-8">
              <Link
                href={`/${prevPost.slug}/`}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 transition-all flex items-center gap-3 group shadow-xs"
              >
                <ArrowLeft className="w-5 h-5 text-[#0080CB] group-hover:-translate-x-1 transition-transform" />
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Previous Campaign</span>
                  <p className="font-bold text-base text-[#0B1220] group-hover:text-[#0080CB] transition-colors line-clamp-1">
                    {prevPost.title}
                  </p>
                </div>
              </Link>

              <Link
                href={`/${nextPost.slug}/`}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 transition-all flex items-center justify-end gap-3 text-right group shadow-xs"
              >
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Next Campaign</span>
                  <p className="font-bold text-base text-[#0B1220] group-hover:text-[#0080CB] transition-colors line-clamp-1">
                    {nextPost.title}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#0080CB] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </section>
        </article>

        <Footer />
      </div>
    </main>
  );
}
