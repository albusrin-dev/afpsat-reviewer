/**
 * AFPSAT subjects / subtests configuration.
 * Easy to extend or reorder without touching UI components.
 */

export type Subject = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  topics: string[];
  approxItems?: number;
  color: string;
};

export const subjects: Subject[] = [
  {
    id: "verbal",
    slug: "verbal-reasoning",
    title: "Verbal Reasoning",
    shortTitle: "Verbal",
    description:
      "Grammar, vocabulary, sentence organization, analogies, reading comprehension, and correct usage.",
    topics: [
      "Vocabulary & synonyms/antonyms",
      "Grammar and correct usage",
      "Sentence organization / completion",
      "Word analogies",
      "Reading comprehension",
      "Idioms and common expressions",
    ],
    approxItems: 30,
    color: "blue",
  },
  {
    id: "numerical",
    slug: "numerical-reasoning",
    title: "Numerical Reasoning",
    shortTitle: "Numerical",
    description:
      "Arithmetic, percentages, ratios, basic algebra, word problems, speed-distance-time, and data interpretation.",
    topics: [
      "Basic operations & number sense",
      "Percentages, ratios, proportions",
      "Speed, distance, time",
      "Word problems",
      "Simple algebra & equations",
      "Averages, probability basics",
    ],
    approxItems: 30,
    color: "emerald",
  },
  {
    id: "abstract",
    slug: "abstract-reasoning",
    title: "Abstract / Logical Reasoning",
    shortTitle: "Abstract",
    description:
      "Figure series, analogies, odd-one-out, letter and number patterns, and non-verbal problem solving.",
    topics: [
      "Figure series & pattern completion",
      "Analogies (shapes / figures)",
      "Odd one out",
      "Letter & number series",
      "Logical sequences",
    ],
    approxItems: 35,
    color: "violet",
  },
  {
    id: "general",
    slug: "general-knowledge",
    title: "General Knowledge & Information",
    shortTitle: "General Info",
    description:
      "Philippine Constitution, government structure, history, current affairs, and AFP-related knowledge often covered in reviewers.",
    topics: [
      "Philippine Constitution (Preamble, Bill of Rights)",
      "Branches of government",
      "Constitutional commissions & local government",
      "Philippine history & political science",
      "AFP organization & basic military knowledge",
      "Current events & civic awareness",
    ],
    color: "amber",
  },
];

export function getSubjectBySlug(slug: string): Subject | undefined {
  return subjects.find((s) => s.slug === slug);
}

export function getSubjectById(id: string): Subject | undefined {
  return subjects.find((s) => s.id === id);
}
