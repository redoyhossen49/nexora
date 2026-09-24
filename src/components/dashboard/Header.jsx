"use client";

import { Menu } from "lucide-react";

export default function Header({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Mobile menu */}
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open navigation"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-muted)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Desktop title */}
        <div className="hidden md:block">
          <p className="text-sm font-semibold text-[var(--text-primary)]">
            Dashboard
          </p>
        </div>

        {/* Mobile logo */}
        <div className="md:hidden">
          <p className="text-lg font-bold tracking-tight text-[var(--text-primary)]">
            Nexora
          </p>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-[var(--text-primary)]">
              Md Redoy
            </p>
          </div>

          <div
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary)] text-xs font-semibold text-white"
            aria-hidden="true"
          >
            MR
          </div>
        </div>

      </div>
    </header>
  );
}