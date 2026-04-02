import { activities } from "@/lib/mock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const iconMap: Record<string, string> = {
  merge: "?",
  issue: "?",
  release: "?",
  comment: "?",
  review: "?",
};

export function ActivityFeed() {
  return (
    <Card className="utoss-hover">
      <CardHeader>
        <CardTitle>Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((item) => (
          <div key={item.id} className="flex gap-3 text-sm">
            <div className="text-[var(--utoss-muted)]">
              {iconMap[item.type] ?? "?"}
            </div>
            <div>
              <p className="text-[var(--utoss-text)]">
                <span className="font-medium">{item.actor}</span> {item.action}{" "}
                <span className="text-[var(--utoss-blue)]">{item.target}</span>
              </p>
              <p className="text-xs text-[var(--utoss-muted)]">{item.timeAgo}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}



