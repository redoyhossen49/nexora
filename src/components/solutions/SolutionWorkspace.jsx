import {
  CheckCircle2,
  MessageCircle,
  Users,
} from "lucide-react";

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
    action: "created Campaign brief",
    time: "1 hr ago",
  },
];

const stats = [
  {
    label: "Projects",
    value: "12",
  },
  {
    label: "Tasks",
    value: "248",
  },
  {
    label: "Members",
    value: "24",
  },
];

export default function SolutionWorkspace() {
  return (
    <section className="bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          {/* Content */}
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-[var(--primary)]">
              ONE SHARED WORKSPACE
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Give everyone a clear view of the work.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
              Projects, tasks, people, and activity stay connected in one
              workspace so your team can understand what is happening without
              searching through different tools.
            </p>

            <div className="mt-7 space-y-4">
              <Benefit
                icon={CheckCircle2}
                text="Keep projects and tasks organized in one place."
              />

              <Benefit
                icon={Users}
                text="See who is responsible for the work."
              />

              <Benefit
                icon={MessageCircle}
                text="Keep updates connected to the work they belong to."
              />
            </div>
          </div>

          {/* Workspace preview */}
          <div className="min-w-0 flex-1">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
                <div>
                  <p className="text-[11px] font-medium text-[var(--text-muted)]">
                    WORKSPACE
                  </p>

                  <h3 className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
                    Product Team
                  </h3>
                </div>

                <Users
                  className="h-5 w-5 text-[var(--primary)]"
                  aria-hidden="true"
                />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 border-b border-[var(--border)]">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-r border-[var(--border)] px-4 py-4 last:border-r-0"
                  >
                    <p className="text-[11px] text-[var(--text-muted)]">
                      {stat.label}
                    </p>

                    <p className="mt-1 text-lg font-semibold text-[var(--text-primary)]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Activity */}
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                      Recent activity
                    </h4>

                    <p className="mt-1 text-xs text-[var(--text-muted)]">
                      Latest updates from your team
                    </p>
                  </div>

                  <span className="text-xs font-medium text-[var(--primary)]">
                    View all
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {activities.map((activity) => (
                    <div
                      key={`${activity.name}-${activity.action}`}
                      className="flex items-start gap-3"
                    >
                      <div
                        aria-hidden="true"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--surface-muted)] text-[11px] font-semibold text-[var(--text-secondary)]"
                      >
                        {activity.initials}
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs leading-5 text-[var(--text-secondary)]">
                          <span className="font-semibold text-[var(--text-primary)]">
                            {activity.name}
                          </span>{" "}
                          {activity.action}
                        </p>

                        <p className="mt-1 text-[11px] text-[var(--text-muted)]">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefit({ icon: Icon, text }) {
  return (
    <div className="flex items-start gap-3">
      <Icon
        className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary)]"
        aria-hidden="true"
      />

      <p className="text-sm leading-6 text-[var(--text-secondary)]">
        {text}
      </p>
    </div>
  );
}