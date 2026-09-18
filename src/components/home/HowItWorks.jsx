import { ArrowRight } from "lucide-react";

import MotionReveal from "@/components/MotionReveal";
import { howItWorksSteps } from "@/data/home";

export default function HowItWorks() {
  return (
    <section className="bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        <MotionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-[var(--primary)]">
              HOW IT WORKS
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              How your team works in Nexora.
            </h2>

            <p className="mt-5 text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
              From creating a project to tracking progress, Nexora keeps every
              step of your team&apos;s workflow connected.
            </p>
          </div>
        </MotionReveal>

        <div className="relative mt-14 lg:mt-16">
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-[12.5%]
              right-[12.5%]
              top-5
              hidden
              h-px
              bg-[var(--border)]
              lg:block
            "
          />

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {howItWorksSteps.map((step, index) => (
              <MotionReveal
                key={step.number}
                delay={index * 120}
              >
                <article className="relative text-center">
                  <div
                    className="
                      relative mx-auto
                      flex h-10 w-10
                      items-center justify-center
                      rounded-full
                      border border-[var(--border)]
                      bg-[var(--surface)]
                      text-xs font-bold
                      text-[var(--primary)]
                      shadow-sm
                    "
                  >
                    {step.number}
                  </div>

                  <h3 className="mt-5 text-base font-semibold text-[var(--text-primary)]">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-[var(--text-secondary)]">
                    {step.description}
                  </p>

                  {index < howItWorksSteps.length - 1 && (
                    <ArrowRight
                      className="
                        mx-auto mt-5
                        h-4 w-4
                        text-[var(--text-muted)]
                        lg:hidden
                      "
                      aria-hidden="true"
                    />
                  )}
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}