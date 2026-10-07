# Javeed Shaik — Portfolio

React + TypeScript + Material UI, built with Vite.

All colors and typography live in `src/theme.ts` — change a hex value there
and it updates across every component, since everything reads from the MUI
theme instead of hardcoded styles.

## Setup

```bash
nvm use 20        # Node 20.x LTS
npm install
npm run dev        # http://localhost:5173
```

## Before deploying

1. Add your real résumé PDF at `public/Javeed_Shaik_Frontend_Engineer_React_2026.pdf`
   (matches the `resumeFile` path in `src/data.ts`).
2. Update `github` and `linkedin` URLs in `src/data.ts`.
3. `npm run build` → output goes to `dist/` (Vite's default), **not** `build/`.
   If you're reusing the Jenkinsfile / GitHub Actions workflow from earlier,
   change every `build/` reference to `dist/`:
   - Jenkinsfile: `aws s3 sync build/ s3://$S3_BUCKET --delete` → `aws s3 sync dist/ ...`
   - GitHub Actions: `aws s3 sync build/ s3://...` → `aws s3 sync dist/ ...`

## Structure

```
src/
  data.ts            ← all resume content lives here, edit this first
  components/
    Nav.tsx
    Hero.tsx
    Projects.tsx
    Skills.tsx
    About.tsx
    Contact.tsx
  App.tsx
```

////////////////////////////////
lint:
runs-on: ubuntu-latest
steps: - uses: actions/checkout@v4 - name: Install dependencies
run: npm install - name: Run linter
run: npm run lint
--test2---
