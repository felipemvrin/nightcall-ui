import type { Meta, StoryObj } from '@storybook/angular';
import {
  storyFullscreenMain,
  storyFullscreenSection,
  storyHeadingFoundation,
  storyList,
  storyPreviewTile,
  storySampleCaption,
  storyTextMuted,
} from './shared/story-styles';

const meta: Meta = {
  title: 'Foundations/Backgrounds & Textures',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

export const NightcallSurfaces: Story = {
  render: () => ({
    template: `
      <main style="${storyFullscreenMain()}">
        <section style="${storyFullscreenSection('84rem')}">
          <h1 style="${storyHeadingFoundation}">Backgrounds & Textures</h1>
          <p style="${storyTextMuted}">Build atmospheric surfaces with gradients, glow, noise, grid, and subtle CRT-inspired overlays.</p>

          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); gap: var(--space-3);">
            <figure style="margin:0; display:grid; gap: var(--space-2);">
              <article style="${storyPreviewTile} background: linear-gradient(160deg, color-mix(in srgb, var(--color-accent-primary) 46%, transparent), color-mix(in srgb, var(--color-accent-secondary) 42%, transparent), var(--color-background-canvas)); box-shadow: var(--elevation-shadow-2);"></article>
              <figcaption style="${storySampleCaption}">Aurora blend surface for hero backgrounds.</figcaption>
            </figure>
            <figure style="margin:0; display:grid; gap: var(--space-2);">
              <article style="${storyPreviewTile} background: radial-gradient(circle at 70% 25%, color-mix(in srgb, var(--color-state-focus-ring) 42%, transparent), transparent 40%), radial-gradient(circle at 20% 80%, color-mix(in srgb, var(--color-accent-secondary) 30%, transparent), transparent 48%), var(--color-background-surface); box-shadow: var(--shadow-glow-cyan);"></article>
              <figcaption style="${storySampleCaption}">Dual neon glow cloud on elevated surface.</figcaption>
            </figure>
            <figure style="margin:0; display:grid; gap: var(--space-2);">
              <article style="${storyPreviewTile} position:relative; background: var(--color-background-surface);">
                <div style="position:absolute; inset:0; background: repeating-linear-gradient(180deg, transparent 0 2px, color-mix(in srgb, var(--color-text-primary) 6%, transparent) 2px 3px);"></div>
              </article>
              <figcaption style="${storySampleCaption}">Soft scanline texture for cinematic depth.</figcaption>
            </figure>
            <figure style="margin:0; display:grid; gap: var(--space-2);">
              <article style="${storyPreviewTile} position:relative; background: linear-gradient(180deg, color-mix(in srgb, var(--color-background-surface) 95%, black), var(--color-background-canvas));">
                <div style="position:absolute; inset:0; background-image: linear-gradient(to right, color-mix(in srgb, var(--color-state-focus-ring) 22%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--color-state-focus-ring) 20%, transparent) 1px, transparent 1px); background-size: 1.5rem 1.5rem;"></div>
              </article>
              <figcaption style="${storySampleCaption}">Low-contrast grid overlay for structure.</figcaption>
            </figure>
          </div>

          <ul style="${storyList}">
            <li>Gradient surfaces: blend accent-primary, accent-secondary, and focus-ring tones.</li>
            <li>Glow accents: use shadow-glow-pink and shadow-glow-cyan tokens.</li>
            <li>Texture overlays: apply noise and scanline layers with low alpha.</li>
            <li>Grid guides: keep lines low-contrast and layout-oriented.</li>
            <li>CRT treatment: use subtle horizontal scanlines only.</li>
            <li>Neon shadows: combine glow and elevation sparingly.</li>
          </ul>
        </section>
      </main>
    `,
  }),
};
