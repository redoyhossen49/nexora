import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Create and organize projects",
  "Assign tasks to your team",
  "Track progress from one workspace",
];

export default function CTASection() {
  return (
    <section className="bg-[var(--surface-muted)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-12 text-center shadow-sm sm:px-10 sm:py-14 lg:px-16">
          <p className="text-sm font-semibold text-[var(--primary)]">
            START ORGANIZING YOUR WORK
          </p>

          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Bring your projects, tasks, and team into one workspace.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
            Create a Nexora workspace and give your team a clear place to
            plan work, assign responsibilities, and track progress.
          </p>

          {/* Product capabilities */}
          <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2"
              >
                <CheckCircle2
                  className="h-4 w-4 shrink-0 text-[var(--primary)]"
                  aria-hidden="true"
                />

                <span className="text-sm text-[var(--text-secondary)]">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2"
            >
              Create your workspace

              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/features"
              className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:bg-[var(--surface-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2"
            >
              Explore features
            </Link>
          </div>

          <p className="mt-5 text-xs text-[var(--text-muted)]">
            Start with a workspace and add your team when you&apos;re ready.
          </p>
        </div>
      </div>
    </section>
  );
}