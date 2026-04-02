import Link from "next/link";

import { issues } from "@/lib/mock";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function GoodFirstIssues() {
  const list = issues.filter((issue) => issue.labels.includes("good-first-issue")).slice(0, 5);

  return (
    <Card className="utoss-hover">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Good First Issues</CardTitle>
        <Link href="/issues" className="text-xs text-[var(--utoss-blue)]">
          View all issues
        </Link>
      </CardHeader>
      <CardContent className="space-y-3">
        {list.map((issue) => (
          <div
            key={issue.id}
            className="rounded-[var(--utoss-radius)] border border-[var(--utoss-border)] p-3 text-sm"
          >
            <p className="font-medium">{issue.title}</p>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-[var(--utoss-muted)]">
              <span>{issue.repo}</span>
              <Badge variant="accent">{issue.difficulty}</Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}



