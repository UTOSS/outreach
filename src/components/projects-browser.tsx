"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { projects } from "@/lib/mock";

export function ProjectsBrowser() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      return (
        project.name.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [search]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div className="w-full max-w-sm">
          <Input
            placeholder="Search repositories"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <p className="text-xs text-[var(--utoss-muted)]">
          {filtered.length} repositories
        </p>
      </div>

      <Card className="divide-y divide-[var(--utoss-border)]">
        {filtered.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="block"
          >
            <div className="p-4 transition-colors hover:bg-[rgba(255,255,255,0.03)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{project.name}</p>
                  <p className="mt-1 text-xs text-[var(--utoss-muted)]">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Card>
    </div>
  );
}
