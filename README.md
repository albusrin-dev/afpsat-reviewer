# AFPSAT Reviewer

MVP web app for the **Armed Forces of the Philippines Service Aptitude Test (AFPSAT)** — curated free resources, subject overviews, and study links from independent trusted sources.

**Not affiliated with the AFP.** Always confirm requirements with official recruitment offices or [afp.mil.ph](https://www.afp.mil.ph).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Config-driven (`src/config/*`) + environment-driven branding

## Local development

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

| Area | Location |
|------|----------|
| Site name, URL, nav, feature flags | `src/config/site.ts` + `NEXT_PUBLIC_*` env vars |
| Subjects & topics | `src/config/subjects.ts` |
| Resource links & categories | `src/config/resources.ts` |

Add or edit entries in the config files; the UI reads from them.

## Deploy

Vercel project `afpsat-reviewer` is linked. Pushes to `main` deploy automatically.

## License / content

This repository code is provided for educational use. Linked third-party practice materials remain the property of their respective owners. Do not treat any linked content as official AFPSAT items.
