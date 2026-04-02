import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { blogPosts } from "@/lib/mock";

const truncateWords = (text: string, limit: number) => {
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length <= limit) {
    return text;
  }
  return `${words.slice(0, limit).join(" ")}...`;
};

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">UTOSS Blog</h1>
        <p className="mt-2 text-sm text-[var(--utoss-muted)]">
          Updates from the team, project milestones, and community highlights.
        </p>
      </div>

      <div className="space-y-4">
        {blogPosts.map((post) => (
          <Card key={post.id} className="utoss-hover p-5">
            <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--utoss-muted)]">
              <span>{post.date}</span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} className="text-[10px]">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <h2 className="mt-3 text-lg font-semibold">
              <Link href="#" className="utoss-nav-link hover:!text-[#58a6ff]">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 text-sm text-[var(--utoss-muted)]">
              {truncateWords(post.content, 80)}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
