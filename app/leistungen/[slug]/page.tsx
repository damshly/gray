import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/config/services";
import { Badge, GlassCard, SectionHeader, Button } from "@/components/ui";
import { FloatingDecorations } from "@/components/ui/floating-decorations";
import { CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/leistungen/${slug}`,
      images: [{ url: service.imageSrc }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <main className="relative w-full min-h-screen bg-brand-teal text-white">
      <FloatingDecorations />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-36 pb-24 flex flex-col gap-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-white/70 font-medium">
          <Link href="/" className="hover:text-white transition-colors">
            Start
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/40" />
          <Link href="/leistungen" className="hover:text-white transition-colors">
            Leistungen
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/40" />
          <span className="text-white/95">{service.title}</span>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Content */}
          <div
            className={`flex flex-col gap-6 ${
              service.imagePosition === "right"
                ? "lg:col-span-6 lg:order-1"
                : "lg:col-span-6 lg:order-2"
            }`}
          >
            <div>
              <Badge variant="glass" size="md" className="mb-4">
                {service.category}
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                {service.title}
              </h1>
            </div>

            <p className="text-white/90 text-base sm:text-lg leading-relaxed font-medium">
              {service.description}
            </p>

            <ul className="space-y-3">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-white/90 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-white/60 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="/#kontakt" variant="glass" size="lg" withArrow>
                Angebot anfordern
              </Button>
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative rounded-3xl overflow-hidden border border-white/25 shadow-2xl aspect-[4/3] ${
              service.imagePosition === "right"
                ? "lg:col-span-6 lg:order-2"
                : "lg:col-span-6 lg:order-1"
            }`}
          >
            <Image
              src={service.imageSrc}
              alt={service.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/50 via-transparent to-transparent" />
          </div>
        </div>

        {/* Sub-Services Grid */}
        <div>
          <SectionHeader
            badgeText="Teilleistungen"
            title={`Was wir im Bereich ${service.category} anbieten`}
            description="Wählen Sie die passende Teilleistung für Ihren Bedarf oder kontaktieren Sie uns für ein maßgeschneidertes Angebot."
            className="max-w-2xl mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.subServices.map((sub) => (
              <GlassCard
                key={sub.id}
                withShine
                withSparkle={false}
                className="p-6 flex flex-col gap-4"
              >
                <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                  {sub.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed flex-1">
                  {sub.shortDesc}
                </p>
                <Link
                  href={`/leistungen/${service.slug}/${sub.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white transition-colors group"
                >
                  <span className="border-b border-white/50 group-hover:border-white pb-0.5">
                    Details ansehen
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
