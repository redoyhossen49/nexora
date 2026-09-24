"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Contact form submitted:", formData);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-[var(--text-primary)]"
        >
          Full name
        </label>

        <input
          id="contact-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          autoComplete="name"
          required
          className="mt-2 h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-[var(--text-primary)]"
        >
          Email address
        </label>

        <input
          id="contact-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          autoComplete="email"
          required
          className="mt-2 h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
        />
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="contact-subject"
          className="block text-sm font-medium text-[var(--text-primary)]"
        >
          Subject
        </label>

        <input
          id="contact-subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What can we help with?"
          required
          className="mt-2 h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-[var(--text-primary)]"
        >
          Message
        </label>

        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us how we can help..."
          rows={6}
          required
          className="mt-2 w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-3 text-sm leading-6 text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-[var(--primary)] px-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2"
      >
        Send message
      </button>

      <p className="text-center text-xs leading-5 text-[var(--text-muted)]">
        We&apos;ll use your information only to respond to your message.
      </p>
    </form>
  );
}