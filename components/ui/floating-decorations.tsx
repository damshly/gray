import React from "react";
import {
  Sparkles,
  Droplets,
  SprayCan,
  ShieldCheck,
  Brush,
  Sparkle,
  Sun,
  Waves,
  CheckCircle2,
} from "lucide-react";

interface FloatingDecorationsProps {
  showRadialGrid?: boolean;
  gridOpacity?: string;
  className?: string;
}

export function FloatingDecorations({
  showRadialGrid = true,
  gridOpacity = "opacity-15",
  className = "",
}: FloatingDecorationsProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden z-0 ${className}`}
    >
      {/* 1. High Density Floating Clean Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Sparkles className="absolute top-8 left-10 w-16 h-16 text-white/30 rotate-12 transition-transform duration-700 hover:rotate-45" />
        <SprayCan className="absolute top-16 right-16 w-20 h-20 text-white/25 -rotate-45" />
        <Droplets className="absolute top-28 left-1/4 w-12 h-12 text-[#667373] opacity-40 rotate-180" />
        <Sparkle className="absolute top-12 right-1/3 w-10 h-10 text-white/40 animate-pulse" />
        <ShieldCheck className="absolute top-1/3 left-8 w-24 h-24 text-white/20 rotate-6" />
        <Brush className="absolute top-1/3 right-10 w-16 h-16 text-[#667373] opacity-50 -rotate-12" />
        <Sun className="absolute top-2/5 left-1/3 w-14 h-14 text-white/25" />
        <Waves className="absolute top-1/2 right-1/4 w-20 h-20 text-white/20 -rotate-12" />
        <Sparkles className="absolute top-2/3 left-12 w-20 h-20 text-white/35 rotate-45" />
        <CheckCircle2 className="absolute top-2/3 right-12 w-16 h-16 text-white/20 rotate-12" />
        <Droplets className="absolute bottom-24 left-1/4 w-16 h-16 text-white/30 rotate-45" />
        <SprayCan className="absolute bottom-16 right-1/3 w-18 h-18 text-[#667373] opacity-45 rotate-12" />
        <Sparkles className="absolute bottom-12 right-8 w-28 h-28 text-white/25 -rotate-12" />
      </div>

      {/* 2. Radial Grid Pattern Overlay */}
      {showRadialGrid && (
        <div
          className={`absolute inset-0 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:28px_28px] ${gridOpacity} pointer-events-none`}
        />
      )}
    </div>
  );
}

export default FloatingDecorations;
