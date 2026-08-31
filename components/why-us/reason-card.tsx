import React from "react";
import { ReasonItem } from "@/types";
import { GlassCard } from "@/components/ui";

interface ReasonCardProps {
  reason: ReasonItem;
}

export function ReasonCard({ reason }: ReasonCardProps) {
  const IconComponent = reason.icon;

  return (
    <GlassCard className="p-8 sm:p-10">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 group-hover:bg-white group-hover:text-brand-teal text-white transition-colors duration-500">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-xs font-extrabold uppercase tracking-wider text-white/80">
            {reason.tag}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          {reason.title}
        </h3>

        <p className="text-white/85 text-sm sm:text-base leading-relaxed font-medium">
          {reason.description}
        </p>
      </div>
    </GlassCard>
  );
}

export default ReasonCard;
