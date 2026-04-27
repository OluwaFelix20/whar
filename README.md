# Whamr — Marketing Site

The marketing site for Whamr. Built with Next.js 16 (App Router), Tailwind CSS, and TypeScript. Designed to deploy to Vercel in under a minute.

> _Send the wham._

## What's in here

**Marketing pages**
- `/` — Home with hero, audience funnel, sticker feature highlight, feature grid, stats, and final CTA
- `/stickers` — Cross-platform sticker export deep dive (the killer feature)
- `/stickers/try` — Live in-browser sticker converter demo. Drop an image, watch it convert to 6 platform formats in real time.
- `/creators` — Creator pitch, 80/20 revenue split, toolkit, application flow
- `/dojos` — Community spaces: visibility modes, features, how to start one
- `/pricing` — Free / PRO / Creator tiers with FAQ
- `/about` — The name story, what Whamr is and isn't, principles, version roadmap
- `/contact` — Working contact form (powered by Resend) + direct-email cards

**Authentication (via Clerk)**
- `/signup` — Signup with email/password and OAuth (Google, GitHub, Facebook)
- `/signin` — Signin with all the same methods
- `/dashboard` — Authenticated landing page with avatar and sticker upload UIs

**Blog / content hub**
- `/blog` — Article list with featured post, categories, working newsletter signup
- `/blog/[slug]` — Individual posts with prev/next navigation and dynamic OG images
- 6 starter articles in `content/blog/`

**Legal**
- `/privacy` — GDPR and CCPA compliant privacy policy
- `/terms` — Terms of Service
- `/cookies` — Cookie policy
- `/guidelines` — Community guidelines

**SEO infrastructure**
- `/sitemap.xml` — Auto-generated sitemap (includes blog posts dynamically)
- `/robots.txt` — Tells crawlers what to index, what to skip
- Dynamic OG images for the homepage and every blog post (via Next.js `ImageResponse`)

## Run it locally

```bash
npm install

# Copy the env template
cp .env.example .env.local
# Fill in your real keys (see "Services" below)

npm run dev
```

Open http://localhost:3000

## Services

The site uses three external services. All have generous free tiers and don't require a credit card to start.

### 1. Clerk — Authentication

Handles signup, signin, password reset, OAuth, email verification.

1. Sign up at https://clerk.com (free up to 10,000 monthly active users)
2. Click **Create Application**, name it "Whamr"
3. Choose sign-in methods: Email + password, Google, GitHub, Facebook
4. Copy the API keys from the dashboard:
   - `Publishable Key` → `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `Secret Key` → `CLERK_SECRET_KEY`
5. Paste both into `.env.local`

The Clerk components are themed to match the Whamr brand — wham-green primary, dark backgrounds, custom fonts. Theming lives in `app/layout.tsx` inside `<ClerkProvider>`.

### 2. Cloudinary — Avatar and sticker uploads

Hosts user-uploaded images and short meme videos.

1. Sign up at https://cloudinary.com (free: 25 monthly credits, no credit card)
2. From the dashboard, copy:
   - `Cloud name` → `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
   - `API Key` → `CLOUDINARY_API_KEY`
   - `API Secret` → `CLOUDINARY_API_SECRET`
3. **Important:** in Settings → Upload, ensure default upload presets are set to "Signed" not "Unsigned" (the site uses signed uploads for security)
4. Paste the three values into `.env.local`

**How uploads work:**
- User picks a file in the avatar/sticker uploader on `/dashboard`
- The browser hits `/api/cloudinary/sign` to get a server-signed upload signature
- The signature includes a folder, public_id, and transformation specific to the upload type
- The browser uploads directly to Cloudinary using the signature
- Cloudinary returns the secure URL, and the browser hits `/api/save-avatar` or `/api/save-sticker` to record the URL

The API secret never leaves the server. Folders are namespaced per user (`whamr/avatars/{userId}` and `whamr/stickers/{userId}`).

