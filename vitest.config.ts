import angular from '@analogjs/vite-plugin-angular';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [angular({ tsconfig: './tsconfig.vitest.json' })],
  resolve: {
    alias: {
      '@nightcall-ui/components': new URL(
        './projects/nightcall-ui/src/public-api.ts',
        import.meta.url,
      ).pathname,
      '@nightcall-ui/icons': new URL('./packages/icons/src/public-api.ts', import.meta.url)
        .pathname,
      '@nightcall-ui/patterns': new URL('./libs/patterns/src/public-api.ts', import.meta.url)
        .pathname,
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['tests/test-setup.ts'],
    include: ['tests/**/*.spec.ts'],
    coverage: {
      provider: 'v8',
    },
  },
});
