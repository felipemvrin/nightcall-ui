# @nightcall-ui/components

Angular component library for Nightcall UI. Public components and types are exported from `src/public-api.ts` and built with ng-packagr.

## Build

From the workspace root:

```bash
npx ng build nightcall-ui
```

The package is written to `dist/nightcall-ui`.

## Test

The workspace uses Vitest for unit tests:

```bash
npm test
```

Component tests live in `tests/components`.

## Consume locally

Workspace applications import standalone components through the configured TypeScript alias:

```typescript
import { NcButtonComponent } from '@nightcall-ui/components';
```
