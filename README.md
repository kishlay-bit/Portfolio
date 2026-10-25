# Kishlay Tejeswi — Portfolio

A responsive personal portfolio built with React, Vite, and Tailwind CSS. It
showcases experience, skills, projects, achievements, and contact details.

**Live site:** [portfolio-kappa-nine-4bxrivv6z4.vercel.app](https://portfolio-kappa-nine-4bxrivv6z4.vercel.app/)

## Features

- Responsive hero and About sections
- Experience section with an image slideshow and LinkedIn post link
- Skills grouped by development, machine learning, and core computer science
- Project cards with descriptions, images, and optional demo/source links
- Achievements list with a photo slideshow
- Contact information and social profile links
- Light/dark theme toggle

## Tech stack

- React 18 and JavaScript
- Vite 5
- Tailwind CSS 4
- Lucide icons
- React Router

## Run locally

### Requirements

- Node.js 18 or newer
- npm
- Git

### Install and start

```bash
git clone https://github.com/kishlay-bit/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Updating portfolio content

- **Hero and profile photo:** `src/components/HeroSection.jsx`; profile image at `public/projects/profile101.png`
- **About:** `src/components/AboutSection.jsx`
- **Experience and photos:** `src/components/ExperienceSection.jsx`; slideshow images in `public/experience/`
- **Skills:** `src/components/SkillsSection.jsx`
- **Achievements and photos:** `src/components/AchievementsSection.jsx`; slideshow images in `public/achievement/`
- **Projects:** `src/components/ProjectsSection.jsx`; project images in `public/projects/`
- **Contact and social links:** `src/components/ContactSection.jsx`

Images in `public/` are served from the site root. For example,
`public/experience/image1.png` is referenced in the app as
`/experience/image1.png`.

## Deployment

The project can be deployed as a static Vite site on Vercel or another static
hosting provider. Use `npm run build` as the build command and `dist` as the
output directory. No backend or database is required.
