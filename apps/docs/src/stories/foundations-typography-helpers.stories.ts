import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Foundations/Typography Helpers',
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
      <main style="min-height: 100vh; background: var(--nc-color-background); color: var(--nc-color-text-primary); padding: 2rem; font-family: var(--nc-font-body, Inter, sans-serif);">
        <section style="max-width: 80rem; margin: 0 auto; display: grid; gap: 2rem;">
          <header>
            <p class="u-font-oxanium u-font-regular u-text-warning" style="margin: 0 0 .5rem; text-transform: uppercase; letter-spacing: .12em; font-size: .75rem;">
              Foundations / Typography Helpers
            </p>
            <h1 style="margin: 0; font-family: var(--nc-font-heading, Michroma, sans-serif); font-size: var(--nc-font-size-h1, 2.75rem); line-height: 1; color: var(--nc-color-heading);">
              Utilities for consistent type
            </h1>
          </header>

          <section>
            <h2 style="margin: 0 0 1rem; font-size: 1.125rem; color: var(--nc-color-text-secondary);">Combinations</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem;">
              <article style="border: 1px solid var(--nc-color-border); border-radius: .75rem; background: var(--nc-color-surface); padding: 1rem;">
                <p class="u-font-oxanium u-font-regular u-text-warning" style="margin: 0; font-size: 1rem;">
                  Oxanium + Regular + Warning
                </p>
                <p style="margin: .5rem 0 0; color: var(--nc-color-text-secondary); font-size: .875rem;">u-font-oxanium u-font-regular u-text-warning</p>
              </article>

              <article style="border: 1px solid var(--nc-color-border); border-radius: .75rem; background: var(--nc-color-surface); padding: 1rem;">
                <p class="u-font-oxanium u-font-regular" style="margin: 0; font-size: 1rem;">
                  Oxanium + Regular
                </p>
                <p style="margin: .5rem 0 0; color: var(--nc-color-text-secondary); font-size: .875rem;">u-font-oxanium u-font-regular</p>
              </article>

              <article style="border: 1px solid var(--nc-color-border); border-radius: .75rem; background: var(--nc-color-surface); padding: 1rem;">
                <p class="u-font-regular" style="margin: 0; font-size: 1rem;">
                  Body + Regular
                </p>
                <p style="margin: .5rem 0 0; color: var(--nc-color-text-secondary); font-size: .875rem;">u-font-regular</p>
              </article>
            </div>
          </section>

          <section>
            <h2 style="margin: 0 0 1rem; font-size: 1.125rem; color: var(--nc-color-text-secondary);">Recommended sections</h2>
            <ul style="margin: 0; padding-left: 1.25rem; display: grid; gap: .5rem; color: var(--nc-color-text-secondary);">
              <li>Foundations/Color Tokens</li>
              <li>Foundations/Typography Helpers</li>
              <li>Foundations/Spacing</li>
              <li>Foundations/Elevation</li>
              <li>Foundations/Motion</li>
              <li>Foundations/Layout Grid</li>
              <li>Foundations/Accessibility</li>
            </ul>
          </section>
        </section>
      </main>
    `,
  }),
};
