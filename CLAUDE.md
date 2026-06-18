# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## ⚠️ Next.js 16 — verify before coding

This repo runs **Next.js 16.2.9 + React 19.2.4**, which has breaking changes from older Next.js you may know. Before writing or editing any Next-specific code (routing, layouts, metadata, fonts, `next.config`, server/client components, data fetching), read the relevant guide under `node_modules/next/dist/docs/` (entry points: `01-app/`, `02-pages/`, `03-architecture/`). Do not rely on memory of older APIs.

## Commands

```bash
npm run dev     # start dev server (http://localhost:3000)
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint (flat config, eslint-config-next)
```

There is no test setup in this project yet.

## Architecture

- **App Router** under `src/app/` — `layout.tsx` (root layout, html/body shell + Geist fonts) and `page.tsx`. There is no `pages/` directory.
- **Import alias:** `@/*` maps to `./src/*` (see `tsconfig.json`). Prefer `@/...` over deep relative paths.
- **Styling: Tailwind CSS v4**, configured entirely in CSS — there is no `tailwind.config.js`. Theme tokens, fonts, and dark mode live in `src/app/globals.css` via `@import "tailwindcss"` and the `@theme inline {}` block. PostCSS wires it up through `@tailwindcss/postcss` in `postcss.config.mjs`.
- **Fonts:** Geist Sans/Mono loaded with `next/font/google` in `layout.tsx`, exposed as CSS variables (`--font-geist-sans`, `--font-geist-mono`) that Tailwind's `--font-sans`/`--font-mono` reference.
- **TypeScript** is `strict`; `next.config.ts` is currently empty scaffolding.
