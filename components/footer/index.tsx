import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { mainNavLinks, footerServiceLinks, legalLinks } from "@/config/navigation";
import { Badge, Button, GlassCard } from "@/components/ui";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#406D72] text-white pt-12 pb-16 overflow-hidden z-20">
      {/* 🌊 Subtle Top Divider & Glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      
      {/* 🌟 Background Grid & Subtle Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex flex-col gap-12">
        {/* 🌟 1. Pre-Footer High-Impact CTA Box */}
        <div id="kontakt" className="scroll-mt-24">
          <GlassCard
            className="p-8 sm:p-12 lg:p-14 border border-white/30 shadow-2xl bg-white/10"
            withSparkle
            withShine
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-2xl flex flex-col gap-4">
                <Badge variant="glass" size="md" className="gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
                  <span>Jetzt unverbindlich anfragen</span>
                </Badge>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Bereit für makellose Sauberkeit?
                </h3>
                <p className="text-white/90 text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
                  Lassen Sie sich noch heute ein faires und maßgeschneidertes Angebot für Ihre Räumlichkeiten in Rottweil und Umgebung erstellen.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
                <Button
                  href={`tel:${siteConfig.contact.phone}`}
                  variant="glass"
                  size="lg"
                  icon={<Phone className="w-4 h-4 text-white" />}
                >
                  {siteConfig.contact.phoneDisplay}
                </Button>
                <Button
                  href={`mailto:${siteConfig.contact.email}`}
                  variant="solid"
                  size="lg"
                  withArrow
                >
                  Angebot anfordern
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* 🌟 2. Main Footer Navigation & Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pt-4 pb-10 border-b border-white/20">
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Link href="/" className="inline-block group">
              <div className="inline-flex items-center gap-2 p-2.5 px-4 rounded-2xl bg-white/10 border border-white/25 backdrop-blur-md shadow-md transition-all duration-300 group-hover:scale-102 group-hover:bg-white/15">
                <Image
                  src="/logo.png"
                  alt={siteConfig.name}
                  width={155}
                  height={45}
                  className="h-9 w-auto object-contain brightness-0 invert"
                />
              </div>
            </Link>

            <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-sm font-medium">
              Ihr zuverlässiger Fachpartner für streifenfreie Reinheit, Büro-, Glas- und Sonderreinigung in Rottweil und der gesamten Region.
            </p>

            <div className="flex items-center gap-3">
              <Badge variant="glass" size="sm" pulseDot pulseDotColor="bg-emerald-300">
                <span className="text-white/95 font-semibold">Einsatzbereit in Rottweil & Region</span>
              </Badge>
            </div>
          </div>

          {/* Navigation Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white border-b border-white/20 pb-2">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-white/85 font-semibold">
              {mainNavLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 hover:text-white transition-all duration-300 hover:translate-x-1.5 group"
                  >
                    <span className="text-white/40 group-hover:text-white transition-colors">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white border-b border-white/20 pb-2">
              Leistungen
            </h4>
            <ul className="space-y-3 text-sm text-white/85 font-semibold">
              {footerServiceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 hover:text-white transition-all duration-300 hover:translate-x-1.5 group"
                  >
                    <span className="text-white/40 group-hover:text-white transition-colors">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Card (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white border-b border-white/20 pb-2">
              Kontakt
            </h4>
            
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="group flex items-center gap-3 p-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white hover:text-brand-teal text-white transition-all duration-300 shadow-sm cursor-pointer"
              >
                <div className="p-2 rounded-lg bg-white/15 group-hover:bg-brand-teal group-hover:text-white text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider text-white/70 group-hover:text-brand-teal/80 font-bold">
                    Telefon
                  </span>
                  <span className="text-xs sm:text-sm font-bold">
                    {siteConfig.contact.phoneDisplay}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="group flex items-center gap-3 p-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white hover:text-brand-teal text-white transition-all duration-300 shadow-sm cursor-pointer"
              >
                <div className="p-2 rounded-lg bg-white/15 group-hover:bg-brand-teal group-hover:text-white text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider text-white/70 group-hover:text-brand-teal/80 font-bold">
                    E-Mail
                  </span>
                  <span className="text-xs sm:text-sm font-bold truncate">
                    {siteConfig.contact.email}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-white/80 text-xs font-medium">
                <MapPin className="w-4 h-4 text-white/60 shrink-0" />
                <span>{siteConfig.contact.city} & {siteConfig.contact.region}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 🌟 3. Bottom Bar: Copyright & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/75 font-medium">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Alle Rechte vorbehalten.
          </p>

          <div className="flex items-center gap-6">
            {legalLinks.map((link, idx) => (
              <React.Fragment key={link.name}>
                {idx > 0 && <span className="text-white/30">•</span>}
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  {link.name}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
