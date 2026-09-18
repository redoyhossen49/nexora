import Link from "next/link";
import { Check } from "lucide-react";

export default function PricingCard({
  name,
  description,
  price,
  billingCycle,
  popular,
  features,
}) {
  const priceLabel = price === 0 ? "Free" : `$${price}`;

  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border bg-[var(--surface)] p-6 shadow-sm sm:p-7 ${
        popular
          ? "border-[var(--primary)] ring-1 ring-[var(--primary)]"
          : "border-[var(--border)]"
      }`}
    >
      {/* Popular badge */}
      {popular && (
        <span className="absolute right-5 top-5 rounded-full bg-[var(--primary)] px-2.5 py-1 text-[11px] font-semibold text-white">
          Most popular
        </span>
      )}

      {/* Plan information */}
      <div className={popular ? "pr-24" : ""}>
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">
          {name}
        </h2>

        <p className="mt-2 min-h-12 text-sm leading-6 text-[var(--text-secondary)]">
          {description}
        </p>
      </div>

      {/* Price */}
      <div className="mt-7">
        <div className="flex items-end gap-2">
          <span className="text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            {priceLabel}
          </span>

          {price > 0 && (
            <span className="mb-1 text-sm text-[var(--text-muted)]">
              / month
            </span>
          )}
        </div>

        {price > 0 && billingCycle === "yearly" && (
          <p className="mt-2 text-xs font-medium text-[var(--primary)]">
            Billed annually
          </p>
        )}
      </div>

      {/* CTA */}
      <Link
        href="/register"
        className={`mt-7 inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 ${
          popular
            ? "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)]"
            : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] hover:bg-[var(--surface-muted)]"
        }`}
      >
        {price === 0 ? "Get started" : "Start free trial"}
      </Link>

      {/* Features */}
      <div className="mt-8 border-t border-[var(--border)] pt-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
          Includes
        </p>

        <ul className="mt-4 space-y-3">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3"
            >
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]"
                aria-hidden="true"
              />

              <span className="text-sm leading-5 text-[var(--text-secondary)]">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}