import FeatureVisual from "./FeatureVisual";

export default function CoreFeature({
  eyebrow,
  title,
  description,
  project,
  team,
  progress,
  status,
  visual,
  reverse,
}) {
  return (
    <div
      className={`flex flex-col gap-10 lg:items-center lg:gap-16 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-[var(--primary)]">
          {eyebrow}
        </p>

        <h3 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
          {title}
        </h3>

        <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
          {description}
        </p>
      </div>

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
  );
}