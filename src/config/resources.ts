/**
 * Curated resources from trusted / independent sources.
 * Keep this file as the single source of truth for links and descriptions.
 */

export type ResourceCategory =
  | "official"
  | "practice"
  | "guide"
  | "notes"
  | "community";

export type Resource = {
  id: string;
  title: string;
  description: string;
  url: string;
  category: ResourceCategory;
  subjects?: string[];
  isFree: boolean;
  source: string;
  tags?: string[];
};

export const resources: Resource[] = [
  {
    id: "afp-official",
    title: "Armed Forces of the Philippines Official Website",
    description:
      "Primary source for official announcements, recruitment information, and organizational details. Always verify schedules and requirements here or at local recruitment offices.",
    url: "https://www.afp.mil.ph",
    category: "official",
    isFree: true,
    source: "AFP",
    tags: ["official", "recruitment"],
  },
  {
    id: "topnotcher-afpsat",
    title: "AFPSAT Reviewer — Form C Format & Practice (Topnotcher PH)",
    description:
      "Independent overview of Form C structure (95 items across Abstract, Verbal, Numerical), category scoring, and free practice tests for each part.",
    url: "https://topnotcher.ph/afp-service-aptitude-test-afpsat-reviewer/",
    category: "practice",
    subjects: ["verbal", "numerical", "abstract"],
    isFree: true,
    source: "Topnotcher PH",
    tags: ["form-c", "practice-tests"],
  },
  {
    id: "topnotcher-abstract",
    title: "Abstract Reasoning Practice Test",
    description:
      "Free 35-item abstract reasoning practice set styled after Form C (figure series, analogies, odd-one-out, letter patterns).",
    url: "https://topnotcher.ph/afpsat-abstract-reasoning-reviewer-and-practice-test/",
    category: "practice",
    subjects: ["abstract"],
    isFree: true,
    source: "Topnotcher PH",
  },
  {
    id: "topnotcher-numerical",
    title: "Numerical Reasoning Practice Test",
    description:
      "Free 30-item numerical practice covering operations, percentages, and word problems with formulas reference.",
    url: "https://topnotcher.ph/afpsat-numerical-reasoning-reviewer-and-practice-test/",
    category: "practice",
    subjects: ["numerical"],
    isFree: true,
    source: "Topnotcher PH",
  },
  {
    id: "supertutor-afpsat",
    title: "AFPSAT Reviewer Overview (Super Tutor)",
    description:
      "Chapter-style notes, readiness test, and study planner focused on verbal, numerical, logical, and general information areas.",
    url: "https://supertutor.ph/resources/exams/afpsat/",
    category: "guide",
    subjects: ["verbal", "numerical", "abstract", "general"],
    isFree: true,
    source: "Super Tutor",
    tags: ["notes", "planner"],
  },
  {
    id: "supertutor-general",
    title: "General Information Chapters",
    description:
      "Structured chapters on Constitution, government structure, commissions, history, and related civic topics useful for the general knowledge portion.",
    url: "https://supertutor.ph/resources/exams/afpsat/general-information/",
    category: "notes",
    subjects: ["general"],
    isFree: true,
    source: "Super Tutor",
  },
  {
    id: "pasa-app",
    title: "Pasa — Free AFPSAT Practice App",
    description:
      "Independent free practice app with subtopic sets, timed mock structure, and tips. Not affiliated with AFP.",
    url: "https://www.pasa.community/",
    category: "community",
    subjects: ["verbal", "numerical", "abstract", "general"],
    isFree: true,
    source: "PASA Community",
    tags: ["app", "offline"],
  },
];

export const resourceCategories: Record<
  ResourceCategory,
  { label: string; description: string }
> = {
  official: {
    label: "Official",
    description: "Primary AFP and government sources",
  },
  practice: {
    label: "Practice Tests",
    description: "Free practice sets and mock-style questions",
  },
  guide: {
    label: "Guides & Overviews",
    description: "Format explanations and study roadmaps",
  },
  notes: {
    label: "Study Notes",
    description: "Chapter-style content and topic summaries",
  },
  community: {
    label: "Community & Apps",
    description: "Independent tools and community resources",
  },
};

export function getResourcesByCategory(category: ResourceCategory) {
  return resources.filter((r) => r.category === category);
}

export function getResourcesBySubject(subjectId: string) {
  return resources.filter((r) => r.subjects?.includes(subjectId));
}
