# Serenity Vastukala

A luxury interior architecture website built with Next.js 15, TypeScript,
Tailwind CSS v4 and Framer Motion. Designed as an emotional, editorial
experience rather than a template or furniture catalog — every section
breathes, motion is slow (700ms–1200ms), and the palette stays neutral
throughout.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx            Root layout, fonts (Cormorant Garamond + Inter), metadata
  page.tsx               Homepage — assembles all 10 homepage sections
  globals.css             Tailwind v4 theme tokens (brand palette, type, motion)
  not-found.tsx           Branded 404
  projects/[slug]/        Individual project pages (hero, gallery, next/prev)
  design-themes/          Design Themes page
  services/               Services listing page
  services/[slug]/        Individual service pages (hero, description, subcategory cards, next/prev)
  about/                  About / studio story page
  contact/                Contact page

components/               One component per homepage section (Hero, Philosophy,
                           FeaturedProjects, DesignThemes, ProcessTimeline,
                           Services, Materials, WhyChoose, Testimonials,
                           InstagramGallery, Consultation, Footer, Navbar)
                           plus Reveal.tsx (scroll animation) and
                           VastuMark.tsx (the studio's signature line-art mark)

lib/data.ts                All content: nav, projects, design themes, process
                            steps, services, testimonials, materials, why-choose
```

## Content & images

- All copy lives in `lib/data.ts` — edit projects, testimonials, services,
  process steps, and theme descriptions there.
- Images currently reference Unsplash as placeholders so the site is
  visually complete out of the box. **Before launch, replace every image
  URL with your own photography** — the brief calls for warm, naturally
  lit, unedited interiors, which is hard to fully guarantee from a stock
  library. Swap URLs in `lib/data.ts` and in `Hero.tsx` / `Materials.tsx` /
  `about/page.tsx`.
- To add a new project, add an entry to the `projects` array in
  `lib/data.ts` — its page at `/projects/your-slug` is generated
  automatically.

## The signature mark

`VastuMark` renders a fine 9×9 line grid referencing the Vastu Purusha
Mandala — the traditional grid Vastu-planned homes are laid out on. It
nods to the "Vastukalas" name and appears sparingly (hero corner, About,
Why Choose) as the studio's one recurring visual signature, never as
repeated decoration.

## Connecting the consultation form

The form in `components/Consultation.tsx` submits to [Formspree](https://formspree.io) — no backend code required.

1. Go to [formspree.io](https://formspree.io) and create a free account (serenityvastukala@gmail.com is fine to sign up with).
2. Click **New Form**, name it something like "Consultation Requests," and set the notification email to wherever enquiries should land.
3. Formspree gives you an endpoint that looks like `https://formspree.io/f/abc1234`.
4. Open `components/Consultation.tsx` and replace this line near the top:
   ```ts
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```
   with your real endpoint.
5. Redeploy. Submit a test enquiry from the live site and confirm the email arrives.

The free Formspree plan covers 50 submissions/month, which is plenty for a consultation form — upgrade only if volume grows.

## Before deploying

- Wire the consultation form (`components/Consultation.tsx`) to your
  email/CRM provider of choice — it currently only shows a confirmation
  state on submit.
- Replace the Instagram/LinkedIn links in `Footer.tsx`
  and `InstagramGallery.tsx` with your real profile URLs.
- Update the address, phone and email in `Footer.tsx` and
  `app/contact/page.tsx`.
- Run `npm run build` to verify a production build before deploying to
  Vercel or your host of choice.
