import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroPractice from "@/components/hero/HeroPractice";
import FeatureOverview from "@/components/home/FeatureOverview";
import CoreFeatures from "@/components/home/CoreFeatures";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
          <Hero />
          <FeatureOverview></FeatureOverview>
         <CoreFeatures></CoreFeatures>
      </main>
    
    </>
  );
}