# Segura® — Landing Page

Institutional landing page for Segura® (formerly senhasegura), a Privileged Access Management (PAM) platform. Built with React 19, Vite, and full internationalization support (PT/EN).

## Stack

| Layer           | Technology                                       |
| --------------- | ------------------------------------------------ |
| Framework       | React 19 + Vite 8                                |
| Language        | TypeScript 5.9                                   |
| Styling         | Tailwind CSS 4 + tailwind-variants               |
| i18n            | i18next 25 + react-i18next 16 + LanguageDetector |
| Icons           | Lucide React                                     |
| Compiler        | React Compiler (via Babel)                       |
| Package manager | pnpm                                             |
| Deploy          | Netlify                                          |

## Features

- **Bilingual (PT-BR / EN-US)** — automatic browser detection, language switch via header dropdown
- **Dynamic page title** — `document.title` updated according to the active language
- **Language-specific images** — articles section loads images from `pt-br/` or `en-us/` accordingly
- **Atomic components** — Atoms → Molecules → Organisms → Sections architecture
- **Code quality** — ESLint + Prettier + Husky + lint-staged + Commitlint (Conventional Commits)

## Sections

`Hero` · `Advantages` · `Partners` · `WhySegura` · `Testimonials` · `Compliance` · `Leadership` · `Recognition` · `Comparison` · `Support` · `Awards` · `FAQs` · `Articles` · `Stripe`

## Development

```bash
# Install dependencies
pnpm install

# Development server
pnpm dev

# Type checking
pnpm typecheck

# Lint
pnpm lint

# Format code
pnpm format
```

## Build & Deploy

```bash
# Generate production build
pnpm build

# Preview build locally
pnpm preview
```

Deployment is handled automatically by Netlify on every push to the main branch, as configured in [`netlify.toml`](./netlify.toml).

## Structure

```
src/
├── assets/
│   └── images/
│       └── articles/
│           ├── en-us/   # English images
│           └── pt-br/   # Portuguese images
├── components/
│   ├── atoms/           # AnnouncementBar, Container, Heading, Link, Logo, NavList, StatCard, WhatsappButton
│   ├── molecules/       # Accordion, Card, Dropdown, MainNav, NavPanel, TopMenu
│   └── organisms/       # Header, Footer
├── i18n/
│   ├── index.ts         # i18next configuration
│   └── locales/
│       ├── en.ts
│       └── pt.ts
├── sections/            # 14 landing page sections
├── styles/
│   └── global.css
└── utils/
```
