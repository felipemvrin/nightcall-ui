import type { Meta, StoryObj } from '@storybook/angular';
import {
  storyCodeLine,
  storyFullscreenMain,
  storyFullscreenSection,
  storyHeadingFoundation,
  storyHeadingSection,
  srOnlyStyle,
  storyInlineWrap,
  storyList,
  storySurfaceCard,
  storyTextMuted,
} from './shared/story-styles';

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
      <main style="${storyFullscreenMain()}">
        <section style="${storyFullscreenSection()}">
          <h1 style="${storyHeadingFoundation}">Icons</h1>
          <p style="${storyTextMuted}">Use the shared Nightcall icon package and avoid ad hoc custom icons inside components.</p>

          <article style="${storySurfaceCard} display:grid; gap: var(--space-2);">
            <h2 style="${storyHeadingSection}">Usage</h2>
            <code style="${storyCodeLine}">&lt;icon-name aria-hidden=\"true\" /&gt;</code>
            <code style="${storyCodeLine}">&lt;icon-name aria-label=\"Open settings\" /&gt;</code>
          </article>

          <article style="display:grid; gap: var(--space-2);">
            <h2 style="${storyHeadingSection}">Size and Color</h2>
            <p style="${storyTextMuted}">Keep default icon size aligned with text rhythm (typically var(--font-size-md) to var(--font-size-lg)). Let color inherit currentColor unless a semantic state color is required.</p>
          </article>

          <article style="display:grid; gap: var(--space-2);">
            <h2 style="${storyHeadingSection}">Accessibility</h2>
            <ul style="${storyList}">
              <li>Decorative icons: set aria-hidden="true".</li>
              <li>Interactive icons: provide an accessible name via aria-label or visible surrounding text.</li>
              <li>Do not rely on color alone to convey meaning.</li>
            </ul>
            <div style="${storySurfaceCard} display:grid; gap: var(--space-2);">
              <p style="${storyTextMuted}">Icon-only control example (accessible name required):</p>
              <div style="${storyInlineWrap}">
                <button type="button" aria-label="Open settings" style="inline-size:2.5rem; block-size:2.5rem; border:1px solid var(--color-border-subtle); border-radius: var(--radius-pill); background: color-mix(in srgb, var(--color-background-surface) 90%, transparent); color: var(--color-state-focus-ring); box-shadow: var(--elevation-shadow-1); cursor: pointer;">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true" focusable="false">
                    <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm8 4-1.8.7a7.9 7.9 0 0 1-.5 1.3l.9 1.7-1.4 1.4-1.7-.9c-.4.2-.9.4-1.3.5L12 20l-1.2-1.8c-.4-.1-.9-.3-1.3-.5l-1.7.9-1.4-1.4.9-1.7c-.2-.4-.4-.9-.5-1.3L4 12l1.8-1.2c.1-.4.3-.9.5-1.3l-.9-1.7 1.4-1.4 1.7.9c.4-.2.9-.4 1.3-.5L12 4l1.2 1.8c.4.1.9.3 1.3.5l1.7-.9 1.4 1.4-.9 1.7c.2.4.4.9.5 1.3L20 12Z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span style="${srOnlyStyle}">Open settings</span>
                </button>
              </div>
            </div>
          </article>
        </section>
      </main>
    `,
  }),
};
