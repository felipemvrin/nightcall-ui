import type { Meta, StoryObj } from '@storybook/angular';

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
      <main style="min-height: 100vh; background: var(--color-background-canvas); color: var(--color-text-primary); padding: var(--space-8); font-family: var(--font-family-body);">
        <section style="max-width: 72rem; margin: 0 auto; display: grid; gap: var(--space-4);">
          <h1 style="margin:0; font-family: var(--font-family-heading); color: var(--color-text-heading);">Design Tokens</h1>
          <p style="margin:0; color: var(--color-text-secondary);">Nightcall UI components consume token categories for color, typography, spacing, motion, radius, shadow, opacity, z-index and layout.</p>
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr)); gap: var(--space-3);">
            <article style="padding: var(--space-3); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); background: var(--color-background-surface);">Color</article>
            <article style="padding: var(--space-3); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); background: var(--color-background-surface);">Typography</article>
            <article style="padding: var(--space-3); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); background: var(--color-background-surface);">Spacing</article>
            <article style="padding: var(--space-3); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); background: var(--color-background-surface);">Motion</article>
            <article style="padding: var(--space-3); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); background: var(--color-background-surface);">Shadow</article>
            <article style="padding: var(--space-3); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); background: var(--color-background-surface);">Radius</article>
          </div>
        </section>
      </main>
    `,
  }),
};
