import Link from "next/link";
import DashboardPreview from "./hero/DashboardPreview";

export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold tracking-wide text-indigo-700 sm:text-sm">
            <span aria-hidden="true" className="mr-1.5">
              ✦
            </span>
            BUILT FOR HIGH-PERFORMING TEAMS
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl md:leading-[1.08]">
            Turn complex work into{" "}
            <span className="text-indigo-600">
              clear, measurable progress.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Nexora gives teams one intelligent workspace to plan projects,
            align priorities, and move work forward — without the noise.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col max-w-sm sm:max-w-4xl  mx-auto justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/register"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-indigo-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              Start building — it&apos;s free
            </Link>

            <Link
              href="/features"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              See how it works
            </Link>
          </div>

          {/* Trust line */}
          <p className="mt-5 text-xs font-medium text-slate-500 sm:text-sm">
            No credit card required{" "}
            <span aria-hidden="true" className="mx-1.5">
              ·
            </span>
            Setup in minutes
          </p>

        </div>
         <DashboardPreview></DashboardPreview>
      </div>
     
    </section>
    
  );
}