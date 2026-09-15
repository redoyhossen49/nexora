"use client";

import { useState } from "react";
import { Search, Bell } from "lucide-react";

export default function DashboardHeader() {
  const [search, setSearch] = useState("");

  return (
    <header className="flex items-center gap-2 sm:gap-3">
      {/* Search */}
      <div className="relative min-w-0 flex-1">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]"
        />

        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search workspace..."
          aria-label="Search workspace"
          className="h-10 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] pl-9 pr-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] transition-colors focus:border-[var(--focus)] focus:ring-2 focus:ring-[var(--focus)]/20"
        />
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-1 sm:gap-2">
        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-muted)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)]"
        >
          <Bell
            aria-hidden="true"
            className="h-5 w-5"
          />

          <span
            aria-hidden="true"
            className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[var(--primary)]"
          />
        </button>

        {/* Avatar */}
        <button
          type="button"
          aria-label="Open profile menu"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)] text-xs font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2"
        >
          RH
        </button>
      </div>
    </header>
  );
}