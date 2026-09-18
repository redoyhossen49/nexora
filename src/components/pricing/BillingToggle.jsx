"use client";

export default function BillingToggle({
  billingCycle,
  onChange,
}) {
  return (
    <div className="mx-auto inline-flex rounded-xl border border-[var(--border)] bg-[var(--surface)] p-1 shadow-sm">
      <button
        type="button"
        onClick={() => onChange("monthly")}
        aria-pressed={billingCycle === "monthly"}
        className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
          billingCycle === "monthly"
            ? "bg-[var(--surface-muted)] text-[var(--text-primary)]"
            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
        }`}
      >
        Monthly
      </button>

      <button
        type="button"
        onClick={() => onChange("yearly")}
        aria-pressed={billingCycle === "yearly"}
        className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
          billingCycle === "yearly"
            ? "bg-[var(--surface-muted)] text-[var(--text-primary)]"
            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
        }`}
      >
        Yearly
      </button>
    </div>
  );
}