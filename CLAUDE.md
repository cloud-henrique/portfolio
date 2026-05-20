# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # start dev server
npm run build        # production build
npm run lint         # ESLint check
npm run lint:fix     # ESLint auto-fix
npm run type-check   # TypeScript check (no emit)
npm run format       # Prettier format all TS/TSX/JSON/MD files
```

Before finalizing any relevant change, run `lint`, `type-check`, and `build` in sequence. If a command fails due to a pre-existing issue, document the command, error, likely cause, and suggested fix.

## Architecture

Single-page portfolio built with Next.js 15 App Router. There are no API routes or dynamic segments — the entire site is one static page.

**Data layer**: all content (profile info, stack, cases, experience, workflow) lives in [src/data/profile.ts](src/data/profile.ts). Editing content means editing this file only, not the section components.

**Page composition**: [src/app/page.tsx](src/app/page.tsx) assembles seven section components in order: Hero → About → Stack → Cases → Experience → Workflow → Contact.

**Layout**: [src/components/Layout.tsx](src/components/Layout.tsx) is a client component that owns theme state (`next-themes`) and mobile menu state. It wraps every page via [src/app/layout.tsx](src/app/layout.tsx). The `!mounted` early-return prevents hydration mismatches for the theme toggle.

**Component organization**:

- `src/components/sections/` — one file per page section
- `src/components/ui/` — reusable primitives (`Badge`, `SectionHeading`)
- `src/components/*.tsx` — layout-level components (Header, Footer, MobileHeader, HamburguerMenu, Switch)
- `src/components/index.tsx` — barrel re-export for layout components

**Styling**: Tailwind CSS with a custom `offwhite` background color. Dark mode via `class` strategy. Accent color is terracotta/copper. No CSS Modules or styled-components.

## Content and visual guidelines

- All content is in Portuguese (pt-BR).
- Tone: professional, direct, sober — no promotional excess or informal exaggeration.
- Do not mention completed graduation; if education appears, use "Ciência da Computação — graduação incompleta" or omit entirely.
- Professional cases without a public URL (`href`) must stay descriptive — no links, screenshots, internal data, or client details.
- Visual identity: clean, neutral base (graphite / off-white), terracotta accent, good contrast. No busy animations, emoji excess, or generic-template appearance.
- Keep sections well-spaced, text concise, visual hierarchy clear.
- Responsive across mobile, tablet, and desktop. Preserve accessibility and keyboard navigation.
- Avoid adding libraries unless clearly necessary.
