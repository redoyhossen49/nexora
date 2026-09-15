import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Plan smarter",
    description:
      "Turn ideas into structured projects with clear goals, priorities, and timelines.",
  },
  {
    title: "Stay aligned",
    description:
      "Keep tasks, conversations, and responsibilities connected in one shared workspace.",
  },
  {
    title: "Track progress",
    description:
      "Understand what is moving forward, what needs attention, and where your team stands.",
  },
];

export default function FeatureOverview() {
  return (
    <section className="bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4  sm:px-6 pb-16">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-[var(--primary)]">
            Everything in one place
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Everything your team needs to move work forward.
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
            Plan projects, manage tasks, collaborate with your team, and
            understand progress — all from one focused workspace.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}