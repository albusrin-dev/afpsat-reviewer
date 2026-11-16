import type { Resource } from "@/config/resources";
import { resourceCategories } from "@/config/resources";

export function ResourceCard({ resource }: { resource: Resource }) {
  const category = resourceCategories[resource.category];

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:border-emerald-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-700"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-zinc-900 group-hover:text-emerald-700 dark:text-zinc-50 dark:group-hover:text-emerald-400">
          {resource.title}
        </h3>
        {resource.isFree && (
          <span className="shrink-0 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300">
            Free
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {resource.description}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
        <span className="rounded bg-zinc-100 px-2 py-0.5 dark:bg-zinc-800">
          {category.label}
        </span>
        <span>·</span>
        <span>{resource.source}</span>
      </div>
    </a>
  );
}
