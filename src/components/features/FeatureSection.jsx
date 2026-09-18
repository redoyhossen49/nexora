import FeatureVisual from "./FeatureVisual";

export default function FeatureSection({
  eyebrow,
  title,
  description,
  project,
  team,
  progress,
  status,
  visual,
  reverse,
  index,
}) {
  const isMuted = index % 2 !== 0;

  return (
    <section
      className={
        isMuted
          ? "bg-[var(--surface-muted)]"
          : "bg-[var(--background)]"
      }
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        <div
          className={`flex flex-col gap-10 lg:items-center lg:gap-16 ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          {/* Content */}
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-[var(--primary)]">
              {eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              {title}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
              {description}
            </p>
          </div>

          {/* Product visual */}
          <div className="min-w-0 flex-1">
            <FeatureVisual
              type={visual}
              project={project}
              team={team}
              progress={progress}
              status={status}
            />
          </div>
        </div>
      </div>
    </section>
  );
}