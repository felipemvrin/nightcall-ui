# Nightcall UI

Nightcall UI is an Angular 20 design system workspace focused on clarity, consistency, and long-term maintainability. It includes the foundations needed to build and document a public components package: design tokens, shared themes, Storybook docs, and a publishable Angular library.

## Stack

- Angular 20
- TypeScript
- SCSS
- Angular CDK
- Angular Signals
- Standalone Components
- Storybook 9
- Style Dictionary
- CSS Custom Properties
- Vitest
- Playwright
- ESLint
- Prettier
- Husky
- lint-staged
- GitHub Actions
- ng-packagr

## Folder Structure

- `apps/docs` - Angular documentation and demo application
- `projects/nightcall-ui` - publishable Angular components package
- `packages/tokens` - token documentation and build inputs
- `packages/themes` - shared theme primitives and CSS custom properties
- `packages/icons` - icon pipeline placeholder
- `.storybook` - Storybook 9 configuration
- `docs` - repository documentation
- `examples` - usage examples
- `scripts` - workspace utilities

## Getting Started

1. Install dependencies with `npm install`.
2. Generate tokens with `npm run tokens`.
3. Start the docs app with `npm run start`.
4. Start Storybook with `npm run storybook`.

## Scripts

- `npm run start` - run the docs app
- `npm run build` - build the docs app and the components package
- `npm run test` - run Vitest
- `npm run lint` - run ESLint
- `npm run storybook` - start Storybook 9
- `npm run build-storybook` - build the Storybook static site
- `npm run tokens` - generate CSS, SCSS, and JSON token outputs
- `npm run format` - format the workspace with Prettier
- `npm run prepare` - install Husky hooks
