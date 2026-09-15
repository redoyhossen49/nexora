import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureOverview from "@/components/home/FeatureOverview";
import CoreFeatures from "@/components/home/CoreFeatures";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
          <Hero />
          <FeatureOverview></FeatureOverview>
         <CoreFeatures></CoreFeatures>
         <CTASection></CTASection>
      </main>
      <Footer></Footer>
    
    </>
  );
}