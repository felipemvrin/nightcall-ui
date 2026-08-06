import type { Meta, StoryObj } from '@storybook/angular';
import {
  storyAutoGrid,
  storyFullscreenMain,
  storyFullscreenSection,
  storyTokenLabel,
  storyTextMuted,
} from './shared/story-styles';

const meta: Meta = {
  title: 'Foundations/Colors',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj;

export const Palette: Story = {
  render: () => ({
    template: `
      <main style="${storyFullscreenMain()}">
        <section style="${storyFullscreenSection('var(--layout-container-xl)', 'var(--space-8)')}">
          <header>
            <p style="margin: 0 0 var(--space-2); letter-spacing: var(--font-letter-spacing-ultra); text-transform: uppercase; font-size: var(--font-size-xs); color: var(--color-text-secondary);">Foundations</p>
            <h1 style="margin: 0; font-family: var(--font-family-heading); font-size: var(--nc-font-size-h1); line-height: var(--font-line-height-tight); color: var(--color-text-heading);">
              Color Tokens
            </h1>
          </header>

          <section>
            <h2 style="${storyTextMuted} margin: 0 0 var(--space-4); font-size: var(--font-size-lg);">Semantic Tokens</h2>
            <div style="${storyAutoGrid('12rem', 'var(--space-4)')}">
              <article style="border: 1px solid var(--color-border-subtle); border-radius: var(--radius-lg); overflow: hidden; background: var(--color-background-surface);">
                <div style="height: var(--space-12); background: var(--color-background-canvas);"></div>
                <div style="${storyTokenLabel}">--color-background-canvas</div>
              </article>
              <article style="border: 1px solid var(--color-border-subtle); border-radius: var(--radius-lg); overflow: hidden; background: var(--color-background-surface);">
                <div style="height: var(--space-12); background: var(--color-background-surface);"></div>
                <div style="${storyTokenLabel}">--color-background-surface</div>
              </article>
              <article style="border: 1px solid var(--color-border-subtle); border-radius: var(--radius-lg); overflow: hidden; background: var(--color-background-surface);">
                <div style="height: var(--space-12); background: var(--color-accent-primary);"></div>
                <div style="${storyTokenLabel}">--color-accent-primary</div>
              </article>
              <article style="border: 1px solid var(--color-border-subtle); border-radius: var(--radius-lg); overflow: hidden; background: var(--color-background-surface);">
                <div style="height: var(--space-12); background: var(--color-accent-secondary);"></div>
                <div style="${storyTokenLabel}">--color-accent-secondary</div>
              </article>
              <article style="border: 1px solid var(--color-border-subtle); border-radius: var(--radius-lg); overflow: hidden; background: var(--color-background-surface);">
                <div style="height: var(--space-12); background: var(--color-state-success);"></div>
                <div style="${storyTokenLabel}">--color-state-success</div>
              </article>
              <article style="border: 1px solid var(--color-border-subtle); border-radius: var(--radius-lg); overflow: hidden; background: var(--color-background-surface);">
                <div style="height: var(--space-12); background: var(--color-state-warning);"></div>
                <div style="${storyTokenLabel}">--color-state-warning</div>
              </article>
              <article style="border: 1px solid var(--color-border-subtle); border-radius: var(--radius-lg); overflow: hidden; background: var(--color-background-surface);">
                <div style="height: var(--space-12); background: var(--color-state-danger);"></div>
                <div style="${storyTokenLabel}">--color-state-danger</div>
              </article>
            </div>
          </section>

          <section>
            <h2 style="${storyTextMuted} margin: 0 0 var(--space-4); font-size: var(--font-size-lg);">Primitive Tokens</h2>
            <div style="${storyAutoGrid('12rem', 'var(--space-4)')}">
              <article style="border: 1px solid var(--color-border-subtle); border-radius: var(--radius-lg); overflow: hidden; background: var(--color-background-surface);">
                <div style="height: var(--space-12); background: var(--color-primitive-background);"></div>
                <div style="${storyTokenLabel}">--color-primitive-background</div>
              </article>
              <article style="border: 1px solid var(--color-border-subtle); border-radius: var(--radius-lg); overflow: hidden; background: var(--color-background-surface);">
                <div style="height: var(--space-12); background: var(--color-primitive-surface);"></div>
                <div style="${storyTokenLabel}">--color-primitive-surface</div>
              </article>
              <article style="border: 1px solid var(--color-border-subtle); border-radius: var(--radius-lg); overflow: hidden; background: var(--color-background-surface);">
                <div style="height: var(--space-12); background: var(--color-primitive-surface-secondary);"></div>
                <div style="${storyTokenLabel}">--color-primitive-surface-secondary</div>
              </article>
              <article style="border: 1px solid var(--color-border-subtle); border-radius: var(--radius-lg); overflow: hidden; background: var(--color-background-surface);">
                <div style="height: var(--space-12); background: var(--color-primitive-primary);"></div>
                <div style="${storyTokenLabel}">--color-primitive-primary</div>
              </article>
              <article style="border: 1px solid var(--color-border-subtle); border-radius: var(--radius-lg); overflow: hidden; background: var(--color-background-surface);">
                <div style="height: var(--space-12); background: var(--color-primitive-secondary);"></div>
                <div style="${storyTokenLabel}">--color-primitive-secondary</div>
              </article>
              <article style="border: 1px solid var(--color-border-subtle); border-radius: var(--radius-lg); overflow: hidden; background: var(--color-background-surface);">
                <div style="height: var(--space-12); background: var(--color-primitive-info);"></div>
                <div style="${storyTokenLabel}">--color-primitive-info</div>
              </article>
              <article style="border: 1px solid var(--color-border-subtle); border-radius: var(--radius-lg); overflow: hidden; background: var(--color-background-surface);">
                <div style="height: var(--space-12); background: var(--color-primitive-warning);"></div>
                <div style="${storyTokenLabel}">--color-primitive-warning</div>
              </article>
              <article style="border: 1px solid var(--color-border-subtle); border-radius: var(--radius-lg); overflow: hidden; background: var(--color-background-surface);">
                <div style="height: var(--space-12); background: var(--color-primitive-text);"></div>
                <div style="${storyTokenLabel}">--color-primitive-text</div>
              </article>
            </div>
          </section>
        </section>
      </main>
    `,
  }),
};
