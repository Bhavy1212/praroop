"use client";

import React, { useState, useEffect } from "react";
import { Mail } from "lucide-react";

interface ObfuscatedEmailProps {
  className?: string;
  showIcon?: boolean;
}

export default function ObfuscatedEmail({
  className = "",
  showIcon = false,
}: ObfuscatedEmailProps) {
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    // Obfuscated email reconstruction to prevent raw HTML scraping
    const user = "contact";
    const domain = "praaroop.com";
    setEmail(`${user}@${domain}`);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (email) {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      aria-label="Email Praaroop Media"
      className={`inline-flex items-center gap-2 hover:text-brand transition-colors ${className}`}
    >
      {showIcon && <Mail className="w-4 h-4 text-brand shrink-0" />}
      <span>{email || "contact[at]praaroop[dot]com"}</span>
    </a>
  );
}
