export const statusStyles = {
  "On track": {
    label: "On track",
    className:
      "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
    progressClassName: "bg-emerald-500",
  },

  "In progress": {
    label: "In progress",
    className:
      "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
    progressClassName: "bg-blue-500",
  },

  "At risk": {
    label: "At risk",
    className:
      "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
    progressClassName: "bg-amber-500",
  },
};

export default function StatusBadge({ status }) {
  const currentStatus = statusStyles[status] ?? {
    label: status,
    className:
      "bg-[var(--surface-muted)] text-[var(--text-secondary)]",
    progressClassName: "bg-[var(--primary)]",
  };

  return (
    <span
      className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${currentStatus.className}`}
    >
      {currentStatus.label}
    </span>
  );
}