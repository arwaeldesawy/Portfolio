# Arwa Eldesawy — AI Engineer Portfolio

A local portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, Motion, and Lucide. A centered charcoal-and-wine design follows Salma’s portfolio palette. Projects use a native horizontal gallery with six original SVG thumbnails, visible browsing controls, and verified achievements. Detailed architecture artwork is retained inside the case studies. The six case studies and social preview images are generated at build time. Page content stays in Server Components; only navigation, project gallery controls, motion, and email copying run in client components.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Verification

```sh
npm run typecheck
npm run lint
npm run build
npm run start -- --port 3001
TEST_URL=http://localhost:3001 npm test
npm run audit
```

The browser checks use Playwright Chromium. If it is unavailable, run `npx playwright install chromium`. Screenshots and machine-readable checks live in `docs/`. Lighthouse tests the production homepage and MediVault route using mobile defaults.

## Content and assets

- Typed content: `src/content/portfolio.ts`.
- Original CV: `public/Arwa_Eldesawy_CV.pdf`.
- Real portrait: `public/profile.jpg`, optimized with `next/image`, reserved dimensions, eager loading in the hero, and a blur placeholder.
- Local fonts: Bricolage Grotesque and Instrument Sans variable fonts, loaded with `next/font/local`. Font license files are in `src/fonts/`.
- Reference: https://arwa-portfolio-eight.vercel.app/ and its original CV.
- Verified repository: https://github.com/arwaeldesawy/NSL-KDD-Intrusion-Detection-System.
- Every source skill category, stack, project highlight, and internship responsibility is retained. Experience dates are omitted. DIGITOPIA is participation.
- No contact form, live AI requests, database, or application backend is present.

The site has no production canonical URL. `metadataBase` is localhost:3000 for local social-preview links; replace it with the selected production domain when preparing a deployment. The source is maintained in https://github.com/arwaeldesawy/Portfolio. The repository contains a Next.js application; it requires a Next.js-compatible host to publish the website.
