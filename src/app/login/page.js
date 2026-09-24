import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-8 sm:px-6">

        {/* Logo */}
        <header>
          <Link
            href="/"
            className="inline-flex text-xl font-bold tracking-tight text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2"
          >
            Nexora
          </Link>
        </header>

        {/* Login area */}
        <div className="flex flex-1 items-center justify-center py-12">
          <div className="w-full max-w-md">

            {/* Card */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm sm:p-8">

              {/* Heading */}
              <div className="text-center">
                <p className="text-sm font-semibold text-[var(--primary)]">
                  WELCOME BACK
                </p>

                <h1 className="mt-3 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                  Sign in to Nexora
                </h1>

                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  Continue managing your projects, tasks, and team work.
                </p>
              </div>

              {/* Form */}
              <div className="mt-8">
                <LoginForm />
              </div>
            </div>

            {/* Register link */}
            <p className="mt-5 text-center text-sm text-[var(--text-secondary)]">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2"
              >
                Create one
              </Link>
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}