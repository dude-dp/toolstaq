```markdown
# SYSTEM DIRECTIVE: ToolStaq Design System v2 — Neumorphic

> **CRITICAL INSTRUCTION FOR AI/LLM CODE GENERATION**
> This file is the absolute source of truth for all UI code generated for ToolStaq.online.
> You MUST strictly adhere to these tokens and rules. Do NOT use raw HEX/RGB values, arbitrary spacing, or invent new design tokens. Failure to follow these constraints will result in invalid code.

## 1. ABSOLUTE CONSTRAINTS (READ FIRST)

1. **NO HARDCODED VALUES:** Never write `color: #e0e5ec`, `margin: 24px`, or `border-radius: 12px`. You MUST use the CSS variables provided below (e.g., `color: var(--color-text-primary)`, `margin: var(--space-24)`, `border-radius: var(--radius-md)`).
2. **NO NOVEL TOKENS:** Do not invent variables like `--color-blue-lighter`. If a shade does not exist here, use the closest available semantic variable.
3. **STRICT 8-PT GRID:** Spacing MUST only use the defined `--space-*` tokens. Never use arbitrary pixel margins/paddings.
4. **NEUMORPHIC SHADOW LAW:** ALL raised surfaces MUST use `--shadow-neu-raised`. ALL recessed/pressed surfaces MUST use `--shadow-neu-inset`. The `--color-bg-primary` is the ONLY valid base for neumorphic surfaces.
5. **CONSOLE/OUTPUT ENFORCEMENT:** ANY tool output MUST wrap content in: `background-color: var(--color-bg-console); color: var(--color-text-on-dark); font-family: var(--font-mono); border-radius: var(--radius-md);`.
6. **FOCUS STATES:** Never use `outline: none;` without replacing it with a visible `:focus-visible` state using `--color-accent-focus`.

---

## 2. TOKEN REGISTRY (Copy into :root)

```css
:root {
  /* --- Neumorphic Base Surface --- */
  /* ALL cards, panels, and raised elements must sit on this exact background */
  --color-bg-primary: #e8edf2;
  --color-bg-secondary: #dde3ea;
  --color-bg-console: #1a1e2e;

  /* --- Neumorphic Shadow System --- */
  /* Light source: top-left. Dark shadow: bottom-right. Light shadow: top-left. */
  --shadow-neu-raised:  6px 6px 14px #c5cad0, -6px -6px 14px #ffffff;
  --shadow-neu-raised-lg: 10px 10px 24px #bfc5cc, -10px -10px 24px #ffffff;
  --shadow-neu-inset:  inset 4px 4px 8px #c5cad0, inset -4px -4px 8px #ffffff;
  --shadow-neu-inset-sm: inset 2px 2px 5px #c5cad0, inset -2px -2px 5px #ffffff;
  --shadow-neu-flat:  2px 2px 5px #c5cad0, -2px -2px 5px #ffffff;

  /* --- Typography --- */
  --color-text-primary: #3d4a5c;
  --color-text-secondary: #6b7a90;
  --color-text-muted: #9aa5b4;
  --color-text-on-dark: #e8edf2;

  /* --- Accents --- */
  --color-accent-focus: #e3170a;       /* Signature red — buttons, CTAs */
  --color-accent-focus-soft: rgba(227, 23, 10, 0.12);
  --color-accent-warning: #f59e0b;     /* Amber — badges, highlights */
  --color-accent-success: #10b981;     /* Emerald — live status */
  --color-accent-info: #6366f1;        /* Indigo — decorative accents */

  /* --- Borders (subtle, not hard) --- */
  --color-border-default: rgba(255, 255, 255, 0.8);
  --color-border-muted: rgba(197, 202, 208, 0.5);
  --color-border-accent: rgba(227, 23, 10, 0.3);

  /* --- Font Stacks --- */
  --font-sans: 'Nunito', 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'ui-monospace', 'SFMono-Regular', monospace;

  /* --- Spacing (8pt Grid) --- */
  --space-4: 4px;
  --space-8: 8px;
  --space-12: 12px;
  --space-16: 16px;
  --space-24: 24px;
  --space-32: 32px;
  --space-48: 48px;
  --space-64: 64px;

  /* --- Radii (Neumorphic: generous rounding) --- */
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-full: 9999px;
  --radius-none: 0px;

  /* --- Transitions --- */
  --transition-fast: 0.15s ease;
  --transition-base: 0.25s ease;
  --transition-slow: 0.4s ease;
}
```

---

## 3. DARK THEME TOKEN OVERRIDES

