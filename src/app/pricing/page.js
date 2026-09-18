import Navbar from "@/components/Navbar";
import PricingSection from "@/components/pricing/PricingSection";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-[var(--background)]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold text-[var(--primary)]">
                SIMPLE, TRANSPARENT PRICING
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
                Choose a plan that fits your team.
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8">
                Start organizing your work for free, then upgrade when your
                team needs more projects, visibility, and control.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <PricingSection />

        {/* FAQ */}
        <PricingFAQ />

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
    </>
  );
}