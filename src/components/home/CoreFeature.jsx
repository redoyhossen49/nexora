import { statusStyles } from "../hero/StatusBadge";

export default function CoreFeature({
  eyebrow,
  title,
  description,
  project,
  team,
  progress,
  status,
  reverse,
}) {
  const currentStatus = statusStyles[status] ?? {
    className:
      "bg-[var(--surface-muted)] text-[var(--text-secondary)]",
    progressClassName: "bg-[var(--primary)]",
  };

  return (
    <div
      className={`flex flex-col gap-10 lg:items-center lg:gap-16 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {/* Content */}
      <div className="flex-1">
        <p className="text-sm font-semibold text-[var(--primary)]">
          {eyebrow}
        </p>

        <h3 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
          {title}
        </h3>

        <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
          {description}
        </p>
      </div>

      {/* Visual */}
      <div className="flex-1">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-[var(--text-primary)]">
                {project}
              </p>

              <p className="mt-1 text-xs text-[var(--text-muted)]">
                {team}
              </p>
            </div>

            <span
              className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${currentStatus.className}`}
            >
              {status}
            </span>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-[var(--text-secondary)]">
                Progress
              </span>

              <span className="text-xs font-semibold text-[var(--text-primary)]">
                {progress}%
              </span>
            </div>

            <div
              className="mt-2 h-2 overflow-hidden rounded-full bg-[var(--surface-muted)]"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${project} progress`}
            >
              <div
                className={`h-full rounded-full transition-all duration-500 ${currentStatus.progressClassName}`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-[var(--border)] pt-5">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wide text-[var(--text-muted)]">
                Team
              </p>

              <p className="mt-1 text-xs font-semibold text-[var(--text-primary)]">
                {team}
              </p>
            </div>

            <div className="text-right">
              <p className="text-[11px] font-medium uppercase tracking-wide text-[var(--text-muted)]">
                Completion
              </p>

              <p className="mt-1 text-xs font-semibold text-[var(--primary)]">
                {progress}% complete
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}