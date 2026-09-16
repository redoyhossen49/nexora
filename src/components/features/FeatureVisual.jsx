export default function FeatureVisual({
  type,
  project,
  team,
  progress,
  status,
}) {
  if (type === "project") {
    return (
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-[var(--text-muted)]">
              PROJECT
            </p>

            <h3 className="mt-1 text-base font-semibold text-[var(--text-primary)]">
              {project}
            </h3>

            <p className="mt-1 text-xs text-[var(--text-muted)]">
              {team}
            </p>
          </div>

          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
            {status}
          </span>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-[var(--text-secondary)]">
              Overall progress
            </span>

            <span className="text-xs font-semibold text-[var(--text-primary)]">
              {progress}%
            </span>
          </div>

          <div className="mt-2 h-2 overflow-hidden rounded-full bg-[var(--surface-muted)]">
            <div
              className="h-full rounded-full bg-emerald-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-[var(--surface-muted)] p-3">
            <p className="text-[11px] text-[var(--text-muted)]">Tasks</p>
            <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
              42
            </p>
          </div>

          <div className="rounded-xl bg-[var(--surface-muted)] p-3">
            <p className="text-[11px] text-[var(--text-muted)]">
              Completed
            </p>
            <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
              33
            </p>
          </div>

          <div className="rounded-xl bg-[var(--surface-muted)] p-3">
            <p className="text-[11px] text-[var(--text-muted)]">Members</p>
            <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
              8
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "tasks") {
    return (
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm sm:p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-[var(--text-muted)]">
              TASK BOARD
            </p>

            <h3 className="mt-1 text-base font-semibold text-[var(--text-primary)]">
              Today&apos;s priorities
            </h3>
          </div>

          <span className="rounded-lg bg-[var(--surface-muted)] px-2.5 py-1 text-xs font-medium text-[var(--text-secondary)]">
            8 tasks
          </span>
        </div>

        <div className="mt-6 space-y-3">
          <div className="rounded-xl border border-[var(--border)] p-4">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

              <p className="text-sm font-medium text-[var(--text-primary)]">
                Finalize homepage design
              </p>
            </div>

            <p className="mt-2 text-xs text-[var(--text-muted)]">
              Design Team · High priority
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border)] p-4">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />

              <p className="text-sm font-medium text-[var(--text-primary)]">
                Review mobile navigation
              </p>
            </div>

            <p className="mt-2 text-xs text-[var(--text-muted)]">
              Product Team · In progress
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border)] p-4">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />

              <p className="text-sm font-medium text-[var(--text-primary)]">
                Prepare launch checklist
              </p>
            </div>

            <p className="mt-2 text-xs text-[var(--text-muted)]">
              Marketing Team · Upcoming
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "team") {
    return (
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm sm:p-8">
        <div>
          <p className="text-xs font-medium text-[var(--text-muted)]">
            TEAM ACTIVITY
          </p>

          <h3 className="mt-1 text-base font-semibold text-[var(--text-primary)]">
            Recent collaboration
          </h3>
        </div>

        <div className="mt-6 space-y-5">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--surface-muted)] text-xs font-semibold text-[var(--text-secondary)]">
              SC
            </div>

            <div>
              <p className="text-sm text-[var(--text-secondary)]">
                <span className="font-semibold text-[var(--text-primary)]">
                  Sarah Chen
                </span>{" "}
                completed Homepage wireframes
              </p>

              <p className="mt-1 text-xs text-[var(--text-muted)]">
                12 min ago
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--surface-muted)] text-xs font-semibold text-[var(--text-secondary)]">
              AM
            </div>

            <div>
              <p className="text-sm text-[var(--text-secondary)]">
                <span className="font-semibold text-[var(--text-primary)]">
                  Alex Morgan
                </span>{" "}
                updated Mobile App
              </p>

              <p className="mt-1 text-xs text-[var(--text-muted)]">
                38 min ago
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--surface-muted)] text-xs font-semibold text-[var(--text-secondary)]">
              MP
            </div>

            <div>
              <p className="text-sm text-[var(--text-secondary)]">
                <span className="font-semibold text-[var(--text-primary)]">
                  Maya Patel
                </span>{" "}
                created Marketing Campaign
              </p>

              <p className="mt-1 text-xs text-[var(--text-muted)]">
                1 hr ago
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "analytics") {
    return (
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm sm:p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-[var(--text-muted)]">
              ANALYTICS
            </p>

            <h3 className="mt-1 text-base font-semibold text-[var(--text-primary)]">
              Project performance
            </h3>
          </div>

          <span className="text-xs font-medium text-emerald-600">
            +18.4%
          </span>
        </div>

        <div className="mt-8 flex h-40 items-end gap-3">
          <div className="h-[35%] flex-1 rounded-t-md bg-[var(--surface-muted)]" />
          <div className="h-[50%] flex-1 rounded-t-md bg-[var(--surface-muted)]" />
          <div className="h-[42%] flex-1 rounded-t-md bg-[var(--surface-muted)]" />
          <div className="h-[68%] flex-1 rounded-t-md bg-[var(--surface-muted)]" />
          <div className="h-[58%] flex-1 rounded-t-md bg-[var(--surface-muted)]" />
          <div className="h-[82%] flex-1 rounded-t-md bg-[var(--primary)]" />
          <div className="h-[94%] flex-1 rounded-t-md bg-[var(--primary)]" />
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-[var(--border)] pt-4">
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

  return null;
}