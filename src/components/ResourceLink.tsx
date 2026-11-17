"use client";

import { track } from "@vercel/analytics";
import type { Resource } from "@/config/resources";

type Props = {
  resource: Resource;
  className?: string;
  children: React.ReactNode;
};

/** Shared download/open link with PDF download tracking. */
export function ResourceLink({ resource, className, children }: Props) {
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
    <a
      href={resource.url}
      onClick={handleClick}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : { download: true })}
      className={className}
    >
      {children}
    </a>
  );
}
