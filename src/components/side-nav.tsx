import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/issues", label: "Issues" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contributors", label: "Contributors" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function SideNav() {
  return (
    <aside className="hidden w-64 flex-col rounded-[var(--utoss-radius)] p-5 lg:flex lg:sticky lg:top-3 lg:self-start">
      <div className="flex items-center justify-between">Content</div>
      <nav className="mt-6 flex flex-1 flex-col gap-2 text-sm text-[var(--utoss-muted)]">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="utoss-nav-link rounded-md border border-transparent px-3 py-2 transition-colors hover:border-[#30363d] hover:text-[#58a6ff]"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