```css
[data-theme="dark"] {
  --color-bg-primary: #1e2433;
  --color-bg-secondary: #252b3b;
  --color-bg-console: #0d1117;

  --shadow-neu-raised:  6px 6px 14px #141824, -6px -6px 14px #283044;
  --shadow-neu-raised-lg: 10px 10px 24px #111622, -10px -10px 24px #2b3550;
  --shadow-neu-inset:  inset 4px 4px 8px #141824, inset -4px -4px 8px #283044;
  --shadow-neu-inset-sm: inset 2px 2px 5px #141824, inset -2px -2px 5px #283044;
  --shadow-neu-flat:   2px 2px 5px #141824, -2px -2px 5px #283044;

  --color-text-primary: #d0d8e8;
  --color-text-secondary: #8899b4;
  --color-text-muted: #5a6a80;
  --color-text-on-dark: #d0d8e8;

  --color-border-default: rgba(40, 48, 68, 0.8);
  --color-border-muted: rgba(20, 24, 36, 0.6);
}
```

---

## 4. TYPOGRAPHY SCALE MAPPING

| Element | Token Usage | Font | Size | Weight | Line-Height |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **H1** | Hero Headings | `var(--font-sans)` | 48px | 800 | 1.1 |
| **H2** | Tool Headers | `var(--font-sans)` | 32px | 700 | 1.2 |
| **H3** | Section Titles | `var(--font-sans)` | 22px | 700 | 1.3 |
| **Body** | Default text | `var(--font-sans)` | 16px | 400 | 1.6 |
| **Body Bold** | Buttons/Data | `var(--font-sans)` | 16px | 700 | 1.5 |
| **Caption** | Meta text | `var(--font-sans)` | 13px | 500 | 1.4 |
| **Code** | Console/JSON | `var(--font-mono)` | 13px | 400 | 1.6 |

---

## 5. COMPONENT RECIPE CONTRACTS

### Raised Card (Neumorphic Surface)
*   **Base:** `background: var(--color-bg-primary); border-radius: var(--radius-lg); box-shadow: var(--shadow-neu-raised); padding: var(--space-32); border: 1px solid var(--color-border-default);`
*   **Hover:** `box-shadow: var(--shadow-neu-raised-lg); transform: translateY(-2px);`

### Pressed / Active State
*   **Active:** `box-shadow: var(--shadow-neu-inset); transform: translateY(0);`

### Primary Button (Neumorphic CTA)
*   **Base:** `background: var(--color-accent-focus); color: var(--color-text-on-dark); font-weight: 700; border: none; border-radius: var(--radius-full); box-shadow: 4px 4px 10px rgba(227,23,10,0.4), -2px -2px 8px rgba(255,255,255,0.3); padding: var(--space-12) var(--space-32);`
*   **Hover:** `box-shadow: 6px 6px 16px rgba(227,23,10,0.5), -2px -2px 8px rgba(255,255,255,0.3); transform: translateY(-2px);`
*   **Focus:** `outline: 2px solid var(--color-accent-focus); outline-offset: 3px;`

### Secondary Button (Neu-Flat)
*   **Base:** `background: var(--color-bg-primary); color: var(--color-text-primary); font-weight: 600; border: 1px solid var(--color-border-default); border-radius: var(--radius-full); box-shadow: var(--shadow-neu-flat); padding: var(--space-12) var(--space-24);`
*   **Hover:** `box-shadow: var(--shadow-neu-raised);`
*   **Active:** `box-shadow: var(--shadow-neu-inset-sm);`

### Text Inputs / Textareas (Recessed)
*   **Base:** `background: var(--color-bg-primary); border: 1px solid var(--color-border-muted); border-radius: var(--radius-md); padding: var(--space-12) var(--space-16); color: var(--color-text-primary); font-size: 16px; box-shadow: var(--shadow-neu-inset);`
*   **Focus:** `border-color: var(--color-border-accent); outline: 2px solid var(--color-accent-focus); outline-offset: 2px; box-shadow: var(--shadow-neu-inset);`

### Data Output / Terminal Consoles
*   **Mandatory Wrapper:** `background: var(--color-bg-console); color: var(--color-text-on-dark); font-family: var(--font-mono); font-size: 13px; line-height: 1.6; padding: var(--space-24); border-radius: var(--radius-md); overflow-x: auto; box-shadow: var(--shadow-neu-inset);`
*   *Key highlighting:* Use `color: var(--color-accent-warning);`

---

## 6. ACCESSIBILITY (a11y) RULES

1. **Contrast Law:** `--color-text-primary` on `--color-bg-primary` must maintain ≥ 4.5:1 contrast ratio. Never use `--color-text-muted` for interactive or body copy.
2. **Focus Visibility:** Every interactive element MUST have a `:focus-visible` state using `outline: 2px solid var(--color-accent-focus); outline-offset: 3px;`.
3. **Motion:** Wrap all transitions in `@media (prefers-reduced-motion: no-preference)`.
4. **Shadow-Only Depth:** Never communicate pressed/raised state through color alone — always use the shadow system.
```