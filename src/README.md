# UTOSS Dashboard Prototype

GitHub-inspired dashboard prototype for the University of Toronto Open Source Society (UTOSS).

## Setup

```bash
bun install
bun dev
```

Open http://localhost:3000

## What is Implemented

- GitHub dark-themed layout with sticky top navigation
- Home dashboard with stats, projects, activity feed, good first issues, contributor wall, events
- Projects index with filters, search, and repo cards
- Project detail with tabs, README-style markdown, issues, and contributing checklist
- Issues page with search, labels, and repo filter
- Contributors page with sorting and cards
- Events page with detail modal
- Docs page explaining structure and mock data location

## Structure

- `app/` contains routes and layout
- `components/` contains shared UI and page panels
- `lib/mock.ts` centralizes all mock data and type definitions

## Notes

- No backend or external API calls
- All interactions are client-side with mock data
- Built with Next.js App Router, TypeScript, Tailwind CSS, and shadcn/ui components

