"use client";

import { MapPin, Phone, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { FULL_ADDRESS, PHONE, WHATSAPP_LINK } from "@/lib/constants";

export function MapSection() {
  return (
    <section id="contact" className="py-24 bg-dark text-white px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-12">
          <span className="inline-block py-1 px-4 rounded-full bg-white/10 text-brand-red text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            Contact
          </span>
          <h2 className="font-display text-4xl font-black">Visit or Message Us</h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          <FadeIn>
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-green/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-sm tracking-wide mb-1">Our Store</h4>
                    <p className="text-gray-400">{FULL_ADDRESS}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-sm tracking-wide mb-1">Phone</h4>
                    <p className="text-gray-400">+{PHONE.slice(0, 3)} {PHONE.slice(3)}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-yellow" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-sm tracking-wide mb-1">Business Hours</h4>
                    <p className="text-gray-400">Mon - Sat: 9AM - 5PM</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-black uppercase text-sm tracking-wide mb-4 text-brand-red">Quick Message</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-4 bg-white/10 rounded-xl border border-white/20 focus:border-brand-red focus:outline-none text-white placeholder:text-gray-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-4 bg-white/10 rounded-xl border border-white/20 focus:border-brand-red focus:outline-none text-white placeholder:text-gray-500"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-4 bg-white/10 rounded-xl border border-white/20 focus:border-brand-red focus:outline-none text-white placeholder:text-gray-500 resize-none"
                  />
                  <Button asChild>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full justify-center"
                    >
                      <Send className="w-4 h-4" />
                      Send via WhatsApp
                    </a>
                  </Button>
                </form>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="h-full min-h-[400px] lg:min-h-[600px] rounded-3xl overflow-hidden bg-brand-cream">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer"
                title="MeensVarieties Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.1399320110386!2d3.277008774048006!3d6.629536393364813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b912deb4907d5%3A0xb65b1a36bb3f1bd7!2sMeens%20Varieties%20Store!5e0!3m2!1sen!2sus!4v1777211318124!5m2!1sen!2sus"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}