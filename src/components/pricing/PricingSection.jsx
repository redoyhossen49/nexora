"use client";

import { useState } from "react";
import BillingToggle from "./BillingToggle";
import PricingCard from "./PricingCard";
import { pricingPlans } from "@/data/pricing";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section className="bg-[var(--surface-muted)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-[var(--primary)]">
            PLANS FOR EVERY STAGE
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Start simple. Scale when your team grows.
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
            Choose the plan that matches how your team works today. You can
            change your plan as your workspace grows.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="mt-8 flex justify-center">
          <BillingToggle
            billingCycle={billingCycle}
            onChange={setBillingCycle}
          />
        </div>

        {/* Pricing cards */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {pricingPlans.map((plan) => {
            const price =
              billingCycle === "yearly"
                ? plan.yearlyPrice
                : plan.monthlyPrice;

            return (
              <PricingCard
                key={plan.name}
                name={plan.name}
                description={plan.description}
                price={price}
                billingCycle={billingCycle}
                popular={plan.popular}
                features={plan.features}
              />
            );
          })}
        </div>

        {/* Pricing note */}
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-5 text-[var(--text-muted)]">
          Yearly pricing is shown as the equivalent monthly rate and is billed
          annually.
        </p>
      </div>
    </section>
  );
}