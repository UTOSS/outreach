"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/mock";
import { LanguagePill } from "@/components/language-pill";

const filters = ["Beginner-friendly", "Software", "Hardware", "Open Source"];
const sortOptions = [
  { value: "activity", label: "Most active" },
  { value: "stars", label: "Most starred" },
  { value: "updated", label: "Recently updated" },
];

export function HomeProjectsPanel() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("activity");

  const filtered = useMemo(() => {
    let list = [...projects];
    if (activeFilter) {
      list = list.filter((project) => project.tags.includes(activeFilter));
    }
    if (sortBy === "stars") {
      list.sort((a, b) => b.stars - a.stars);
    } else if (sortBy === "updated") {
      list.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
    } else {
      list.sort((a, b) => b.activityScore - a.activityScore);
    }
    return list.slice(0, 5);
  }, [activeFilter, sortBy]);

  return (
    <Card className="utoss-hover">
      <CardHeader className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <CardTitle>Projects</CardTitle>
          <select
            className="rounded-md border border-[var(--utoss-border)] bg-transparent px-3 py-1 text-xs text-[var(--utoss-muted)]"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            {sortOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="bg-[var(--utoss-surface)] text-[var(--utoss-text)]"
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() =>
                setActiveFilter((current) => (current === filter ? null : filter))
              }
              className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                activeFilter === filter
                  ? "border-[#1f6feb] text-[#58a6ff]"
                  : "border-[var(--utoss-border)] text-[var(--utoss-muted)] hover:text-[var(--utoss-text)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {filtered.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="block rounded-[var(--utoss-radius)] border border-[var(--utoss-border)] p-4 transition-colors hover:bg-[rgba(255,255,255,0.02)]"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold">{project.name}</h3>
                <p className="mt-1 text-xs text-[var(--utoss-muted)]">
                  {project.description}
                </p>
              </div>
              <Badge variant="accent">{project.status}</Badge>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-[var(--utoss-muted)]">
              <LanguagePill language={project.language} />
              <span>? {project.stars}</span>
              <span>? {project.forks}</span>
              <span>{project.contributors.length} contributors</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} className="text-[10px]">
                  {tag}
                </Badge>
              ))}
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}



