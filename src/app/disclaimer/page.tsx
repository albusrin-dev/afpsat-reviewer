import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-semibold tracking-tight">Disclaimer</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-600">
        <p>
          {siteConfig.name} is an independent educational resource. It is not
          affiliated with, endorsed by, or connected to the Armed Forces of the
          Philippines.
        </p>
        <p>
          Linked materials are for review only and are not official AFPSAT
          items. Always confirm requirements with an official recruitment
          office.
        </p>
      </div>
    </div>
  );
}
