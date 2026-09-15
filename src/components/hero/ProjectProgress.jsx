import StatusBadge, { statusStyles } from "./StatusBadge";

export default function ProjectProgress({
  name,
  team,
  progress,
  status,
}) {

    const currentStatus = statusStyles[status] ?? {
  progressClassName: "bg-[var(--primary)]",
};
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-[var(--text-primary)]">
            {name}
          </h3>

          <p className="mt-1 text-xs text-[var(--text-muted)]">
            {team}
          </p>
        </div>

        <StatusBadge status={status} />
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium text-[var(--text-secondary)]">
            Progress
          </span>

          <span className="text-xs font-semibold text-[var(--text-primary)]">
            {progress}%
          </span>
        </div>

        <div
          className="h-2 overflow-hidden rounded-full bg-[var(--surface-muted)]"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name} progress`}
        >
         <div
  className={`h-full rounded-full transition-all duration-500 ${currentStatus.progressClassName}`}
  style={{ width: `${progress}%` }}
/>
        </div>
      </div>
    </div>
  );
}