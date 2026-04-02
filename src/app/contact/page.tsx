import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Contact</h1>
        <p className="mt-2 text-sm text-[var(--utoss-muted)]">
          Reach out for partnerships, sponsorships, or contributor support at
          utoss@gmail.com.
        </p>
      </div>
    </div>
  );
}
