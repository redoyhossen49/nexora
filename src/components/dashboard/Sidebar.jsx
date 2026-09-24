"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Users,
  Activity,
  Settings,
  X,
} from "lucide-react";

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Projects",
    href: "/dashboard/projects",
    icon: FolderKanban,
  },
  {
    label: "Tasks",
    href: "/dashboard/tasks",
    icon: CheckSquare,
  },
  {
    label: "Team",
    href: "/dashboard/team",
    icon: Users,
  },
  {
    label: "Activity",
    href: "/dashboard/activity",
    icon: Activity,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 border-r border-[var(--border)] bg-[var(--surface)] transition-transform duration-300 md:z-30 md:translate-x-0 md:transition-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">

          {/* Logo */}
          <div className="flex h-16 items-center justify-between border-b border-[var(--border)] px-5 sm:px-6">
            <Link
              href="/dashboard"
              onClick={onClose}
              className="text-xl font-bold tracking-tight text-[var(--text-primary)]"
            >
              Nexora
            </Link>

            {/* Mobile close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-muted)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] md:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Dashboard navigation"
            className="flex-1 space-y-1 overflow-y-auto px-3 py-5"
          >
            {navItems.map((item) => {
              const Icon = item.icon;

              const isActive =
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[var(--surface-muted)] text-[var(--primary)]"
                      : "text-[var(--text-secondary)] hover:bg-[var(--surface-muted)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  <Icon
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0"
                  />

                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Bottom workspace */}
          <div className="border-t border-[var(--border)] p-3">
            <div className="rounded-xl bg-[var(--surface-muted)] p-3">
              <p className="text-xs font-semibold text-[var(--text-primary)]">
                Free workspace
              </p>

              <p className="mt-1 text-xs leading-5 text-[var(--text-secondary)]">
                3 of 3 projects used
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}