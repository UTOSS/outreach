"use client";

import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { issues, labels, projects } from "@/lib/mock";

export function IssuesBrowser() {
  const [search, setSearch] = useState("");
  const [activeLabels, setActiveLabels] = useState<string[]>([]);
  const [repo, setRepo] = useState("all");

  const filtered = useMemo(() => {
    return issues.filter((issue) => {
      const matchesSearch = issue.title.toLowerCase().includes(search.toLowerCase());
      const matchesLabels =
        activeLabels.length === 0 || activeLabels.some((label) => issue.labels.includes(label));
      const matchesRepo = repo === "all" || issue.repo === repo;
      return matchesSearch && matchesLabels && matchesRepo;
    });
  }, [search, activeLabels, repo]);

  const toggleLabel = (label: string) => {
    setActiveLabels((current) =>
      current.includes(label) ? current.filter((item) => item !== label) : [...current, label]
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="w-full max-w-sm">
          <Input
            placeholder="Search issues"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <select
          className="h-10 rounded-md border border-[var(--utoss-border)] bg-transparent px-3 text-sm text-[var(--utoss-muted)]"
          value={repo}
          onChange={(event) => setRepo(event.target.value)}
        >
          <option value="all" className="bg-[var(--utoss-surface)] text-[var(--utoss-text)]">
            All repos
          </option>
          {projects.map((project) => (
            <option
              key={project.id}
              value={project.id}
              className="bg-[var(--utoss-surface)] text-[var(--utoss-text)]"
            >
              {project.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap gap-2">
        {labels.map((label) => (
          <button
            key={label}
            type="button"
            onClick={() => toggleLabel(label)}
            className={`rounded-full border px-3 py-1 text-xs ${
              activeLabels.includes(label)
                ? "border-[#1f6feb] text-[#58a6ff]"
                : "border-[var(--utoss-border)] text-[var(--utoss-muted)]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <Card className="overflow-hidden">
        <div className="divide-y divide-[var(--utoss-border)]">
          {filtered.map((issue) => (
            <div key={issue.id} className="flex flex-wrap items-center justify-between gap-4 p-4">
              <div>
                <p className="text-sm font-medium">{issue.title}</p>
                <p className="text-xs text-[var(--utoss-muted)]">
                  {issue.repo} · Updated {issue.updatedAt}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {issue.labels.map((label) => (
                  <Badge key={label}>{label}</Badge>
                ))}
                <Badge variant={issue.status === "Open" ? "success" : "danger"}>
                  {issue.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}



