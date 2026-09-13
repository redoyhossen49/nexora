
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-slate-900"
        >
          Nexora
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/features"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Features
          </Link>

          <Link
            href="/solutions"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Solutions
          </Link>

          <Link
            href="/pricing"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Pricing
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 sm:block"
          >
            Log in
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            Get started
          </Link>
        </div>

      </div>
    </header>
  );
}

