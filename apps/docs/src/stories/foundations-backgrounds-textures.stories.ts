import type { Meta, StoryObj } from '@storybook/angular';

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
      <main style="min-height:100vh; background: var(--color-background-canvas); padding: var(--space-8); color: var(--color-text-primary); font-family: var(--font-family-body);">
        <section style="max-width:84rem; margin:0 auto; display:grid; gap: var(--space-4);">
          <h1 style="margin:0; font-family: var(--font-family-heading); color: var(--color-text-heading);">Backgrounds & Textures</h1>
          <p style="margin:0; color: var(--color-text-secondary);">Foundational atmospheric layers for Nightcall experiences: gradients, glow, noise, grid and CRT overlays.</p>

          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); gap: var(--space-3);">
            <article style="aspect-ratio: 4/3; border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle); background: linear-gradient(160deg, color-mix(in srgb, var(--color-accent-primary) 46%, transparent), color-mix(in srgb, var(--color-accent-secondary) 42%, transparent), var(--color-background-canvas)); box-shadow: var(--elevation-shadow-2);"></article>
            <article style="aspect-ratio: 4/3; border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle); background: radial-gradient(circle at 70% 25%, color-mix(in srgb, var(--color-state-focus-ring) 42%, transparent), transparent 40%), radial-gradient(circle at 20% 80%, color-mix(in srgb, var(--color-accent-secondary) 30%, transparent), transparent 48%), var(--color-background-surface); box-shadow: var(--shadow-glow-cyan);"></article>
            <article style="position:relative; overflow:hidden; aspect-ratio: 4/3; border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle); background: var(--color-background-surface);">
              <div style="position:absolute; inset:0; background: repeating-linear-gradient(180deg, transparent 0 2px, color-mix(in srgb, var(--color-text-primary) 6%, transparent) 2px 3px);"></div>
            </article>
            <article style="position:relative; overflow:hidden; aspect-ratio: 4/3; border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle); background: linear-gradient(180deg, color-mix(in srgb, var(--color-background-surface) 95%, black), var(--color-background-canvas));">
              <div style="position:absolute; inset:0; background-image: linear-gradient(to right, color-mix(in srgb, var(--color-state-focus-ring) 22%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--color-state-focus-ring) 20%, transparent) 1px, transparent 1px); background-size: 1.5rem 1.5rem;"></div>
            </article>
          </div>

          <ul style="margin:0; padding-inline-start: var(--space-5); color: var(--color-text-secondary);">
            <li>Gradient examples: use accent-primary, accent-secondary and focus-ring blends.</li>
            <li>Glow examples: use shadow-glow-pink and shadow-glow-cyan tokens.</li>
            <li>Texture examples: noise and scanline overlays via alpha blends.</li>
            <li>Grid examples: low-contrast perspective-friendly guides.</li>
            <li>CRT overlays: subtle horizontal scanlines only.</li>
            <li>Neon shadows: combine glow and elevation sparingly.</li>
          </ul>
        </section>
      </main>
    `,
  }),
};
