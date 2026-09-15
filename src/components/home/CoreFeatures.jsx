import CoreFeature from "./CoreFeature";
import { coreFeatures } from "@/data/home";

export default function CoreFeatures() {
  return (
    <section className="bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-[var(--primary)]">
            Built for real work
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Powerful tools without the complexity.
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
            Nexora brings the essential tools your team needs into one
            focused workspace.
          </p>
        </div>

        <div className="mt-16 space-y-20 sm:mt-20 lg:space-y-28">
          {coreFeatures.map((feature) => (
            <CoreFeature
              key={feature.title}
              {...feature}
            />
          ))}
        </div>

      </div>
    </section>
  );
}