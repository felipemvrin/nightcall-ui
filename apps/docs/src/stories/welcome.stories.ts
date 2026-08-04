import type { Meta, StoryObj } from '@storybook/angular';

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
      <main style="min-height: 100vh; padding: 3rem; display: grid; place-items: center; background: var(--nc-color-background); color: var(--nc-color-text-primary); font-family: var(--nc-font-body, Inter, sans-serif);">
        <section style="max-width: 56rem; width: 100%;">
          <p style="margin: 0 0 1rem; text-transform: uppercase; letter-spacing: .24em; font-size: .75rem; color: var(--nc-color-text-secondary);">Nightcall UI</p>
          <h1 style="margin: 0; font-family: var(--nc-font-heading, Michroma, sans-serif); font-size: var(--nc-font-size-h1, 2.75rem); line-height: .95; letter-spacing: -.05em; color: var(--nc-color-heading);">
            Welcome to the design system workspace.
          </h1>
          <p style="margin: 1.25rem 0 0; max-width: 52ch; font-size: 1.05rem; line-height: 1.7; color: var(--nc-color-text-secondary);">
            This workspace is ready for real component work: tokens, themes, documentation, accessibility checks, and responsive previews are all connected.
          </p>
        </section>
      </main>
    `,
  }),
};
