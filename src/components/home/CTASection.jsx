import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-12 text-center shadow-sm sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <p className="text-sm font-semibold text-[var(--primary)]">
            GET STARTED WITH NEXORA
          </p>

          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            Ready to move work forward?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
            Bring your projects, tasks, and team together in one focused
            workspace.
          </p>

          <div className="mt-8">
            <Link
              href="/register"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--primary-hover)] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 active:translate-y-0"
            >
              Start building — it&apos;s free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}