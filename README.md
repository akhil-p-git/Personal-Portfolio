# akhil-p.dev

Personal portfolio for Akhil Pinnani. Next.js 16 (App Router), TypeScript, Tailwind CSS v4. Statically generated, with light and dark themes that follow the system setting.

The design system is documented in [DESIGN.md](./DESIGN.md).

## Content

All copy lives in [`src/content/site.ts`](./src/content/site.ts): profile, skills, education and projects. It is derived from the master resume and each project's README. Edit that file, not the components.

Each project in `projects` gets a page at `/projects/<slug>`. A project's first image is its card cover; projects without a real screenshot show no image.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start -- -p 3100
npm run check:links -- http://localhost:3100   # crawls pages, anchors, images, external links
npm run lint
```

## Deploy

Pushing to `main` deploys on Vercel.
