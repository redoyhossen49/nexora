"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

import ProjectCard from "@/components/dashboard/ProjectCard";
import { useDashboard } from "@/context/DashboardContext";

export default function ProjectsPage() {
  const { projects, loading, error } = useDashboard();

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isStatusOpen, setIsStatusOpen] = useState(false);

  const statusOptions = [
    { value: "all", label: "All statuses" },
    { value: "On track", label: "On track" },
    { value: "In progress", label: "In progress" },
    { value: "At risk", label: "At risk" },
    { value: "Not started", label: "Not started" },
  ];

  const selectedStatus = statusOptions.find(
    (option) => option.value === statusFilter
  );

  const search = searchTerm.toLowerCase().trim();

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      !search ||
      project.name.toLowerCase().includes(search) ||
      project.team.toLowerCase().includes(search);

    const matchesStatus =
      statusFilter === "all" ||
      project.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Header */}

        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-[var(--primary)]">
              PROJECT MANAGEMENT
            </p>

            <h1 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
              Projects
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
              Manage your workspace projects, track progress, and keep your
              team aligned.
            </p>
          </div>

          <Link
            href="/dashboard/projects/new"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-[var(--primary)] px-5 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2"
          >
            Create project
          </Link>
        </div>

        {/* Search & Filter */}

        <section className="mt-8">
          <div className="grid grid-cols-1 gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm md:grid-cols-[1fr_220px]">
            {/* Search */}

            <div>
              <label
                htmlFor="project-search"
                className="block text-sm font-medium text-[var(--text-primary)]"
              >
                Search projects
              </label>

              <input
                id="project-search"
                type="search"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
                placeholder="Search by project name or team..."
                className="mt-2 h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
              />
            </div>

            {/* Status */}

            <div className="relative z-50">
              <label
                htmlFor="project-status"
                className="block text-sm font-medium text-[var(--text-primary)]"
              >
                Status
              </label>

              <button
                id="project-status"
                type="button"
                onClick={() =>
                  setIsStatusOpen((prev) => !prev)
                }
                className="mt-2 flex h-11 w-full items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 text-sm text-[var(--text-primary)] outline-none transition hover:border-[var(--primary)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
              >
                <span>{selectedStatus?.label}</span>

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    isStatusOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isStatusOpen && (
                <div className="absolute left-0 top-full z-[9999] mt-2 w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)] p-1 shadow-xl">
                  {statusOptions.map((option) => {
                    const isSelected =
                      statusFilter === option.value;

                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                          setStatusFilter(option.value);
                          setIsStatusOpen(false);
                        }}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
                          isSelected
                            ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                            : "text-[var(--text-primary)] hover:bg-[var(--primary)]/5"
                        }`}
                      >
                        <span>{option.label}</span>

                        {isSelected && <Check size={16} />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Project List */}

        <section aria-label="Projects" className="mt-8">
          {/* Loading */}

          {loading && (
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center shadow-sm">
              <p className="text-sm font-medium text-[var(--text-secondary)]">
                Loading projects...
              </p>
            </div>
          )}

          {/* Error */}

          {!loading && error && (
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center shadow-sm">
              <h2 className="text-base font-semibold text-[var(--text-primary)]">
                Unable to load projects
              </h2>

              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {error}
              </p>
            </div>
          )}

          {/* No projects from API */}

          {!loading &&
            !error &&
            projects.length === 0 && (
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center shadow-sm">
                <h2 className="text-base font-semibold text-[var(--text-primary)]">
                  No projects yet
                </h2>

                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  Create your first project to start organizing
                  your team&apos;s work.
                </p>

                <Link
                  href="/dashboard/projects/new"
                  className="mt-5 inline-flex h-10 items-center justify-center rounded-xl bg-[var(--primary)] px-4 text-sm font-semibold text-white"
                >
                  Create project
                </Link>
              </div>
            )}

          {/* No search/filter match */}

          {!loading &&
            !error &&
            projects.length > 0 &&
            filteredProjects.length === 0 && (
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center shadow-sm">
                <h2 className="text-base font-semibold text-[var(--text-primary)]">
                  No matching projects
                </h2>

                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  Try changing your search or status filter.
                </p>
              </div>
            )}

          {/* Projects */}

          {!loading &&
            !error &&
            filteredProjects.length > 0 && (
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.name}
                    name={project.name}
                    team={project.team}
                    progress={project.progress}
                    status={project.status}
                    priority={project.priority}
                    tasks={project.tasks}
                    completedTasks={project.completedTasks}
                    deadline={project.deadline}
                  />
                ))}
              </div>
            )}
        </section>
      </div>
    </div>
  );
}