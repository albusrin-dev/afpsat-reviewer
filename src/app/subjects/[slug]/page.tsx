import { notFound } from "next/navigation";
import Link from "next/link";
import { getSubjectBySlug, subjects } from "@/config/subjects";
import { getResourcesBySubject } from "@/config/resources";
import { ResourceCard } from "@/components/ResourceCard";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return subjects.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const subject = getSubjectBySlug(slug);
  if (!subject) return { title: "Subject not found" };
  return {
    title: subject.title,
    description: subject.description,
  };
}

export default async function SubjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const subject = getSubjectBySlug(slug);
  if (!subject) notFound();

  const related = getResourcesBySubject(subject.id);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <Link
        href="/subjects"
        className="text-sm font-medium text-emerald-600 hover:underline"
      >
        ← All subjects
      </Link>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">{subject.title}</h1>
      <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
        {subject.description}
      </p>
      {subject.approxItems && (
        <p className="mt-2 text-sm text-zinc-500">
          Recent Form C style exams often include about {subject.approxItems}{" "}
          items in this area (for reference only).
        </p>
      )}

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Key topics</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {subject.topics.map((topic) => (
            <li
              key={topic}
              className="flex items-start gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <span className="mt-0.5 text-emerald-600">•</span>
              {topic}
            </li>
          ))}
        </ul>
      </section>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Related resources</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {related.map((r) => (
              <ResourceCard key={r.id} resource={r} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
