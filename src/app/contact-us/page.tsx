import { Phone, Mail, MapPin, Send } from "lucide-react";
import { BRAND } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = {
  title: "Contact Us | Praaroop Media — Marketing Agency in Udaipur",
  description:
    "Get in touch with Praaroop Media in Udaipur. Contact our team for digital marketing campaigns, outdoor hoardings, and branding solutions.",
};

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-24">
      
      {/* Header */}
      <section className="py-16 bg-surface-light border-b border-surface-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-brand-tint text-brand text-xs font-bold uppercase tracking-wider">
            Contact Praaroop Media
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink tracking-tight">
            Get in touch
          </h2>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Our Office & Follow us */}
          <div className="lg:col-span-6 space-y-8">
            <ScrollReveal className="space-y-6">
              
              <h2 className="font-display text-3xl font-bold text-ink">
                Get in touch
              </h2>

              <div className="p-8 rounded-3xl bg-surface-light border border-surface-mid space-y-6 shadow-sm">
                <h3 className="font-display text-xl font-bold text-ink border-l-4 border-brand pl-3">
                  Our office
                </h3>

                <ul className="space-y-4 text-sm text-ink-body">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-ink block">Address:</span>
                      <span>{BRAND.address}</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-brand shrink-0" />
                    <div>
                      <span className="font-bold text-ink block">Phone:</span>
                      <a href={`tel:${BRAND.phone}`} className="hover:text-brand font-semibold">
                        {BRAND.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-brand shrink-0" />
                    <div>
                      <span className="font-bold text-ink block">Email:</span>
                      <span className="font-mono text-xs text-ink-muted">{BRAND.email}</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Follow Us */}
              <div className="p-8 rounded-3xl bg-white border border-surface-mid space-y-4 shadow-sm">
                <h3 className="font-display text-lg font-bold text-ink uppercase tracking-wider">
                  Follow us
                </h3>
                <div className="flex items-center gap-4">
                  <a
                    href={BRAND.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-surface-light border border-surface-mid flex items-center justify-center text-ink hover:bg-brand hover:text-white transition-all shadow-sm"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={BRAND.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-surface-light border border-surface-mid flex items-center justify-center text-ink hover:bg-brand hover:text-white transition-all shadow-sm"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={BRAND.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-surface-light border border-surface-mid flex items-center justify-center text-ink hover:bg-brand hover:text-white transition-all shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="relative h-64 w-full rounded-3xl overflow-hidden border border-surface-mid shadow-sm">
                <iframe
                  title="Praaroop Media Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.21323381673!2d73.7125!3d24.5854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM1JzA3LjQiTiA3M8KwNDInNDUuMCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                />
              </div>

            </ScrollReveal>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" className="p-8 rounded-3xl bg-white border border-surface-mid shadow-xl space-y-6">
              <div>
                <h3 className="font-display text-2xl font-bold text-ink">
                  Send Us a Message
                </h3>
                <p className="text-ink-body text-sm mt-1">
                  Fill out the form below and our team will get in touch shortly.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-ink mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      className="w-full px-4 py-3 rounded-xl border border-surface-mid bg-surface-light text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-ink mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91-86969 40199"
                      className="w-full px-4 py-3 rounded-xl border border-surface-mid bg-surface-light text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-ink mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="email@domain.com"
                    className="w-full px-4 py-3 rounded-xl border border-surface-mid bg-surface-light text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-ink mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="How can we help your brand?"
                    className="w-full px-4 py-3 rounded-xl border border-surface-mid bg-surface-light text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Get in touch</span>
                </button>
              </form>
            </ScrollReveal>
          </div>

        </div>
      </section>

    </div>
  );
}
