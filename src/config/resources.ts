/**
 * Curated review materials — single source of truth.
 * Active materials surface in the UI; archived entries are kept but hidden.
 */

export type ResourceType =
  | "practice"
  | "guide"
  | "notes"
  | "app"
  | "official"
  | "youtube"
  | "pdf";

export type Resource = {
  id: string;
  title: string;
  description: string;
  url: string;
  type: ResourceType;
  subjects?: string[];
  source: string;
  /** When true, kept in config but excluded from the active library UI */
  archived?: boolean;
};

export const resourceTypeLabels: Record<ResourceType, string> = {
  practice: "Practice",
  guide: "Guide",
  notes: "Notes",
  app: "App",
  official: "Official",
  youtube: "YouTube",
  pdf: "PDF",
};

export const resources: Resource[] = [
  // Active
  {
    id: "leonelyn-numerical",
    title: "Numerical Reasoning for AFPSAT",
    description: "YouTube playlist by Leonelyn.",
    url: "https://www.youtube.com/playlist?list=PLzahD1KhmHzqcTYRzUcjBKm5mIIBT7cMH",
    type: "youtube",
    subjects: ["numerical"],
    source: "Leonelyn",
  },
  {
    id: "leonelyn-abstract",
    title: "Abstract Reasoning",
    description: "YouTube playlist by Leonelyn.",
    url: "https://www.youtube.com/playlist?list=PLzahD1KhmHzqq_hnn0sHDQON6ju2CFO7L",
    type: "youtube",
    subjects: ["abstract"],
    source: "Leonelyn",
  },

  // Archived — preserved, not shown in the active library
  {
    id: "afp-official",
    title: "Armed Forces of the Philippines Official Website",
    description: "Official announcements and recruitment information.",
    url: "https://www.afp.mil.ph",
    type: "official",
    source: "AFP",
    archived: true,
  },
  {
    id: "topnotcher-afpsat",
    title: "AFPSAT Form C Format & Practice",
    description: "Form C structure, scoring, and free practice tests.",
    url: "https://topnotcher.ph/afp-service-aptitude-test-afpsat-reviewer/",
    type: "practice",
    subjects: ["verbal", "numerical", "abstract"],
    source: "Topnotcher PH",
    archived: true,
  },
  {
    id: "topnotcher-abstract",
    title: "Abstract Reasoning Practice Test",
    description: "35-item practice: figure series, analogies, odd-one-out.",
    url: "https://topnotcher.ph/afpsat-abstract-reasoning-reviewer-and-practice-test/",
    type: "practice",
    subjects: ["abstract"],
    source: "Topnotcher PH",
    archived: true,
  },
  {
    id: "topnotcher-numerical",
    title: "Numerical Reasoning Practice Test",
    description: "30-item practice with formulas reference.",
    url: "https://topnotcher.ph/afpsat-numerical-reasoning-reviewer-and-practice-test/",
    type: "practice",
    subjects: ["numerical"],
    source: "Topnotcher PH",
    archived: true,
  },
  {
    id: "supertutor-afpsat",
    title: "AFPSAT Reviewer Overview",
    description: "Chapter notes, readiness test, and study planner.",
    url: "https://supertutor.ph/resources/exams/afpsat/",
    type: "guide",
    subjects: ["verbal", "numerical", "abstract", "general"],
    source: "Super Tutor",
    archived: true,
  },
  {
    id: "supertutor-general",
    title: "General Information Chapters",
    description: "Constitution, government, history, and civic topics.",
    url: "https://supertutor.ph/resources/exams/afpsat/general-information/",
    type: "notes",
    subjects: ["general"],
    source: "Super Tutor",
    archived: true,
  },
  {
    id: "pasa-app",
    title: "Pasa — AFPSAT Practice App",
    description: "Free practice app with subtopic sets and timed mocks.",
    url: "https://www.pasa.community/",
    type: "app",
    subjects: ["verbal", "numerical", "abstract", "general"],
    source: "PASA Community",
    archived: true,
  },
];

export function getActiveResources() {
  return resources.filter((r) => !r.archived);
}

export function getResourcesBySubject(subjectId: string) {
  return resources.filter(
    (r) => !r.archived && r.subjects?.includes(subjectId)
  );
}
