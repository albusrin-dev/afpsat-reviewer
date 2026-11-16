/**
 * Site configuration — driven by environment variables with sensible defaults.
 * All public values use NEXT_PUBLIC_ so they are available on both server and client.
 */

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "AFPSAT Reviewer",
  shortName: process.env.NEXT_PUBLIC_SITE_SHORT_NAME ?? "AFPSAT",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
    "Free, independent AFPSAT practice resources and guides curated from trusted sources. Prepare for the Armed Forces of the Philippines Service Aptitude Test.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://afpsat-reviewer.vercel.app",
  locale: process.env.NEXT_PUBLIC_LOCALE ?? "en-PH",
  author: process.env.NEXT_PUBLIC_AUTHOR ?? "AFPSAT Reviewer Community",
  // Feature flags
  features: {
    practiceQuizzes: process.env.NEXT_PUBLIC_FEATURE_QUIZZES === "true",
    darkMode: process.env.NEXT_PUBLIC_FEATURE_DARK_MODE !== "false",
  },
  // Official / trusted external links
  officialLinks: {
    afp: "https://www.afp.mil.ph",
    recruitmentInfo: "https://www.afp.mil.ph", // update when official recruitment page is known
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Subjects", href: "/subjects" },
    { label: "Resources", href: "/resources" },
    { label: "About", href: "/about" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
