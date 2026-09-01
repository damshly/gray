import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "@/config/services";
import { Badge, GlassCard, Button } from "@/components/ui";
import { FloatingDecorations } from "@/components/ui/floating-decorations";
import { CheckCircle2, ChevronRight } from "lucide-react";

type Props = {
  params: Promise<{ slug: string; subSlug: string }>;
};

export async function generateStaticParams() {
  return servicesData.flatMap((service) =>
    service.subServices.map((sub) => ({
      slug: service.slug,
      subSlug: sub.slug,
    }))
  );
}

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug, subSlug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  const sub = service?.subServices.find((ss) => ss.slug === subSlug);
  if (!sub) return {};

  return {
    title: sub.metaTitle,
    description: sub.metaDescription,
    openGraph: {
      title: sub.metaTitle,
      description: sub.metaDescription,
      url: `/leistungen/${slug}/${subSlug}`,
      images: service?.imageSrc ? [{ url: service.imageSrc }] : [],
    },
  };
}

export default async function SubServicePage({ params }: Props) {
  const { slug, subSlug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  const sub = service?.subServices.find((ss) => ss.slug === subSlug);
  if (!service || !sub) notFound();

  const otherSubs = service.subServices.filter((ss) => ss.slug !== subSlug);

  return (
    <main className="relative w-full min-h-screen bg-brand-teal text-white">
      <FloatingDecorations />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-36 pb-24 flex flex-col gap-16">
        {/* Breadcrumb */}
        <nav className="flex items-center flex-wrap gap-2 text-xs text-white/70 font-medium">
          <Link href="/" className="hover:text-white transition-colors">
            Start
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/40" />
          <Link href="/leistungen" className="hover:text-white transition-colors">
            Leistungen
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/40" />
          <Link
            href={`/leistungen/${service.slug}`}
            className="hover:text-white transition-colors"
          >
            {service.title}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/40" />
          <span className="text-white/95">{sub.title}</span>
        </nav>

        {/* Hero */}
        <div className="flex flex-col gap-6 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="glass" size="sm">
              {service.category}
            </Badge>
            <Badge variant="glass" size="sm">
              {service.title}
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            {sub.title}
          </h1>

          <p className="text-white/90 text-base sm:text-lg leading-relaxed font-medium">
            {sub.description}
          </p>

          <div className="pt-2">
            <Button href="/#kontakt" variant="glass" size="lg" withArrow>
              Kostenlos anfragen
            </Button>
          </div>
        </div>

        {/* Features */}
        <GlassCard withShine withSparkle className="p-8 sm:p-10">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-6">
            Was ist im Service enthalten?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sub.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10"
              >
                <CheckCircle2 className="w-4 h-4 text-white/60 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-white/90 font-medium leading-snug">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Related sub-services */}
        {otherSubs.length > 0 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-6">
              Weitere Leistungen im Bereich {service.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherSubs.map((other) => (
                <Link
                  key={other.id}
                  href={`/leistungen/${service.slug}/${other.slug}`}
                  className="group flex flex-col gap-2 p-5 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="font-extrabold text-white group-hover:text-white text-base">
                    {other.title}
                  </span>
                  <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                    {other.shortDesc}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back link */}
        <div>
          <Link
            href={`/leistungen/${service.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors group"
          >
            <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-0.5 transition-transform" />
            <span>Zurück zu {service.title}</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
