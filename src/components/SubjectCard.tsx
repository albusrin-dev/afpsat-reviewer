import Link from "next/link";
import type { Subject } from "@/config/subjects";

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-950/40 dark:border-blue-800 dark:text-blue-200",
  emerald:
    "bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-200",
  violet:
    "bg-violet-50 border-violet-200 text-violet-800 dark:bg-violet-950/40 dark:border-violet-800 dark:text-violet-200",
  amber:
    "bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-950/40 dark:border-amber-800 dark:text-amber-200",
};

export function SubjectCard({ subject }: { subject: Subject }) {
  const accent = colorMap[subject.color] ?? colorMap.blue;

  return (
    <Link
      href={`/subjects/${subject.slug}`}
      className={`group block rounded-xl border p-5 transition-all hover:shadow-md ${accent}`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight">
          {subject.title}
        </h3>
        {subject.approxItems && (
          <span className="shrink-0 rounded-full bg-white/70 px-2.5 py-0.5 text-xs font-medium dark:bg-black/20">
            ~{subject.approxItems} items
          </span>
        )}
      </div>
      <p className="mt-2 text-sm opacity-90">{subject.description}</p>
      <p className="mt-4 text-xs font-medium opacity-70 group-hover:opacity-100">
        View topics & resources →
      </p>
    </Link>
  );
}
