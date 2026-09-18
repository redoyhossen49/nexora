import Link from "next/link";

import MotionReveal from "@/components/MotionReveal";
import DashboardPreview from "./hero/DashboardPreview";

export default function Hero() {
  return (
    <section className="bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <MotionReveal>
            <div className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-semibold tracking-wide text-[var(--primary)] shadow-sm sm:text-sm">
              <span aria-hidden="true" className="mr-1.5">
                ✦
              </span>
              TEAM PROJECT MANAGEMENT WORKSPACE
            </div>
          </MotionReveal>

          <MotionReveal delay={100}>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl md:leading-[1.08]">
              Manage projects, tasks, and team work{" "}
              <span className="text-[var(--primary)]">
                in one place.
              </span>
            </h1>
          </MotionReveal>

          <MotionReveal delay={180}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8">
              Nexora gives teams a shared workspace to plan projects,
              assign tasks, track progress, and stay aligned from start
              to finish.
            </p>
          </MotionReveal>

          <MotionReveal delay={260}>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                href="/register"
                className="
                  inline-flex items-center justify-center
                  rounded-xl
                  bg-[var(--primary)]
                  px-5 py-3
                  text-sm font-semibold text-white
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:bg-[var(--primary-hover)]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[var(--focus)]
                  focus-visible:ring-offset-2
                "
              >
                Start for free
              </Link>

              <Link
                href="/features"
                className="
                  inline-flex items-center justify-center
                  rounded-xl
                  border border-[var(--border)]
                  bg-[var(--surface)]
                  px-5 py-3
                  text-sm font-semibold
                  text-[var(--text-primary)]
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:bg-[var(--surface-muted)]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[var(--focus)]
                  focus-visible:ring-offset-2
                "
              >
                Explore features
              </Link>
            </div>
          </MotionReveal>

          <MotionReveal delay={330}>
            <p className="mt-5 text-xs font-medium text-[var(--text-muted)] sm:text-sm">
              Create projects · Assign tasks · Track progress
            </p>
          </MotionReveal>
        </div>

        <div className="mt-14 sm:mt-16 lg:mt-20">
  <MotionReveal className="motion-reveal-scale ">
  <DashboardPreview />
</MotionReveal>
</div>
      </div>
    </section>
  );
}