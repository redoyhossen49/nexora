"use client";

import { useEffect, useRef } from "react";

export default function MotionReveal({
  children,
  className = "",
  delay = 0,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`motion-reveal ${className}`}
      style={{ "--motion-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}