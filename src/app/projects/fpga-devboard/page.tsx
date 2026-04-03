import { Card } from "@/components/ui/card";

export default function FpgaDevboardPage() {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden">
        <div className="relative flex aspect-[16/9] items-end border-b border-[var(--utoss-border)] bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.28),transparent_42%),linear-gradient(135deg,#111827,#0b1220_55%,#134e4a)] p-6">
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),transparent_55%)]" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">
              FPGA Devboard team
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white">
              Replace this panel with an FPGA Devboard team image.
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
            <p>
              Add a short description of what the FPGA Devboard team is
              building, why the project matters, and what stage the work is
              currently in.
            </p>
            <p>
              This section should explain the team&apos;s focus in plain language so
              new members can quickly understand the project.
            </p>
          </div>
        </section>

        <section className="space-y-4 p-5">
          <h2 className="text-lg font-semibold text-[var(--utoss-text)]">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2 text-sm text-[var(--utoss-text)]">
            {[
              "KiCad",
              "PCB Design",
              "FPGA",
              "Hardware Bring-up",
              "Documentation",
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
            Current Focus
          </h2>
          <div className="space-y-2 text-sm text-[var(--utoss-muted)]">
            <p>Add the current design priorities here.</p>
            <p>Examples: schematic capture, component selection, PCB layout.</p>
          </div>
        </section>

        <section className="space-y-4 p-5">
          <h2 className="text-lg font-semibold text-[var(--utoss-text)]">
            Accomplishments
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--utoss-muted)]">
            <li>Add major milestones the team has already reached.</li>
            <li>Examples: board architecture decided, peripherals selected.</li>
            <li>
              Examples: early schematic review completed, layout in progress.
            </li>
          </ul>
        </section>

        <section className="space-y-4 p-5">
          <h2 className="text-lg font-semibold text-[var(--utoss-text)]">
            Join the Team
          </h2>
          <div className="space-y-3 text-sm leading-7 text-[var(--utoss-muted)]">
            <p>
              Add a short call to action explaining who should join and what
              kind of work new members can take on.
            </p>
            <p>
              You can also add contact details, onboarding info, or a note
              about whether beginners are welcome.
            </p>
          </div>
        </section>
      </Card>
    </div>
  );
}
