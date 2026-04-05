# TempoOS Architecture Rules

## Core Principles

1. BUILD SAFETY FIRST
Every change must compile in Next.js App Router and deploy on Vercel.

2. NO UNINSTALLED DEPENDENCIES
Do NOT import any package unless it is already installed.

3. PREFER PURE REACT
Avoid UI libraries unless explicitly required.

4. SHARED COMPONENTS
All shared UI must be exported explicitly.

5. TYPES
All types must be self-contained or explicitly imported.

6. NO SERVER ACTIONS UNLESS COMPLETE
Avoid partial or experimental server logic.

7. VISUAL STANDARD
Premium, dark, glass, Apple-level design — no generic SaaS UI.

## Safe Files
- app/layout.tsx
- app/globals.css
- components/site-shell.tsx

These must never be broken.

## Expansion Areas
- /product
- /pricing
- /vision
- /waitlist

These can evolve.
