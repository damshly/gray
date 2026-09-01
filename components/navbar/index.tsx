"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { mainNavLinks } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { NavDropdown } from "@/components/ui/nav-dropdown";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeDropdown = useCallback(() => setOpenDropdown(null), []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-white/80 border-b border-charcoal/10 py-3.5 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={160}
            height={50}
            className={`h-9 sm:h-11 w-auto object-contain transition-all duration-300 group-hover:scale-[1.02] ${
              !isScrolled ? "drop-shadow-md" : ""
            }`}
            priority
          />
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {mainNavLinks.map((link) => {
            const hasDropdown = !!link.dropdown?.length;
            const isOpen = openDropdown === link.name;

            return (
              <div key={link.name} className="relative">
                {hasDropdown ? (
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className={`inline-flex items-center gap-1.5 font-semibold text-sm lg:text-base tracking-wide transition-colors relative py-1 cursor-pointer ${
                      isScrolled
                        ? "text-charcoal/90 hover:text-charcoal"
                        : "text-white/95 hover:text-white drop-shadow-sm"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`font-semibold text-sm lg:text-base tracking-wide transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] hover:after:w-full after:transition-all after:duration-300 ${
                      isScrolled
                        ? "text-charcoal/90 hover:text-charcoal after:bg-charcoal"
                        : "text-white/95 hover:text-white after:bg-white drop-shadow-sm"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown Panel */}
                {hasDropdown && link.dropdown && (
                  <NavDropdown
                    groups={link.dropdown}
                    isOpen={isOpen}
                    onClose={closeDropdown}
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* Direct Call CTA (Desktop) */}
        <div className="hidden md:flex items-center">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className={`group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold text-sm backdrop-blur-md transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer ${
              isScrolled
                ? "bg-charcoal/5 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
                : "bg-white/15 border border-white/40 text-white hover:bg-white hover:text-charcoal"
            }`}
          >
            <Phone
              className={`w-4 h-4 transition-colors ${
                isScrolled
                  ? "text-charcoal group-hover:text-white"
                  : "text-white group-hover:text-charcoal"
              }`}
            />
            <span>Direkt anrufen</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg backdrop-blur-sm transition-colors cursor-pointer ${
              isScrolled
                ? "text-charcoal border border-charcoal/30 bg-white/20 hover:bg-charcoal/10"
                : "text-white border border-white/40 bg-black/20 hover:bg-black/30"
            }`}
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 backdrop-blur-xl bg-[#406D72]/95 border-b border-white/15 shadow-xl">
          <div className="flex flex-col gap-1">
            {mainNavLinks.map((link) => {
              const hasDropdown = !!link.dropdown?.length;
              const isExpanded = mobileExpanded === link.name;

              return (
                <div key={link.name}>
                  {hasDropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded((p) =>
                            p === link.name ? null : link.name
                          )
                        }
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-white font-semibold text-base hover:bg-white/10 transition-colors cursor-pointer"
                      >
                        <span>{link.name}</span>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? "rotate-90" : ""
                          }`}
                        />
                      </button>

                      {isExpanded && link.dropdown && (
                        <div className="mt-1 ml-4 flex flex-col gap-3 pb-2">
                          {link.dropdown.map((group) => (
                            <div key={group.title}>
                              <p className="text-[11px] font-extrabold uppercase tracking-widest text-white/60 px-3 mb-1.5">
                                {group.title}
                              </p>
                              {group.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setMobileExpanded(null);
                                  }}
                                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/90 font-medium text-sm hover:bg-white/10 hover:text-white transition-all"
                                >
                                  <ChevronRight className="w-3.5 h-3.5 text-white/40 shrink-0" />
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex px-4 py-3 rounded-xl text-white font-semibold text-base hover:bg-white/10 transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              );
            })}

            {/* Mobile Call CTA */}
            <div className="pt-3 border-t border-white/15 mt-2">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl text-white font-bold text-sm border border-white/30 bg-white/10 hover:bg-white hover:text-brand-teal transition-all duration-300 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Direkt anrufen</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
