# UI/UX Concept Note: 3D Fanned Card Deck Animation System

**Author:** Prabath Sai Nagireddy (QDelta Agency)  
**Project:** Portfolio Website (`prabath-portfolio`)  
**Section:** 01 // About Me (`src/components/CardStack.tsx`)  
**Architecture:** Next.js 16 (App Router), TypeScript, Vanilla CSS Modules, Scroll-Linked GSAP/RAF Physics  

---

## 1. Concept Overview & Philosophy

The **3D Fanned Card Deck** is a scroll-driven, physical card transition system designed to replace conventional long paragraphs with an engaging, interactive micro-experience.

Instead of traditional flat tab bars or standard vertical scrolling, content is presented as a physical deck of cards resting at natural, staggered rotational angles (`-3.2°`, `+3.5°`, `+2.5°`). As the visitor scrolls down:
- The top active card smoothly **fans and sweeps off-screen** with natural 3D rotational toss physics (e.g., `-16°` left or `+16°` right).
- The next card behind it **steps forward in depth and straightens to 0°**, snapping into crystal-clear center focus.
- The indicator in the top right tracks the active page (`01 // 04` to `04 // 04`).

---

## 2. Card Content Matrix

1. **Card 01 — The Founder & Vision:**
   - **Identity:** Prabath Sai Nagireddy, Co-Founder @ QDelta Agency.
   - **Pillars:** Full-Stack Architecture, Product Engineering, High Performance.
   - **Action:** Primary CTA to connect.

2. **Card 02 — Core Engineering Stack:**
   - **Technologies:** React, Node.js, Express, MongoDB, Next.js 16, TypeScript, Supabase, Tailwind CSS, Docker & Cloud.
   - **Focus:** Scalable APIs, clean typing, and rock-solid cloud deployments.

3. **Card 03 — Shipped Products & Platforms:**
   - **Web Tool Finder (WTF):** Developer-focused web utility discovery hub.
   - **Internal Agency CRM:** Custom operational CRM powering QDelta.
   - **QDelta Agency Site:** Flagship digital agency platform.

4. **Card 04 — AI Engineering & Philosophy:**
   - **AI Ecosystem:** Gemini, Claude, MCP (Model Context Protocol), Ollama, Codex, Supabase AI, Agentic Workflows.
   - **3-Pillar Matrix:** 01 Technology (Logic) ⨉ 02 Product (Purpose) ⨉ 03 Design (Feel).
   - **Quote:** *"Building software that is not only technically solid, but also simple, useful, and genuinely enjoyable to use."*

---

## 3. Mathematical Physics & Interpolation

### Smoothstep Hermite Interpolation:
```typescript
const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);

const smoothstep = (edge0: number, edge1: number, x: number) => {
  const t = clamp((x - edge0) / (edge1 - edge0 || 1e-6), 0, 1);
  return t * t * (3 - 2 * t);
};
```

### Transition Timing Intervals across Normalized Scroll Progress `[0, 1]`:
- **Phase 1 (Card 1 Exit → Card 2 Focus):** `t1 = smoothstep(0.20, 0.36, progress)`
  - Card 1: `translate3d(-125% * t1, -35px * t1, 0) rotate(-16deg * t1)`, `opacity: 1 - t1`
  - Card 2: `rotate(3.5deg * (1 - t1)) scale(0.96 + 0.04 * t1)`, `brightness(0.8 + 0.2 * t1)`
- **Phase 2 (Card 2 Exit → Card 3 Focus):** `t2 = smoothstep(0.50, 0.66, progress)`
  - Card 2: `translate3d(+125% * t2, -35px * t2, 0) rotate(+16deg * t2)`, `opacity: 1 - t2`
  - Card 3: `rotate(-2.7deg * (1 - t2)) scale(0.95 + 0.05 * t2)`, `brightness(0.75 + 0.25 * t2)`
- **Phase 3 (Card 3 Exit → Card 4 Focus):** `t3 = smoothstep(0.78, 0.94, progress)`
  - Card 3: `translate3d(-125% * t3, -35px * t3, 0) rotate(-16deg * t3)`, `opacity: 1 - t3`
  - Card 4: `rotate(+1.7deg * (1 - t3)) scale(0.94 + 0.06 * t3)`, `brightness(0.7 + 0.3 * t3)`

---

## 4. Key CSS Tokens & Styling

```css
.deckStage {
  perspective: 1600px;
}

.card {
  background: rgba(10, 10, 14, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(24px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9);
  transform-origin: center bottom;
  transform-style: preserve-3d;
  will-change: transform, opacity, filter;
}
```

---

## 5. File Locations
- Component: `src/components/CardStack.tsx`
- Styles: `src/components/CardStack.module.css`
- Section Wrapper: `src/components/About.tsx`
