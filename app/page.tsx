import { Navbar } from "@/components/layout/navbar";
import { PromoBanner } from "@/components/ui/promo-banner";
import { HeroSection } from "@/components/sections/hero-section";
import { CatalogSection } from "@/components/sections/catalog-section";
import { AboutSection } from "@/components/sections/about-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { MapSection } from "@/components/sections/map-section";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";

export default function HomePage() {
  return (
    <>
      <PromoBanner />
      <Navbar />
      <main className="min-h-screen bg-brand-cream selection:bg-brand-red/10 selection:text-brand-red">
        <HeroSection />
        <CatalogSection />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <MapSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}