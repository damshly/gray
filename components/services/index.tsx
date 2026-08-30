import Image from "next/image";
import {
  Sparkles,
  Droplets,
  SprayCan,
  ShieldCheck,
  Brush,
  Sparkle,
  Sun,
  Waves,
  CheckCircle2
} from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition: "right" | "left";
}

const services: ServiceItem[] = [
  {
    id: "unterhalt",
    number: "01",
    category: "Gewerbe & Büro",
    title: "Unterhalts- & Büroreinigung",
    description:
      "Kontinuierliche Sauberkeit und Werterhalt für Ihre Arbeitsumgebung. Wir sorgen für makellose Büros, Konferenzräume und Sanitäranlagen nach maßgeschneiderten Reinigungsintervallen.",
    features: [
      "Tägliche oder wöchentliche Reinigungszyklen",
      "Hygienische Desinfektion von Kontaktflächen",
      "Umweltschonende Reinigungsmittel",
      "Diskreter & flexibler Service außerhalb Ihrer Betriebszeiten",
    ],
    imageSrc: "/services-1.jpg",
    imageAlt: "Professionelle Büro- und Unterhaltsreinigung in Rottweil",
    imagePosition: "right",
  },
  {
    id: "glas",
    number: "02",
    category: "Fenster & Fassade",
    title: "Glas- & Fensterreinigung",
    description:
      "Kristallklare Durchsicht ohne Schlieren oder Rückstände. Ob Schaufenster, Wintergärten, Bürokomplexe oder Glasfassaden – wir bringen Ihre Glasflächen zum Strahlen.",
    features: [
      "Streifenfreie Reinigung von Innen- & Außenglas",
      "Inklusive Rahmen-, Falz- und Fensterbankpflege",
      "Reinigung auch in schwer zugänglichen Höhen",
      "Werterhaltende Pflege für Glas & Rahmenmaterial",
    ],
    imageSrc: "/services-2.jpg",
    imageAlt: "Streifenfreie Glas- und Fensterreinigung Rottweil",
    imagePosition: "left",
  },
  {
    id: "grund",
    number: "03",
    category: "Spezial & Bau",
    title: "Grund-, Bau- & Sonderreinigung",
    description:
      "Gründliche Tiefenreinigung für anspruchsvolle Anforderungen: nach Bauarbeiten, vor Einzügen oder zur intensiven Wiederherstellung von strapazierten Boden- und Oberflächen.",
    features: [
      "Baugrob- und Bauendreinigung vor Übergabe",
      "Maschinelle Boden- und Teppichgrundreinigung",
      "Entfernung hartnäckiger Verschmutzungen & Farbreste",
      "Individuelle Lösungen für Privat & Gewerbe",
    ],
    imageSrc: "/services-3.jpg",
    imageAlt: "Bau- und Spezialreinigung Rottweil",
    imagePosition: "right",
  },
];

export default function Services() {
  return (
<section
      id="leistungen"
      className="relative w-full text-white pt-24 pb-24 sm:pb-32 lg:pb-36 overflow-hidden z-20 backdrop-blur-xl"
    >
      {/* 🌊 تدرج بداية القسم لانتقال سلس وناعم من القسم السابق */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, rgba(64, 109, 114, 0.75) 25%, #406D72 65%, #406D72 100%)`,
        }}
      />


      {/* 2. High Density Floating Stickers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <Sparkles className="absolute top-8 left-10 w-16 h-16 text-white/30 rotate-12" />
        <SprayCan className="absolute top-16 right-16 w-20 h-20 text-white/25 -rotate-45" />
        <Droplets className="absolute top-28 left-1/4 w-12 h-12 text-[#667373] opacity-40 rotate-180" />
        <Sparkle className="absolute top-12 right-1/3 w-10 h-10 text-white/40 animate-pulse" />
        <ShieldCheck className="absolute top-1/3 left-8 w-24 h-24 text-white/20 rotate-6" />
        <Brush className="absolute top-1/3 right-10 w-16 h-16 text-[#667373] opacity-50 -rotate-12" />
        <Sun className="absolute top-2/5 left-1/3 w-14 h-14 text-white/25" />
        <Waves className="absolute top-1/2 right-1/4 w-20 h-20 text-white/20 -rotate-12" />
        <Sparkles className="absolute top-2/3 left-12 w-20 h-20 text-white/35 rotate-45" />
        <CheckCircle2 className="absolute top-2/3 right-12 w-16 h-16 text-white/20 rotate-12" />
        <Droplets className="absolute bottom-35 left-1/4 w-16 h-16 text-white/30 rotate-45" />
        <SprayCan className="absolute bottom-30 right-1/3 w-18 h-18 text-[#667373] opacity-45 rotate-12" />
        <Sparkles className="absolute bottom-40 right-8 w-28 h-28 text-white/25 -rotate-12" />
      </div>

      {/* 3. Radial Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none z-0" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-12 sm:pt-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-xs sm:text-sm font-bold uppercase tracking-widest text-white mb-4 shadow-sm">
            <span>Unsere Leistungen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Erstklassige Reinigungslösungen für jeden Anspruch
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed font-medium">
            Von der regelmäßigen Unterhaltsreinigung bis hin zur anspruchsvollen Spezialpflege –
            wir bieten erstklassige Sauberkeit mit höchster Präzision und Zuverlässigkeit.
          </p>
        </div>

        {/* Services List - Glassmorphic Layout */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {services.map((service) => {
            const isImageRight = service.imagePosition === "right";

            return (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Transparent Glass Box with Shine Effect */}
                <div
                  className={`relative group rounded-3xl p-8 sm:p-10 lg:p-12 border border-white/25 bg-white/10 backdrop-blur-md transition-all duration-700 overflow-hidden shadow-2xl hover:bg-white/15 hover:border-white/50 hover:-translate-y-1 ${isImageRight
                      ? "lg:col-span-6 lg:order-1"
                      : "lg:col-span-6 lg:order-2"
                    }`}
                >
                  <div className="pointer-events-none absolute -inset-y-32 -left-[100%] w-[120%] bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-25 transition-transform duration-1000 ease-out group-hover:translate-x-[260%]" />

                  <div className="pointer-events-none absolute top-4 right-4 text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125 group-hover:text-white">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                    </svg>
                  </div>

                  <div className="relative z-10 flex flex-col gap-6">
                    <div className="flex items-center justify-between border-b border-white/20 pb-4">
                      <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white/90">
                        {service.category}
                      </span>
                      <span className="font-mono text-xl sm:text-2xl font-black text-white/50 group-hover:text-white transition-colors duration-300">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {service.title}
                    </h3>

                    <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal">
                      {service.description}
                    </p>

                    <ul className="space-y-2.5 pt-2">
                      {service.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-white/95"
                        >
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/20 border border-white/40 text-white text-[10px]">
                            ✓
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4">
                      <a
                        href="#kontakt"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors group/btn"
                      >
                        <span className="border-b border-white group-hover/btn:border-white/60 pb-0.5">
                          Unverbindlich anfragen
                        </span>
                        <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Image Container */}
                <div
                  className={`relative group rounded-3xl overflow-hidden border border-white/30 shadow-xl transition-all duration-700 aspect-[4/3] lg:aspect-[5/4] ${isImageRight
                      ? "lg:col-span-6 lg:order-2"
                      : "lg:col-span-6 lg:order-1"
                    }`}
                >
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#406D72]/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}