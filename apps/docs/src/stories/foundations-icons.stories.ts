import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Foundations/Icons',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

export const IconGuidelines: Story = {
  render: () => ({
    template: `
      <main style="min-height:100vh; background: var(--color-background-canvas); padding: var(--space-8); color: var(--color-text-primary); font-family: var(--font-family-body);">
        <section style="max-width:72rem; margin:0 auto; display:grid; gap: var(--space-4);">
          <h1 style="margin:0; font-family: var(--font-family-heading); color: var(--color-text-heading);">Icons</h1>
          <p style="margin:0; color: var(--color-text-secondary);">Use the existing Nightcall icon package. Do not create custom icons inside components.</p>

          <article style="padding: var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle); background: var(--color-background-surface); display:grid; gap: var(--space-2);">
            <h2 style="margin:0; font-family: var(--font-family-heading); font-size: var(--font-size-lg);">Usage</h2>
            <code style="font-family: var(--font-family-code); color: var(--color-state-focus-ring);">&lt;icon-name aria-hidden=\"true\" /&gt;</code>
            <code style="font-family: var(--font-family-code); color: var(--color-state-focus-ring);">&lt;icon-name aria-label=\"Open settings\" /&gt;</code>
          </article>

          <article style="display:grid; gap: var(--space-2);">
            <h2 style="margin:0; font-family: var(--font-family-heading); font-size: var(--font-size-lg);">Size and Color</h2>
            <p style="margin:0; color: var(--color-text-secondary);">Default icon size should align with text rhythm (typically 16px/20px). Color inherits currentColor unless semantic color is required.</p>
          </article>

          <article style="display:grid; gap: var(--space-2);">
            <h2 style="margin:0; font-family: var(--font-family-heading); font-size: var(--font-size-lg);">Accessibility</h2>
            <ul style="margin:0; padding-inline-start: var(--space-5); color: var(--color-text-secondary);">
              <li>Decorative icons: aria-hidden=true.</li>
              <li>Interactive icons: provide accessible name through aria-label or surrounding text.</li>
              <li>Do not rely on color alone to convey meaning.</li>
            </ul>
          </article>
        </section>
      </main>
    `,
  }),
};
