const activityInitials = (name) => {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

export default function ActivityList({ activities }) {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div
          key={`${activity.user}-${activity.time}`}
          className="flex items-start gap-3"
        >
          {/* Avatar */}
          <div
            aria-hidden="true"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--surface-muted)] text-xs font-semibold text-[var(--text-secondary)]"
          >
            {activityInitials(activity.user)}
          </div>

          {/* Activity content */}
          <div className="min-w-0 flex-1">
            <p className="text-sm leading-5 text-[var(--text-secondary)]">
              <span className="font-semibold text-[var(--text-primary)]">
                {activity.user}
              </span>{" "}
              {activity.action}{" "}
              <span className="font-medium text-[var(--text-primary)]">
                {activity.target}
              </span>
            </p>

            <p className="mt-1 text-xs text-[var(--text-muted)]">
              {activity.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}