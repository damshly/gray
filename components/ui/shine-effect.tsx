import React from "react";

interface ShineEffectProps {
  className?: string;
  intensity?: "subtle" | "normal" | "strong";
}

export function ShineEffect({
  className = "",
  intensity = "normal",
}: ShineEffectProps) {
  const intensityMap = {
    subtle: "via-white/20",
    normal: "via-white/40",
    strong: "via-white/60",
  };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -inset-y-32 -left-[100%] w-[120%] bg-gradient-to-r from-transparent ${intensityMap[intensity]} to-transparent transform -skew-x-25 transition-transform duration-1000 ease-out group-hover:translate-x-[260%] ${className}`}
    />
  );
}

export default ShineEffect;
