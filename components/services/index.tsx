import Image from "next/image";

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
      className="relative w-full bg-white text-charcoal py-24 sm:py-32 lg:py-36 overflow-hidden"
    >
      {/* Background Decorative Grid/Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#36454f_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-charcoal/30 bg-charcoal/5 backdrop-blur-sm text-xs sm:text-sm font-bold uppercase tracking-widest text-charcoal mb-4">
            <span>Unsere Leistungen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-charcoal leading-tight">
            Erstklassige Reinigungslösungen für jeden Anspruch
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal/80 leading-relaxed font-medium">
            Von der regelmäßigen Unterhaltsreinigung bis hin zur anspruchsvollen Spezialpflege – 
            wir bieten erstklassige Sauberkeit mit höchster Präzision und Zuverlässigkeit.
          </p>
        </div>

        {/* Services List - Alternating Layout */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {services.map((service, index) => {
            const isImageRight = service.imagePosition === "right";

            return (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Text Frame / Glass Box */}
                <div
                  className={`relative group rounded-3xl p-8 sm:p-10 lg:p-12 border border-charcoal transition-all duration-700 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 ${
                    isImageRight
                      ? "lg:col-span-6 lg:order-1"
                      : "lg:col-span-6 lg:order-2"
                  }`}
                  style={{
                    // Frosted glass initial state: milky frosted blur
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.72) 0%, rgba(245, 245, 245, 0.55) 100%)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                  }}
                >
                  {/* Frosted Glass Overlay that clears up on hover */}
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-md transition-opacity duration-700 pointer-events-none group-hover:opacity-0" />

                  {/* Clean Clear Layer on hover */}
                  <div className="absolute inset-0 bg-white/95 opacity-0 transition-opacity duration-700 pointer-events-none group-hover:opacity-100" />

                  {/* Light Reflection / Cleaning Shine Sweep (كانه كان زجاج مغبش واتنضف) */}
                  <div className="pointer-events-none absolute -inset-y-32 -left-[100%] w-[120%] bg-gradient-to-r from-transparent via-white/80 to-transparent transform -skew-x-25 transition-transform duration-1000 ease-out group-hover:translate-x-[260%]" />

                  {/* Subtle Corner Sparkle / Polish Glow Effect */}
                  <div className="pointer-events-none absolute top-4 right-4 text-charcoal/30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                    <svg
                      className="w-6 h-6 text-charcoal/40"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                    </svg>
                  </div>

                  {/* Content Container (z-10 to stay above glass layers) */}
                  <div className="relative z-10 flex flex-col gap-6">
                    {/* Header: Number & Category */}
                    <div className="flex items-center justify-between border-b border-charcoal/15 pb-4">
                      <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-charcoal/70">
                        {service.category}
                      </span>
                      <span className="font-mono text-xl sm:text-2xl font-black text-charcoal/40 group-hover:text-charcoal transition-colors duration-300">
                        {service.number}
                      </span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed font-medium">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2.5 pt-2">
                      {service.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-charcoal/90"
                        >
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-charcoal text-white text-[10px]">
                            ✓
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action Button */}
                    <div className="pt-4">
                      <a
                        href="#kontakt"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-charcoal hover:text-black transition-colors group/btn"
                      >
                        <span className="border-b border-charcoal group-hover/btn:border-black pb-0.5">
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
                  className={`relative group rounded-3xl overflow-hidden border border-charcoal/20 shadow-md transition-all duration-700 hover:shadow-xl aspect-[4/3] lg:aspect-[5/4] ${
                    isImageRight
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
                  {/* Subtle gradient vignette to blend with border */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
