"use client";

import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/lib/mock";

export function ProjectsBrowser() {
  const projectVisuals: Record<string, string> = {
    "risc-v-cpu":
      "bg-[radial-gradient(circle_at_top_left,rgba(88,166,255,0.35),transparent_45%),linear-gradient(135deg,#0f172a,#111827_55%,#1e3a8a)]",
    firefox:
      "bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.35),transparent_40%),linear-gradient(135deg,#1f2937,#0f172a_55%,#7c2d12)]",
    "fpga-devboard":
      "bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.28),transparent_42%),linear-gradient(135deg,#111827,#0b1220_55%,#134e4a)]",
  };
  const softwareProjects = projects.filter((project) =>
    project.tags.includes("Software"),
  );
  const hardwareProjects = projects.filter((project) =>
    project.tags.includes("Hardware"),
  );

  return (
    <Tabs defaultValue="hardware" className="space-y-4">
      <TabsList>
        <TabsTrigger value="hardware">Hardware</TabsTrigger>
        <TabsTrigger value="software">Software</TabsTrigger>
      </TabsList>

      <TabsContent value="hardware" className="mt-0">
        <div className="grid gap-4 md:grid-cols-2">
          {hardwareProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              projectVisuals={projectVisuals}
            />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="software" className="mt-0">
        <div className="grid gap-4 md:grid-cols-2">
          {softwareProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              projectVisuals={projectVisuals}
            />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}

function ProjectCard({
  project,
  projectVisuals,
}: {
  project: (typeof projects)[number];
  projectVisuals: Record<string, string>;
}) {
  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <Card className="flex h-full flex-col overflow-hidden transition-colors hover:bg-[rgba(255,255,255,0.03)]">
        <div
          className={`relative flex aspect-[4/3] items-end overflow-hidden border-b border-[var(--utoss-border)] p-5 ${projectVisuals[project.slug] ?? "bg-[var(--utoss-surface)]"}`}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),transparent_55%)]" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">
              Project
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
              {project.name}
            </h2>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between p-5">
          <div>
            <p className="text-sm leading-7 text-[var(--utoss-muted)]">
              What it&apos;s about: {project.description}
            </p>

            <div className="mt-5">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--utoss-muted)]">
                Current Skills
              </p>
              <p className="mt-2 text-sm text-[var(--utoss-text)]">
                {project.techStack.slice(0, 4).join(" • ")}
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-3 text-sm">
            <span className="text-[var(--utoss-muted)]">
              {project.contributors.length} contributors
            </span>
            <span className="font-medium text-[var(--utoss-text)]">
              View project
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
