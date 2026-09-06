# NOVI Landing Page

A marketing landing page for **NOVI** — a project and task management tool for small, fast-moving teams (startups, agencies, product and design teams).

Single-page product site with a dark, calm visual style, built as part of a front-end UI/UX assessment.

## Sections

| Section | Highlights |
| --- | --- |
| Hero | Fixed navbar (nav links, **Start Free**, mobile drawer), headline, dual CTAs, animated product mockup with floating chat / calendar / task cards |
| Logos | Trusted-by marquee (infinite scroll) |
| Features | 4 capability cards (Boards, Threads, Timeline, Import) with per-hue icons |
| Workflow | Ideas → Planning → Execution → Launch timeline with GSAP choreographed reveal, segmented animated spine |
| Showcase | Scrolling app panes with pill benefits |
| Stats | Metric counters (animated) |
| Testimonials | Customer quotes |
| Pricing | 3 tiers with per-tier visual styling |
| FAQ | Accessible accordion |
| CTA | Final conversion banner |
| Footer | Link groups, newsletter signup, social icons, legal line |

## Tech stack

- **Angular 21** (standalone components, zoneless-ready patterns, signals)
- **Tailwind CSS v4** (`@tailwindcss/postcss`, theme tokens in `src/styles.css`)
- **GSAP + ScrollTrigger** — reveal animations, scroll choreography, staggered timelines
- **lucide-angular** icons
- **Vitest** for unit tests
- Self-hosted variable fonts (`Manrope`, `JetBrains Mono`) — no external requests

## Getting started

```bash
npm install
npm start        # ng serve  →  http://localhost:4200/
```

The dev server hot-reloads on source changes.

## Production build

```bash
npm run build    # ng build --configuration production
npx ng serve --configuration production    # preview the optimized build locally
```



## Testing

ng test --watch=false

## Design choices

- **Calm, trust-forward dark theme** — soft violet accent, muted text, gentle gradients; feels like a focused workspace rather than a noisy SaaS page.
- **Consistent type scale** — H2s unified to `text-4xl md:text-5xl`, one muted body color, mono eyebrows/labels for a technical, tool-like identity.
- **One shared animation language** — GSAP `fromTo` reveals with `once: true` triggers; hover lifts and underlines follow the same easing and spacing across cards, buttons and links.
- **Perceived performance** — 0 `<img>` elements (all visuals are CSS/SVG mockups), self-hosted fonts, no external requests.
- **Accessibility** — semantic landmarks, `aria-label`s on icon-only controls, keyboard-usable drawer and accordion, `prefers-reduced-motion` support throughout.