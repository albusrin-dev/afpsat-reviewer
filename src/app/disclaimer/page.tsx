import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Legal and affiliation disclaimer for AFPSAT Reviewer.",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Disclaimer</h1>
      <div className="mt-6 space-y-4 text-zinc-700 dark:text-zinc-300">
        <p>
          <strong>{siteConfig.name}</strong> is an independent educational
          resource. It is not affiliated with, endorsed by, sponsored by, or in
          any way connected to the Armed Forces of the Philippines (AFP), the
          Department of National Defense, or any of their offices, recruitment
          centers, or official examination programs.
        </p>
        <p>
          Practice questions, topic lists, and study suggestions presented here
          or linked from this site are intended for general review and
          self-assessment only. They are <strong>not</strong> actual AFPSAT
          questions and do not guarantee performance on any official examination.
        </p>
        <p>
          Exam formats, item counts, time limits, passing scores, and eligibility
          requirements can change and may differ by service branch or testing
          cycle. Always obtain the latest information from official AFP sources
          or an authorized recruitment office.
        </p>
        <p>
          External links are provided for convenience. We do not control the
          content of third-party sites and are not responsible for their accuracy
          or availability.
        </p>
        <p>
          By using this website you acknowledge that you understand the above and
          that study materials here are supplementary only.
        </p>
      </div>
    </div>
  );
}
