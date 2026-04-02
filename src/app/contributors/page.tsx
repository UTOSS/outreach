import { ContributorsList } from "@/components/contributors-list";

export default function ContributorsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Contributors</h1>
        <p className="mt-2 text-sm text-[var(--utoss-muted)]">
          Meet the people building UTOSS projects in the open.
        </p>
      </div>
      <ContributorsList />
    </div>
  );
}
