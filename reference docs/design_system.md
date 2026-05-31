```markdown
# SYSTEM DIRECTIVE: ToolStaq Design System

> **CRITICAL INSTRUCTION FOR AI/LLM CODE GENERATION**
> This file is the absolute source of truth for all UI code generated for ToolStaq.online. 
> You MUST strictly adhere to these tokens and rules. Do NOT use raw HEX/RGB values, arbitrary spacing, or invent new design tokens. Failure to follow these constraints will result in invalid code.

## 1. ABSOLUTE CONSTRAINTS (READ FIRST)

1. **NO HARDCODED VALUES:** Never write `color: #080705`, `margin: 24px`, or `border-radius: 12px`. You MUST use the CSS variables provided below (e.g., `color: var(--color-text-primary)`, `margin: var(--space-24)`, `border-radius: var(--radius-md)`).
2. **NO NOVEL TOKENS:** Do not invent variables like `--color-blue-lighter`. If a shade does not exist here, use the closest available semantic variable.
3. **STRICT 8-PT GRID:** Spacing MUST only use the defined `--space-*` tokens. Never use arbitrary pixel margins/paddings (e.g., `margin-top: 13px` is forbidden; use `var(--space-12)` or `var(--space-16)`).
4. **CONSOLE/OUTPUT ENFORCEMENT:** ANY tool that generates text, JSON, code, or mathematical output MUST wrap that output in a container using exactly these tokens: `background-color: var(--color-bg-console); color: var(--color-text-on-dark); font-family: var(--font-mono); border-radius: var(--radius-none);`.
5. **FOCUS STATES:** Never use `outline: none;` without replacing it with a visible `:focus-visible` state.

---

## 2. TOKEN REGISTRY (Copy into :root)

```css
:root {
  /* --- Surfaces --- */
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f9fafb;
  --color-bg-console: #080705;

  /* --- Typography --- */
  --color-text-primary: #080705;
  --color-text-secondary: #4b5563;
  --color-text-on-dark: #ffffff;
  
  /* --- Accents --- */
  --color-accent-focus: #e3170a;
  --color-accent-warning: #f9c80e;

  /* --- Interactive --- */
  --color-action-default: #279af1;
  --color-action-hover: #1084da;
  --color-action-active: #0d6eb8;

  /* --- Borders --- */
  --color-border-default: #080705;
  --color-border-muted: #e5e7eb;

  /* --- Font Stacks --- */
  --font-sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', monospace;

  /* --- Spacing (8pt Grid) --- */
  --space-4: 4px;   /* Micro: icon-to-text */
  --space-8: 8px;   /* Interior: list items */
  --space-12: 12px; /* Label to input gap */
  --space-16: 16px; /* Card padding, button X-padding */
  --space-24: 24px; /* Grid gaps, group structures */
  --space-32: 32px; /* Section grouping */
  --space-48: 48px; /* Header boundaries */
  --space-64: 64px; /* Main layout limits */

  /* --- Radii --- */
  --radius-sm: 8px;  /* Inputs, tags, badges */
  --radius-md: 12px; /* Tool cards, execution interfaces */
  --radius-lg: 16px; /* Page blocks, modals */
  --radius-none: 0px;/* Console outputs */

  /* --- Shadows --- */
  --shadow-sm: 0 1px 3px rgba(8, 7, 5, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(8, 7, 5, 0.1), 0 2px 4px -1px rgba(8, 7, 5, 0.06);
  --shadow-neo: 4px 4px 0px #080705; /* Signature Hard Shadow */
}
```

---

## 3. TYPOGRAPHY SCALE MAPPING

Apply these exact properties to their corresponding elements.

| Element | Token Usage | Font | Size | Weight | Line-Height |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **H1** | Hero Headings | `var(--font-sans)` | 48px | 800 | 1.1 |
| **H2** | Tool Headers | `var(--font-sans)` | 36px | 700 | 1.2 |
| **H3** | Section Titles | `var(--font-sans)` | 28px | 700 | 1.3 |
| **Body** | Default text | `var(--font-sans)` | 16px | 400 | 1.5 |
| **Body Bold** | Buttons/Data | `var(--font-sans)` | 16px | 600 | 1.5 |
| **Caption** | Meta text | `var(--font-sans)` | 14px | 400 | 1.4 |
| **Code** | Console/JSON | `var(--font-mono)` | 14px | 400 | 1.6 |

---

## 4. COMPONENT RECIPE CONTRACTS

When generating standard UI elements, strictly combine tokens as follows:

### Primary Button (Neo-Brutalist Style)
*   **Base:** `background: var(--color-action-default); color: var(--color-text-on-dark); font-weight: 600; border: 1px solid var(--color-border-default); border-radius: var(--radius-sm); box-shadow: var(--shadow-neo); padding: var(--space-12) var(--space-24);`
*   **Hover:** `background: var(--color-action-hover); transform: translateY(-2px); box-shadow: 6px 6px 0px #080705;`
*   **Focus:** `outline: 2px solid var(--color-action-default); outline-offset: 2px;`

### Text Inputs
*   **Base:** `background: var(--color-bg-primary); border: 1px solid var(--color-border-default); border-radius: var(--radius-sm); padding: var(--space-12) var(--space-16); color: var(--color-text-primary); font-size: 16px;`
*   **Focus:** `border-color: var(--color-action-default); outline: 2px solid var(--color-action-default); outline-offset: 2px;`

### Data Output / Terminal Consoles
*   **Mandatory Wrapper:** `background: var(--color-bg-console); color: var(--color-text-on-dark); font-family: var(--font-mono); font-size: 14px; line-height: 1.6; padding: var(--space-24); border-radius: var(--radius-none); overflow-x: auto;`
*   *Highlighting keys/strings inside console:* Use `color: var(--color-accent-warning);`

### Informational Cards
*   **Base:** `background: var(--color-bg-secondary); border-radius: var(--radius-md); box-shadow: var(--shadow-md); padding: var(--space-24);`

---

## 5. ACCESSIBILITY (a11y) RULES

1. **Blue Text Constraint:** `--color-action-default` (#279af1) fails AA contrast on white for small text. **MUST ONLY** be used for large text (18px+), interactive components (buttons, inputs), or UI graphics. NEVER use `--color-action-default` for standard 16px paragraph text links; use `--color-text-primary` with an underline instead.
2. **Focus Visibility:** Every interactive element (`<button>`, `<a>`, `<input>`, `<textarea>`) MUST have a `:focus-visible` state using `outline: 2px solid var(--color-action-default); outline-offset: 2px;`.
3. **Motion:** If implementing transitions (like the button hover), wrap them in `@media (prefers-reduced-motion: no-preference)` to respect user OS settings.
```