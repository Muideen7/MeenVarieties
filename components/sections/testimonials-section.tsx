"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

const TESTIMONIALS = [
  { name: "Sarah M.", text: "Great quality wrapping paper! My kids loved the party setup. Will definitely order again!", rating: 5 },
  { name: "Chidi O.", text: "Fast delivery and excellent customer service. Highly recommended!", rating: 5 },
  { name: "Amaka T.", text: "Best variety shop in Aboru. Always my go-to for party supplies.", rating: 5 },
  { name: "David K.", text: "Amazing quality school supplies. My daughter was excited for her first day back to school.", rating: 5 },
  { name: "Funke A.", text: "Perfect party essentials! Made my daughter's birthday unforgettable.", rating: 5 },
  { name: "Mike E.", text: "Great prices and nice collection of kitchen foils. Will shop again.", rating: 5 },
] as const;

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((curr) => (curr - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((curr) => (curr + 1) % TESTIMONIALS.length);
  };

  return (
    <section className="py-24 px-6 bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="inline-block py-1 px-4 rounded-full bg-white text-brand-red text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-dark">
            What Parents Say
          </h2>
        </FadeIn>

        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="p-10 bg-white rounded-3xl shadow-xl"
            >
              <div className="flex gap-1 mb-6">
                {TESTIMONIALS[current] && Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-yellow fill-brand-yellow" />
                ))}
              </div>
              <p className="text-gray-600 text-xl leading-relaxed mb-6">"{TESTIMONIALS[current]?.text}"</p>
              <p className="font-black text-dark uppercase text-lg">{TESTIMONIALS[current]?.name}</p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-14 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-red hover:text-white transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-14 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-red hover:text-white transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrent(index);
                }}
                className={`w-2 h-2 rounded-full transition ${
                  index === current ? "bg-brand-red w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}