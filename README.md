# Mukund Lalge — Personal Website

A modern, production-ready personal portfolio website built with **React 19**, **TypeScript**, **Vite**, and **SCSS** (BEM methodology).

## Tech Stack

- **React 19** — Latest React with function components and hooks
- **TypeScript 5.9** — Strict mode, fully typed
- **Vite 8** — Blazing-fast build tool with HMR
- **SCSS (BEM)** — Modular styles with Block-Element-Modifier methodology
- **react-icons** — Icon library

## Project Structure

```
src/
├── components/          # Feature components (BEM-structured)
│   ├── Navbar/          # Navigation with scroll spy
│   ├── Hero/            # Hero/landing section
│   ├── About/           # About me section
│   ├── Skills/          # Skills grid
│   ├── Experience/      # Work experience timeline
│   ├── Education/       # Education section
│   ├── Projects/        # Personal projects
│   ├── Contact/         # Contact info + CTA
│   ├── Footer/          # Site footer
│   └── Section/         # Reusable section wrapper
├── data/                # Resume data (typed constants)
├── hooks/               # Custom React hooks
├── styles/              # Global SCSS (variables, mixins, reset)
└── types/               # TypeScript interfaces
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Deployment

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the `dist/` folder
```

### GitHub Pages
```bash
npm run build
# Push `dist/` contents to `gh-pages` branch
```

### Docker
```dockerfile
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
```

## Customization

All resume data lives in `src/data/resume-data.ts`. Edit this single file to update:
- Personal info, links, and contact details
- Skills categories and items
- Work experience entries
- Education
- Projects

Design tokens (colors, fonts, spacing) are in `src/styles/_variables.scss`.
