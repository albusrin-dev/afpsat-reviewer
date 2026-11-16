import Link from "next/link";
import { subjects } from "@/config/subjects";
import { siteConfig } from "@/config/site";
import { SubjectCard } from "@/components/SubjectCard";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          {siteConfig.name}
        </h1>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-3">
          <Link
            href="/subjects"
            className="inline-flex h-11 items-center justify-center rounded-md bg-[#1e3a5f] px-5 text-sm font-medium text-white hover:bg-[#162d4a]"
          >
            Browse Subjects
          </Link>
          <Link
            href="/resources"
            className="inline-flex h-11 items-center justify-center rounded-md border border-gray-300 bg-white px-5 text-sm font-medium text-gray-800 hover:bg-gray-50"
          >
            All Resources
          </Link>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {subjects.map((s) => (
          <SubjectCard key={s.id} subject={s} />
        ))}
      </div>
    </div>
  );
}
