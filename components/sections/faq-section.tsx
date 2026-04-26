"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

const FAQS = [
  {
    q: "Do you have a physical store?",
    a: "Yes! We're located at 4 Kollington Street, Baba Ijesha Bus Stop, Aboru, Iyana Ipaja, Lagos. You can visit us Monday to Saturday, 9AM to 7PM.",
  },
  {
    q: "Do you deliver?",
    a: "Yes! We deliver across Nigeria. We offer pay-on-delivery within Lagos. We also do waybill for deliveries outside Lagos.",
  },
  {
    q: "How long does delivery take?",
    a: "Same-day delivery within Aboru/Iyana Ipaja. 1-2 business days for other areas in Lagos.",
  },
  {
    q: "Can I return an item?",
    a: "Yes! If you're not satisfied, we offer easy returns. Just reach out via WhatsApp.",
  },
  {
    q: "Do you do wholesale orders?",
    a: "Absolutely! We cater to party planners, schools, and businesses. Contact us for bulk pricing.",
  },
  {
    q: "How can I pay?",
    a: "We accept bank transfer, POS payments on delivery, and cash on delivery within Lagos.",
  },
] as const;

function FAQItem({ faq, index }: { faq: typeof FAQS[number]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-gray-200"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left hover:text-brand-red transition"
      >
        <span className="font-black text-dark uppercase text-sm tracking-wide pr-4">{faq.q}</span>
        <ChevronDown className={`w-5 h-5 transition ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="inline-block py-1 px-4 rounded-full bg-brand-cream text-brand-red text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-dark">
            Frequently Asked Questions
          </h2>
        </FadeIn>

        <div className="bg-brand-cream rounded-3xl p-6 md:p-8">
          {FAQS.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}