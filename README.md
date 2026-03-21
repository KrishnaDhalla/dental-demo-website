# Smile Craft Dental Clinic — Demo Website

A modern, single-page dental clinic demo website built in React. All clinic content is driven from a single config file, making it trivially easy to repurpose for any dental client.

## Tech Stack

- React 18 + Vite
- Tailwind CSS 4 (via @tailwindcss/vite plugin)
- Framer Motion — animations and scroll reveals
- Lucide React — all icons
- Google Fonts — Sora (headings) + DM Sans (body)

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Customizing for a New Clinic

Edit one file only: `src/data/clinicData.js`

Update: clinic name, tagline, description, doctor details, phone, WhatsApp, email, address, Google Maps embed URL, rating, working hours, services, and reviews. The entire site updates automatically — zero other changes needed.

## Project Structure

```
src/
├── App.jsx
├── main.jsx
├── index.css
├── data/
│   └── clinicData.js        <- edit this per client
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Services.jsx
    ├── Stats.jsx
    ├── Testimonials.jsx
    ├── HowItWorks.jsx
    ├── Contact.jsx
    ├── Footer.jsx
    ├── FloatingButtons.jsx
    └── ui/
        ├── SectionHeading.jsx
        ├── DynamicIcon.jsx
        ├── CountUp.jsx
        └── DoctorAvatar.jsx
```

## Zero Assets Policy

There are no image files in this project. All visuals are code-generated:
- Doctor photo: gradient div with initials + Stethoscope icon
- Backgrounds: CSS gradients and dot patterns
- Icons: Lucide React
- Decorations: CSS shapes and blobs

## Build

```bash
npm run build
```

Output goes to `dist/`.
