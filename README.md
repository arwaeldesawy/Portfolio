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

The site has no production canonical URL. `metadataBase` uses localhost:3000 for local builds and arwaeldesawy.github.io for the Pages build. The source is maintained in https://github.com/arwaeldesawy/Portfolio. GitHub Pages uses a static export at https://arwaeldesawy.github.io/Portfolio/.

## GitHub Pages

Pages publishes the root of `main`. The generated `index.html`, `_next/`, project routes, and assets are committed alongside the source; `.nojekyll` preserves the Next.js files.

```sh
npm ci
npm run prepare:pages
```

Commit the source and refreshed static output, then push `main`. `prepare:pages` replaces only the exported files listed in `.pages-files.json`. Local development still runs at http://localhost:3000 without a base path. `build:pages` builds with the `/Portfolio` base path, directory-style routes, and static image serving. It uses Next.js's supported Webpack compiler.

To test the static export, serve `out/` under `/Portfolio/` with a static HTTP server, then run `npm run test:pages`. Set `PAGES_URL` to test the published website.
