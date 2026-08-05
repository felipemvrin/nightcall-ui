import type { Meta, StoryObj } from '@storybook/angular';

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
      <main style="min-height:100vh; background: var(--color-background-canvas); padding: var(--space-8); color: var(--color-text-primary);">
        <section style="max-width:72rem; margin:0 auto; display:grid; gap: var(--space-4);">
          <h1 style="margin:0; font-family: var(--font-family-heading); color: var(--color-text-heading);">Shadows</h1>
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr)); gap: var(--space-3);">
            <article style="padding: var(--space-4); border-radius: var(--radius-md); background: var(--color-background-surface); box-shadow: var(--elevation-shadow-1);">Elevation 1</article>
            <article style="padding: var(--space-4); border-radius: var(--radius-md); background: var(--color-background-surface); box-shadow: var(--elevation-shadow-2);">Elevation 2</article>
            <article style="padding: var(--space-4); border-radius: var(--radius-md); background: var(--color-background-surface); box-shadow: var(--shadow-glow-pink);">Glow Pink</article>
            <article style="padding: var(--space-4); border-radius: var(--radius-md); background: var(--color-background-surface); box-shadow: var(--shadow-glow-cyan);">Glow Cyan</article>
          </div>
        </section>
      </main>
    `,
  }),
};
