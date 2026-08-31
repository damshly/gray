import Link from "next/link";
import { Badge, GlassCard } from "@/components/ui";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `Datenschutzerklärung | ${siteConfig.name}`,
  description: `Datenschutzerklärung der ${siteConfig.name}.`,
};

export default function DatenschutzPage() {
  return (
    <main className="relative flex-1 w-full bg-brand-teal text-white py-36 sm:py-44 px-6 sm:px-12">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      <section className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Zurück zur Startseite</span>
          </Link>
        </div>

        {/* Header */}
        <div className="border-b border-white/20 pb-8 mb-12">
          <div className="mb-3">
            <Badge variant="glass" size="sm">
              Rechtliche Hinweise
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Datenschutzerklärung
          </h1>
        </div>

        {/* Content Frame */}
        <GlassCard withSparkle={false} hoverTranslate={false} className="p-8 sm:p-12 min-h-[300px] flex flex-col items-center justify-center text-center text-white/80">
          <p className="text-base font-medium">
            Inhalt folgt in Kürze.
          </p>
        </GlassCard>
      </section>
    </main>
  );
}
