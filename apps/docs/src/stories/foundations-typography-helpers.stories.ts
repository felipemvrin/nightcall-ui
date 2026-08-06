import type { Meta, StoryObj } from '@storybook/angular';
import { storyFullscreenSection, storyTextMuted } from './shared/story-styles';

const meta: Meta = {
  title: 'Foundations/Typography',
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
      <main style="min-height: 100vh; background: var(--nc-color-background); color: var(--nc-color-text-primary); padding: var(--space-8); font-family: var(--nc-font-body);">
        <section style="${storyFullscreenSection('var(--layout-container-xl)', 'var(--space-8)')}">
          <header>
            <p class="u-font-oxanium u-font-regular u-text-warning" style="margin: 0 0 var(--space-2); text-transform: uppercase; letter-spacing: var(--font-letter-spacing-ultra); font-size: var(--font-size-xs);">
              Foundations / Typography
            </p>
            <h1 style="margin: 0; font-family: var(--nc-font-heading); font-size: var(--nc-font-size-h1); line-height: var(--font-line-height-tight); color: var(--nc-color-heading);">
              Typography utility combinations
            </h1>
          </header>

          <section>
            <h2 style="${storyTextMuted} margin: 0 0 var(--space-4); font-size: var(--font-size-lg); color: var(--nc-color-text-secondary);">Recommended combinations</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(16.25rem, 1fr)); gap: var(--space-4);">
              <article style="border: 1px solid var(--nc-color-border); border-radius: var(--radius-lg); background: var(--nc-color-surface); padding: var(--space-4);">
                <p class="u-font-oxanium u-font-regular u-text-warning" style="margin: 0; font-size: var(--font-size-md);">
                  Oxanium + Regular + Warning
                </p>
                <p style="margin: var(--space-2) 0 0; color: var(--nc-color-text-secondary); font-size: var(--font-size-sm);">Use for highlighted helper labels.</p>
              </article>

              <article style="border: 1px solid var(--nc-color-border); border-radius: var(--radius-lg); background: var(--nc-color-surface); padding: var(--space-4);">
                <p class="u-font-oxanium u-font-regular" style="margin: 0; font-size: var(--font-size-md);">
                  Oxanium + Regular
                </p>
                <p style="margin: var(--space-2) 0 0; color: var(--nc-color-text-secondary); font-size: var(--font-size-sm);">Use for compact headings and labels.</p>
              </article>

              <article style="border: 1px solid var(--nc-color-border); border-radius: var(--radius-lg); background: var(--nc-color-surface); padding: var(--space-4);">
                <p class="u-font-regular" style="margin: 0; font-size: var(--font-size-md);">
                  Body + Regular
                </p>
                <p style="margin: var(--space-2) 0 0; color: var(--nc-color-text-secondary); font-size: var(--font-size-sm);">Use for baseline paragraph content.</p>
              </article>
            </div>
          </section>

        </section>
      </main>
    `,
  }),
};
