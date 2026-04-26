"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative pt-40 pb-16 px-6">
      <div className="max-w-7xl mx-auto bg-brand-pale-blue rounded-[48px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-80 h-80 bg-brand-yellow rounded-full opacity-20" />
        <div className="absolute right-20 bottom-10 text-[120px] drop-shadow-xl hidden lg:block opacity-20 lg:opacity-100">
          <span role="img" aria-label="gift">🎁</span>
        </div>
        <div className="absolute right-60 top-10 text-[60px] opacity-40 hidden lg:block">
          <span role="img" aria-label="party">🎉</span>
        </div>

        <div className="flex-1 text-center lg:text-left z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-white/50 text-brand-blue text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <span className="mr-2">✨</span>
              Your One-Stop Variety Shop
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-black text-dark mb-6 leading-[0.95]">
              Everything for <br />
              <span className="text-brand-red">Your Home.</span>
              <span className="ml-2" role="img" aria-label="home">🏡</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
              From luxury wrapping papers and home essentials to everything your kids love. We bring quality to your daily life.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button asChild>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg px-10 py-5"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 relative z-10 hidden lg:block"
        >
          <motion.div
            className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-white rotate-2"
            whileHover={{ rotate: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/images/hero.jpg"
              alt="Colorful children's products"
              width={600}
              height={450}
              priority
              className="w-full h-auto aspect-[4/3] object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}