import Link from "next/link";
import Image from "next/image";
import { BRAND } from "@/lib/data";
import ObfuscatedEmail from "@/components/ui/ObfuscatedEmail";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white text-ink pt-16 pb-8 border-t border-surface-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-surface-mid">
          
          {/* Column 1: Logo, Tagline & Follow us on */}
          <div className="space-y-4">
            <div className="relative h-12 w-48">
              <Image
                src="/praaroop-Media-and-Adv-1.png"
                alt="Praaroop Media"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-ink-body text-sm leading-relaxed">
              {BRAND.tagline}
            </p>
            <div className="space-y-2 pt-2">
              <p className="text-xs font-bold text-brand uppercase tracking-wider">
                Follow us on
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={BRAND.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-surface-light border border-surface-mid flex items-center justify-center text-ink hover:bg-brand hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={BRAND.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-surface-light border border-surface-mid flex items-center justify-center text-ink hover:bg-brand hover:text-white transition-all"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={BRAND.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-surface-light border border-surface-mid flex items-center justify-center text-ink hover:bg-brand hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Useful links */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-base text-ink uppercase tracking-wider">
              Useful links
            </h3>
            <ul className="space-y-2 text-sm text-ink-body font-medium">
              <li>
                <Link href="/" className="hover:text-brand transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us/" className="hover:text-brand transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-brand transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/campaigns/" className="hover:text-brand transition-colors">
                  Campaigns
                </Link>
              </li>
              <li>
                <Link href="/contact-us/" className="hover:text-brand transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company information */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-base text-ink uppercase tracking-wider">
              Company information
            </h3>
            <ul className="space-y-3 text-sm text-ink-body font-medium">
              <li>
                📞 <a href={`tel:${BRAND.phone}`} className="hover:text-brand">{BRAND.phone}</a>
              </li>
              <li>
                📍 {BRAND.address}
              </li>
              <li className="flex items-center gap-1.5">
                ✉️ <ObfuscatedEmail className="font-mono text-xs text-ink-body" />
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-xs text-ink-muted font-medium">
          <p>{BRAND.copyright}</p>
        </div>

      </div>
    </footer>
  );
}
