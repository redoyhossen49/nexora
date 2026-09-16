import FeatureSection from "@/components/features/FeatureSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/Navbar";
import { features } from "@/data/features";


export default function page() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
         <section className="bg-[var(--background)]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold text-[var(--primary)]">
                NEXORA FEATURES
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
                Everything you need to move work forward.
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8">
                From project planning to team collaboration and progress
                tracking, Nexora gives your team one focused workspace for
                getting meaningful work done.
              </p>
            </div>
          </div>
        </section>
        {
            features.map((feature)=>(
                <FeatureSection
      key={feature.title}
      {...feature}
    />
            ))
        }
        
        <CTASection></CTASection>
      </main>
      <Footer></Footer>
    </div>
  )
}
