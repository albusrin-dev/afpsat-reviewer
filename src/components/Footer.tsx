import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-semibold text-zinc-900 dark:text-zinc-50">
              {siteConfig.name}
            </p>
            <p className="mt-1 max-w-sm text-sm text-zinc-600 dark:text-zinc-400">
              Independent study aid. Not affiliated with, endorsed by, or
              connected to the Armed Forces of the Philippines.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/about"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              About
            </Link>
            <Link
              href="/disclaimer"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Disclaimer
            </Link>
            <a
              href={siteConfig.officialLinks.afp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              AFP Official
            </a>
          </div>
        </div>
        <p className="mt-8 text-xs text-zinc-500 dark:text-zinc-500">
          © 2026 {siteConfig.author}. For personal study only. Always confirm
          requirements with an official recruitment office.
        </p>
      </div>
    </footer>
  );
}
