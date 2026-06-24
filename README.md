# Pablo Sánchez — Portfolio

A dark, glassmorphic personal portfolio — a "command center" for an engineering
& business student building across aerospace, technology, entrepreneurship and
strategy.

Built with **React + TypeScript + Vite**, **Tailwind CSS v4** and **Anime.js**.
Fully responsive, mobile-first, animated, and accessible (respects
`prefers-reduced-motion`).

---

## Quick start

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build into dist/
npm run preview  # preview the production build
```

Requires Node 18+ (developed on Node 24).

---

## Editing content

Everything is **data-driven** — you almost never need to touch the components.

| What | File |
| --- | --- |
| Name, headline, bio, contact links, stats | `src/data/profile.ts` |
| Education / experience / accreditations | `src/data/timeline.ts` |
| Projects (cards + case studies) | `src/data/projects.ts` |
| Interests bento grid + About pillars | `src/data/interests.ts` |
| Social / nav links | `src/data/links.ts` |

Assets live under `public/`:

- `public/logos/` — institution & project logos (`README.md` inside)
- `public/projects/<id>/` — project covers + screenshots
- `public/documents/` — CV and PDFs
- `public/profile/` — your photo

> Missing images degrade gracefully: logos fall back to a monogram, project
> covers to a gradient placeholder, and your photo to an initials avatar — so
> the site looks finished before you've added a single asset.

### First things to personalize

1. In `src/data/profile.ts`: set `email`, `github`, and confirm `linkedin`.
2. Add `public/profile/pablo-photo.png` and `public/documents/pablo-cv.pdf`.
3. Replace the placeholder project covers in `public/projects/*`.
4. Update project `links` (the `"#"` placeholders) with real URLs.

---

## Importing your LinkedIn history (safely)

This project **does not scrape LinkedIn** — automated scraping breaks LinkedIn's
terms. Instead it reads the official data export that LinkedIn gives *you*.

1. LinkedIn → **Settings & Privacy → Data privacy → Get a copy of your data**.
2. Download + extract the archive.
3. Copy the CSVs into `public/imports/linkedin/`
   (`Positions.csv`, `Education.csv`, `Certifications.csv`, `Honors.csv`).
4. Run the importer:

   ```bash
   npm run import:linkedin
   ```

   or double-click **`tools/import-linkedin.bat`** (Windows) /
   run **`tools/import-linkedin.ps1`** in PowerShell.

This regenerates `src/data/importedTimeline.ts`, which is automatically merged
with your manual entries (`src/data/timeline.ts`) in
`src/data/combinedTimeline.ts`. Your exported CSVs are git-ignored.

---

## Project structure

```
src/
  animations/   Anime.js wrapper + reveal / hero / stagger / reduced-motion hooks
  components/
    layout/     Navbar, MobileMenu, Footer, Section
    ui/         GlassCard, Button, Tag, SectionHeader, LogoBadge, icons, Background…
    projects/   ProjectCard, ProjectModal, ProjectGallery, ProjectCover
    sections/   Hero, About, Timeline, Projects, Interests, Contact
  data/         all editable content (see table above)
  types/        shared TypeScript types
  styles/       globals.css (design tokens + glass system)
scripts/        LinkedIn CSV importer (ESM)
tools/          import-linkedin.bat / .ps1
public/         logos, projects, documents, profile, imports
```

---

## Deployment

The build outputs static files to `dist/` (with relative asset paths, so it
works on any static host).

- **Vercel / Netlify:** import the repo, build command `npm run build`, output
  directory `dist`. Done.
- **GitHub Pages:** build and publish `dist/` (e.g. via a GitHub Actions
  workflow). Because Vite needs a build step, use Actions rather than serving
  the repo directly. The `base: "./"` in `vite.config.ts` keeps asset paths
  working on project sites.

A custom domain can be added later through your host or registrar.

---

## Design system

- Colors, fonts and radii are defined as Tailwind v4 theme tokens in
  `src/styles/globals.css` (e.g. `bg-bg-main`, `text-accent-green`).
- The frosted look comes from the `.glass` / `.glass-soft` classes and the
  `GlassCard` component.
- Animations live in `src/animations/` and are all guarded by
  `prefers-reduced-motion`.

Built with care by Pablo Sánchez — React · Vite · Tailwind CSS · Anime.js.
