import { ArrowUpRight } from "lucide-react";

export default function MetricCard({ label, value, change }) {
  return (
<div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-[var(--text-secondary)]">
          {label}
        </p>

        <span
          aria-hidden="true"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--surface-muted)] text-[var(--primary)]"
        >
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className="mt-4">
        <p className="text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
          {value}
        </p>

        <p className="mt-1 text-xs font-medium text-[var(--text-muted)]">
          {change}
        </p>
      </div>
    </div>
  );
}