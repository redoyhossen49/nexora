const faqs = [
  {
    question: "Can I start using Nexora for free?",
    answer:
      "Yes. The Starter plan lets you create a workspace, organize projects, manage tasks, and collaborate with your team without a subscription.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes. Your team can move to a different plan as your workspace and project needs change.",
  },
  {
    question: "What is included in yearly billing?",
    answer:
      "Yearly pricing shows the equivalent monthly rate and is billed annually.",
  },
  {
    question: "Can I manage multiple projects?",
    answer:
      "Yes. The number of projects available depends on your selected plan. Pro and Business are designed for teams managing multiple projects.",
  },
  {
    question: "Does every plan include team collaboration?",
    answer:
      "Yes. Team collaboration is available across the plans, while higher plans provide additional visibility and management capabilities.",
  },
  {
    question: "Can I upgrade when my team grows?",
    answer:
      "Yes. You can move to a higher plan when your team needs more projects, analytics, permissions, or workflow controls.",
  },
];

export default function PricingFAQ() {
  return (
    <section className="bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-[var(--primary)]">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Questions about Nexora pricing?
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
            Here are some common questions teams have before choosing a plan.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-[var(--border)] rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 sm:mt-16 sm:px-8">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-sm font-semibold text-[var(--text-primary)] marker:hidden">
                <span>{faq.question}</span>

                <span
                  aria-hidden="true"
                  className="text-lg font-normal text-[var(--text-muted)] transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}