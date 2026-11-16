/**
 * Site configuration — driven by environment variables with sensible defaults.
 */
export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "AFPSAT Reviewer",
  shortName: process.env.NEXT_PUBLIC_SITE_SHORT_NAME ?? "AFPSAT",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
    "Review materials for the Armed Forces of the Philippines Service Aptitude Test.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://afpsat-reviewer.vercel.app",
  locale: process.env.NEXT_PUBLIC_LOCALE ?? "en-PH",
  author: process.env.NEXT_PUBLIC_AUTHOR ?? "AFPSAT Reviewer",
  officialLinks: {
    afp: "https://www.afp.mil.ph",
  },
  nav: [
    { label: "Subjects", href: "/subjects" },
    { label: "Resources", href: "/resources" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
