import React from "react";
import { Badge, Button } from "@/components/ui";
import { siteConfig } from "@/config/site";

interface HeroProps {
  backgroundImage?: string;
}

export function Hero({ backgroundImage = "/hero.jpg" }: HeroProps) {
  return (
    <>
      {/* 🖼️ Fixed Hero Background with Smooth Gradient Fade */}
      <div
        className="fixed inset-0 h-screen w-full z-0 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          maskImage:
            "linear-gradient(to bottom, black 40%, rgba(0,0,0,0.6) 70%, transparent 95%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 40%, rgba(0,0,0,0.6) 70%, transparent 95%)",
        }}
      />

      {/* Hero Section */}
      <section
        id="start"
        className="relative w-full h-screen min-h-dvh flex items-center z-10"
      >
        {/* Dark Overlay for Hero only to maintain text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30 z-0" />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-2xl text-left flex flex-col items-start gap-6">
            <Badge variant="glass" size="md" className="gap-2.5">
              <span className="font-extrabold text-white">{siteConfig.brandShort}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="font-bold text-white/90">Reinigung Rottweil</span>
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] drop-shadow-sm">
              <span className="text-white border-b-4 border-white/40 pb-1">
                {siteConfig.tagline}
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/90 font-medium leading-relaxed drop-shadow-sm">
              Professionelle Reinigungslösungen für Gewerbe- und Privatkunden in Rottweil und Umgebung. Mit{" "}
              <strong className="font-black text-white underline decoration-white/50 underline-offset-4">
                {siteConfig.brandShort}
              </strong>{" "}
              garantieren wir makellose Reinheit, Zuverlässigkeit und maßgeschneiderten Service auf höchstem Niveau.
            </p>

            <div className="pt-2">
              <Button href="#kontakt" variant="glass" size="lg" withArrow>
                Kostenloses Angebot anfordern
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
