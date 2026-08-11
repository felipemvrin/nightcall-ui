# Icons Package

Shared Nightcall icon primitives backed by `@lucide/angular` live here.

Current exports:

- `NcIconComponent` standalone Angular component
- semantic size and color tokens
- a typed, tree-shakable catalog of individually imported Lucide icons

Use `NC_ICON_NAMES` for the complete supported catalog.

Usage example:

```ts
import { NcIconComponent } from '@nightcall-ui/icons';
```

```html
<nc-icon name="play" size="md" />
<nc-icon name="info" [decorative]="false" ariaLabel="Information" />
```
