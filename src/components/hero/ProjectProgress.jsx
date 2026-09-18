export default function ProjectProgress({
  name,
  team,
  progress,
  status,
  tasks,
  completedTasks,
}) {
  return (
    <article className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-[var(--text-primary)]">
            {name}
          </h3>

          <p className="mt-1 text-xs text-[var(--text-muted)]">
            {team}
          </p>
        </div>

        <span className="shrink-0 rounded-full bg-[var(--surface-muted)] px-2 py-1 text-[11px] font-medium text-[var(--primary)]">
          {status}
        </span>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between">
          <span className="text-xs text-[var(--text-secondary)]">
            Progress
          </span>

          <span className="text-xs font-semibold text-[var(--text-primary)]">
            {progress}%
          </span>
        </div>

        <div
          className="mt-2 h-1.5 overflow-hidden rounded-full bg-[var(--surface-muted)]"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name} progress`}
        >
          <div
            className="h-full rounded-full bg-[var(--primary)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-[var(--border)] pt-4">
        <span className="text-xs text-[var(--text-muted)]">
          {completedTasks} of {tasks} tasks completed
        </span>

        <span className="text-xs font-medium text-[var(--text-secondary)]">
          {tasks - completedTasks} remaining
        </span>
      </div>
    </article>
  );
}