import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-[var(--utoss-border)] py-3 text-sm text-[var(--utoss-muted)]">
      <Link
        href="/"
        className="utoss-nav-link flex items-center gap-3 text-sm font-semibold tracking-wide text-[var(--utoss-text)] transition-colors hover:!text-[#58a6ff]"
      >
        <Image src="/logo.svg" alt="UTOSS logo" width={28} height={28} />
        University of Toronto Open Source Society
      </Link>
      <nav className="flex items-center gap-4">
        <Link
          href="https://discord.gg/D6qvPnS6UE"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-transparent p-2 transition-colors hover:border-[#30363d]"
          aria-label="Join Discord"
        >
          <Image
            src="/Discord-Symbol-Blurple.svg"
            alt="Discord"
            width={18}
            height={18}
          />
        </Link>
        <Link
          href="https://github.com/UTOSS"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-transparent p-2 transition-colors hover:border-[#30363d]"
          aria-label="Contribute on GitHub"
        >
          <Image
            src="/GitHub_Invertocat_White_Clearspace.svg"
            alt="GitHub"
            width={18}
            height={18}
          />
        </Link>
      </nav>
    </header>
  );
}
