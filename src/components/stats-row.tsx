import { stats } from "@/lib/mock";

const items = [
  { label: "Projects", value: stats.projects },
  { label: "Contributors", value: stats.contributors },
  { label: "Commits this month", value: stats.commitsThisMonth },
  { label: "Open issues", value: stats.openIssues },
];

export function StatsRow() {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="p-2">
          <p className="text-xs text-[var(--utoss-muted)]">{item.label}</p>
          <p className="mt-2 text-2xl font-semibold">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
