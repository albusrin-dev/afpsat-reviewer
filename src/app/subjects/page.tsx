import { subjects } from "@/config/subjects";
import { SubjectCard } from "@/components/SubjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subjects",
  description:
    "AFPSAT subject areas: Verbal, Numerical, Abstract Reasoning, and General Knowledge.",
};

export default function SubjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Subjects</h1>
      <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
        The AFPSAT typically covers verbal reasoning, numerical reasoning, and
        abstract/logical reasoning. Many independent reviewers also include
        general knowledge and civic topics. Exact format can vary by testing
        office and form version.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {subjects.map((s) => (
          <SubjectCard key={s.id} subject={s} />
        ))}
      </div>
    </div>
  );
}
