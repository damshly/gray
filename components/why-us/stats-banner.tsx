import React from "react";
import { StatItem } from "@/types";
import { GlassCard } from "@/components/ui";

interface StatsBannerProps {
  stats: StatItem[];
  className?: string;
}

export function StatsBanner({ stats, className = "" }: StatsBannerProps) {
  return (
    <div className={`mt-16 sm:mt-20 ${className}`}>
      <GlassCard
        withSparkle={false}
        hoverTranslate={false}
        className="p-8 sm:p-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20 text-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`pt-4 md:pt-0 ${idx > 0 ? "md:pl-8" : ""}`}
            >
              <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {stat.value}
              </div>
              <div className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}

export default StatsBanner;
