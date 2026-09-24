import Link from "next/link";
import { FolderPlus, ListPlus } from "lucide-react";

const actions = [
  {
    label: "Create project",
    href: "/dashboard/projects/new",
    icon: FolderPlus,
  },
  {
    label: "Create task",
    href: "/dashboard/tasks/new",
    icon: ListPlus,
  },
];

export default function QuickActions() {
  return (
    <section className="mt-8">
      <div>
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">
          Quick actions
        </h2>

        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          Start common workspace actions quickly.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.href}
              href={action.href}
              className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-sm font-semibold text-[var(--text-primary)] shadow-sm transition-colors hover:bg-[var(--surface-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2"
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--surface-muted)] text-[var(--primary)]"
              >
                <Icon className="h-5 w-5" />
              </span>

              <span>{action.label}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}