# Portfolio 2026

One-page Next.js portfolio. Static export, deploys free on Netlify.

## Develop

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build

```bash
npm run build
```

Produces a fully static site in `out/`. No server required.

## Deploy to Netlify

The repo includes `netlify.toml` — connecting the repo to Netlify is enough:

1. New site → "Import from Git" → pick this repo.
2. Build command: `npm run build` (already set).
3. Publish directory: `out` (already set).
4. Deploy.

Or drag-and-drop the `out/` folder into Netlify after a local build.

## Resume PDF

The Experience section has a "Download full resume" button that links to
`/resume.pdf`. To wire it up:

1. Compile `~/Notes/resumeupdates.tex` with `pdflatex` (or `latexmk`).
2. Drop the resulting PDF into `public/resume.pdf`.

```bash
cd ~/Notes
pdflatex resumeupdates.tex
cp resumeupdates.pdf /Users/zachariahdellimore/Code/Portfolio-2026/public/resume.pdf
```

## Structure

```
app/
  layout.tsx        fonts + metadata
  page.tsx          single-page composition
  globals.css       all styling (CSS variables + components)
components/
  Nav.tsx
  Hero.tsx          aurora gradient + gradient name
  About.tsx
  Projects.tsx      glass cards with gradient borders
  Skills.tsx
  Experience.tsx
  Contact.tsx
  Footer.tsx
```

## Type

- Display — **Fraunces** (variable serif, with italic)
- Body — **Manrope**
- Mono — **JetBrains Mono**

All loaded via `next/font/google` for zero layout shift and self-hosted output.
