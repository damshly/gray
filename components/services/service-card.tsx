import React from "react";
import Image from "next/image";
import { ServiceItem } from "@/types";
import { ServiceFeatures } from "./service-features";
import { ServiceActionLink } from "./service-action-link";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const isImageRight = service.imagePosition === "right";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      {/* Transparent Glass Box */}
      <div
        className={`relative group rounded-3xl p-8 sm:p-10 lg:p-12 border border-white/25 bg-white/10 backdrop-blur-md transition-all duration-700 overflow-hidden shadow-2xl hover:bg-white/15 hover:border-white/50 hover:-translate-y-1 ${isImageRight ? "lg:col-span-6 lg:order-1" : "lg:col-span-6 lg:order-2"
          }`}
      >
        <div className="relative z-10 flex flex-col gap-6">
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

          {/* استدعاء مكون المميزات المفصول */}
          <ServiceFeatures features={service.features} />

          {/* استدعاء مكون الزر المفصول */}
          <ServiceActionLink />
        </div>
      </div>

      {/* Image Container */}
      <div
        className={`relative group rounded-3xl overflow-hidden border border-white/30 shadow-xl transition-all duration-700 aspect-[4/3] lg:aspect-[5/4] ${isImageRight ? "lg:col-span-6 lg:order-2" : "lg:col-span-6 lg:order-1"
          }`}
      >
        <Image
          src={service.imageSrc}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#406D72]/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
      </div>
    </div>
  );
}