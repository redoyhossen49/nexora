import RegisterForm from "@/components/auth/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-8 sm:px-6">
        
        

        {/* Register content */}
        <div className="flex flex-1 items-center justify-center py-12">
          <div className="w-full max-w-md">
            
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm sm:p-8">
              
              {/* Heading */}
              <div className="text-center">
                <p className="text-sm font-semibold text-[var(--primary)]">
                  CREATE YOUR WORKSPACE
                </p>

                <h1 className="mt-3 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                  Create your Nexora account
                </h1>

                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  Start organizing projects, tasks, and team work in one shared
                  workspace.
                </p>
              </div>

              {/* Form */}
              <div className="mt-8">
  <RegisterForm />
</div>
            </div>

            {/* Login link */}
            <p className="mt-5 text-center text-sm text-[var(--text-secondary)]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-[var(--primary)] hover:text-[var(--primary-hover)]"
              >
                Sign in
              </Link>
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}