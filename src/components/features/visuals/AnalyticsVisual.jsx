const weeklyProgress = [35, 50, 42, 68, 58, 82, 94];

export default function AnalyticsVisual({ progress }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-medium text-[var(--text-muted)]">
            ANALYTICS
          </p>

          <h3 className="mt-1 text-base font-semibold text-[var(--text-primary)]">
            Project performance
          </h3>
        </div>

        <span className="text-xs font-medium text-[var(--primary)]">
          +18.4%
        </span>
      </div>

      <div className="mt-8 flex h-40 items-end gap-2 border-b border-[var(--border)]">
        {weeklyProgress.map((value, index) => {
          const isLatest = index === weeklyProgress.length - 1;
          const height = isLatest ? progress : value;

          return (
            <div
              key={index}
              className={`flex-1 rounded-t-md ${
                isLatest
                  ? "bg-[var(--primary)]"
                  : "bg-[var(--surface-muted)]"
              }`}
              style={{ height: `${height}%` }}
            />
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <span className="text-xs text-[var(--text-muted)]">
          Last 7 weeks
        </span>

        <span className="text-xs font-semibold text-[var(--text-primary)]">
          248 tasks completed
        </span>
      </div>
    </div>
  );
}