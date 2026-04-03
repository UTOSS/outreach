import { LeadershipAccordion } from "@/components/leadership-accordion";
import { leadership } from "@/lib/leadership";

export default function LeadershipPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Leadership</h1>
        <p className="mt-2 max-w-2xl text-sm text-[var(--utoss-muted)]">
          Meet the student leaders helping guide UTOSS projects, events, and
          community work.
        </p>
      </div>

      <LeadershipAccordion leadership={leadership} />
    </div>
  );
}
