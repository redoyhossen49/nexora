"use client"
import MetricCard from "@/components/dashboard/MetricCard";
import QuickActions from "@/components/dashboard/QuickActions";
import ActivityList from "@/components/shared/ActivityList";
import ProjectProgress from "@/components/shared/ProjectProgress";
import { useDashboard } from "@/context/DashboardContext";



const metrics = [
  {
    label: "Active projects",
    value: "12",
    change: "+2 this month",
  },
  {
    label: "Open tasks",
    value: "64",
    change: "18 due this week",
  },
  {
    label: "Completed tasks",
    value: "248",
    change: "+18.4%",
  },
  {
    label: "Team members",
    value: "24",
    change: "+3 this month",
  },
];

export default function DashboardPage() {
  const {projects,activities}=useDashboard();
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold text-[var(--primary)]">
            WORKSPACE OVERVIEW
          </p>

          <h1 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
            Dashboard
          </h1>

          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            Track your projects, tasks, and team activity from one place.
          </p>
        </div>
        <section
          aria-label="Workspace metrics"
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
           {
            metrics.map((metric)=>
               (
                <MetricCard key={metric.value}
                  label={metric.label}
                  value={metric.value}
                  change={metric.change}
                />
              )
            )
           }
        </section>

        <QuickActions/>

        <section className="mt-8">
  <div>
    <h2 className="text-lg font-semibold text-[var(--text-primary)]">
      Projects
    </h2>

    <p className="mt-1 text-sm text-[var(--text-secondary)]">
      Your active projects and their current progress.
    </p>
  </div>

  <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
    {projects.map((project) => (
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
<section className="mt-10">
  <div>
    <h2 className="text-lg font-semibold text-[var(--text-primary)]">
      Recent activity
    </h2>

    <p className="mt-1 text-sm text-[var(--text-secondary)]">
      See what your team has been working on recently.
    </p>
  </div>

  <div className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
    <ActivityList activities={activities} />
  </div>
</section>
      </div>
    </div>
  );
}