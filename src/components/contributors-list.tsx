import { Card } from "@/components/ui/card";
import { contributors } from "@/lib/mock";

type ContributorsListProps = {
  excludeIds?: string[];
};

export function ContributorsList({
  excludeIds = [],
}: ContributorsListProps) {
  const visibleContributors = contributors.filter(
    (person) => !excludeIds.includes(person.id),
  );

  return (
    <div className="space-y-4">
      <Card className="divide-y divide-[var(--utoss-border)]">
        {visibleContributors.map((person) => (
          <div
            key={person.id}
            className="flex flex-wrap items-center justify-between gap-4 p-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--utoss-border)] bg-[rgba(255,255,255,0.03)] text-sm font-semibold">
                {person.initials}
              </div>
              <div>
                <p className="text-sm font-semibold">{person.name}</p>
                <p className="text-xs text-[var(--utoss-muted)]">
                  {person.role}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--utoss-muted)]">
              <span>{person.recentActivity}</span>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
