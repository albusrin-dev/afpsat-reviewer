import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-gray-500">
          Independent review materials. Not affiliated with the AFP.
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
          <Link href="/disclaimer" className="hover:text-gray-800">
            Disclaimer
          </Link>
          <a
            href={siteConfig.officialLinks.afp}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800"
          >
            AFP Official
          </a>
        </div>
      </div>
    </footer>
  );
}
