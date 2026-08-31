import React, { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "glass" | "glass-scrolled" | "outline" | "solid" | "link-arrow";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  icon?: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = "glass",
  size = "md",
  withArrow = false,
  icon,
  className = "",
  type = "button",
  target,
  rel,
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center font-bold transition-all duration-300 cursor-pointer";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs sm:text-sm rounded-lg gap-2",
    md: "px-5 py-2.5 text-sm sm:text-base rounded-xl gap-2.5",
    lg: "px-7 py-3.5 text-sm sm:text-base rounded-xl gap-3",
  };

  const variantStyles = {
    glass:
      "backdrop-blur-md bg-white/15 border border-white/40 text-white hover:bg-white hover:text-brand-teal shadow-lg hover:shadow-2xl",
    "glass-scrolled":
      "backdrop-blur-md bg-charcoal/5 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white shadow-sm hover:shadow-md",
    outline:
      "border border-white/40 text-white hover:bg-white/10 hover:border-white",
    solid:
      "bg-white text-brand-teal hover:bg-white/90 shadow-lg hover:shadow-xl",
    "link-arrow":
      "p-0 bg-transparent text-white hover:text-white/80 uppercase text-xs sm:text-sm tracking-wider font-bold gap-2",
  };

  const combinedClasses = `${baseStyles} ${
    variant === "link-arrow" ? variantStyles[variant] : `${sizeStyles[size]} ${variantStyles[variant]}`
  } ${className}`;

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      {variant === "link-arrow" ? (
        <span className="border-b border-white group-hover:border-white/60 pb-0.5">
          {children}
        </span>
      ) : (
        <span>{children}</span>
      )}
      {withArrow && (
        <span className="transition-transform duration-300 group-hover:translate-x-1 shrink-0">
          →
        </span>
      )}
    </>
  );

  if (href) {
    if (href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a href={href} onClick={onClick} className={combinedClasses} target={target} rel={rel}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} className={combinedClasses} target={target} rel={rel}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  );
}

export default Button;
