import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Impressum | MK Reinigung Rottweil",
  description: "Impressum und rechtliche Angaben der MK Reinigung Rottweil.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-charcoal">
      <Navbar />

      <section className="flex-1 max-w-4xl mx-auto w-full px-6 sm:px-12 py-36 sm:py-44">
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal/70 hover:text-charcoal transition-colors group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Zurück zur Startseite</span>
          </Link>
        </div>

        {/* Header */}
        <div className="border-b border-charcoal/15 pb-8 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-charcoal/30 bg-charcoal/5 text-xs font-bold uppercase tracking-widest text-charcoal mb-3">
            Rechtliche Hinweise
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-charcoal">
            Impressum
          </h1>
        </div>

        {/* Empty / Placeholder Frame */}
        <div className="rounded-3xl border border-charcoal/20 p-8 sm:p-12 bg-charcoal/[0.02] backdrop-blur-sm min-h-[300px] flex flex-col items-center justify-center text-center text-charcoal/60">
          <p className="text-base font-medium">
            Inhalt folgt in Kürze.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
