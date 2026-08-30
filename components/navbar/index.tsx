"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Start", href: "/" },
        { name: "Leistungen", href: "/leistungen" },
        { name: "Über MK", href: "/ueber-mk" },
        { name: "Kontakt", href: "/kontakt" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? "backdrop-blur-md bg-white/80 border-b border-charcoal/10 py-3.5 shadow-sm"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/logo.png"
                        alt="MK Reinigung Rottweil"
                        width={160}
                        height={50}
                        className={`h-9 sm:h-11 w-auto object-contain transition-all duration-300 group-hover:scale-[1.02] ${
                            !isScrolled ? "drop-shadow-md" : ""
                        }`}
                        priority
                    />
                </Link>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center gap-8 lg:gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`font-semibold text-sm lg:text-base tracking-wide transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] hover:after:w-full after:transition-all after:duration-300 ${
                                isScrolled
                                    ? "text-charcoal/90 hover:text-charcoal after:bg-charcoal"
                                    : "text-white/95 hover:text-white after:bg-white drop-shadow-sm"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Direct Call CTA Button (Desktop) */}
                <div className="hidden md:flex items-center">
                    <a
                        href="tel:+491234567890"
                        className={`group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold text-sm backdrop-blur-md transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer ${
                            isScrolled
                                ? "bg-charcoal/5 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
                                : "bg-white/15 border border-white/40 text-white hover:bg-white hover:text-charcoal"
                        }`}
                    >
                        <svg
                            className={`w-4 h-4 transition-colors ${
                                isScrolled
                                    ? "text-charcoal group-hover:text-white"
                                    : "text-white group-hover:text-charcoal"
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                        <span>Direkt anrufen</span>
                    </a>
                </div>

                {/* Mobile Hamburger Button */}
                <div className="flex md:hidden items-center">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`p-2 rounded-lg backdrop-blur-sm transition-colors ${
                            isScrolled
                                ? "text-charcoal border border-charcoal/30 bg-white/20 hover:bg-charcoal/10"
                                : "text-white border border-white/40 bg-black/20 hover:bg-black/30"
                        }`}
                        aria-label="Menü öffnen"
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden px-6 pt-4 pb-6 backdrop-blur-xl bg-white/95 border-b border-charcoal/15 shadow-xl transition-all">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-charcoal font-semibold text-base py-2 border-b border-charcoal/5 hover:text-slate-gray transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-2">
                            <a
                                href="tel:+491234567890"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full justify-center group inline-flex items-center gap-2.5 px-5 py-3 rounded-lg text-charcoal font-semibold text-sm backdrop-blur-md bg-white/30 border border-charcoal hover:bg-charcoal hover:text-white transition-all duration-300"
                            >
                                <svg
                                    className="w-4 h-4 text-charcoal group-hover:text-white transition-colors"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <span>Direkt anrufen</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
