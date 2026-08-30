import Image from "next/image";

interface ReasonItem {
  id: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  tag: string;
  title: string;
  description: string;
}

const reasons: ReasonItem[] = [
  {
    id: "qualitaet",
    tag: "Präzision & Sorgfalt",
    title: "Kompromisslose Qualität",
    description:
      "Wir setzen auf modernste Reinigungstechnologien und geschultes Fachpersonal. Jedes Objekt wird mit größter Sorgfalt und nach strengen Qualitätskriterien gereinigt.",
    icon: (props) => (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    id: "zuverlaessigkeit",
    tag: "Termintreue & Diskretion",
    title: "100% Zuverlässigkeit",
    description:
      "Feste Ansprechpartner, garantierte Pünktlichkeit und reibungslose Abläufe. Wir arbeiten diskret und passen uns flexibel Ihren Betriebs- oder Wunschzeiten an.",
    icon: (props) => (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: "umwelt",
    tag: "Nachhaltig & Sicher",
    title: "Ökologische Reinigungsmittel",
    description:
      "Für den Schutz Ihrer Gesundheit und unserer Umwelt nutzen wir biologisch abbaubare, materialschonende und hochwirksame Profi-Reinigungsprodukte.",
    icon: (props) => (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: "fairness",
    tag: "Fair & Transparent",
    title: "Transparente Preisgestaltung",
    description:
      "Keine versteckten Nebenkosten. Wir erstellen Ihnen nach persönlicher Beratung ein faires, transparentes und genau auf Ihre Bedürfnisse zugeschnittenes Angebot.",
    icon: (props) => (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

const stats = [
  { value: "100%", label: "Kundenzufriedenheit" },
  { value: "24/7", label: "Flexibler Service" },
  { value: "Rottweil", label: "und Umgebung" },
  { value: "Top", label: "Preis-Leistungs-Verhältnis" },
];

export default function WhyUs() {
  return (
    <section
      id="ueber-mk"
      className="relative w-full bg-white text-charcoal py-24 sm:py-32 lg:py-36 overflow-hidden border-t border-charcoal/10"
    >
      {/* Background Subtle Radial Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#36454f_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-charcoal/30 bg-charcoal/5 backdrop-blur-sm text-xs sm:text-sm font-bold uppercase tracking-widest text-charcoal mb-4">
            <span>Warum MK Reinigung</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-charcoal leading-tight">
            Ihr verlässlicher Partner für glänzende Ergebnisse
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal/80 leading-relaxed font-medium">
            Mit Leidenschaft, modernem Equipment und geschultem Blick für Details sorgen wir dafür, 
            dass Ihre Räumlichkeiten stets einen perfekten und gepflegten Eindruck hinterlassen.
          </p>
        </div>

        {/* 4 Cards Grid - Glass Frosted to Clean Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {reasons.map((reason) => {
            const IconComponent = reason.icon;

            return (
              <div
                key={reason.id}
                className="relative group rounded-3xl p-8 sm:p-10 border border-charcoal transition-all duration-700 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.72) 0%, rgba(245, 245, 245, 0.55) 100%)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                }}
              >
                {/* Frosted Glass Overlay that clears on hover */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-md transition-opacity duration-700 pointer-events-none group-hover:opacity-0" />

                {/* Clean Clear Layer on hover */}
                <div className="absolute inset-0 bg-white/95 opacity-0 transition-opacity duration-700 pointer-events-none group-hover:opacity-100" />

                {/* Light Reflection / Cleaning Shine Sweep (كانه كان زجاج مغبش واتنضف) */}
                <div className="pointer-events-none absolute -inset-y-32 -left-[100%] w-[120%] bg-gradient-to-r from-transparent via-white/80 to-transparent transform -skew-x-25 transition-transform duration-1000 ease-out group-hover:translate-x-[260%]" />

                {/* Corner Sparkle Effect */}
                <div className="pointer-events-none absolute top-4 right-4 text-charcoal/30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                  <svg
                    className="w-6 h-6 text-charcoal/40"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-charcoal/5 border border-charcoal/20 group-hover:bg-charcoal group-hover:text-white text-charcoal transition-colors duration-500">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-charcoal/60">
                      {reason.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-charcoal tracking-tight">
                    {reason.title}
                  </h3>

                  <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed font-medium">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Image & Stats Banner */}
        <div className="mt-16 sm:mt-20">
          <div
            className="relative group rounded-3xl p-8 sm:p-12 border border-charcoal overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(240, 240, 240, 0.6) 100%)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
            }}
          >
            {/* Frosted Glass Overlay */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-md transition-opacity duration-700 pointer-events-none group-hover:opacity-0" />
            <div className="absolute inset-0 bg-white/95 opacity-0 transition-opacity duration-700 pointer-events-none group-hover:opacity-100" />
            
            {/* Shine sweep */}
            <div className="pointer-events-none absolute -inset-y-32 -left-[100%] w-[120%] bg-gradient-to-r from-transparent via-white/80 to-transparent transform -skew-x-25 transition-transform duration-1000 ease-out group-hover:translate-x-[260%]" />

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-charcoal/15 text-center">
              {stats.map((stat, idx) => (
                <div key={idx} className={`pt-4 md:pt-0 ${idx > 0 ? "md:pl-8" : ""}`}>
                  <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-charcoal/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
