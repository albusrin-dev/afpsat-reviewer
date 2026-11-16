import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-semibold tracking-tight">About</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-600">
        <p>
          {siteConfig.name} collects free review materials for the Armed Forces
          of the Philippines Service Aptitude Test.
        </p>
        <p>
          Not affiliated with the AFP. For official requirements, see{" "}
          <a
            href={siteConfig.officialLinks.afp}
            className="text-[#1e3a5f] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            afp.mil.ph
          </a>
          .
        </p>
        <p>
          <Link href="/disclaimer" className="text-[#1e3a5f] underline">
            Disclaimer
          </Link>
        </p>
      </div>
    </div>
  );
}
