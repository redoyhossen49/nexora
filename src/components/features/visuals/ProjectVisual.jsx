export default function ProjectVisual({
  project,
  team,
  progress,
  status,
}) {
  const totalTasks = 42;
  const completedTasks = 33;
  const remainingTasks = totalTasks - completedTasks;

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-medium text-[var(--text-muted)]">
            PROJECT OVERVIEW
          </p>

          <h3 className="mt-1 truncate text-base font-semibold text-[var(--text-primary)]">
            {project}
          </h3>

          <p className="mt-1 text-xs text-[var(--text-secondary)]">
            {team}
          </p>
        </div>

        <span className="shrink-0 rounded-full bg-[var(--surface-muted)] px-2.5 py-1 text-xs font-medium text-[var(--primary)]">
          {status}
        </span>
      </div>

      <div className="mt-7">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-[var(--text-secondary)]">
            Project progress
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
            className="h-full rounded-full bg-[var(--primary)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-7 grid grid-cols-3 gap-3 border-t border-[var(--border)] pt-5">
        <div>
          <p className="text-[11px] text-[var(--text-muted)]">
            Total tasks
          </p>

          <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
            {totalTasks}
          </p>
        </div>

        <div>
          <p className="text-[11px] text-[var(--text-muted)]">
            Completed
          </p>

          <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
            {completedTasks}
          </p>
        </div>

        <div>
          <p className="text-[11px] text-[var(--text-muted)]">
            Remaining
          </p>

          <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
            {remainingTasks}
          </p>
        </div>
      </div>
    </div>
  );
}