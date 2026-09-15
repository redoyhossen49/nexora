import Link from "next/link";
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  CalendarDays,
  Users,
} from "lucide-react";

const sidebarLinks = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FolderKanban,
    active: false,
  },
  {
    label: "Tasks",
    href: "/tasks",
    icon: CheckSquare,
    active: false,
  },
  {
    label: "Calendar",
    href: "/calendar",
    icon: CalendarDays,
    active: false,
  },
  {
    label: "Team",
    href: "/team",
    icon: Users,
    active: false,
  },
];

export default function DashboardSidebar() {
  return (
    <aside className="hidden w-52 shrink-0 border-r border-[var(--border)] bg-[var(--surface)] md:block">
      <div className="p-4">
        {/* Logo */}
        <Link
          href="/"
          className="block text-lg font-bold tracking-tight text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2"
        >
          Nexora
        </Link>

        {/* Navigation */}
        <nav
          aria-label="Dashboard navigation"
          className="mt-6 space-y-1"
        >
          {sidebarLinks.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={link.active ? "page" : undefined}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] ${
                  link.active
                    ? "bg-[var(--surface-muted)] text-[var(--text-primary)]"
                    : "text-[var(--text-secondary)] hover:bg-[var(--surface-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                <Icon
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0"
                />

                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="mt-8 border-t border-[var(--border)] pt-4">
  <p className="px-3 text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
    Workspace
  </p>

  <div className="mt-3 flex items-center gap-3 px-3">
    <div
      aria-hidden="true"
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-[11px] font-semibold text-white"
    >
      RH
    </div>

    <div className="min-w-0">
      <p className="truncate text-xs font-semibold text-[var(--text-primary)]">
        Redoy Hossen
      </p>

      <p className="truncate text-[11px] text-[var(--text-muted)]">
        Personal workspace
      </p>
    </div>
  </div>
</div>
      </div>
    </aside>
  );
}