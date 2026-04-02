import { languageColors } from "@/lib/mock";

export function LanguagePill({ language }: { language: string }) {
  const color = languageColors[language] ?? "#8b949e";
  return (
    <div className="flex items-center gap-2 text-xs text-[var(--utoss-muted)]">
      <span
        className="h-2 w-2 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span>{language}</span>
    </div>
  );
}



