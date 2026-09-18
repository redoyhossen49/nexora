const activities = [
  {
    initials: "SC",
    name: "Sarah Chen",
    action: "completed Homepage wireframes",
    time: "12 min ago",
  },
  {
    initials: "AM",
    name: "Alex Morgan",
    action: "updated Mobile App",
    time: "38 min ago",
  },
  {
    initials: "MP",
    name: "Maya Patel",
    action: "created Marketing Campaign",
    time: "1 hr ago",
  },
];

export default function TeamVisual() {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-6">
      <div className="border-b border-[var(--border)] pb-5">
        <p className="text-xs font-medium text-[var(--text-muted)]">
          TEAM ACTIVITY
        </p>

        <h3 className="mt-1 text-base font-semibold text-[var(--text-primary)]">
          Recent collaboration
        </h3>
      </div>

      <div className="mt-5 space-y-5">
        {activities.map((activity) => (
          <article
            key={`${activity.name}-${activity.action}`}
            className="flex items-start gap-3"
          >
            <div
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--surface-muted)] text-xs font-semibold text-[var(--text-secondary)]"
            >
              {activity.initials}
            </div>

            <div className="min-w-0">
              <p className="text-sm leading-5 text-[var(--text-secondary)]">
                <span className="font-semibold text-[var(--text-primary)]">
                  {activity.name}
                </span>{" "}
                {activity.action}
              </p>

              <p className="mt-1 text-xs text-[var(--text-muted)]">
                {activity.time}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}