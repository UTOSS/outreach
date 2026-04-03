"use client";

import Image from "next/image";

import { Card } from "@/components/ui/card";

export type LeadershipProfile = {
  id: string;
  name: string;
  role: string;
  blurb: string;
  imageSrc: string | null;
  initials: string;
};

export function LeadershipAccordion({
  leadership,
}: {
  leadership: readonly LeadershipProfile[];
}) {
  return (
    <Card className="divide-y divide-[var(--utoss-border)] overflow-hidden">
      {leadership.map((leader) => (
        <div key={leader.id}>
          <details className="group">
            <summary className="flex cursor-pointer list-none flex-wrap items-center justify-between gap-4 p-4 marker:hidden">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--utoss-border)] bg-[rgba(255,255,255,0.03)] text-sm font-semibold">
                  {leader.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{leader.name}</p>
                  <p className="text-xs text-[var(--utoss-muted)]">
                    {leader.role}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--utoss-muted)]">
                <span>View profile</span>
                <span className="text-sm font-medium transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </div>
            </summary>

            <div className="border-t border-[var(--utoss-border)] px-4 pb-4 pt-4">
              <article className="grid gap-5 md:grid-cols-[168px_minmax(0,1fr)] md:items-center md:gap-6">
                <div className="relative aspect-[4/5] max-w-[168px] overflow-hidden rounded-2xl border border-[var(--utoss-border)] bg-[rgba(255,255,255,0.03)]">
                  {leader.imageSrc ? (
                    <Image
                      src={leader.imageSrc}
                      alt={leader.name}
                      fill
                      className="object-cover"
                      sizes="168px"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)] text-3xl font-semibold tracking-[0.2em] text-[var(--utoss-muted)]">
                      {leader.initials}
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {leader.name}
                    </h3>
                    <p className="text-sm font-medium text-[var(--utoss-muted)]">
                      {leader.role}
                    </p>
                  </div>
                  <p className="max-w-2xl text-sm leading-7 text-[var(--utoss-text)]">
                    {leader.blurb}
                  </p>
                </div>
              </article>
            </div>
          </details>
        </div>
      ))}
    </Card>
  );
}
