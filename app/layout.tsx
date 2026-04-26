import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ScrollAnimationProvider } from "@/components/animations/scroll-provider";
import { SmoothScroll } from "@/components/animations/smooth-scroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meensvarieties.com"),
  title: "MeensVarieties",
  description:
    "Everything for your home from luxury wrapping papers and party essentials to kids' toys and home essentials. Delivery available nationwide.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "MeensVarieties",
    description:
      "Everything for your home - party essentials, wrapping papers, kids' toys, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-brand-cream text-dark`}
      >
        <ScrollAnimationProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ScrollAnimationProvider>
      </body>
    </html>
  );
}