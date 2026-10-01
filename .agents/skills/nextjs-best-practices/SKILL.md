---
name: nextjs-best-practices
description: >-
  Next.js 16 App Router architectural rules, component design patterns, routing, performance optimization,
  and code quality guidelines. Use this skill when authoring, refactoring, or reviewing Next.js code.
---

# Next.js 16 Best Practices Skill Guide

This skill defines universal architectural, performance, and coding standards for Next.js 16 applications.

---

## 1. Routing & Navigation Standards

- **App Router Exclusively**: All routes belong in `app/`. Never introduce a `pages/` directory.
- **Internal Navigation**: Always use `<Link>` from `next/link`. Never use raw `<a>` for internal links.
  ```tsx
  import Link from 'next/link';

  // ✅ Correct
  <Link href="/login">Log In</Link>

  // ❌ Prohibited
  <a href="/login">Log In</a>
  ```
- **External Links**: Use standard `<a>` tags with `target="_blank"` and `rel="noopener noreferrer"`.
- **Programmatic Navigation**: Import `useRouter`, `usePathname`, and `useSearchParams` from `next/navigation` (never `next/router`).

---

## 2. Component Architecture & Server Components

### Server Components by Default
All components are **Server Components** by default. Only add `"use client"` when the component:
1. Uses state or lifecycle hooks (`useState`, `useEffect`, `useReducer`, `useRef`).
2. Listens to browser events (`onClick`, `onChange`, `onSubmit`).
3. Accesses browser-only APIs (`window`, `document`, `localStorage`).

### Client Boundary Minimization
- **Push boundaries down**: Never mark an entire page or section as `"use client"` just to enable an interactive button or toggle.
- Extract the interactive widget into a small leaf component under `components/ui/` or `components/sections/` and import it into the Server Component parent.

```tsx
// ✅ Good: Parent remains Server Component
import HeroActions from "@/components/sections/HeroActions"; // leaf client component

export default function HeroSection() {
  return (
    <section>
      <h1>Static Server Rendered Title</h1>
      <HeroActions />
    </section>
  );
}
```

---

## 3. Layouts, Route Groups & Error Handling

- **Route Groups**: Use parenthesis syntax `(groupName)` to organize layouts without impacting the URL structure:
  - `app/(marketing)/layout.tsx`: Persistent navbar + footer for public pages.
  - `app/(auth)/layout.tsx`: Dedicated minimal layout for authentication flows.
- **Loading UI**: Implement `loading.tsx` for instant streaming skeletons.
- **Error Boundaries**: Implement `error.tsx` (must be `"use client"`) with error boundary reset capabilities.
- **404 Handling**: Implement `not-found.tsx` for custom not-found pages.

---

## 4. Performance & Media Optimization

### `next/image`
- Always use `next/image` (`<Image />`) instead of `<img>`.
- Above-the-fold images (e.g. Hero banner, Navbar logo) must include `priority`.
- Responsive images filling parent containers should use `fill` paired with `sizes="..."`.
- Reference static images from `public/` using string paths (e.g. `src="/images/hero.webp"`), not ES module imports.

```tsx
import Image from 'next/image';

<Image
  src="/images/hero.webp"
  alt="Platform Dashboard Preview"
  width={1200}
  height={675}
  priority
  className="w-full h-auto"
/>
```

### `next/font` (Centralized in `lib/fonts.ts`)
- Centralize all Google or local fonts inside `lib/fonts.ts`.
- Export font instances with CSS variables (e.g., `--font-body`, `--font-heading`).
- Apply font variables to the root `<html>` in `app/layout.tsx`.
- Never link external font stylesheets via `<link>` in HTML heads.



---

## 5. SEO & Metadata

Declare static or dynamic metadata using the Next.js `Metadata` API in `layout.tsx` or `page.tsx`:

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | My App',
    default: 'My App — Fast Modern Web Application',
  },
  description: 'Production-ready modern web application built with Next.js.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'My App',
  },
};
```

---

## 6. TypeScript & Code Quality Rules

1. **Strict Types**: `strict: true` in `tsconfig.json`. Prohibit `any`, `@ts-ignore`, and `@ts-expect-error`.
2. **Component File Conventions**:
   - One component per file in PascalCase (e.g. `FeatureCard.tsx`).
   - Use default export for primary component: `export default function FeatureCard(...)`.
   - Explicit TypeScript interface for props (e.g. `interface FeatureCardProps`).
   - No barrel files (`index.ts` re-exports). Import directly from component paths.
3. **Styling & Theming**:
   - **Semantic Color Palette**: Define design tokens using CSS variables (`:root, .light` and `.dark`) mapped to Tailwind v4 `@theme inline`.
   - **Dual Theme Support**: Always implement both light and dark themes when instructed, leveraging semantic classes (`bg-background`, `text-foreground`, `border-border`, etc.) instead of hardcoded hex values.
   - Tailwind utility classes only. Prohibit inline `style={{ ... }}` except for dynamic CSS variables.
   - Ensure mobile-first responsive classes (`default`, `md:`, `lg:`, `xl:`).



---

## 7. Commenting & Documentation Patterns

Keep comments clean, concise, and focused on grouping modules or explaining intent:

### A. File & Module Header Comments
Use concise multi-line block comments at the top of utility, preset, or complex files:

```ts
/**
 * Shared Motion Presets & Transitions
 */
```

```ts
/**
 * Global Site Metadata & OpenGraph Configuration
 */
```

### B. Section & Region Dividers
Use clean dividers to group related functions, constants, or types within larger files:

```ts
// --- Types & Interfaces ---

// --- Constants & Config ---

// --- Helper Functions ---
```

### C. Client Boundary & Non-Obvious Logic
Add brief single-line comments for client boundaries or non-obvious layout constraints:

```tsx
"use client";
// Required for mobile drawer interaction and keyboard listeners
```

---

## 8. Common Pitfalls Checklist

| Prohibited Anti-Pattern | Correct Standard |
| :--- | :--- |
| `import { useRouter } from 'next/router'` | `import { useRouter } from 'next/navigation'` |
| `<a>` for internal links | `<Link href="...">` from `next/link` |
| `<img>` tags | `<Image src="..." alt="..." />` from `next/image` |
| Wrapping whole page in `"use client"` | Keep page Server Component; extract interactive leaves |
| Hardcoded font links in `<head>` | `next/font/google` in `layout.tsx` |
| `any` prop or state types | Explicit TypeScript types and interfaces |
| `tailwind.config.js` | Tailwind v4 `@theme` in `app/globals.css` |
| Barrel file imports (`from '@/components'`) | Direct imports (`from '@/components/ui/Button'`) |

