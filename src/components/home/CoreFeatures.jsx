import CoreFeature from "./CoreFeature";
import MotionReveal from "@/components/MotionReveal";
import { coreFeatures } from "@/data/home";

export default function CoreFeatures() {
  return (
    <section className="bg-[var(--surface-muted)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        <MotionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-[var(--primary)]">
              CORE CAPABILITIES
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Everything connects to the work your team is doing.
            </h2>

            <p className="mt-5 text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
              Nexora brings projects, tasks, people, and progress together so
              your team always has a clear view of the work.
            </p>
          </div>
        </MotionReveal>

        <div className="mt-14 space-y-20 sm:mt-16 sm:space-y-24 lg:mt-20 lg:space-y-28">
          {coreFeatures.map((feature, index) => (
            <MotionReveal
              key={feature.eyebrow}
              delay={index * 80}
            >
              <CoreFeature
                eyebrow={feature.eyebrow}
                title={feature.title}
                description={feature.description}
                project={feature.project}
                team={feature.team}
                progress={feature.progress}
                status={feature.status}
                visual={feature.visual}
                reverse={feature.reverse}
              />
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}