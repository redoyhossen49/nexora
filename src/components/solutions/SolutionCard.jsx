import {
  Layers,
  Megaphone,
  Palette,
  Users,
} from "lucide-react";

const iconMap = {
  "Product teams": Layers,
  "Marketing teams": Megaphone,
  "Design teams": Palette,
  "Growing teams": Users,
};

export default function SolutionCard({
  title,
  description,
}) {
  const Icon = iconMap[title] || Users;

  return (
    <article
      className="
        h-full
        rounded-2xl
        border border-[var(--border)]
        bg-[var(--surface)]
        p-6
        shadow-sm
        transition-shadow
        duration-200
        hover:shadow-md
      "
    >
      <div
        aria-hidden="true"
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          bg-[var(--surface-muted)]
          text-[var(--primary)]
        "
      >
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mt-5 text-base font-semibold text-[var(--text-primary)]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
        {description}
      </p>
    </article>
  );
}