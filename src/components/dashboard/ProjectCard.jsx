import Link from "next/link";

export default function ProjectCard({
  name,
  team,
  progress,
  status,
  priority,
  tasks,
  completedTasks,
  deadline,
}) {
  const remainingTasks = tasks - completedTasks;

  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h2 className="truncate text-base font-semibold text-[var(--text-primary)]">
            {name}
          </h2>

          <p className="mt-1 text-sm text-[var(--text-muted)]">
            {team}
          </p>
        </div>

        <span className="shrink-0 rounded-full bg-[var(--surface-muted)] px-2.5 py-1 text-xs font-medium text-[var(--primary)]">
          {status}
        </span>
      </div>

      <div className="mt-5">
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
          aria-label={`${name} progress`}
        >
          <div
            className="h-full rounded-full bg-[var(--primary)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4 border-t border-[var(--border)] pt-4">
        <div>
          <p className="text-xs text-[var(--text-muted)]">
            Tasks
          </p>

          <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
            {completedTasks} of {tasks}
          </p>
        </div>

        <div>
          <p className="text-xs text-[var(--text-muted)]">
            Remaining
          </p>

          <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
            {remainingTasks}
          </p>
        </div>

        <div>
          <p className="text-xs text-[var(--text-muted)]">
            Priority
          </p>

          <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
            {priority || "Not set"}
          </p>
        </div>

        <div>
          <p className="text-xs text-[var(--text-muted)]">
            Deadline
          </p>

          <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
            {deadline || "No deadline"}
          </p>
        </div>
      </div>

      <div className="mt-5 border-t border-[var(--border)] pt-4">
        <Link
          href={`/dashboard/projects/${encodeURIComponent(name)}`}
          className="text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2"
        >
          View project →
        </Link>
      </div>
    </article>
  );
}