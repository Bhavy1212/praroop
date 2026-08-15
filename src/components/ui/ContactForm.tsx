"use client";

import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#CBD5E1] mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            required
            placeholder="Name"
            className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-[#141414] text-white text-sm focus:outline-none focus:border-[#0080CB]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#CBD5E1] mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            placeholder="+91-86969 40199"
            className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-[#141414] text-white text-sm focus:outline-none focus:border-[#0080CB]"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#CBD5E1] mb-1.5">
          Email Address
        </label>
        <input
          type="email"
          placeholder="email@domain.com"
          className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-[#141414] text-white text-sm focus:outline-none focus:border-[#0080CB]"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-[#CBD5E1] mb-1.5">
          Message
        </label>
        <textarea
          rows={4}
          placeholder="How can we help your brand?"
          className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-[#141414] text-white text-sm focus:outline-none focus:border-[#0080CB]"
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-[#0C9DA8] hover:bg-[#0080CB] text-white font-extrabold py-4 px-6 rounded-xl transition-all shadow-xl"
      >
        <Send className="w-4 h-4" />
        <span>Get in touch</span>
      </button>
    </form>
  );
}