**Avatar uploads:** 2MB max, square crop centred on face (using Cloudinary's `g_face` gravity).

**Sticker uploads:** 10MB max, max 5 seconds duration, 512×512 square. Accepts MP4, WebM, MOV, GIF.

### 3. Resend — Contact form + newsletter

Sends contact form emails and adds newsletter signups to a mailing list.

1. Sign up at https://resend.com (free: 3,000 emails/month, 100/day)
2. Copy your API key → `RESEND_API_KEY`
3. Create an audience at Audiences → Create Audience, copy the audience ID → `RESEND_AUDIENCE_ID`
4. Set `CONTACT_EMAIL_TO` to the address that should receive contact form messages
5. For testing you can use `onboarding@resend.dev` as the `CONTACT_EMAIL_FROM`. For production, verify your domain in Resend → Domains and use a verified sender address.

The contact form goes through a server action with honeypot anti-spam protection. The newsletter signup goes through `/api/newsletter` and adds emails to the Resend audience.

If `RESEND_API_KEY` is missing, both forms degrade gracefully — they log to the server console and return success to the user, so dev environments work without crashing.

## Deploy to Vercel

### Option 1 — Via GitHub (recommended)

1. Push the project to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial Whamr site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/whamr-site.git
   git push -u origin main
   ```
2. Go to https://vercel.com/new and import the repo
3. **Before clicking Deploy**, add all environment variables from your `.env.local` to the Vercel project. Settings → Environment Variables.
4. Click Deploy. Site will be live in about 60 seconds.
5. Add `whamr.com` under Project → Settings → Domains.

### Option 2 — Via Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Add env vars via `vercel env add NAME production` for each variable, or paste them all in the dashboard.

## Writing blog posts

Drop a `.md` file in `content/blog/` with frontmatter:

```markdown
---
title: "Your post title"
description: "One sentence description"
date: "2026-04-15"
category: "Tutorials"
author: "Whamr Team"
readTime: "4 min read"
---

Post body here. Markdown supported (headings, lists, links, code, blockquotes).
```

Save the file. The post appears on `/blog` and gets a dynamic URL at `/blog/[filename-without-extension]`. OG images are generated automatically.

## Design system

| Token | Value | Use |
|---|---|---|
| `bg` | `#0A0A0A` | Page background |
| `bg-alt` | `#141414` | Raised surfaces / cards |
| `ink` | `#F5F1E8` | Primary text |
| `ink-dim` | `#B8B3AA` | Secondary text |
| `ink-muted` | `#7A7570` | Tertiary / labels |
| `wham` | `#D4FF3D` | Signature accent |
| `heat` | `#FF2E5C` | Secondary hot accent |

**Typography:** Bricolage Grotesque (display, condensed via `font-variation-settings`), DM Sans (body), JetBrains Mono (labels).

**Utilities:** `.h-display`, `.h-label`, `.btn-wham`, `.btn-ghost`, `.card-raise`, `.reveal`, `.marquee-track`, `.prose-whamr`.

## Tech

- Next.js 16.2 (App Router, Turbopack)
- React 18, TypeScript 5
- Tailwind CSS 3.4
- Clerk 7 (auth)
- Cloudinary (media uploads)
- Resend (transactional email + audiences)
- gray-matter + remark + remark-html (blog markdown)

## Things to do before launch

- Get legal review for `/privacy`, `/terms`, `/cookies`, `/guidelines`
- Add the company's registered legal name in terms & privacy (marked with `[Company legal name to be added]`)
- Verify your domain in Resend so emails send from `*@whamr.com`
- Switch Clerk to production mode and regenerate keys when going live on `whamr.com`
- Add a favicon and app icon set in `public/`
- Build out remaining placeholder routes: `/careers`, `/dojos/discover`, `/pack/[packId]`, `/u/[username]`, `/c/[postId]`
- Cookie consent banner for EU visitors
- Localise: ES, PT-BR, HI, AR, ID per the PRD — scaffold next-intl when ready
