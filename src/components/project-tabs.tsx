"use client";

import type { ReactNode } from "react";
import ReactMarkdown from "react-markdown";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Issue, Project } from "@/lib/mock";

const markdownComponents = {
  h1: ({ children }: { children: ReactNode }) => (
    <h2 className="text-lg font-semibold">{children}</h2>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h3 className="text-base font-semibold">{children}</h3>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <p className="text-sm text-[var(--utoss-muted)]">{children}</p>
  ),
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="list-disc space-y-1 pl-5 text-sm text-[var(--utoss-muted)]">
      {children}
    </ul>
  ),
  li: ({ children }: { children: ReactNode }) => (
    <li className="text-sm text-[var(--utoss-muted)]">{children}</li>
  ),
};

export function ProjectTabs({ project, projectIssues }: { project: Project; projectIssues: Issue[] }) {
  return (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="issues">Issues</TabsTrigger>
        <TabsTrigger value="contributing">Contributing</TabsTrigger>
      </TabsList>

      <TabsContent value="overview">
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <Card className="p-4">
            <div className="space-y-3">
              <ReactMarkdown components={markdownComponents}>{project.readme}</ReactMarkdown>
            </div>
          </Card>
          <Card className="p-4">
            <h3 className="text-sm font-semibold">Tech Stack</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="accent">
                  {tech}
                </Badge>
              ))}
            </div>
            <h3 className="mt-6 text-sm font-semibold">Maintainers</h3>
            <div className="mt-3 space-y-2 text-sm text-[var(--utoss-muted)]">
              {project.maintainers.map((maintainer) => (
                <p key={maintainer}>{maintainer}</p>
              ))}
            </div>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="issues">
        <Card className="p-4">
          <div className="space-y-3">
            {projectIssues.map((issue) => (
              <div
                key={issue.id}
                className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--utoss-border)] pb-3 last:border-b-0"
              >
                <div>
                  <p className="text-sm font-medium">{issue.title}</p>
                  <p className="text-xs text-[var(--utoss-muted)]">Updated {issue.updatedAt}</p>
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
      </TabsContent>

      <TabsContent value="contributing">
        <Card className="p-4">
          <ol className="space-y-3 text-sm text-[var(--utoss-muted)]">
            <li>1. Fork the repository and clone locally.</li>
            <li>2. Run `bun install` and `bun dev` to start the project.</li>
            <li>3. Pick a `good-first-issue` and comment to claim it.</li>
            <li>4. Open a draft PR early for feedback.</li>
            <li>5. Request review from a maintainer.</li>
            <li>6. Celebrate your first UTOSS contribution.</li>
          </ol>
        </Card>
      </TabsContent>
    </Tabs>
  );
}



