import Image from "next/image";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import WhyUs from "@/components/why-us";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden font-sans">
      {/* Sticky Transparent Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="start" className="relative w-full h-screen min-h-dvh flex items-center">
        {/* Background Image */}
        <Image
          src="/hero.jpg"
          alt="MK Reinigung Rottweil"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center -z-10"
          quality={100}
        />

        {/* Background Image Overlay for optimal contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30 -z-10" />

        {/* Content Container - Left Aligned */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 z-10">
          <div className="max-w-2xl text-left flex flex-col items-start gap-6">

            {/* Brand Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/25 backdrop-blur-md text-xs sm:text-sm tracking-wider uppercase">
              <span className="font-extrabold text-white">MK</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              <span className="font-bold text-white/90">Reinigung Rottweil</span>
            </div>

            {/* Main Headline - Solid High Contrast Pure White */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] drop-shadow-sm">
              <span className="text-white border-b-4 border-white/40 pb-1">
                Sauberkeit & Werterhalt
              </span>
            </h1>

            {/* Marketing Subheadline - Crisp White Text */}
            <p className="text-base sm:text-lg lg:text-xl text-white/90 font-medium leading-relaxed drop-shadow-sm">
              Professionelle Reinigungslösungen für Gewerbe- und Privatkunden in Rottweil und Umgebung. Mit{" "}
              <strong className="font-black text-white underline decoration-white/50 underline-offset-4">MK</strong> garantieren wir makellose Reinheit, Zuverlässigkeit und maßgeschneiderten Service auf höchstem Niveau.
            </p>

            {/* CTA Button - Transparent Glass with White Frame & Smooth Hover */}
            <div className="pt-2">
              <a
                href="#kontakt"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl text-white font-bold text-sm sm:text-base backdrop-blur-md bg-white/15 border border-white/40 hover:bg-white hover:text-charcoal transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer"
              >
                <span>Kostenloses Angebot anfordern</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Why Us Section */}
      <WhyUs />

      {/* Footer */}
      <Footer />
    </main>
  );
}