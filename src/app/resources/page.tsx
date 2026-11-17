import { getActiveResources, resourceTypeLabels } from "@/config/resources";
import { subjects } from "@/config/subjects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
};

function subjectNames(ids?: string[]) {
  if (!ids?.length) return "—";
  return ids
    .map((id) => subjects.find((s) => s.id === id)?.shortTitle ?? id)
    .join(", ");
}

export default function ResourcesPage() {
  const active = getActiveResources();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
        All Resources
      </h1>

      {active.length === 0 ? (
        <p className="mt-8 text-sm text-gray-500">Coming soon</p>
      ) : (
        <>
          <div className="mt-8 space-y-3 sm:hidden">
            {active.map((r) => (
              <div
                key={r.id}
                className="rounded-lg border border-gray-200 bg-white p-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="font-medium text-gray-900">{r.title}</p>
                  <span className="shrink-0 rounded border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs text-gray-600">
                    {resourceTypeLabels[r.type]}
                  </span>
                </div>
                <p className="mt-1 text-xs text-gray-400">
                  {subjectNames(r.subjects)} · {r.source}
                </p>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex h-10 w-full items-center justify-center rounded-md bg-[#1e3a5f] text-sm font-medium text-white hover:bg-[#162d4a]"
                >
                  Open
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 hidden overflow-hidden rounded-lg border border-gray-200 sm:block">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-gray-200 bg-gray-50 text-xs font-medium uppercase tracking-wide text-gray-500">
                <tr>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Subject</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3 text-right">Access</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {active.map((r) => (
                  <tr key={r.id} className="bg-white hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <p className="font-medium text-gray-900">{r.title}</p>
                      <p className="text-xs text-gray-400">{r.source}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {subjectNames(r.subjects)}
                    </td>
                    <td className="px-4 py-3">
                      <span className="rounded border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs text-gray-600">
                        {resourceTypeLabels[r.type]}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-md bg-[#1e3a5f] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#162d4a]"
                      >
                        Open
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
