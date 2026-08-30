import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-charcoal text-white pt-20 pb-12 overflow-hidden border-t border-charcoal">
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(112,128,144,0.15),transparent)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand & Mission (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Link href="/" className="inline-block group">
              <div className="inline-flex items-center gap-2 p-2 px-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Image
                  src="/logo.png"
                  alt="MK Reinigung Rottweil"
                  width={150}
                  height={45}
                  className="h-8 w-auto object-contain brightness-0 invert"
                />
              </div>
            </Link>

            <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-sm">
              Ihr zuverlässiger Partner für makellose Sauberkeit, professionelle Büro-, Glas- und 
              Sonderreinigung in Rottweil und der gesamten Region.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-white/90">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Einsatzbereit in Rottweil & Region</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/90">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/#start" className="hover:text-white transition-colors">
                  Start
                </Link>
              </li>
              <li>
                <Link href="/#leistungen" className="hover:text-white transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/#ueber-mk" className="hover:text-white transition-colors">
                  Über MK
                </Link>
              </li>
              <li>
                <Link href="/#kontakt" className="hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services List (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/90">
              Leistungen
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/#leistungen" className="hover:text-white transition-colors">
                  Unterhaltsreinigung
                </Link>
              </li>
              <li>
                <Link href="/#leistungen" className="hover:text-white transition-colors">
                  Glas- & Fensterreinigung
                </Link>
              </li>
              <li>
                <Link href="/#leistungen" className="hover:text-white transition-colors">
                  Baugrob- & Endreinigung
                </Link>
              </li>
              <li>
                <Link href="/#leistungen" className="hover:text-white transition-colors">
                  Sonderreinigung
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & CTA (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/90">
              Kontakt & Angebot
            </h4>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Haben Sie Fragen oder möchten Sie ein unverbindliches Angebot anfordern?
            </p>
            <div className="pt-1 flex flex-col gap-3">
              <a
                href="tel:+491234567890"
                className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-charcoal border border-white/20 transition-all duration-300 text-xs sm:text-sm font-semibold"
              >
                <svg className="w-4 h-4 text-emerald-400 group-hover:text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+49 (0) 123 4567890</span>
              </a>
              <a
                href="mailto:info@mk-reinigung-rottweil.de"
                className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-white border border-white/10 transition-all duration-300 text-xs sm:text-sm"
              >
                <svg className="w-4 h-4 text-white/70 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@mk-reinigung.de</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal Pages */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} MK Reinigung Rottweil. Alle Rechte vorbehalten.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/impressum"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Impressum
            </Link>
            <span className="text-white/20">•</span>
            <Link
              href="/datenschutz"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
