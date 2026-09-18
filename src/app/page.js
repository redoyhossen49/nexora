import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureOverview from "@/components/home/FeatureOverview";
import CoreFeatures from "@/components/home/CoreFeatures";
import HowItWorks from "@/components/home/HowItWorks";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeatureOverview />
        <CoreFeatures />
        <HowItWorks />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}