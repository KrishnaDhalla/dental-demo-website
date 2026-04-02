# CLAUDE.md — Dental Demo Website

> This file is the single source of truth for Claude when working on this project. Read it before making any changes.

---

## What This Is

A premium single-page dental clinic demo website built in React. It renders a personalized, professional demo site we pitch to dental clinics without a website.

**Pitch price point:** ₹15,000 – ₹22,000 per clinic.

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 18 | UI framework |
| Vite | Latest | Build tool |
| Tailwind CSS | 4 | Styling (via `@tailwindcss/vite` plugin) |
| Framer Motion | Latest | Animations |
| Lucide React | Latest | All icons |
| Google Fonts | — | Plus Jakarta Sans (headings) + Inter (body) |

**Tailwind 4 specifics:**
- Use `@import "tailwindcss"` in CSS — NOT `@tailwind base/components/utilities`
- Use `@theme {}` block for custom tokens — NOT `tailwind.config.js`
- Plugin is `@tailwindcss/vite` in `vite.config.js` — no separate config file needed

---

## Project Structure

```
dental-demo/
├── index.html
├── vite.config.js
├── public/
│   └── assets/               ← all static images served by Vite
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── data/
    │   └── clinicData.js        ← ONLY file to edit per clinic
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Services.jsx
        ├── Stats.jsx
        ├── Testimonials.jsx
        ├── HowItWorks.jsx
        ├── FAQ.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── FloatingButtons.jsx
        └── ui/
            ├── SectionHeading.jsx
            ├── DynamicIcon.jsx
            ├── CountUp.jsx
            └── DoctorAvatar.jsx
```

---

## The Golden Rule: clinicData.js

`src/data/clinicData.js` is the **only** file that changes between clinic pitches. No clinic-specific text is hardcoded in any component. If you're adding a new text element, it must come from `clinicData`.

**Exception:** `FAQ.jsx` has hardcoded questions — these are generic enough to apply to any dental clinic and don't need to be per-clinic config.

---

## Assets

Real assets are now in use. **No more zero-assets rule.**

### Source folder (original files)
`C:\Dental_Websites\demo\assets\`

### Public folder (served by Vite)
`C:\Dental_Websites\demo\dental-demo\public\assets\`

When adding/updating an asset:
1. Save/rename the file in the source folder with a clean kebab-case name
2. Copy it to `public/assets/`
3. Update the path in `clinicData.js`

### Image compression

All images are compressed to WebP using Sharp (`scripts/compress-images.mjs`). When adding new assets:
1. Place the original PNG/JPG in the source folder
2. Run `node scripts/compress-images.mjs` to convert to WebP
3. Update paths in `clinicData.js` to use `.webp` extension

### Current asset inventory

| File | Used in |
|------|---------|
| `logo.webp` | Navbar (transparent bg — shows on both dark + light) |
| `doctor.webp` | About section |
| `doctor-patient.webp` | Hero section (right column) |
| `service-root-canal.webp` | Services card |
| `service-implants.webp` | Services card |
| `service-whitening.webp` | Services card |
| `service-cosmetic.webp` | Services card |
| `service-braces.webp` | Services card |
| `icon-dental-fillings.webp` | Services card |
| `icon-crowns-bridges.webp` | Services card |
| `icon-teeth-cleaning.webp` | Services card |
| `service-crowns.webp` | Services card |
| `service-fillings.webp` | Services card |
| `service-cleaning.webp` | Services card |
| `patient-sabyasachi.webp` | Testimonials |
| `patient-sourav.webp` | Testimonials |
| `patient-mala.webp` | Testimonials |

### Navbar logo behaviour
The logo WebP has a transparent background so it renders correctly on both:
- Transparent dark hero (not scrolled)
- Frosted glass white navbar (scrolled)

Always render as `<img>` directly — no conditional text fallback needed.

---

## Design System

### Colors (defined in `src/index.css` @theme)
- **Primary:** Teal ramp — `primary-500` = `#0D9488`
- **Accent:** Warm gold — `accent-400` = `#F59E0B` — CTA buttons only
- **Dark:** `dark-800` = `#1A1A2E`, `dark-900` = `#0F0F1A` — hero, stats, footer
- **Body text:** `gray-500`–`gray-700`. Headings: `gray-900`.
- **Backgrounds:** white + `gray-50` alternating. One dark section (Stats).

