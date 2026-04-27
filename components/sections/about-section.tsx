"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { ADDRESS, PHONE } from "@/lib/constants";

const ABOUT_IMAGES = [
  { src: "/images/about-1.jpg", alt: "Kids playing with letter cubes" },
  { src: "/images/about-2.jpg", alt: "Building blocks" },
  { src: "/images/about-3.jpg", alt: "Educational toys" },
] as const;

export function AboutSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + ABOUT_IMAGES.length) % ABOUT_IMAGES.length);
  const next = () => setCurrent((c) => (c + 1) % ABOUT_IMAGES.length);

  return (
    <section id="about" className="py-20 px-6 bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-white text-brand-blue text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-dark mb-6">
              Bringing Joy to Every Home
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Your one-stop destination for quality products that make everyday life better. From luxury wrapping papers and home essentials to everything your kids love. We bring quality to your daily life with our carefully curated selection of products.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-red" />
                <span className="text-gray-600">{ADDRESS}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-red" />
                <span className="text-gray-600">{PHONE}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-brand-red" />
                <span className="text-gray-600">Open Daily: 9AM - 5PM</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={ABOUT_IMAGES[current]!.src}
                  alt={ABOUT_IMAGES[current]!.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {ABOUT_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition ${
                    index === current ? "bg-white w-6" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}