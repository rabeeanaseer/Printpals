# PrintPals

<p align="center">
  <a href="https://www.printplues.com/">
    <img src="https://img.shields.io/badge/Live-www.printplues.com-6C63FF?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Live Website" />
  </a>
  <img src="https://img.shields.io/badge/Monorepo-pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white" alt="pnpm Workspaces" />
  <img src="https://img.shields.io/badge/Node.js-24-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js 24" />
  <img src="https://img.shields.io/badge/Package_Manager-pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white" alt="pnpm" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5.9" />
  <img src="https://img.shields.io/badge/API-Express_5-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express 5" />
  <img src="https://img.shields.io/badge/Database-PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/ORM-Drizzle-C5F74F?style=for-the-badge" alt="Drizzle ORM" />
  <img src="https://img.shields.io/badge/Validation-Zod-1E4D8C?style=for-the-badge" alt="Zod" />
  <img src="https://img.shields.io/badge/Schema-drizzle--zod-334155?style=for-the-badge" alt="drizzle-zod" />
  <img src="https://img.shields.io/badge/API_Codegen-Orval-5A67D8?style=for-the-badge" alt="Orval" />
  <img src="https://img.shields.io/badge/Build-esbuild-FFCF00?style=for-the-badge" alt="esbuild" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License" />
</p>

<p align="center">
  <a href="https://www.printplues.com/"><strong>https://www.printplues.com/</strong></a>
</p>

<p align="center">
  <strong>Free printable worksheets for kids and educators — instant, print-ready, and built for zero-friction access.</strong>
</p>

<p align="center">
  PrintPals is a modern printable worksheet platform that helps parents, teachers, and learners quickly discover and use high-quality educational printables without sign-up, login, or unnecessary complexity.
</p>

---

## Overview

PrintPals is built to make printable learning resources simple, fast, and accessible.

The platform offers free printable worksheets across categories like alphabet tracing, number tracing, math reference, shapes, animals, fruits, planners, and more. Everything is designed around a clean user experience and SVG-first printable generation, making output crisp, scalable, and printer-friendly.

Instead of burying educational resources behind ads, accounts, or bloated downloads, PrintPals focuses on speed, accessibility, and quality.

## Live Product

**Website:** [https://www.printplues.com/](https://www.printplues.com/)

## Screenshots

> Add your screenshots here after uploading them to your repo.

### Homepage

![PrintPals Homepage]<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/3a349314-0828-4870-9338-5bb53c762458" />


### Categories

![PrintPals Categories]<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/bd3798e7-27da-4030-b58e-f2c52d3d943e" />


### Featured Printables

![PrintPals Featured Printables]<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/349daec7-6c8d-4857-a5d0-dc773bf411fc" />


### Worksheet Preview

![PrintPals Worksheet Preview]<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/a72ed723-b253-4a11-9ad7-eaba5d504859" />


## Why PrintPals

PrintPals is designed around a few simple product principles:

- **No sign-up friction**  
  Users should be able to access printable resources instantly.

- **Print quality first**  
  Worksheets should render cleanly and look great on real printers.

- **Fast and accessible**  
  Educational materials should be easy to browse, use, and print.

- **Built to scale**  
  The technical stack supports a modern product architecture with strong typing, generated contracts, and maintainable services.

## Features

- 317+ free printable worksheets
- Instant SVG-based printable generation
- No login or account required
- Print-ready layouts optimized for clean output
- Education-first browsing experience
- Categories for parents, teachers, and learners
- Fast access to classroom and home-learning materials

## Content Categories

PrintPals includes printable content across categories such as:

- Alphabet Tracing
- Number Tracing
- Math Reference
- Shapes & Geometry
- Animal Worksheets
- Fruit Collection
- Vegetable Collection
- Human Anatomy
- Planners
- Master Sheets

## Tech Stack

PrintPals is powered by a modern TypeScript backend stack:

- **Monorepo tool:** pnpm workspaces
- **Runtime:** Node.js 24
- **Package manager:** pnpm
- **Language:** TypeScript 5.9
- **API framework:** Express 5
- **Database:** PostgreSQL
- **ORM:** Drizzle ORM
- **Validation:** Zod (`zod/v4`) + `drizzle-zod`
- **API codegen:** Orval from OpenAPI specs
- **Build:** esbuild (CommonJS bundle)

## Architecture

The project uses a monorepo structure to keep services, packages, shared types, and tooling organized.

This architecture helps PrintPals:

- share types safely across packages
- keep API contracts consistent
- validate data with confidence
- evolve backend services cleanly
- support long-term product growth

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js 24**
- **pnpm**
- **PostgreSQL**

### Clone the repository

```bash
git clone https://github.com/rabeeanaseer6-lab/printpals.git
cd printpals
```

### Install dependencies

```bash
pnpm install
```

### Configure environment variables

Create your local environment file:

```bash
cp .env.example .env
```

Example configuration:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/printpals
NODE_ENV=development
PORT=3000
```

Update the values to match your environment.

## Development

Start the development server:

```bash
pnpm dev
```

## Build

Create a production build:

```bash
pnpm build
```

## Start

Run the production server:

```bash
pnpm start
```

> If your scripts differ, replace the commands above with the exact ones defined in your workspace.

## Database Workflow

PrintPals uses **PostgreSQL + Drizzle ORM** for type-safe schema management and database access.

Typical workflow:

```bash
pnpm db:generate
pnpm db:migrate
```

If your project uses different scripts, update this section accordingly.

## API Layer

The backend is designed for maintainability and strong contract alignment:

- **Express 5** powers the API layer
- **Zod** validates request and response payloads
- **drizzle-zod** bridges schema validation with the database model
- **Orval** generates typed API clients from OpenAPI specifications

This combination improves reliability, developer experience, and long-term maintainability.

## Why SVG

SVG is ideal for printable educational content because it provides:

- crisp rendering at any scale
- lightweight output
- reliable print quality
- flexible generation for worksheet-style assets

## Use Cases

PrintPals is designed for:

- teachers preparing classroom worksheets
- parents supporting home learning
- kids practicing letters, numbers, and shapes
- educators looking for quick printable resources
- teams building modern education-focused printable products

## Roadmap

Potential future improvements include:

- richer worksheet libraries
- smarter search and filtering
- age-based or grade-based discovery
- themed printable packs
- user-requested printable generation
- expanded internal tooling and automation
- more API coverage and generated clients

## Contributing

Contributions are welcome.

To contribute:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit with clear messages
5. Open a pull request

For larger changes, opening an issue first is encouraged.

## License

This project is licensed under the **MIT License**.

---

<p align="center">
  Built for faster learning, cleaner printing, and a better worksheet experience.
</p>
