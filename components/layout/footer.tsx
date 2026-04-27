"use client";

import { MapPin, Phone, Instagram, Facebook, Clock } from "lucide-react";
import { TikTokIcon } from "@/components/ui/social-icons";
import { FULL_ADDRESS, PHONE, BUSINESS_NAME } from "@/lib/constants";

const SOCIAL_LINKS = [
  { icon: Instagram, label: "Instagram", username: "@meensvarieties", href: "https://instagram.com/meensvarieties" },
  { icon: Facebook, label: "Facebook", username: "@meensvarieties", href: "https://facebook.com/meensvarieties" },
  { icon: TikTokIcon, label: "TikTok", username: "party and school items in Aboru", href: "https://tiktok.com/@meensvarieties" },
] as const;

export function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="font-black uppercase text-sm tracking-wide mb-4 text-brand-red">{BUSINESS_NAME}</h4>
            <p className="text-gray-400 text-sm mb-4">
              Your one-stop shop for quality wrapping papers, party essentials, school supplies, and kids' toys.
            </p>
            <p className="text-xs text-gray-500 flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              {FULL_ADDRESS}
            </p>
          </div>

          <div>
            <h4 className="font-black uppercase text-sm tracking-wide mb-4 text-brand-red">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#catalog" className="hover:text-white transition">Categories</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#testimonials" className="hover:text-white transition">Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase text-sm tracking-wide mb-4 text-brand-red">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +{PHONE.slice(0, 3)} {PHONE.slice(3)}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Mon-Sat: 9AM-5PM
              </p>
            </div>
            <div className="flex gap-3 mt-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            © 2026 {BUSINESS_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}