# WeBrain Frontend

Marketing site and blog for **WeBrain**, a web development agency.

- **Live site:** [https://webbrain.vercel.app](https://webbrain.vercel.app)
- **Backend repo:** [sohan9542/webrain-backend](https://github.com/sohan9542/webrain-backend)

This repository is the Next.js frontend. Content for blog posts, projects, and reviews is loaded from [Sanity](https://www.sanity.io/).

## Features

- Home page with hero, about, recent projects, services, testimonials, and latest blog posts
- Dedicated About and Services pages
- Blog index (`/blogs`) and individual post pages (`/blog/[slug]`)
- Sanity CMS integration for posts, categories, projects, and reviews
- Responsive layout with Tailwind CSS and Swiper carousels
- Sitemap generation via `next-sitemap` after production builds

## Tech stack

- **Framework:** Next.js 14 (App Router)
- **UI:** React 18, Tailwind CSS, Swiper, react-icons
- **Content:** Sanity (`next-sanity`, GROQ, react-portable-text)
- **Tooling:** ESLint, Prettier, Vitest, GitHub Actions CI

## Architecture

```text
Browser
  └── Next.js App Router (app/)
        ├── Page UI (components/, components/layout/)
        └── Sanity client (lib/sanity/)
              └── Sanity Content Lake (posts, projects, reviews)
```

Route URLs stay under `app/`. Shared UI lives in `components/`. Data access is centralized in `lib/sanity/api.js`. A separate Express/API backend exists in `webrain-backend`; this frontend currently reads marketing content from Sanity rather than calling that API directly.

## Local setup

### Prerequisites

- Node.js 18+ (20 recommended)
- npm 9+
- Sanity project credentials for local content fetching

### Install and run

```bash
git clone https://github.com/sohan9542/webrain.git
cd webrain
cp .env.example .env
# fill in values in .env
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env` and set:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset name (e.g. `production`) |
| `NEXT_PUBLIC_SANITY_TOKEN` | Optional authenticated Sanity token (not required for public reads) |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` | Google Search Console verification content |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used by `next-sitemap` |

Do not commit real `.env` values.

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build (also runs `next-sitemap`) |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint via `next lint` |
| `npm run format` | Format files with Prettier |
| `npm run format:check` | Check Prettier formatting |
| `npm test` | Run Vitest unit tests |

## Project structure

```text
app/                 # App Router pages and global styles
components/
  about/             # About page sections
  blog/              # Blog cards, grid, sidebar, hero
  home/              # Home page sections
  layout/            # Navbar and Footer
  service/           # Services page sections
lib/
  sanity/            # Sanity client and content helpers
  utils/             # Shared helpers (e.g. date formatting)
  animate/           # Animation CSS used by the layout
public/              # Static images and logos
.github/workflows/   # CI (install, lint, test, build)
```

## CI

GitHub Actions runs on pushes and pull requests to `main`: install dependencies, lint, test, and build with placeholder public env vars.
