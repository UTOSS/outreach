"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { events, type EventItem } from "@/lib/mock";

export function EventsList() {
  const [selected, setSelected] = useState<EventItem | null>(null);

  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        {events.map((event) => (
          <Card key={event.id} className="utoss-hover p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold">{event.title}</p>
                <p className="mt-1 text-xs text-[var(--utoss-muted)]">
                  {event.date} · {event.time} · {event.location}
                </p>
              </div>
              <Button variant="outline" size="sm" onClick={() => setSelected(event)}>
                View details
              </Button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {event.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {selected ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="w-full max-w-lg rounded-[var(--utoss-radius)] border border-[var(--utoss-border)] bg-[var(--utoss-surface)] p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">{selected.title}</h2>
                <p className="mt-2 text-sm text-[var(--utoss-muted)]">
                  {selected.date} · {selected.time}
                </p>
                <p className="text-sm text-[var(--utoss-muted)]">{selected.location}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="text-sm text-[var(--utoss-muted)]"
              >
                Close
              </button>
            </div>
            <p className="mt-4 text-sm text-[var(--utoss-text)]">{selected.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {selected.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-end gap-3">
              <Button variant="outline" onClick={() => setSelected(null)}>
                Not now
              </Button>
              <Button>RSVP</Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}



