import React from "react";

interface SparkleIconProps {
  className?: string;
  size?: number | string;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "inline";
}

export function SparkleIcon({
  className = "",
  size = 24,
  position = "top-right",
}: SparkleIconProps) {
  const positionClasses = {
    "top-right": "pointer-events-none absolute top-4 right-4 text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125 group-hover:text-white",
    "top-left": "pointer-events-none absolute top-4 left-4 text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125 group-hover:text-white",
    "bottom-right": "pointer-events-none absolute bottom-4 right-4 text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125 group-hover:text-white",
    "bottom-left": "pointer-events-none absolute bottom-4 left-4 text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125 group-hover:text-white",
    "inline": "inline-block",
  };

  return (
    <div className={`${positionClasses[position]} ${className}`} aria-hidden="true">
      <svg
        width={size}
        height={size}
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>
    </div>
  );
}

export default SparkleIcon;
