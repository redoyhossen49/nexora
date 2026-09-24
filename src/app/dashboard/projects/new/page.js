"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDashboard } from "@/context/DashboardContext";

export default function CreateProjectPage() {
  const router = useRouter();

  const { setProjects, setActivities } = useDashboard();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    team: "",
    priority: "Medium",
    deadline: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newProject = {
      name: formData.name,
      team: formData.team,
      progress: 0,
      status: "Not started",
      tasks: 0,
      completedTasks: 0,
    };

    const newActivity = {
      user: "You",
      action: "created",
      target: formData.name,
      project: formData.name,
      time: "Just now",
    };

    setProjects((currentProjects) => [
      ...currentProjects,
      newProject,
    ]);

    setActivities((currentActivities) => [
      newActivity,
      ...currentActivities,
    ]);

    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back link */}
        <div>
          <Link
            href="/dashboard"
            className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2"
          >
            ← Back to dashboard
          </Link>
        </div>

        {/* Page heading */}
        <div className="mt-6">
          <p className="text-sm font-semibold text-[var(--primary)]">
            PROJECT MANAGEMENT
          </p>

          <h1 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
            Create project
          </h1>

          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            Set up a new project and start organizing your team&apos;s work.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm sm:p-6"
        >
          <div className="space-y-5">
            {/* Project name */}
            <div>
              <label
                htmlFor="project-name"
                className="block text-sm font-medium text-[var(--text-primary)]"
              >
                Project name
              </label>

              <input
                id="project-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Website Redesign"
                className="mt-2 h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="project-description"
                className="block text-sm font-medium text-[var(--text-primary)]"
              >
                Description
              </label>

              <textarea
                id="project-description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                placeholder="What is this project about?"
                className="mt-2 w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
              />
            </div>

            {/* Team */}
            <div>
              <label
                htmlFor="project-team"
                className="block text-sm font-medium text-[var(--text-primary)]"
              >
                Team
              </label>

              <select
                id="project-team"
                name="team"
                value={formData.team}
                onChange={handleChange}
                className="mt-2 h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
              >
                <option value="">Select a team</option>
                <option value="Design Team">Design Team</option>
                <option value="Product Team">Product Team</option>
                <option value="Marketing Team">Marketing Team</option>
                <option value="Growth Team">Growth Team</option>
              </select>
            </div>

            {/* Priority */}
            <div>
              <label
                htmlFor="project-priority"
                className="block text-sm font-medium text-[var(--text-primary)]"
              >
                Priority
              </label>

              <select
                id="project-priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="mt-2 h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            {/* Deadline */}
            <div>
              <label
                htmlFor="project-deadline"
                className="block text-sm font-medium text-[var(--text-primary)]"
              >
                Deadline
              </label>

              <input
                id="project-deadline"
                name="deadline"
                type="date"
                value={formData.deadline}
                onChange={handleChange}
                className="mt-2 h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col-reverse gap-3 border-t border-[var(--border)] pt-5 sm:flex-row sm:justify-end">
            <Link
              href="/dashboard"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:bg-[var(--surface-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-[var(--primary)] px-5 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2"
            >
              Create project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}