import { solutionWorkflow } from "@/data/solutions";

export default function SolutionWorkflow() {
  return (
    <section className="bg-[var(--surface-muted)] ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-[var(--primary)]">
            HOW NEXORA HELPS
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Less scattered work. More meaningful progress.
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
            Nexora gives teams a clearer way to organize work, collaborate,
            and understand what needs attention.
          </p>
        </div>

        {/* Workflow */}
        <div className="mt-12 grid gap-4  md:grid-cols-3">
          {solutionWorkflow.map((item, index) => (
            <article
              key={item.label}
              className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--surface-muted)] text-xs font-bold text-[var(--primary)]">
                  0{index + 1}
                </span>

                <p className="text-xs font-semibold tracking-wide text-[var(--text-muted)]">
                  {item.label}
                </p>
              </div>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-[var(--text-primary)]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}