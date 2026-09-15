export default function DashboardSkeleton() {
  return (
    <div
      aria-label="Loading dashboard"
      className="animate-pulse"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div className="h-10 flex-1 rounded-lg bg-[var(--surface-muted)]" />

        <div className="flex gap-2">
          <div className="h-10 w-10 rounded-lg bg-[var(--surface-muted)]" />
          <div className="h-10 w-10 rounded-full bg-[var(--surface-muted)]" />
        </div>
      </div>

      {/* Heading */}
      <div className="mt-5 space-y-2">
        <div className="h-3 w-28 rounded bg-[var(--surface-muted)]" />
        <div className="h-7 w-52 rounded bg-[var(--surface-muted)]" />
      </div>

      {/* Metrics */}
      <div className="mt-7 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="h-28 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"
          >
            <div className="h-4 w-24 rounded bg-[var(--surface-muted)]" />
            <div className="mt-5 h-7 w-16 rounded bg-[var(--surface-muted)]" />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        {/* Projects */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <div className="h-4 w-32 rounded bg-[var(--surface-muted)]" />
          <div className="mt-2 h-3 w-48 rounded bg-[var(--surface-muted)]" />

          <div className="mt-6 space-y-5">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <div className="h-4 w-28 rounded bg-[var(--surface-muted)]" />
                  <div className="h-5 w-16 rounded-full bg-[var(--surface-muted)]" />
                </div>

                <div className="mt-3 h-2 rounded-full bg-[var(--surface-muted)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Activity */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <div className="h-4 w-32 rounded bg-[var(--surface-muted)]" />
          <div className="mt-2 h-3 w-48 rounded bg-[var(--surface-muted)]" />

          <div className="mt-6 space-y-5">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="flex items-start gap-3"
              >
                <div className="h-9 w-9 shrink-0 rounded-full bg-[var(--surface-muted)]" />

                <div className="min-w-0 flex-1 space-y-2">
                  <div className="h-3 w-full rounded bg-[var(--surface-muted)]" />
                  <div className="h-3 w-20 rounded bg-[var(--surface-muted)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}