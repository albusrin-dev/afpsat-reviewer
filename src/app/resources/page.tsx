import { resources, resourceCategories } from "@/config/resources";
import { ResourceCard } from "@/components/ResourceCard";
import type { Metadata } from "next";
import type { ResourceCategory } from "@/config/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Curated free AFPSAT practice tests, guides, and study notes from independent trusted sources.",
};

const categoryOrder: ResourceCategory[] = [
  "official",
  "practice",
  "guide",
  "notes",
  "community",
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Resources</h1>
      <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
        Hand-picked links to free practice material and study guides. This
        project does not host copyrighted exam content. Always verify official
        requirements with AFP.
      </p>

      <div className="mt-12 space-y-12">
        {categoryOrder.map((cat) => {
          const items = resources.filter((r) => r.category === cat);
          if (items.length === 0) return null;
          const meta = resourceCategories[cat];
          return (
            <section key={cat}>
              <h2 className="text-xl font-semibold">{meta.label}</h2>
              <p className="mt-1 text-sm text-zinc-500">{meta.description}</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {items.map((r) => (
                  <ResourceCard key={r.id} resource={r} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
