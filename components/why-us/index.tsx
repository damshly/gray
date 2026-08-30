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
      id="leistungen"
      className="relative w-full text-white pt-24 pb-24 sm:pb-32 lg:pb-36 overflow-hidden z-20 backdrop-blur-xl"
    >
      {/* 🌊 لون الخلفية الثابت بنفس نسبة قسم الخدمات (25%) */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          backgroundColor: `#406D72`,
        }}
      />



      {/* 2. High Density Floating Stickers (مطابق لقسم الخدمات) */}
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
        <Droplets className="absolute bottom-20 left-1/4 w-16 h-16 text-white/30 rotate-45" />
        <SprayCan className="absolute bottom-12 right-1/3 w-18 h-18 text-[#667373] opacity-45 rotate-12" />
        <Sparkles className="absolute bottom-8 right-8 w-28 h-28 text-white/25 -rotate-12" />
      </div>

      {/* 3. Radial Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none z-0" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-12 sm:pt-16">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-xs sm:text-sm font-bold uppercase tracking-widest text-white mb-4 shadow-sm">
            <span>Warum MK Reinigung</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Ihr verlässlicher Partner für glänzende Ergebnisse
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed font-medium">
            Mit Leidenschaft, modernem Equipment und geschultem Blick für Details sorgen wir dafür,
            dass Ihre Räumlichkeiten stets einen perfekten und gepflegten Eindruck hinterlassen.
          </p>
        </div>

        {/* 4 Cards Grid - Glass Frosted Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {reasons.map((reason) => {
            const IconComponent = reason.icon;

            return (
              <div
                key={reason.id}
                className="relative group rounded-3xl p-8 sm:p-10 border border-white/25 bg-white/10 backdrop-blur-md transition-all duration-700 overflow-hidden shadow-2xl hover:bg-white/15 hover:border-white/50 hover:-translate-y-1.5"
              >
                {/* Light Reflection / Cleaning Shine Sweep */}
                <div className="pointer-events-none absolute -inset-y-32 -left-[100%] w-[120%] bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-25 transition-transform duration-1000 ease-out group-hover:translate-x-[260%]" />

                {/* Corner Sparkle Effect */}
                <div className="pointer-events-none absolute top-4 right-4 text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125 group-hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 group-hover:bg-white group-hover:text-[#406D72] text-white transition-colors duration-500">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-white/80">
                      {reason.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    {reason.title}
                  </h3>

                  <p className="text-white/85 text-sm sm:text-base leading-relaxed font-medium">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Stats Banner */}
        <div className="mt-16 sm:mt-20">
          <div className="relative group rounded-3xl p-8 sm:p-12 border border-white/25 bg-white/10 backdrop-blur-md overflow-hidden shadow-2xl transition-all duration-700 hover:bg-white/15">

            {/* Shine sweep */}
            <div className="pointer-events-none absolute -inset-y-32 -left-[100%] w-[120%] bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-25 transition-transform duration-1000 ease-out group-hover:translate-x-[260%]" />

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20 text-center">
              {stats.map((stat, idx) => (
                <div key={idx} className={`pt-4 md:pt-0 ${idx > 0 ? "md:pl-8" : ""}`}>
                  <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white/80">
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