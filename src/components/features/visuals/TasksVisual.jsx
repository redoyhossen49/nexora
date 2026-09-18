const tasks = [
  {
    title: "Finalize homepage design",
    team: "Design Team",
    priority: "High priority",
    status: "completed",
  },
  {
    title: "Review mobile navigation",
    team: "Product Team",
    priority: "In progress",
    status: "progress",
  },
  {
    title: "Prepare launch checklist",
    team: "Marketing Team",
    priority: "Upcoming",
    status: "upcoming",
  },
];

const statusStyles = {
  completed: "bg-emerald-500",
  progress: "bg-[var(--primary)]",
  upcoming: "bg-amber-500",
};

export default function TasksVisual() {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-medium text-[var(--text-muted)]">
            TASK MANAGEMENT
          </p>

          <h3 className="mt-1 text-base font-semibold text-[var(--text-primary)]">
            Today&apos;s priorities
          </h3>
        </div>

        <span className="shrink-0 rounded-lg bg-[var(--surface-muted)] px-2.5 py-1 text-xs font-medium text-[var(--text-secondary)]">
          {tasks.length} tasks
        </span>
      </div>

      <div className="mt-6 space-y-3">
        {tasks.map((task) => (
          <article
            key={task.title}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4"
          >
            <div className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${statusStyles[task.status]}`}
              />

              <div className="min-w-0">
                <h4 className="text-sm font-medium text-[var(--text-primary)]">
                  {task.title}
                </h4>

                <p className="mt-2 text-xs text-[var(--text-muted)]">
                  {task.team} · {task.priority}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}