---
name: nextjs-init
description: >-
  Initialize, configure, and scaffold a production-ready Next.js 16 project with React 19, TypeScript strict mode,
  Tailwind CSS v4, Turbopack, pnpm, and standard modern folder architecture.
  Use this skill whenever starting or scaffolding a Next.js application.
---

# Next.js 16 Project Initialization Skill

Follow this runbook to initialize, configure, and scaffold a Next.js 16 application with React 19, Tailwind CSS v4, and modern architecture patterns.

---

## 1. Tech Stack & Requirements

- **Framework**: Next.js 16 (App Router only, React 19, Turbopack)
- **Language**: TypeScript (`strict: true`)
- **Styling**: Tailwind CSS v4 (CSS-first config via `@theme` in `app/globals.css`)
- **Package Manager**: `pnpm` (or project-preferred package manager)
- **Node.js**: 20+ LTS

### Approved Additions
- `motion` (`motion/react`) for UI animations
- `shadcn/ui` for accessible component primitives
- `lucide-react` for SVG icons
- `zustand` for lightweight state management (when required)
- `clsx` and `tailwind-merge` for class utility merging


### Prohibited / Anti-patterns
- Legacy Pages Router (`pages/` directory)
- CSS-in-JS libraries (styled-components, Emotion)
- Legacy UI suites (MUI, Chakra, Ant Design)
- `tailwind.config.js` (Tailwind v4 uses CSS-first `@theme`)

---

## 2. Step-by-Step Initialization

### Step 1: Create Next.js App
Run the standard App Router creation command:

```bash
pnpm dlx create-next-app@latest . --typescript --eslint --app --turbopack --use-pnpm
```

### Step 2: Install Tailwind CSS v4 & Core Utilities
Install Tailwind v4 and PostCSS integration:

```bash
pnpm add tailwindcss @tailwindcss/postcss postcss clsx tailwind-merge
```

### Step 3: Configure PostCSS (`postcss.config.mjs`)
Create or update `postcss.config.mjs`:

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

### Step 4: Configure Global Styles & Color Palette (`app/globals.css`)
> **Theming Rule**: If a single fixed theme is required, define tokens directly under `@theme`; if dual-theme (light/dark switching) is required, define CSS variables in `:root` and `.dark` mapped via `@theme inline`.

```css
@import "tailwindcss";


@layer base {
  :root,
  .light {
    --background: #ffffff;
    --foreground: #09090b;
    --primary: #0f172a;
    --primary-foreground: #fafafa;
    --secondary: #f4f4f5;
    --secondary-foreground: #18181b;
    --muted: #f4f4f5;
    --muted-foreground: #71717a;
    --accent: #f4f4f5;
    --accent-foreground: #18181b;
    --border: #e4e4e7;
    --ring: #0f172a;
    --radius: 0.5rem;
  }

  .dark {
    --background: #09090b;
    --foreground: #fafafa;
    --primary: #fafafa;
    --primary-foreground: #0f172a;
    --secondary: #27272a;
    --secondary-foreground: #fafafa;
    --muted: #27272a;
    --muted-foreground: #a1a1aa;
    --accent: #27272a;
    --accent-foreground: #fafafa;
    --border: #27272a;
    --ring: #d4d4d8;
  }
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-border: var(--border);
  --color-ring: var(--ring);
  --font-heading: var(--font-heading, sans-serif);
  --font-body: var(--font-body, sans-serif);
}
```


---

## 3. Directory Architecture Scaffolding

Scaffold standard modular directories:

```bash
mkdir -p app/\(marketing\) app/\(auth\)/login app/\(auth\)/signup \
         components/ui components/layout components/sections \
         public/images public/icons lib types
```

### Target Structure:
```text
<project-root>/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata, global providers)
│   ├── globals.css             # Tailwind v4 import + @theme tokens
│   ├── not-found.tsx           # Custom 404 page
│   ├── (marketing)/            # Route group (does not appear in URL)
│   │   ├── layout.tsx          # Shared layout with Navbar & Footer
│   │   ├── page.tsx            # Main landing page (route: /)
│   │   └── loading.tsx         # Instant streaming loading state
│   └── (auth)/                 # Auth route group
│       ├── layout.tsx          # Auth layout
│       ├── login/page.tsx      # Route: /login
│       └── signup/page.tsx     # Route: /signup
├── components/
│   ├── ui/                     # Generic reusable primitives (Button, Input, Card)
│   ├── layout/                 # Layout components (Navbar, Footer, Sidebar)
│   └── sections/               # Page sections (HeroSection, FeaturesSection, etc.)
├── public/
│   ├── images/                 # Static images (referenced via /images/...)
│   └── icons/                  # SVG icons
├── lib/
│   ├── utils.ts                # cn utility helper
│   ├── fonts.ts                # Centralized next/font definitions
│   └── motions.ts              # Centralized motion presets
├── types/
│   └── index.ts                # Shared TypeScript types & interfaces
└── tsconfig.json               # strict: true
```

---

## 4. Essential Utilities & Starters

### `lib/fonts.ts` (Centralized Fonts)
```ts
/**
 * Centralized Font Definitions
 */
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const fontHeading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});
```

### `lib/utils.ts`
```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```


---

## 5. Verification Checklist

- [ ] `pnpm dev` starts dev server with Turbopack without runtime errors.
- [ ] `pnpm lint` passes with 0 errors and 0 warnings.
- [ ] `pnpm build` produces a clean build output.
- [ ] Git repository is initialized with a development branch (`git checkout -b dev`).
