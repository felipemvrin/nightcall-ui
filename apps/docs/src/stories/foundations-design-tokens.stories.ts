import type { Meta, StoryObj } from '@storybook/angular';
import {
  storyAutoGrid,
  storyFullscreenMain,
  storyFullscreenSection,
  storyHeadingFoundation,
  storySurfaceCard,
  storyTextMuted,
} from './shared/story-styles';

const meta: Meta = {
  title: 'Foundations/Design Tokens',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

export const Overview: Story = {
  render: () => ({
    template: `
      <main style="${storyFullscreenMain()}">
        <section style="${storyFullscreenSection()}">
          <h1 style="${storyHeadingFoundation}">Design Tokens</h1>
          <p style="${storyTextMuted}">Nightcall UI components use a shared token system for color, typography, spacing, motion, radius, shadow, opacity, z-index, and layout.</p>
          <div style="${storyAutoGrid()}">
            <article style="${storySurfaceCard} padding: var(--space-3);">Color</article>
            <article style="${storySurfaceCard} padding: var(--space-3);">Typography</article>
            <article style="${storySurfaceCard} padding: var(--space-3);">Spacing</article>
            <article style="${storySurfaceCard} padding: var(--space-3);">Motion</article>
            <article style="${storySurfaceCard} padding: var(--space-3);">Shadow</article>
            <article style="${storySurfaceCard} padding: var(--space-3);">Radius</article>
          </div>
        </section>
      </main>
    `,
  }),
};
