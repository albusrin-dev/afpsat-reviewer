import { subjects } from "@/config/subjects";
import { SubjectCard } from "@/components/SubjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subjects",
};

export default function SubjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
        Subjects
      </h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {subjects.map((s) => (
          <SubjectCard key={s.id} subject={s} />
        ))}
      </div>
    </div>
  );
}
