import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/config/services";
import { siteConfig } from "@/config/site";
import { Badge, GlassCard, SectionHeader, Button } from "@/components/ui";
import { FloatingDecorations } from "@/components/ui/floating-decorations";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: `Unsere Leistungen | ${siteConfig.name}`,
  description:
    "Erstklassige Reinigungslösungen in Rottweil: Unterhaltsreinigung, Glas- & Fensterreinigung, Bau- und Grundreinigung. Professionell, zuverlässig, maßgeschneidert.",
  openGraph: {
    title: `Unsere Leistungen | ${siteConfig.name}`,
    description:
      "Alle Reinigungsleistungen von MK Reinigung Rottweil im Überblick.",
    url: "/leistungen",
    siteName: siteConfig.name,
  },
};

export default function LeistungenPage() {
  return (
    <main className="relative w-full min-h-screen bg-brand-teal text-white">
      <FloatingDecorations />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-36 pb-24">
        {/* Section Header */}
        <SectionHeader
          badgeText="Unsere Leistungen"
          title="Erstklassige Reinigung für jeden Anspruch"
          description="Von der täglichen Unterhaltsreinigung bis zur anspruchsvollen Bau- oder Sonderreinigung – wir bieten maßgeschneiderte Lösungen für Privat und Gewerbe in Rottweil und Umgebung."
          className="max-w-3xl mb-20"
        />

        {/* Services Grid */}
        <div className="space-y-6">
          {servicesData.map((service) => (
            <GlassCard
              key={service.id}
              withSparkle
              withShine
              className="p-8 sm:p-10"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Left: Service info */}
                <div className="flex-1 flex flex-col gap-5">
                  <div className="flex items-center justify-between border-b border-white/20 pb-4">
                    <Badge variant="glass" size="sm">
                      {service.category}
                    </Badge>
                    <span className="font-mono text-2xl font-black text-white/30">
                      {service.number}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-white/85 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  <Button
                    href={`/leistungen/${service.slug}`}
                    variant="glass"
                    size="md"
                    withArrow
                    className="self-start"
                  >
                    Details ansehen
                  </Button>
                </div>

                {/* Right: Sub-services list */}
                <div className="lg:w-72 xl:w-80 shrink-0 flex flex-col gap-2">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-white/70 mb-1">
                    Teilleistungen
                  </p>
                  {service.subServices.map((sub) => (
                    <Link
                      key={sub.id}
                      href={`/leistungen/${service.slug}/${sub.slug}`}
                      className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-white/50 group-hover:text-white mt-0.5 shrink-0 transition-colors" />
                      <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors leading-snug">
                          {sub.title}
                        </span>
                        <span className="text-xs text-white/60 group-hover:text-white/80 transition-colors">
                          {sub.shortDesc}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16">
          <GlassCard withSparkle withShine className="p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Ihr Anliegen ist nicht dabei?
            </h3>
            <p className="text-white/85 mb-6 max-w-xl mx-auto">
              Wir bieten individuelle Lösungen für besondere Anforderungen. Kontaktieren Sie uns für ein persönliches und unverbindliches Beratungsgespräch.
            </p>
            <Button href="/#kontakt" variant="solid" size="lg" withArrow>
              Kostenlos anfragen
            </Button>
          </GlassCard>
        </div>
      </div>
    </main>
  );
}
