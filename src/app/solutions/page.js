import Navbar from "@/components/Navbar";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";
import SolutionGrid from "@/components/solutions/SolutionGrid";
import SolutionWorkflow from "@/components/solutions/SolutionWorkflow";
import SolutionWorkspace from "@/components/solutions/SolutionWorkspace";


export default function SolutionsPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-[var(--background)]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 ">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold text-[var(--primary)]">
                NEXORA FOR TEAMS
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
                A workspace built around how your team works.
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8">
                Whether you&apos;re launching products, managing campaigns, or
                coordinating a growing team, Nexora keeps your work organized,
                visible, and moving forward.
              </p>
            </div>
          </div>
        </section>
        <SolutionGrid></SolutionGrid>
        <SolutionWorkflow></SolutionWorkflow>
        
        <SolutionWorkspace></SolutionWorkspace>
       

        <CTASection />
      </main>

      <Footer />
    </>
  );
}