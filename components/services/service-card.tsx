import React from "react";
import Image from "next/image";
import { ServiceItem } from "@/types";
import { GlassCard, Button } from "@/components/ui";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const isImageRight = service.imagePosition === "right";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      {/* Transparent Glass Box with Shine Effect */}
      <GlassCard
        className={`p-8 sm:p-10 lg:p-12 ${
          isImageRight
            ? "lg:col-span-6 lg:order-1"
            : "lg:col-span-6 lg:order-2"
        }`}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-white/20 pb-4">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white/90">
              {service.category}
            </span>
            <span className="font-mono text-xl sm:text-2xl font-black text-white/50 group-hover:text-white transition-colors duration-300">
              {service.number}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {service.title}
          </h3>

          <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal">
            {service.description}
          </p>

          <ul className="space-y-2.5 pt-2">
            {service.features.map((feature, fIndex) => (
              <li
                key={fIndex}
                className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-white/95"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/20 border border-white/40 text-white text-[10px]">
                  ✓
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <Button href="#kontakt" variant="link-arrow" withArrow>
              Unverbindlich anfragen
            </Button>
          </div>
        </div>
      </GlassCard>

      {/* Image Container */}
      <div
        className={`relative group rounded-3xl overflow-hidden border border-white/30 shadow-xl transition-all duration-700 aspect-[4/3] lg:aspect-[5/4] ${
          isImageRight
            ? "lg:col-span-6 lg:order-2"
            : "lg:col-span-6 lg:order-1"
        }`}
      >
        <Image
          src={service.imageSrc}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
      </div>
    </div>
  );
}

export default ServiceCard;
