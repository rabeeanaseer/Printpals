# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### PrintPals — Zero-Asset Printables Website (`artifacts/printables`)
- **Preview path**: `/`
- **Tech**: React + Vite, Tailwind CSS, Wouter routing, lucide-react
- **Description**: 299+ free printable worksheets generated dynamically via SVG — zero-asset, no uploaded images.
- **Library files**:
  - `src/lib/content-library.ts` — base library (221 items): alphabet, numbers, math, shapes, animals, fruits, vegetables, anatomy, planners
  - `src/lib/content-library-extra.ts` — extra library (78 items): 33 extra fruits, 37 extra animals, 4 fractions, 4 master sheets
  - Both are merged via `ContentLibrary.push(...ExtraLibrary)` at the end of content-library.ts
- **Content breakdown (299 total)**:
  - 52 alphabet tracing (A-Z uppercase + lowercase)
  - 100 number tracing (1-100)
  - 18 math (symbols + 4 fractions: ½, ¼, ⅓, ¾)
  - 12 shapes
  - 57 animals (20 base + 37 extra: alligator, flamingo, peacock, polar bear, whale, octopus, panda, gorilla, etc.)
  - 44 fruits (11 base + 33 extra: dragonfruit, pomegranate, lychee, avocado, kiwi, etc.)
  - 6 vegetables
  - 3 anatomy
  - 3 planners
  - 4 master sheets (Fruit Alphabet A-Z, Animals Mega-Grid, Math Reference, A-Z Objects)
- **UI**: Professional marketplace-style with mega-header (top banner, logo, Categories mega-menu, search), hero section with stats, scrollable category tabs, 4-column mega-footer with legal/categories/social columns
- **Components**:
  - `PrintCard.tsx` — shows Download SVG + Print buttons on every card
- **Pages**: 
  - `/` — Home marketplace with mega-header, hero, category filter, mega-footer
  - `/print/:id` — Full print view
  - `/about` — About PrintPals
  - `/privacy-policy` — Privacy Policy
  - `/terms` — Terms of Service
  - `/disclaimer` — Disclaimer
- **Print mode**: CSS `@media print` hides nav/footer, scales SVG to A4
