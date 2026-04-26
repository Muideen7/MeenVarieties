"use client";

import { motion } from "framer-motion";
import {
  PartyPopper,
  Gift,
  Sparkles,
  Backpack,
  Gamepad2,
  Star,
  UtensilsCrossed,
  LayoutGrid,
} from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

const CATEGORIES = [
  { name: "Party Essentials", icon: PartyPopper, color: "bg-pink-100 text-pink-600" },
  { name: "Wrapping Papers", icon: Gift, color: "bg-blue-100 text-blue-600" },
  { name: "Foil & Kitchen", icon: Sparkles, color: "bg-teal-100 text-teal-600" },
  { name: "School Gear", icon: Backpack, color: "bg-orange-100 text-orange-600" },
  { name: "Educational Toys", icon: Gamepad2, color: "bg-purple-100 text-purple-600" },
  { name: "Flasks & Bottles", icon: Star, color: "bg-yellow-100 text-yellow-600" },
  { name: "Dining Sets", icon: UtensilsCrossed, color: "bg-red-100 text-red-600" },
  { name: "Wall Stickers", icon: LayoutGrid, color: "bg-indigo-100 text-indigo-600" },
] as const;

export function CatalogSection() {
  return (
    <section id="catalog" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="inline-block py-1 px-4 rounded-full bg-brand-cream text-brand-red text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            What We Sell
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-dark">
            Shop by Category
          </h2>
          <p className="text-gray-500 mt-4 max-w-md mx-auto">
            From party essentials to school supplies — find everything in one place.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, index) => (
            <motion.a
              key={cat.name}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group block p-6 bg-white rounded-3xl border-2 border-transparent hover:border-brand-red shadow-sm hover:shadow-xl transition-all cursor-pointer"
            >
              <div className={`w-16 h-16 ${cat.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                <cat.icon className="w-8 h-8" />
              </div>
              <h3 className="font-display font-black text-sm text-dark uppercase">
                {cat.name}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}