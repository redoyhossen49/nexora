export default function MetricCard({ label, value, change }) {
  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
      <p className="text-sm font-medium text-[var(--text-secondary)]">
        {label}
      </p>

      <p className="mt-3 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
        {value}
      </p>

      <p className="mt-2 text-xs font-medium text-[var(--text-muted)] sm:text-sm">
        {change}
      </p>
    </article>
  );
}