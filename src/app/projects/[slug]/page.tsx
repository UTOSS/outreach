import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProjectTabs } from "@/components/project-tabs";
import { issues, projects } from "@/lib/mock";
import { LanguagePill } from "@/components/language-pill";

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const projectIssues = issues.filter((issue) => issue.repo === project.id);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold">{project.name}</h1>
            <Badge variant="accent">{project.status}</Badge>
          </div>
          <p className="mt-2 text-sm text-[var(--utoss-muted)]">{project.description}</p>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-[var(--utoss-muted)]">
            <LanguagePill language={project.language} />
            <span>? {project.stars}</span>
            <span>? {project.forks}</span>
            <span>{project.lastUpdated}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" asChild>
            <Link href="#">View Repo</Link>
          </Button>
          <Button asChild>
            <Link href="#good-first-issues">Good first issues</Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <ProjectTabs project={project} projectIssues={projectIssues} />

      <Card id="good-first-issues" className="p-4">
        <h3 className="text-sm font-semibold">Good first issues</h3>
        <div className="mt-3 space-y-2">
          {projectIssues
            .filter((issue) => issue.labels.includes("good-first-issue"))
            .map((issue) => (
              <div
                key={issue.id}
                className="flex items-center justify-between gap-3 rounded-md border border-[var(--utoss-border)] p-3"
              >
                <div>
                  <p className="text-sm font-medium">{issue.title}</p>
                  <p className="text-xs text-[var(--utoss-muted)]">Updated {issue.updatedAt}</p>
                </div>
                <Badge variant="accent">{issue.difficulty}</Badge>
              </div>
            ))}
          {projectIssues.filter((issue) => issue.labels.includes("good-first-issue")).length ===
          0 ? (
            <p className="text-sm text-[var(--utoss-muted)]">
              No good first issues right now. Check back soon.
            </p>
          ) : null}
        </div>
      </Card>
    </div>
  );
}



