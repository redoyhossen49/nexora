import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar></Navbar>

      <main className="bg-[var(--background)]">
        {/* Hero */}
        <section>
          <div className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold text-[var(--primary)]">
                CONTACT NEXORA
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
                How can we help?
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8">
                Have a question about Nexora, need help with your workspace,
                or want to learn more? Send us a message and our team can
                help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact content */}
        <section className="pb-20 sm:pb-24 lg:pb-28">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            {/* Contact information */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] p-6 sm:p-8">
              <p className="text-sm font-semibold text-[var(--primary)]">
                GET IN TOUCH
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                Let&apos;s talk about your work.
              </h2>

              <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">
                Whether you have a product question or need help getting
                started, use the form and tell us what you need.
              </p>

              <div className="mt-8 space-y-6">
                <ContactInfo
                  title="General questions"
                  description="Questions about Nexora and how the workspace works."
                />

                <ContactInfo
                  title="Product support"
                  description="Need help with projects, tasks, or your workspace?"
                />

                <ContactInfo
                  title="Sales"
                  description="Want to understand which plan fits your team?"
                />
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm sm:p-8">
              <div>
                <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                  Send us a message
                </h2>

                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                  Fill out the form below and tell us how we can help.
                </p>
              </div>

              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center sm:px-6">
          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} Nexora. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

function ContactInfo({ title, description }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-[var(--text-primary)]">
        {title}
      </h3>

      <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
        {description}
      </p>
    </div>
  );
}