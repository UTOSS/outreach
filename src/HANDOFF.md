# Maintainer Handoff

This website is a Next.js App Router project for the University of Toronto Open Source Society. The actual app root is the `src/` directory, so run commands from there rather than from the repository root.

To start the site locally, install dependencies with `bun install` from `src/`, then run `bun dev` and open `http://localhost:3000`. The same package also supports `npm install` because `package-lock.json` is present, but the existing README and lockfile setup suggest Bun is the intended workflow; use `bun run build` to check a production build and `bun run lint` to run ESLint.

If Bun is not installed, macOS maintainers can install it with `curl -fsSL https://bun.com/install | bash`, then restart the terminal and confirm it works with `bun --version`. Windows maintainers should use PowerShell and run `powershell -c "irm bun.sh/install.ps1|iex"`, then open a new terminal and confirm with `bun --version`; Bun's official documentation says Windows 10 version 1809 or later is required.

To host the site on Vercel, push the repository to GitHub, import it in Vercel, set the project root directory to `src`, and let Vercel use the detected Next.js build settings. If maintainers specifically want Vercel to run the app with Bun, follow Bun's Vercel guide at `https://bun.com/docs/guides/deployment/vercel`: add a `vercel.json` with `"bunVersion": "1.x"`, update the Next scripts to use `bun --bun next dev` and `bun --bun next build`, then deploy through the Vercel dashboard or with `bunx vercel deploy`.

Routes live in `src/app/`, with `layout.tsx` defining the shared header, side navigation, fonts, and main page frame. Page files such as `app/page.tsx`, `app/projects/page.tsx`, `app/issues/page.tsx`, `app/events/page.tsx`, `app/blog/page.tsx`, `app/contact/page.tsx`, `app/leadership/page.tsx`, and `app/contributors/page.tsx` are the user-facing screens, while `app/projects/[slug]/page.tsx` renders project detail pages from project slugs.

Reusable interface pieces live in `src/components/`, including the header, side navigation, project views, issue browser, event list, contributor list, leadership accordion, and small UI primitives under `src/components/ui/`. Global styling and UTOSS theme variables are in `src/app/globals.css`, static images and logos are in `src/public/`, and shared helpers or data live in `src/lib/`.

Most current content is mock or static data. Project, contributor, issue, activity, event, and blog content is centralized in `src/lib/mock.ts`, while leadership profile content is in `src/lib/leadership.ts`; update those files first when changing displayed content, then adjust components only when the shape or behavior needs to change.

To continue implementation, keep adding new pages as folders with `page.tsx` files under `src/app/`, keep reusable display logic in `src/components/`, and prefer extending the existing data types before adding one-off structures. The biggest future step is replacing `src/lib/mock.ts` with real data sources, such as GitHub, a CMS, or local markdown files, while preserving the same typed data shapes so existing pages and components need minimal rewiring.
