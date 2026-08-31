import React, { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "glass" | "glass-dark" | "outline" | "solid";
  size?: "sm" | "md" | "lg";
  pulseDot?: boolean;
  pulseDotColor?: string;
  className?: string;
}

export function Badge({
  children,
  variant = "glass",
  size = "sm",
  pulseDot = false,
  pulseDotColor = "bg-white",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    glass: "border border-white/30 bg-white/10 backdrop-blur-md text-white shadow-sm",
    "glass-dark": "border border-charcoal/30 bg-charcoal/5 backdrop-blur-md text-charcoal shadow-sm",
    outline: "border border-white/20 text-white/90",
    solid: "bg-white text-brand-teal font-extrabold shadow",
  };

  const sizeStyles = {
    sm: "px-3.5 py-1 text-xs tracking-wider",
    md: "px-4 py-1.5 text-xs sm:text-sm tracking-widest",
    lg: "px-5 py-2 text-sm tracking-widest",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full font-bold uppercase ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {pulseDot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${pulseDotColor} animate-pulse shrink-0`}
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
}

export default Badge;
