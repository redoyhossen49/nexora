import {
  Bell,
  Search,
  Plus,
} from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="flex items-center gap-3 border-b border-[var(--border)] px-4 py-3 sm:px-5">
      {/* Search */}
      <div className="relative min-w-0 flex-1">
        <Search
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]"
          aria-hidden="true"
        />

        <input
          type="search"
          placeholder="Search projects, tasks..."
          aria-label="Search projects and tasks"
          className="h-9 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] pl-9 pr-3 text-xs text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
        />
      </div>

      {/* Create */}
      <button
        type="button"
        aria-label="Create new item"
        className="hidden h-9 shrink-0 items-center gap-2 rounded-lg bg-[var(--primary)] px-3 text-xs font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 sm:flex"
      >
        <Plus
          className="h-4 w-4"
          aria-hidden="true"
        />

        <span>New</span>
      </button>

      {/* Notifications */}
      <button
        type="button"
        aria-label="View notifications"
        className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-muted)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2"
      >
        <Bell
          className="h-4 w-4"
          aria-hidden="true"
        />

        <span
          aria-hidden="true"
          className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[var(--primary)]"
        />
      </button>

      {/* User */}
      <button
        type="button"
        aria-label="Open account menu"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--surface-muted)] text-xs font-semibold text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2"
      >
        AC
      </button>
    </header>
  );
}