# Baseline Documentation - Pre-Upgrade

## Environment
- Node.js: v24.13.0
- npm: 11.6.2
- Package Manager: npm (package-lock.json present)
- OS: Windows (MSYS_NT-10.0-26200)

## Current Package Versions (from package.json)

### Dependencies
- next: 14.2.35
- react: 18.3.1
- react-dom: 18.3.1
- @prisma/client: 5.20.0
- prisma: 5.20.0
- next-auth: 4.24.7
- @auth/prisma-adapter: 2.7.4
- tailwindcss: 3.4.12
- tailwindcss-animate: 1.0.7
- tailwind-merge: 2.5.2
- zod: 3.23.8
- @hookform/resolvers: 3.9.0
- react-hook-form: 7.53.0
- recharts: 2.12.7
- lucide-react: 0.446.0
- @sentry/nextjs: 10.70.0
- @vercel/functions: 3.9.9
- bcryptjs: 2.4.3
- papaparse: 5.4.1
- pdf-lib: 1.17.1
- qrcode: 1.5.4
- class-variance-authority: 0.7.0
- clsx: 2.1.1

### DevDependencies
- @types/react: 18
- @types/react-dom: 18
- @types/node: 20
- @types/bcryptjs: 2.4.6
- @types/papaparse: 5.3.14
- @types/qrcode: 1.5.5
- eslint: 8.57.1
- eslint-config-next: 14.2.35
- autoprefixer: 10.4.20
- postcss: 8.4.47
- typescript: 5
- tsx: 4.19.1
- vitest: 4.1.11

## Latest Stable Versions Available

### Major Upgrades Needed
- next: 14.2.35 → 16.4.0 (2 major versions)
- react: 18.3.1 → 19.3.0 (1 major version)
- react-dom: 18.3.1 → 19.3.0 (1 major version)
- @prisma/client: 5.20.0 → 7.10.0 (2 major versions)
- prisma: 5.20.0 → 7.10.0 (2 major versions)
- tailwindcss: 3.4.12 → 4.3.3 (1 major version)
- eslint: 8.57.1 → 10.12.0 (2 major versions)
- eslint-config-next: 14.2.35 → 16.4.0 (2 major versions)
- zod: 3.23.8 → 4.6.5 (1 major version)
- recharts: 2.12.7 → 3.10.1 (1 major version)
- typescript: 5 → 7.0.2 (2 major versions)
- @types/react: 18 → 19.3.0 (1 major version)
- @types/react-dom: 18 → 19.3.0 (1 major version)
- @types/node: 20 → 26.6.4 (6 major versions)

### Other Upgrades
- tailwindcss-animate: 1.0.7 → latest (will need replacement with tw-animate-css for Tailwind 4)
- tailwind-merge: 2.5.2 → 3.x (required for Tailwind 4)
- bcryptjs: 2.4.3 → 3.x (remove @types/bcryptjs if types bundled)
- lucide-react: 0.446.0 → latest (check for renamed/removed icons)
- @sentry/nextjs: 10.70.0 → latest (check Next.js 16 compatibility)
- @vercel/functions: 3.9.9 → latest (check Next.js 16 compatibility)
- vitest: 4.1.11 → latest (check for new configs)

### No Major Changes Needed
- next-auth: 4.24.7 → 4.24.15 (same major, will check v4 compatibility with Next 16/React 19)
- @auth/prisma-adapter: 2.7.4 → 2.11.3 (same major)
- @hookform/resolvers: 3.9.0 → latest
- react-hook-form: 7.53.0 → latest
- tsx: 4.19.1 → latest
- class-variance-authority: 0.7.0 → latest
- clsx: 2.1.1 → latest
- papaparse: 5.4.1 → latest
- pdf-lib: 1.17.1 → latest (unmaintained, will keep but test)
- qrcode: 1.5.4 → latest

## Node Version Requirements
- Next.js 16.4.0 requires: node >= 20.9.0
- @prisma/client 7.10.0 requires: ^20.19 || ^22.12 || >=24.0
- Current Node: v24.13.0 ✅ (satisfies both)

## Baseline Test Results

### Install
✅ Completed successfully with deprecation warnings (inflight, rimraf, glob, @humanwhocodes/*, eslint 8, recharts 2.x)

### Lint
✅ No ESLint warnings or errors

### Typecheck
❌ Pre-existing TypeScript errors:
- src/app/api/payments/initiate/route.test.ts(219,12): 'dedupeCallArgs' is possibly 'undefined'
- src/app/api/payments/initiate/route.test.ts(219,12): 'dedupeCallArgs.where' is possibly 'undefined'
- src/app/api/payments/initiate/route.test.ts(220,12): 'dedupeCallArgs' is possibly 'undefined'
- src/app/api/payments/initiate/route.test.ts(220,12): 'dedupeCallArgs.where' is possibly 'undefined'
- src/app/api/payments/initiate/route.ts(170,11): Property 'academicSessionId' is missing in metadata

### Tests
❌ 18 failed tests in src/app/api/payments/initiate/route.test.ts (same TypeScript errors causing test failures)
✅ 261 tests passed across 32 test files

### Build
❌ Cannot run without DATABASE_URL (expected - will need local/Neon-branch DB for verification)

### npm audit
⚠️ 15 vulnerabilities (2 moderate, 12 high, 1 critical)
- brace-expansion: high (DoS vulnerabilities)
- braces: high (stack-exhaustion DoS)
- fast-uri: high (SSRF/host confusion)
- glob: high (command injection)
- next: critical (multiple DoS, XSS, SSRF, RCE vulnerabilities)
- postcss: high (XSS, path traversal)
- postcss-selector-parser: moderate (CPU exhaustion)
- source-map-js: high (event-loop DoS)

Note: Most of these will be resolved by upgrading Next.js, Tailwind, and ESLint to latest versions.

## Pre-existing Issues to Fix During Upgrade
1. TypeScript errors in route.ts and route.test.ts (metadata missing academicSessionId, undefined check)
2. Test failures in payment initiate tests (caused by TypeScript errors)

## Notes
- Prisma 8.0.0-rc.22 is available but not stable; will use 7.10.0 latest stable
- TypeScript 7.0.2 is latest; need to verify Next.js 16 supports it
- next-auth v4 compatibility with Next 16/React 19 needs verification before deciding on migration
