"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
    const router=useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    router.push("/dashboard");

    console.log("Login form submitted:", formData);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Email */}
      <div>
        <label
          htmlFor="login-email"
          className="block text-sm font-medium text-[var(--text-primary)]"
        >
          Email address
        </label>

        <input
          id="login-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          autoComplete="email"
          className="mt-2 h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
        />
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="login-password"
          className="block text-sm font-medium text-[var(--text-primary)]"
        >
          Password
        </label>

        <input
          id="login-password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          autoComplete="current-password"
          className="mt-2 h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-[var(--primary)] px-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2"
      >
        Sign in
      </button>
    </form>
  );
}