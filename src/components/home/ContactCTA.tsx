"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock } from "lucide-react";
import { BRAND } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Contact Info & Map */}
          <div className="lg:col-span-6 space-y-8">
            <ScrollReveal className="space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-brand-tint text-brand text-xs font-bold uppercase tracking-wider">
                Let's Talk Growth
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
                Ready to Launch Your Next Unmissable Campaign?
              </h2>
              <p className="text-ink-body text-base leading-relaxed">
                Connect with our strategists in Udaipur to discuss digital ad funnels, prime outdoor media slots, or complete brand identity overhauls.
              </p>
            </ScrollReveal>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface-light border border-surface-mid">
                <div className="w-10 h-10 rounded-xl bg-brand text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-ink">Head Office</h3>
                  <p className="text-ink-body text-xs sm:text-sm mt-0.5">{BRAND.address}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-surface-light border border-surface-mid">
                  <div className="w-10 h-10 rounded-xl bg-brand text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xs text-ink-muted">Phone</h3>
                    <a href={`tel:${BRAND.phone}`} className="text-ink font-semibold text-sm hover:text-brand">
                      {BRAND.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-surface-light border border-surface-mid">
                  <div className="w-10 h-10 rounded-xl bg-brand text-white flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xs text-ink-muted">Hours</h3>
                    <p className="text-ink font-semibold text-xs">{BRAND.openingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map iframe */}
            <div className="relative h-56 w-full rounded-2xl overflow-hidden border border-surface-mid shadow-sm">
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
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" className="p-8 rounded-3xl bg-surface-light border border-surface-mid shadow-xl space-y-6">
              <div>
                <h3 className="font-display text-2xl font-bold text-ink">
                  Send Us a Message
                </h3>
                <p className="text-ink-body text-sm mt-1">
                  Fill out the form below and our lead media strategist will reach out within 2 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-green-50 border border-green-200 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
                  <h4 className="font-display font-bold text-lg text-green-900">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-green-700 text-sm">
                    Thank you for reaching out. We will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-ink mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sunil Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-surface-mid bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-ink mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-surface-mid bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="sunil@brand.com"
                      className="w-full px-4 py-3 rounded-xl border border-surface-mid bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink mb-1.5">
                      Service Interested In
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-surface-mid bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand text-ink">
                      <option>Full 360° Marketing & Branding</option>
                      <option>Outdoor & Hoarding Advertising</option>
                      <option>Digital & Social Media Campaigns</option>
                      <option>Website & UI/UX Development</option>
                      <option>Airport Advertising</option>
                      <option>Activations & Stalls</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink mb-1.5">
                      Project Details / Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your brand goals, target locations, or budget..."
                      className="w-full px-4 py-3 rounded-xl border border-surface-mid bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-brand"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
