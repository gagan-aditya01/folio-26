# folio-26 — Gaganaditya's Portfolio

> A world-class personal portfolio built to Apple-tier design standards.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple)](https://framer.com/motion)

---

## Architecture

```
folio-26/
├── src/
│   ├── app/
│   │   ├── globals.css          # Design system — all tokens here
│   │   ├── layout.tsx           # Root layout, fonts, metadata
│   │   └── page.tsx             # Home page (section assembly)
│   ├── components/
│   │   ├── cursor/
│   │   │   └── CustomCursor.tsx # Elastic trailing cursor engine
│   │   ├── layout/
│   │   │   └── Navigation.tsx   # Floating glassmorphic nav
│   │   ├── providers/
│   │   │   └── LenisProvider.tsx
│   │   └── sections/
│   │       ├── Hero.tsx         # Dual-image parallax hero
│   │       ├── About.tsx        # Engineering philosophy
│   │       ├── Skills.tsx       # Capability matrix chips
│   │       ├── Projects.tsx     # 3 full case studies + 3D tilt
│   │       ├── Timeline.tsx     # Vertical chronology
│   │       ├── GitHub.tsx       # Contribution grid + repos
│   │       └── Contact.tsx      # Terminal-style contact
│   ├── hooks/
│   │   ├── useCursor.ts         # Cursor state + lerp trail
│   │   ├── useLenis.ts          # Smooth scroll physics
│   │   ├── useScrollDirection.ts # Nav show/hide
│   │   └── useTilt.ts           # 3D tilt matrix (≤1.5°)
│   ├── lib/
│   │   ├── data.ts              # ← ALL CONTENT LIVES HERE
│   │   ├── motion.ts            # Shared Framer Motion variants
│   │   └── utils.ts             # cn() utility
│   └── types/
│       └── index.ts             # TypeScript interfaces
└── public/
    └── cv.pdf                   # ← ADD YOUR CV HERE
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, SSG) |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion 11 |
| Smooth Scroll | Lenis |
| Icons | Lucide React |
| Fonts | Inter + JetBrains Mono |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# TypeScript check
npx tsc --noEmit
```

Open [http://localhost:3000](http://localhost:3000).

---

## Updating Your Content

**All content lives in one file: [`src/lib/data.ts`](./src/lib/data.ts)**

Update the following before deploying:

| Field | Location in data.ts | Description |
|---|---|---|
| Email | `PERSONAL.email` | Your contact email |
| CV | `public/cv.pdf` | Add your CV file |
| GitHub URL | `GITHUB.profileUrl` | Your GitHub profile URL |
| LinkedIn URL | `SOCIAL_LINKS[1].url` | Your LinkedIn URL |
| LeetCode handle | `TIMELINE[3].org` | Your LeetCode profile |
| Startup name | `TIMELINE[0].org` | If public, add startup name |
| Project GitHub URLs | `PROJECTS[n].githubUrl` | Add real repo links |
| NPTEL certs | `TIMELINE[2].description` | Add exact cert names |

---

## Design System

All design tokens are in [`src/app/globals.css`](./src/app/globals.css):

```css
--bg-base:      #000000  /* Pure black */
--bg-surface-1: #111111  /* Charcoal */
--bg-surface-2: #1c1c1c  /* Graphite */
--border:       #2a2a2a
--text-primary: #ffffff
--text-muted:   #888888
```

---

## Deployment

Deploy to [Vercel](https://vercel.com) with zero configuration:

```bash
npx vercel --prod
```

Or connect the GitHub repository to Vercel for automatic deployments on every push.

---

## Performance Targets

- Lighthouse Performance: 95+
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 100
- Lighthouse SEO: 100

---

## License

MIT — Gaganaditya, 2026.
