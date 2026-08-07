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
  title: 'Foundations/Shadows',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

export const ElevationAndGlow: Story = {
  render: () => ({
    template: `
      <main style="${storyFullscreenMain()}">
        <section style="${storyFullscreenSection()}">
          <h1 style="${storyHeadingFoundation}">Shadows</h1>
          <p style="${storyTextMuted}">Use elevation shadows to communicate hierarchy. Reserve neon glow for emphasis and focus, not for structural surfaces.</p>
          <div style="${storyAutoGrid('14rem')}">
            <article style="${storySurfaceCard} box-shadow: var(--elevation-shadow-1);">Elevation 1</article>
            <article style="${storySurfaceCard} box-shadow: var(--elevation-shadow-2);">Elevation 2</article>
            <article style="${storySurfaceCard} box-shadow: var(--shadow-glow-pink);">Glow Pink</article>
            <article style="${storySurfaceCard} box-shadow: var(--shadow-glow-cyan);">Glow Cyan</article>
          </div>
        </section>
      </main>
    `,
  }),
};
