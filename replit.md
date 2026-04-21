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
- **Description**: 221+ free printable worksheets generated dynamically via SVG — no uploaded images needed.
- **Library**: `src/lib/content-library.ts` — the entire content engine with all SVG generators
  - 52 alphabet tracing sheets (A-Z uppercase + lowercase)
  - 100 number tracing sheets (1-100)
  - 14 math symbol sheets (+, -, ×, ÷, =, <, >, ≤, ≥, ≠, %, ∞, √, π)
  - 12 shape sheets (circle, square, triangle, rectangle, oval, diamond, pentagon, hexagon, star, heart, arrow, crescent)
  - 20 animal coloring pages (lion, elephant, tiger, giraffe, zebra, cat, dog, rabbit, bear, monkey, penguin, fish, butterfly, snake, horse, cow, pig, owl, frog, duck)
  - 11 fruit coloring pages (apple, banana, orange, grapes, strawberry, watermelon, pineapple, mango, pear, cherries, lemon)
  - 6 vegetable coloring pages (carrot, broccoli, corn, tomato, potato, onion)
  - 3 anatomy outlines (human body, human face, heart anatomy)
  - 3 planners (daily, weekly, budget)
- **Pages**: 
  - `/` — Home with search & category filter grid
  - `/print/:id` — Individual print page with Trace & Learn section and Print button
- **Print mode**: CSS `@media print` hides nav/footer, scales SVG to A4 size
