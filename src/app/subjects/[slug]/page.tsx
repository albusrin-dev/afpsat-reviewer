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
  if (!subject) return { title: "Not found" };
  return { title: subject.title };
}

export default async function SubjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const subject = getSubjectBySlug(slug);
  if (!subject) notFound();

  const materials = getResourcesBySubject(subject.id);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <Link
        href="/subjects"
        className="text-sm text-gray-500 hover:text-gray-800"
      >
        ← Subjects
      </Link>

      <h1 className="mt-4 text-2xl font-semibold tracking-tight text-gray-900">
        {subject.title}
      </h1>

      {materials.length > 0 ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {materials.map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-sm text-gray-500">Coming soon</p>
      )}

      {subject.topics.length > 0 && (
        <section className="mt-12 border-t border-gray-100 pt-8">
          <h2 className="text-sm font-medium uppercase tracking-wide text-gray-400">
            Topics
          </h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {subject.topics.map((topic) => (
              <li
                key={topic}
                className="rounded-md border border-gray-100 bg-gray-50 px-3 py-2 text-sm text-gray-700"
              >
                {topic}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
