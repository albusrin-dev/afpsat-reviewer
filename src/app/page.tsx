import Link from "next/link";
import { subjects } from "@/config/subjects";
import { resources } from "@/config/resources";
import { siteConfig } from "@/config/site";
import { SubjectCard } from "@/components/SubjectCard";
import { ResourceCard } from "@/components/ResourceCard";

export default function HomePage() {
  const featuredResources = resources.slice(0, 3);

  return (
    <div>
      <section className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Independent · Free · Config-driven
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/subjects"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              Browse subjects
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              All resources
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              AFPSAT coverage
            </h2>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">
              Core areas typically assessed. Item counts refer to recent Form C
              style exams and may vary by testing office.
            </p>
          </div>
          <Link
            href="/subjects"
            className="hidden text-sm font-medium text-emerald-600 hover:underline sm:block"
          >
            View all →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {subjects.map((s) => (
            <SubjectCard key={s.id} subject={s} />
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Curated resources
              </h2>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                Trusted independent sources for practice and study. Always
                cross-check official requirements.
              </p>
            </div>
            <Link
              href="/resources"
              className="hidden text-sm font-medium text-emerald-600 hover:underline sm:block"
            >
              See all →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredResources.map((r) => (
              <ResourceCard key={r.id} resource={r} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900/50 dark:bg-amber-950/30">
          <h3 className="font-semibold text-amber-900 dark:text-amber-200">
            Important
          </h3>
          <p className="mt-2 text-sm text-amber-800 dark:text-amber-300/90">
            This site is an independent study aid and is{" "}
            <strong>not affiliated</strong> with the Armed Forces of the
            Philippines. Practice questions and guides are for review only and
            are not actual AFPSAT items. Confirm exam schedules, requirements,
            and cut-offs with an official AFP recruitment office or{" "}
            <a
              href={siteConfig.officialLinks.afp}
              className="underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              afp.mil.ph
            </a>
            .
          </p>
          <Link
            href="/disclaimer"
            className="mt-3 inline-block text-sm font-medium text-amber-900 underline dark:text-amber-200"
          >
            Full disclaimer →
          </Link>
        </div>
      </section>
    </div>
  );
}
