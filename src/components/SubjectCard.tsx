import Link from "next/link";
import type { Subject } from "@/config/subjects";

const icons: Record<string, React.ReactNode> = {
  verbal: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  numerical: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 10h8M8 14h5" />
    </svg>
  ),
  abstract: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
    </svg>
  ),
  general: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  ),
};

export function SubjectCard({ subject }: { subject: Subject }) {
  return (
    <Link
      href={`/subjects/${subject.slug}`}
      className="group flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-5 transition-colors hover:border-[#1e3a5f] hover:bg-slate-50"
    >
      <span className="text-[#1e3a5f]">{icons[subject.id] ?? icons.verbal}</span>
      <div>
        <h2 className="text-base font-semibold text-gray-900 group-hover:text-[#1e3a5f]">
          {subject.title}
        </h2>
        <p className="mt-1 text-sm leading-relaxed text-gray-500">
          {subject.description}
        </p>
      </div>
    </Link>
  );
}
