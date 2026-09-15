import { dashboardActivities, dashboardMetrics, dashboardProjects } from "@/data/dashboard";
import MetricCard from "./MetricCard";
import Link from "next/link";
import ProjectProgress from "./ProjectProgress";
import ActivityList from "./ActivityList";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

export default function DashboardPreview() {
  return (
    <div className="mt-14 sm:mt-16 md:mt-20">
      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xl shadow-slate-900/5">

        {/* Dashboard */}
       <div className="flex min-h-[520px]">

          {/* Sidebar */}
          <DashboardSidebar></DashboardSidebar>

          {/* Main */}
          <main className="min-w-0 flex-1 bg-[var(--background)] p-4 sm:p-6 md:p-8">

            {/* Header */}
           <div>
  <DashboardHeader />

  <div className="mt-5">
    <p className="text-xs font-medium text-[var(--text-muted)]">
      Workspace overview
    </p>

    <h2 className="mt-1 text-xl font-semibold text-[var(--text-primary)] sm:text-2xl">
      Good morning, team
    </h2>
  </div>
</div>

            {/* Placeholder content */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {dashboardMetrics.map((metric) => (
    <MetricCard
      key={metric.label}
      label={metric.label}
      value={metric.value}
      change={metric.change}
    />
  ))}
</div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
  <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
    <div className="flex items-center justify-between gap-4">
      <div>
        <h3 className="text-sm font-semibold text-[var(--text-primary)]">
          Project progress
        </h3>

        <p className="mt-1 text-xs text-[var(--text-muted)]">
          Track your active projects
        </p>
      </div>

      <button
        type="button"
        className="shrink-0 text-xs font-semibold text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2"
      >
        View all
      </button>
    </div>

    <div className="mt-5 space-y-3">
      {dashboardProjects.map((project) => (
        <ProjectProgress
          key={project.name}
          name={project.name}
          team={project.team}
          progress={project.progress}
          status={project.status}
        />
      ))}
    </div>
  </div>

<div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
  <div className="flex items-center justify-between gap-4">
    <div>
      <h3 className="text-sm font-semibold text-[var(--text-primary)]">
        Recent activity
      </h3>

      <p className="mt-1 text-xs text-[var(--text-muted)]">
        Latest updates from your workspace
      </p>
    </div>

    <button
      type="button"
      className="shrink-0 text-xs font-semibold text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2"
    >
      View all
    </button>
  </div>

  <div className="mt-5">
    <ActivityList activities={dashboardActivities} />
  </div>
</div>
</div>

          </main>
        </div>
      </div>
    </div>
  );
}