"use client";

import { track } from "@vercel/analytics";
import type { Resource } from "@/config/resources";
import { resourceTypeLabels } from "@/config/resources";

export function ResourceCard({ resource }: { resource: Resource }) {
  const isPdf = resource.type === "pdf";
  const isExternal = resource.url.startsWith("http");

  function handleClick() {
    if (isPdf) {
      track("PDF Download", {
        title: resource.title,
        id: resource.id,
        subject: resource.subjects?.[0] ?? "unknown",
      });
    }
  }

  return (
    <div className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-medium text-gray-900">{resource.title}</h3>
        <span className="shrink-0 rounded border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs font-medium text-gray-600">
          {resourceTypeLabels[resource.type]}
        </span>
      </div>
      {resource.description && (
        <p className="text-sm text-gray-500">{resource.description}</p>
      )}
      <div className="mt-auto flex items-center justify-between gap-3 pt-1">
        <span className="text-xs text-gray-400">{resource.source}</span>
        <a
          href={resource.url}
          onClick={handleClick}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : { download: true })}
          className="inline-flex items-center justify-center rounded-md bg-[#1e3a5f] px-3.5 py-2 text-sm font-medium text-white hover:bg-[#162d4a]"
        >
          {isPdf ? "Download" : "Open"}
        </a>
      </div>
    </div>
  );
}
