/**
 * AFPSAT subjects configuration.
 */

export type Subject = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  topics: string[];
  approxItems?: number;
};

export const subjects: Subject[] = [
  {
    id: "verbal",
    slug: "verbal-reasoning",
    title: "Verbal Reasoning",
    shortTitle: "Verbal",
    description:
      "Grammar, vocabulary, sentence organization, analogies, and reading comprehension.",
    topics: [
      "Vocabulary & synonyms/antonyms",
      "Grammar and correct usage",
      "Sentence organization / completion",
      "Word analogies",
      "Reading comprehension",
      "Idioms and common expressions",
    ],
    approxItems: 30,
  },
  {
    id: "numerical",
    slug: "numerical-reasoning",
    title: "Numerical Reasoning",
    shortTitle: "Numerical",
    description:
      "Arithmetic, percentages, ratios, word problems, and basic algebra.",
    topics: [
      "Basic operations & number sense",
      "Percentages, ratios, proportions",
      "Speed, distance, time",
      "Word problems",
      "Simple algebra & equations",
      "Averages, probability basics",
    ],
    approxItems: 30,
  },
  {
    id: "abstract",
    slug: "abstract-reasoning",
    title: "Abstract Reasoning",
    shortTitle: "Abstract",
    description:
      "Figure series, analogies, odd-one-out, and letter/number patterns.",
    topics: [
      "Figure series & pattern completion",
      "Analogies (shapes / figures)",
      "Odd one out",
      "Letter & number series",
      "Logical sequences",
    ],
    approxItems: 35,
  },
  {
    id: "general",
    slug: "general-knowledge",
    title: "General Knowledge",
    shortTitle: "General",
    description:
      "Constitution, government, history, and civic knowledge.",
    topics: [
      "Philippine Constitution",
      "Branches of government",
      "Constitutional commissions & local government",
      "Philippine history & political science",
      "AFP organization",
      "Current events & civic awareness",
    ],
  },
];

export function getSubjectBySlug(slug: string): Subject | undefined {
  return subjects.find((s) => s.slug === slug);
}

export function getSubjectById(id: string): Subject | undefined {
  return subjects.find((s) => s.id === id);
}
