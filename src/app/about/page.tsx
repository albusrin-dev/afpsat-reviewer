import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name} — independent AFPSAT study aid.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>
      <div className="mt-6 space-y-4 text-zinc-700 dark:text-zinc-300">
        <p>
          <strong>{siteConfig.name}</strong> is a lightweight, config-driven MVP
          built to help applicants prepare for the Armed Forces of the
          Philippines Service Aptitude Test (AFPSAT).
        </p>
        <p>
          The site aggregates publicly available information about the exam
          structure and points you to free practice resources and study notes
          maintained by independent communities and educators. It is designed so
          that subjects, resources, and site branding can be updated through
          configuration files and environment variables without rewriting the
          UI.
        </p>
        <p>
          This project is <strong>not affiliated with, endorsed by, or
          connected to</strong> the Armed Forces of the Philippines or any
          government agency. For official recruitment requirements, schedules,
          and testing locations, always refer to{" "}
          <a
            href={siteConfig.officialLinks.afp}
            className="text-emerald-600 underline hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            afp.mil.ph
          </a>{" "}
          or contact a recruitment office directly.
        </p>
        <p>
          See the{" "}
          <Link href="/disclaimer" className="text-emerald-600 underline">
            full disclaimer
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
