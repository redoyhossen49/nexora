import {
  FolderKanban,
  ListChecks,
  ChartNoAxesCombined,
} from "lucide-react";

import FeatureCard from "./FeatureCard";
import MotionReveal from "@/components/MotionReveal";

const features = [
  {
    title: "Organize projects",
    description:
      "Create projects with clear goals, deadlines, priorities, and team members so everyone knows what the team is working toward.",
    icon: FolderKanban,
  },
  {
    title: "Manage team tasks",
    description:
      "Break projects into tasks, assign work to team members, set priorities, and track each task from planned to completed.",
    icon: ListChecks,
  },
  {
    title: "Track team progress",
    description:
      "See project progress, task status, recent activity, and team workload from one shared workspace.",
    icon: ChartNoAxesCombined,
  },
];

export default function FeatureOverview() {
  return (
    <section className="bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        <MotionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-[var(--primary)]">
              HOW NEXORA HELPS
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Everything your team needs to manage work.
            </h2>

            <p className="mt-5 text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
              Keep projects, tasks, responsibilities, and progress connected
              in one workspace instead of managing work across scattered tools.
            </p>
          </div>
        </MotionReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {features.map((feature, index) => (
            <MotionReveal key={feature.title} delay={index * 100}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}