### Typography
- Headings: `font-heading` = **Plus Jakarta Sans**, 600–800 weight
- Body: `font-body` = **Inter**, 400–500 weight

### Global CSS Utilities (in `src/index.css`)
- `.gradient-text` — teal gradient clipped to text (used on stat numbers, hero tagline accent)
- `.hero-gradient` — animated 4-color shifting background (used in Hero section)
- `.card-shine` — shimmer sweep on hover (used on service cards)
- `.nav-link` — animated underline on hover (used in Navbar)
- `.whatsapp-pulse` — green ring pulse animation (used on floating WhatsApp button)

### Spacing
- Section padding: `py-24 md:py-32`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- FAQ uses `max-w-3xl` (narrower, centered)

### Effects
- Card hover: `whileHover={{ y: -6 }}` + shadow/border transition
- Button: `whileHover={{ scale: 1.04 }}` `whileTap={{ scale: 0.97 }}`
- Scroll reveals: Framer Motion `whileInView` fade-up on every section
- Staggered grids: `variants={container/item}` pattern with `staggerChildren`
- Navbar: frosted glass (`bg-white/80 backdrop-blur-xl`) on scroll

---

## Section Order (in App.jsx)

1. `Navbar` — transparent → frosted glass on scroll, animated mobile drawer
2. `Hero` — animated gradient bg, gradient text on tagline, staggered animation, inline trust stats
3. `About` — real doctor photo, large decorative background number, floating stat pill, icon-swap trust points
4. `Services` — 4-col responsive grid, real service icon images, card shine + icon rotate on hover
5. `Stats` — dark bg, gradient CountUp numbers, glow blobs
6. `Testimonials` — featured center card (primary-600), real patient photos, side cards gray-50
7. `HowItWorks` — 3 steps, ring animation on hover, dashed connector
8. `FAQ` — smooth accordion, `Plus` icon rotates to `×`, teal tint on open
9. `Contact` — 2-col form + info list + Google Maps iframe
10. `Footer` — 4-col grid, social icons, clickable phone/email
11. `FloatingButtons` — WhatsApp pulse + phone, fades in after 300px scroll

---

## Dev Commands

```bash
# Always use PowerShell on this machine (Node not in bash PATH)
powershell.exe -Command "Set-Location 'C:\Dental_Websites\demo\dental-demo'; npm run dev"
powershell.exe -Command "Set-Location 'C:\Dental_Websites\demo\dental-demo'; npm run build"
```

---

## Deployment

**Recommended: Netlify drag-and-drop** (free, no account setup needed beyond login)

1. Build: `npm run build` → outputs to `dental-demo/dist/`
2. Go to `netlify.com` → Sites → drag the `dist` folder
3. Live URL in ~10 seconds (e.g. `smilecraft-demo.netlify.app`)

**Alternative:** Vercel — same process, equally good.

For paying clients: point a custom `.in` domain (~₹500/yr) to the same Netlify/Vercel deployment.

---

## Definition of Done

- `npm run build` succeeds with zero errors
- All text renders from `clinicData.js` — zero hardcoded clinic content (except FAQ)
- Responsive at 375px, 768px, 1024px, 1440px
- All animations smooth, no jank
- WhatsApp button: green, pulse, correct `wa.me` link, fades in on scroll
- Google Maps iframe renders
- FAQ accordion opens/closes smoothly
- Form shows animated success message on submit (no backend)
- Floating buttons hidden until 300px scroll
