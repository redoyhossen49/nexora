import Link from "next/link";

const productLinks = [
  { label: "Features", href: "/features" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
];

const companyLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Resources", href: "/resources" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4  sm:px-6">

        {/* Main Footer */}
        <div className="flex flex-col gap-10 py-12 sm:py-14 lg:flex-row lg:justify-between lg:py-16">
          
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-[var(--text-primary)] transition-colors hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2"
            >
              Nexora
            </Link>

            <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
              A focused workspace for teams to plan projects, manage work,
              and move forward together.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16 sm:gap-24">
            
            {/* Product */}
            <div>
              <h2 className="text-sm font-semibold text-[var(--text-primary)]">
                Product
              </h2>

              <nav aria-label="Product links" className="mt-4">
                <ul className="space-y-3">
                  {productLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Company */}
            <div>
              <h2 className="text-sm font-semibold text-[var(--text-primary)]">
                Company
              </h2>

              <nav aria-label="Company links" className="mt-4">
                <ul className="space-y-3">
                  {companyLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-3 border-t border-[var(--border)] py-6 sm:flex-row sm:items-center sm:justify-between">
          
          <p className="text-xs text-[var(--text-muted)]">
            © 2026 Nexora. All rights reserved.
          </p>

          <nav aria-label="Legal links">
            <ul className="flex gap-5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>
    </footer>
  );
}