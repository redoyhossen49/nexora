export default function SolutionCard({ title, description }) {
  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:p-7">
      <div
        aria-hidden="true"
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-muted)] text-sm font-bold text-[var(--primary)]"
      >
        N
      </div>

      <h2 className="mt-5 text-lg font-semibold text-[var(--text-primary)]">
        {title}
      </h2>

      <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
        {description}
      </p>
    </article>
  );
}