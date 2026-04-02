import { IssuesBrowser } from "@/components/issues-browser";

export default function IssuesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Issues</h1>
        <p className="mt-2 text-sm text-[var(--utoss-muted)]">
          Find open issues across UTOSS repositories and get involved.
        </p>
      </div>
      <IssuesBrowser />
    </div>
  );
}



