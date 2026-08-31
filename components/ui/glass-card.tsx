import React, { ReactNode } from "react";
import ShineEffect from "./shine-effect";
import SparkleIcon from "./sparkle-icon";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  withShine?: boolean;
  withSparkle?: boolean;
  hoverTranslate?: boolean;
  variant?: "frosted" | "translucent" | "subtle";
  rounded?: "2xl" | "3xl" | "full";
  onClick?: () => void;
}

export function GlassCard({
  children,
  className = "",
  withShine = true,
  withSparkle = true,
  hoverTranslate = true,
  variant = "frosted",
  rounded = "3xl",
  onClick,
}: GlassCardProps) {
  const roundedStyles = {
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full",
  };

  const variantStyles = {
    frosted:
      "border border-white/25 bg-white/10 backdrop-blur-md shadow-2xl hover:bg-white/15 hover:border-white/50",
    translucent:
      "border border-white/20 bg-white/5 backdrop-blur-sm shadow-xl hover:bg-white/10 hover:border-white/40",
    subtle:
      "border border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-md hover:bg-white/[0.07]",
  };

  const hoverEffects = hoverTranslate
    ? "transition-all duration-700 hover:-translate-y-1.5"
    : "transition-all duration-700";

  return (
    <div
      onClick={onClick}
      className={`relative group ${roundedStyles[rounded]} ${variantStyles[variant]} ${hoverEffects} overflow-hidden ${className}`}
    >
      {withShine && <ShineEffect />}
      {withSparkle && <SparkleIcon position="top-right" />}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default GlassCard;
