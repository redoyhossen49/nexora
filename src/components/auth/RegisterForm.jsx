"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  password: "",
};

export default function RegisterForm() {
  const router=useRouter();
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    // User আবার input করলে ওই field-এর error সরিয়ে দিচ্ছি
    setErrors((current) => ({
      ...current,
      [name]: "",
    }));
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Please create a password.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    router.push("/login")

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    console.log("Register data:", formData);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[var(--text-primary)]"
        >
          Full name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          autoComplete="name"
          required
          aria-invalid={Boolean(errors.name)}
          className="mt-2 h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
        />

        {errors.name && (
          <p className="mt-2 text-xs text-red-600">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[var(--text-primary)]"
        >
          Email address
        </label>

        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          autoComplete="email"
          required
          aria-invalid={Boolean(errors.email)}
          className="mt-2 h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
        />

        {errors.email && (
          <p className="mt-2 text-xs text-red-600">{errors.email}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-[var(--text-primary)]"
        >
          Password
        </label>

        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Create a password"
          autoComplete="new-password"
          required
          aria-invalid={Boolean(errors.password)}
          className="mt-2 h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
        />

        {errors.password ? (
          <p className="mt-2 text-xs text-red-600">{errors.password}</p>
        ) : (
          <p className="mt-2 text-xs leading-5 text-[var(--text-muted)]">
            Use at least 8 characters.
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-[var(--primary)] px-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2"
      >
        Create account
      </button>
    </form>
  );
}