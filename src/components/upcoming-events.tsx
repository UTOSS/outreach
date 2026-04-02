import { events } from "@/lib/mock";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function UpcomingEvents() {
  return (
    <Card className="utoss-hover">
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {events.slice(0, 3).map((event) => (
          <div
            key={event.id}
            className="rounded-[var(--utoss-radius)] border border-[var(--utoss-border)] p-3"
          >
            <p className="text-sm font-semibold">{event.title}</p>
            <p className="mt-1 text-xs text-[var(--utoss-muted)]">
              {event.date} · {event.time}
            </p>
            <p className="text-xs text-[var(--utoss-muted)]">{event.location}</p>
            <Button variant="outline" size="sm" className="mt-3">
              RSVP
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}



