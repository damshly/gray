import React, { ReactNode } from "react";
import Badge from "./badge";

interface SectionHeaderProps {
  badgeText?: string;
  badgeNode?: ReactNode;
  title: string | ReactNode;
  description?: string | ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "none";
}

export function SectionHeader({
  badgeText,
  badgeNode,
  title,
  description,
  align = "left",
  className = "",
  maxWidth = "3xl",
}: SectionHeaderProps) {
  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const maxWidthStyles = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    none: "max-w-none",
  };

  return (
    <div
      className={`flex flex-col ${alignStyles[align]} ${maxWidthStyles[maxWidth]} ${className}`}
    >
      {badgeText && (
        <div className="mb-4">
          <Badge variant="glass" size="md">
            {badgeText}
          </Badge>
        </div>
      )}
      {badgeNode && <div className="mb-4">{badgeNode}</div>}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed font-medium">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
