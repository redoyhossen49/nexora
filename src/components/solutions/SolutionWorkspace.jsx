import { CheckCircle2, MessageCircle, Users } from "lucide-react";

export default function SolutionWorkspace() {
  return (
    <section className="bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold text-[var(--primary)]">
              ONE SHARED WORKSPACE
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Give your team one clear place to work.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
              Projects, tasks, conversations, and team activity stay connected
              so your team spends less time searching for information and more
              time getting work done.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary)]"
                  aria-hidden="true"
                />

                <span className="text-sm leading-6 text-[var(--text-secondary)]">
                  Keep project priorities visible to everyone.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary)]"
                  aria-hidden="true"
                />

                <span className="text-sm leading-6 text-[var(--text-secondary)]">
                  Connect tasks with the people responsible for them.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary)]"
                  aria-hidden="true"
                />

                <span className="text-sm leading-6 text-[var(--text-secondary)]">
                  See important team activity without switching tools.
                </span>
              </li>
            </ul>
          </div>

          {/* Workspace visual */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm sm:p-7">
            {/* Header */}
            <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-5">
              <div>
                <p className="text-xs font-medium text-[var(--text-muted)]">
                  WORKSPACE
                </p>

                <h3 className="mt-1 text-base font-semibold text-[var(--text-primary)]">
                  Team overview
                </h3>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--surface-muted)] text-[var(--primary)]">
                <Users className="h-4 w-4" aria-hidden="true" />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 py-5">
              <div>
                <p className="text-xs text-[var(--text-muted)]">Projects</p>
                <p className="mt-1 text-lg font-semibold text-[var(--text-primary)]">
                  12
                </p>
              </div>

              <div>
                <p className="text-xs text-[var(--text-muted)]">Tasks</p>
                <p className="mt-1 text-lg font-semibold text-[var(--text-primary)]">
                  248
                </p>
              </div>

              <div>
                <p className="text-xs text-[var(--text-muted)]">Members</p>
                <p className="mt-1 text-lg font-semibold text-[var(--text-primary)]">
                  24
                </p>
              </div>
            </div>

            {/* Activity */}
            <div className="border-t border-[var(--border)] pt-5">
              <p className="text-xs font-semibold text-[var(--text-muted)]">
                RECENT ACTIVITY
              </p>

              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--surface-muted)]">
                    <CheckCircle2
                      className="h-4 w-4 text-[var(--primary)]"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-[var(--text-secondary)]">
                      <span className="font-semibold text-[var(--text-primary)]">
                        Sarah
                      </span>{" "}
                      completed a task
                    </p>

                    <p className="mt-1 text-xs text-[var(--text-muted)]">
                      12 min ago
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--surface-muted)]">
                    <MessageCircle
                      className="h-4 w-4 text-[var(--primary)]"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-[var(--text-secondary)]">
                      <span className="font-semibold text-[var(--text-primary)]">
                        Alex
                      </span>{" "}
                      commented on Mobile App
                    </p>

                    <p className="mt-1 text-xs text-[var(--text-muted)]">
                      38 min ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}