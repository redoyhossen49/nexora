import SolutionCard from "./SolutionCard";
import { solutions } from "@/data/solutions";

export default function SolutionGrid() {
  return (
    <section className="bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-[var(--primary)]">
            BUILT FOR DIFFERENT TEAMS
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            One workspace, different ways of working.
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--text-secondary)]">
            Nexora adapts to the way your team plans, collaborates, and gets
            work done.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2  ">
          {solutions.map((solution) => (
            <SolutionCard
              key={solution.title}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}