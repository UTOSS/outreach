import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CommitPile } from "@/components/commit-pile";
import { projects } from "@/lib/mock";
import { LanguagePill } from "@/components/language-pill";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <CommitPile />
      </section>
      <section className="space-y-6">
        <div className="max-w-3xl space-y-3">
          <h1 className="text-3xl font-semibold md:text-4xl">Who we are</h1>
          <p className="text-sm text-[var(--utoss-muted)] md:text-base">
            UTOSS is a student-run open source society at U of T building both
            software and hardware projects. We create space for students to
            learn in public, contribute to real open source work, and grow
            through mentorship, workshops, and hands-on project experience.
          </p>
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Our projects</h2>
        <p className="text-sm text-[var(--utoss-muted)] md:text-base">
          Our teams work across computer architecture, FPGA hardware, and open
          source software. UTOSS members have built a functional multi-cycle
          RV32I RISC-V CPU core, launched an open FPGA development board effort
          using open source EDA tools, and contributed bug fixes and testing
          work to Firefox alongside Mozilla engineers.
        </p>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">We're recruiting!</h2>
        <p className="text-sm text-[var(--utoss-muted)] md:text-base">
          We welcome students who want to learn, build, and contribute at any
          experience level. New members can get started through onboarding
          workshops, weekly meetings, and scoped project tasks, then find
          opportunities to contribute through our{" "}
          <Link href={"/issues"}>issues</Link> page.
        </p>
      </section>
    </div>
  );
}
