import type { Meta, StoryObj } from '@storybook/angular';
import { storyFullscreenSection, storyTextMuted } from './shared/story-styles';

const meta: Meta = {
  title: 'Welcome',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj;

export const Overview: Story = {
  render: () => ({
    template: `
      <main style="min-height: 100vh; padding: clamp(var(--space-8), 5vw, var(--space-12)); display: grid; place-items: center; background: var(--nc-color-background); color: var(--nc-color-text-primary); font-family: var(--nc-font-body);">
        <section style="${storyFullscreenSection('var(--layout-container-lg)', 'var(--space-4)')} width: 100%;">
          <p style="margin: 0 0 var(--space-4); text-transform: uppercase; letter-spacing: var(--font-letter-spacing-ultra); font-size: var(--font-size-xs); color: var(--nc-color-text-secondary);">Nightcall UI</p>
          <h1 style="margin: 0; font-family: var(--nc-font-heading); font-size: var(--nc-font-size-h1); line-height: var(--font-line-height-tight); letter-spacing: var(--font-letter-spacing-tight); color: var(--nc-color-heading);">
            Welcome to the design system workspace.
          </h1>
          <p style="${storyTextMuted} margin: var(--space-5) 0 0; max-width: 52ch; font-size: var(--font-size-lg); line-height: var(--font-line-height-relaxed); color: var(--nc-color-text-secondary);">
            This workspace is ready for real component work: tokens, themes, documentation, accessibility checks, and responsive previews are all connected.
          </p>
        </section>
      </main>
    `,
  }),
};
