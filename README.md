# ManaCharge — Powering Every Village

A premium, responsive, production-ready landing page for **ManaCharge**, building
India's largest Village EV Support Network.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer
Motion**, and **shadcn/ui**. Dark mode, SEO, and smooth animations included.

## Folder Structure

```
.
├── app/
│   ├── globals.css          # Theme tokens, fonts, glass + smooth-scroll utilities
│   ├── layout.tsx           # Root layout: fonts, SEO metadata, ThemeProvider
│   └── page.tsx             # Landing page — composes all sections
├── components/
│   ├── navbar.tsx           # Sticky glass navigation + mobile menu
│   ├── reveal.tsx           # Reusable scroll-reveal animation wrapper
│   ├── theme-provider.tsx   # next-themes provider
│   ├── theme-toggle.tsx     # Dark / light mode toggle
│   ├── sections/
│   │   ├── hero.tsx         # Hero with image, headline, CTAs
│   │   ├── mission.tsx      # Our Mission feature cards
│   │   ├── why.tsx          # Why ManaCharge — 4 premium cards
│   │   ├── join-team.tsx    # EV Survey Ambassador recruitment
│   │   ├── survey.tsx       # EV Readiness Survey (Google Form placeholder)
│   │   ├── impact.tsx       # Animated impact counters
│   │   ├── vision.tsx       # Future Vision timeline (5 phases)
│   │   ├── contact.tsx      # Phone / Email / Domain
│   │   └── footer.tsx       # Footer
│   └── ui/                  # shadcn/ui primitives
├── public/
│   └── hero-village-ev.png  # Hero illustration
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions → Cloudflare Pages
└── next.config.mjs          # `output: 'export'` for static hosting
```

## Local Development

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000

## Customization

- **Google Form:** Open `components/sections/survey.tsx`, set `GOOGLE_FORM_URL`
  and paste your form `<iframe>` into the placeholder block.
- **Impact numbers:** Edit the `stats` array in `components/sections/impact.tsx`.
- **Colors:** Edit theme tokens in `app/globals.css`.

## Deploy to Cloudflare Pages (GitHub Actions)

The included workflow builds a static export and deploys it on every push to `main`.

1. Push this repo to GitHub.
2. In **Cloudflare Dashboard → Workers & Pages**, create a Pages project named
   `manacharge` (or change `--project-name` in `.github/workflows/deploy.yml`).
3. Create a Cloudflare API token with the **Cloudflare Pages: Edit** permission.
4. In your GitHub repo → **Settings → Secrets and variables → Actions**, add:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
5. Push to `main`. The action runs `pnpm build`, producing the `out/` directory,
   then deploys it to Cloudflare Pages.

### Manual deploy (optional)

```bash
pnpm build
npx wrangler pages deploy ./out --project-name=manacharge
```

## Deploy to Vercel (alternative)

Comment out `output: 'export'` in `next.config.mjs`, then import the repo at
[vercel.com/new](https://vercel.com/new) — zero config required.
