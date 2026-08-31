import React from "react";
import { servicesData } from "@/config/services";
import { SectionHeader, FloatingDecorations } from "@/components/ui";
import ServiceCard from "./service-card";

export default function Services() {
  return (
    <section
      id="leistungen"
      className="relative w-full text-white pt-24 pb-24 sm:pb-32 lg:pb-36 overflow-hidden z-20 backdrop-blur-xl"
    >
      {/* 🌊 تدرج بداية القسم لانتقال سلس وناعم من القسم السابق */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(64, 109, 114, 0.75) 25%, #406D72 65%, #406D72 100%)",
        }}
      />

      {/* Floating Background Stickers and Radial Grid */}
      <FloatingDecorations />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-12 sm:pt-16">
        {/* Section Header */}
        <SectionHeader
          badgeText="Unsere Leistungen"
          title="Erstklassige Reinigungslösungen für jeden Anspruch"
          description="Von der regelmäßigen Unterhaltsreinigung bis hin zur anspruchsvollen Spezialpflege – wir bieten erstklassige Sauberkeit mit höchster Präzision und Zuverlässigkeit."
          className="mb-20 sm:mb-24"
        />

        {/* Services List - Glassmorphic Layout */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}