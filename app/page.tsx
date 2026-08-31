import Hero from "@/components/hero";
import Services from "@/components/services";
import WhyUs from "@/components/why-us";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full font-sans bg-brand-teal">
      <Hero />
      <Services />

      {/* Why Us Container */}
      <div className="relative z-20 bg-brand-teal">
        <WhyUs />
      </div>
    </main>
  );
}