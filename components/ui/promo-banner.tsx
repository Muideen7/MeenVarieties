"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/constants";

const PROMOS = [
  { text: "Student Backpacks Now Available!", emoji: "🎒" },
  { text: "Party Packs at Great Prices!", emoji: "🎉" },
  { text: "Free Delivery Within Lagos!", emoji: "🚚" },
  { text: "Best Quality Wrapping Papers!", emoji: "🎁" },
  { text: "Kids Toys - New Stock In!", emoji: "🧸" },
  { text: "School Supplies Available!", emoji: "✏️" },
];

export function PromoBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % PROMOS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-dark text-white py-2 overflow-hidden fixed top-0 left-0 right-0 z-[60]">
      <motion.div
        key={current}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-black uppercase tracking-[0.2em] hover:text-brand-yellow transition inline-flex items-center gap-2"
        >
          <span>{PROMOS[current]!.emoji}</span>
          <span>{PROMOS[current]!.text}</span>
        </a>
      </motion.div>
    </div>
  );
}