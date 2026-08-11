import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CAMPAIGN_POSTS } from "@/lib/data";
import { Calendar, Tag, ArrowLeft, ArrowRight, Share2, MessageSquare, Send, Sparkles } from "lucide-react";

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

  // Related Posts (3 items excluding current)
  const relatedPosts = CAMPAIGN_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="pb-24 space-y-12">
      
      {/* Header & Breadcrumbs */}
      <header className="py-12 bg-surface-light border-b border-surface-mid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {/* Breadcrumb */}
          <nav className="text-xs text-ink-muted flex items-center gap-2 font-medium" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand">Home</Link>
            <span>/</span>
            <Link href="/campaigns/" className="hover:text-brand">{post.category}</Link>
            <span>/</span>
            <span className="text-ink font-semibold">{post.title}</span>
          </nav>

          {/* Category Badge & Date */}
          <div className="flex items-center gap-3 pt-2">
            <span className="px-3.5 py-1 rounded-full bg-brand text-white text-xs font-bold flex items-center gap-1 shadow-sm">
              <Tag className="w-3 h-3" /> {post.category}
            </span>
            <span className="text-xs font-medium text-ink-muted flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-brand" /> {post.date}
            </span>
          </div>

          {/* H1 Title */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
            {post.title}
          </h1>

        </div>
      </header>

      {/* Hero Featured Main High-Res Image */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-surface-mid bg-black/5">
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

      {/* Description & Social Share */}
      <section className="max-w-5xl mx-auto px-4 space-y-8">
        <div className="prose prose-lg text-ink-body leading-relaxed space-y-4 max-w-none">
          <p className="text-xl font-medium text-ink bg-surface-light p-6 rounded-2xl border border-surface-mid">
            {post.description}
          </p>
        </div>

        {/* Social Share Buttons (Facebook, X) */}
        <div className="flex items-center justify-between py-4 border-y border-surface-mid">
          <span className="text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-2">
            <Share2 className="w-4 h-4 text-brand" /> Share this campaign:
          </span>
          <div className="flex items-center gap-3">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://praaroop.com/${post.slug}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-surface-light border border-surface-mid text-ink font-semibold text-xs hover:bg-brand hover:text-white transition-all"
            >
              Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://praaroop.com/${post.slug}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-surface-light border border-surface-mid text-ink font-semibold text-xs hover:bg-brand hover:text-white transition-all"
            >
              X (Twitter)
            </a>
          </div>
        </div>
      </section>

      {/* Full High-Resolution Campaign Showcase Gallery */}
      <section className="max-w-5xl mx-auto px-4 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold text-ink flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-brand" /> Campaign Showcase & Creatives
          </h2>
          <span className="text-xs text-ink-muted font-mono">{post.gallery.length} High-Res Assets</span>
        </div>

        <div className="space-y-8">
          {post.gallery.map((imgSrc, i) => (
            <div
              key={i}
              className="group relative w-full rounded-3xl overflow-hidden border border-surface-mid bg-surface-light shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={imgSrc}
                alt={`${post.title} campaign asset ${i + 1}`}
                width={1400}
                height={900}
                className="w-full h-auto object-contain max-h-[850px] mx-auto group-hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Continue Reading Prev/Next Navigation */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-surface-mid">
          <Link
            href={`/${prevPost.slug}/`}
            className="p-5 rounded-2xl bg-surface-light border border-surface-mid hover:border-brand/40 transition-all flex items-center gap-3 group"
          >
            <ArrowLeft className="w-5 h-5 text-brand group-hover:-translate-x-1 transition-transform" />
            <div>
              <span className="text-[11px] font-bold text-ink-muted uppercase">Previous Campaign</span>
              <p className="font-display font-bold text-base text-ink group-hover:text-brand transition-colors line-clamp-1">
                {prevPost.title}
              </p>
            </div>
          </Link>

          <Link
            href={`/${nextPost.slug}/`}
            className="p-5 rounded-2xl bg-surface-light border border-surface-mid hover:border-brand/40 transition-all flex items-center justify-end gap-3 text-right group"
          >
            <div>
              <span className="text-[11px] font-bold text-ink-muted uppercase">Next Campaign</span>
              <p className="font-display font-bold text-base text-ink group-hover:text-brand transition-colors line-clamp-1">
                {nextPost.title}
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-brand group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Related Posts (3 other campaign cards) */}
      <section className="max-w-5xl mx-auto px-4 space-y-6 pt-6">
        <h2 className="font-display text-2xl font-bold text-ink">Related Campaigns</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedPosts.map((rPost) => (
            <Link
              key={rPost.slug}
              href={`/${rPost.slug}/`}
              className="group rounded-2xl bg-white border border-surface-mid hover:border-brand/40 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
            >
              <div className="relative h-48 w-full bg-surface-light">
                <Image
                  src={rPost.image}
                  alt={rPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4 space-y-1">
                <span className="text-[11px] font-bold text-brand">{rPost.date}</span>
                <h3 className="font-display font-bold text-sm text-ink group-hover:text-brand transition-colors line-clamp-2">
                  {rPost.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Comment Form */}
      <section className="max-w-5xl mx-auto px-4 pt-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-surface-light border border-surface-mid space-y-6 shadow-sm">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-6 h-6 text-brand" />
            <h2 className="font-display text-2xl font-bold text-ink">Leave a Comment</h2>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-ink mb-1">Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-2.5 rounded-xl border border-surface-mid bg-white text-sm focus:ring-2 focus:ring-brand focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-ink mb-1">Email *</label>
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-2.5 rounded-xl border border-surface-mid bg-white text-sm focus:ring-2 focus:ring-brand focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-ink mb-1">Website</label>
                <input
                  type="url"
                  placeholder="https://yourwebsite.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-surface-mid bg-white text-sm focus:ring-2 focus:ring-brand focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-ink mb-1">Comment *</label>
              <textarea
                rows={4}
                required
                placeholder="Share your thoughts on this campaign..."
                className="w-full px-4 py-2.5 rounded-xl border border-surface-mid bg-white text-sm focus:ring-2 focus:ring-brand focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold text-sm px-7 py-3 rounded-full transition-all shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Post Comment</span>
            </button>
          </form>
        </div>
      </section>

    </article>
  );
}
