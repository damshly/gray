import React from "react";
import { reasonsData, statsData } from "@/config/why-us";
import { SectionHeader, FloatingDecorations } from "@/components/ui";
import ReasonCard from "./reason-card";
import StatsBanner from "./stats-banner";

export default function WhyUs() {
  return (
    <section
      id="ueber-mk"
      className="relative w-full text-white pt-24 pb-24 sm:pb-32 lg:pb-36 overflow-hidden z-20 backdrop-blur-xl"
    >
      {/* 🌊 لون الخلفية المتناسق مع باقي الأقسام */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 bg-[#406D72]"
      />

      {/* Floating Background Stickers and Radial Grid */}
      <FloatingDecorations />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-12 sm:pt-16">
        {/* Section Header */}
        <SectionHeader
          badgeText="Warum MK Reinigung"
          title="Ihr verlässlicher Partner für glänzende Ergebnisse"
          description="Mit Leidenschaft, modernem Equipment und geschultem Blick für Details sorgen wir dafür, dass Ihre Räumlichkeiten stets einen perfekten und gepflegten Eindruck hinterlassen."
          className="mb-16 sm:mb-20"
        />

        {/* 4 Cards Grid - Glass Frosted Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {reasonsData.map((reason) => (
            <ReasonCard key={reason.id} reason={reason} />
          ))}
        </div>

        {/* Highlight Stats Banner */}
        <StatsBanner stats={statsData} />
      </div>
    </section>
  );
}