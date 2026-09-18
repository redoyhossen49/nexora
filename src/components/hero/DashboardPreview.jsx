import {
  dashboardActivities,
  dashboardMetrics,
  dashboardProjects,
} from "@/data/dashboard";

import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import MetricCard from "./MetricCard";
import ProjectProgress from "./ProjectProgress";
import ActivityList from "./ActivityList";

export default function DashboardPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-left shadow-xl">
      <div className="flex min-h-[620px]">
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main */}
        <div className="min-w-0 flex-1">
          <DashboardHeader />

          <main className="p-4 sm:p-6">
            {/* Page heading */}
            <div>
              <p className="text-xs font-medium text-[var(--text-muted)]">
                WORKSPACE OVERVIEW
              </p>

              <h2 className="mt-1 text-lg font-semibold text-[var(--text-primary)]">
                Good morning, Alex
              </h2>

              <p className="mt-1 text-xs text-[var(--text-secondary)] sm:text-sm">
                Here&apos;s what&apos;s happening across your projects.
              </p>
            </div>

            {/* Metrics */}
            <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {dashboardMetrics.map((metric) => (
                <MetricCard
                  key={metric.label}
                  label={metric.label}
                  value={metric.value}
                  change={metric.change}
                />
              ))}
            </div>

            {/* Main content */}
            <div className="mt-6 grid gap-4 xl:grid-cols-[1.5fr_1fr]">
              {/* Projects */}
              <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                      Active projects
                    </h3>

                    <p className="mt-1 text-xs text-[var(--text-muted)]">
                      Current project progress
                    </p>
                  </div>

                  <span className="text-xs font-medium text-[var(--primary)]">
                    View all
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  {dashboardProjects.map((project) => (
                    <ProjectProgress
                      key={project.name}
                      name={project.name}
                      team={project.team}
                      progress={project.progress}
                      status={project.status}
                      tasks={project.tasks}
                      completedTasks={project.completedTasks}
                    />
                  ))}
                </div>
              </section>

              {/* Activity */}
              <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                    Recent activity
                  </h3>

                  <p className="mt-1 text-xs text-[var(--text-muted)]">
                    Latest updates from your team
                  </p>
                </div>

                <div className="mt-4">
                  <ActivityList activities={dashboardActivities} />
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}