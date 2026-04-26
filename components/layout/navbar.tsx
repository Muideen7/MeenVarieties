"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK, BUSINESS_NAME } from "@/lib/constants";

const NAV_LINKS = [
  { href: "#catalog", label: "Categories" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 transition-all duration-300 bg-brand-cream/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-display font-black text-2xl tracking-tighter text-dark flex-shrink-0">
          {BUSINESS_NAME}
        </Link>

        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-black uppercase tracking-wide text-dark/70 hover:text-brand-red transition whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block flex-shrink-0">
          <Button asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <ShoppingBag className="w-4 h-4" />
              Order Now
            </a>
          </Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-brand-cream overflow-hidden fixed top-20 left-0 right-0 bottom-0"
          >
            <div className="px-6 py-8 flex flex-col items-center justify-center h-full space-y-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block py-4 text-2xl font-black uppercase tracking-wide text-dark text-center"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full max-w-xs justify-center">
                  <ShoppingBag className="w-4 h-4" />
                  Order Now
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}