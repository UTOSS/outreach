import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function FirefoxPage() {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src="/firefox.jpg"
            alt="Firefox team"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 1024px, 100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),transparent_55%)]" />
          <div className="absolute bottom-0 left-0 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">
              Firefox team
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white">
              We patch bugs for Mozilla Firefox!
            </h1>
          </div>
        </div>
      </Card>

      <Card className="divide-y divide-[var(--utoss-border)] overflow-hidden">
        <section className="space-y-4 p-5">
          <h2 className="text-lg font-semibold text-[var(--utoss-text)]">
            Overview
          </h2>
          <div className="space-y-4 text-sm leading-7 text-[var(--utoss-muted)]">
            <p>We patch bugs for Mozilla Firefox!</p>
          </div>
        </section>

        <section className="space-y-4 p-5">
          <h2 className="text-lg font-semibold text-[var(--utoss-text)]">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2 text-sm text-[var(--utoss-text)]">
            {[
              "Rust",
              "C/C++",
              "Python",
              "Unit testing",
              "HTML/CSS",
              "JavaScript",
              "GeckoDriver",
              "CI/CD",
              "Git",
              "YAML",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[var(--utoss-border)] px-3 py-1 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-4 p-5">
          <h2 className="text-lg font-semibold text-[var(--utoss-text)]">
            Accomplishments
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--utoss-muted)]">
            <li>10+ bugs closed</li>
            <li>
              5+ members in DTE Contributors, a volunteer team that works
              directly with Mozilla employees to resolve bugs.
            </li>
          </ul>
        </section>

        <section className="space-y-4 p-5">
          <h2 className="text-lg font-semibold text-[var(--utoss-text)]">
            Join the Team
          </h2>
          <div className="space-y-3 text-sm leading-7 text-[var(--utoss-muted)]">
            <p>
              Join the Firefox team if you want hands-on experience contributing
              to a large production browser and learning how real upstream bug
              fixing works.
            </p>
            <p>
              The team is a strong entry point for students interested in open
              source workflows, testing, and shipping fixes that reach real
              users.
            </p>
          </div>
        </section>
      </Card>
    </div>
  );
}
