"use client";

import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/data";

export default function WhatsAppFAB() {
  return (
    <a
      href={BRAND.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Praaroop Media on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group whatsapp-pulse focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
    >
      <div className="relative">
        <MessageCircle className="w-6 h-6 fill-current" />
      </div>
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-semibold text-sm">
        Quick Consultation
      </span>
    </a>
  );
}
