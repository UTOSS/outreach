import { ProjectsBrowser } from "@/components/projects-browser";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Projects</h1>
        <p className="mt-2 text-sm text-[var(--utoss-muted)]">
          Explore UTOSS repositories, filter by language or status, and pick a project to contribute to.
        </p>
      </div>
      <ProjectsBrowser />
    </div>
  );
}
