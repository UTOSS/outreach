import { Card } from "@/components/ui/card";

export default function RiscVCpuPage() {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden">
        <div className="relative flex aspect-[16/9] items-end border-b border-[var(--utoss-border)] bg-[radial-gradient(circle_at_top_left,rgba(88,166,255,0.35),transparent_45%),linear-gradient(135deg,#0f172a,#111827_55%,#1e3a8a)] p-6">
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),transparent_55%)]" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">
              RISC-V team
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white">
              Building an open-source MCU platform.
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
              We are building a full-fledged MCU platform based on the
              open-source RISC-V architecture. At this time we are finalizing
              transition from multi-cycle to pipelined architecture, as well as
              maintaining an in-house UART controller for communication.
            </p>

            <p>
              We maintain both FPGA and ASIC development tracks, which allow us
              to both continuously verify our board on programmable hardware as
              well as prepare for taping out our design on real silicon via
              TinyTapeOut.
            </p>
          </div>
        </section>

        <section className="space-y-4 p-5">
          <h2 className="text-lg font-semibold text-[var(--utoss-text)]">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2 text-sm text-[var(--utoss-text)]">
            {[
              "SystemVerilog",
              "Verification",
              "FPGA",
              "ASIC tape-out",
              "UART design",
              "Open-source tooling",
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
            <p>Finalizing the transition from multi-cycle to pipelined CPU design.</p>
            <p>Maintaining the in-house UART controller for communication.</p>
            <p>Supporting both FPGA verification and ASIC tape-out preparation.</p>
          </div>
        </section>

        <section className="space-y-4 p-5">
          <h2 className="text-lg font-semibold text-[var(--utoss-text)]">
            Accomplishments
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--utoss-muted)]">
            <li>Maintaining both FPGA and ASIC development tracks.</li>
            <li>Preparing the design for real silicon via TinyTapeOut.</li>
            <li>Building and maintaining an in-house UART controller.</li>
          </ul>
        </section>

        <section className="space-y-4 p-5">
          <h2 className="text-lg font-semibold text-[var(--utoss-text)]">
            Join the Team
          </h2>
          <div className="space-y-3 text-sm leading-7 text-[var(--utoss-muted)]">
            <p>
              Join the RISC-V team if you want to work on serious digital design,
              verification, and open hardware development in a collaborative environment.
            </p>
            <p>
              This track is a good fit for students interested in computer architecture,
              RTL design, FPGA workflows, or ASIC preparation.
            </p>
          </div>
        </section>
      </Card>
    </div>
  );
}
