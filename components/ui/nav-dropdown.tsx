"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { NavSubGroup } from "@/types";
import { ShineEffect } from "@/components/ui/shine-effect";

interface NavDropdownProps {
  groups: NavSubGroup[];
  isOpen: boolean;
  onClose: () => void;
}

export function NavDropdown({ groups, isOpen, onClose }: NavDropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[min(92vw,820px)] z-50
                 animate-in fade-in slide-in-from-top-2 duration-200"
    >
      {/* Panel */}
      <div className="relative group overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl">
        <ShineEffect intensity="subtle" />

        {/* Top accent line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />

        {/* Header */}
        <div className="px-6 pt-5 pb-3 border-b border-white/15">
          <p className="text-[11px] font-extrabold uppercase tracking-widest text-white/70">
            Unsere Leistungen
          </p>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 p-2">
          {groups.map((group) => (
            <div key={group.title} className="flex flex-col gap-0.5 p-3">
              {/* Group heading (links to parent service) */}
              <Link
                href={group.items[0]?.href ?? "#"}
                onClick={onClose}
                className="group/head flex items-center justify-between px-3 py-2.5 rounded-xl
                           text-sm font-extrabold text-white tracking-tight
                           hover:bg-white/10 transition-all duration-200 mb-1"
              >
                <span>{group.title}</span>
                <ArrowRight className="w-3.5 h-3.5 text-white/50 group-hover/head:text-white group-hover/head:translate-x-0.5 transition-all duration-200" />
              </Link>

              {/* Sub-items (skip the first "Alle:" item) */}
              {group.items.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="group/item flex items-start gap-3 px-3 py-2 rounded-xl
                             hover:bg-white/10 transition-all duration-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-white/40 group-hover/item:text-white mt-0.5 shrink-0 transition-colors duration-200" />
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-sm font-semibold text-white/95 group-hover/item:text-white leading-snug truncate">
                      {item.name}
                    </span>
                    {item.description && (
                      <span className="text-xs text-white/60 group-hover/item:text-white/80 leading-relaxed line-clamp-1">
                        {item.description}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="border-t border-white/15 px-5 py-3 flex items-center justify-between">
          <span className="text-xs text-white/60 font-medium">
            Professionelle Reinigung in Rottweil & Umgebung
          </span>
          <Link
            href="/leistungen"
            onClick={onClose}
            className="group/all inline-flex items-center gap-1.5 text-xs font-bold text-white/80
                       hover:text-white transition-colors duration-200"
          >
            <span>Alle Leistungen</span>
            <ArrowRight className="w-3 h-3 group-hover/all:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavDropdown;
