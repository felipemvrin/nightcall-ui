import { type Meta, type StoryObj } from '@storybook/angular';
import { NcIconComponent } from '@nightcall-ui/icons';
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
    imports: [NcIconComponent],
    template: `
      <main style="${storyFullscreenMain()}">
        <section style="${storyFullscreenSection()}">
          <h1 style="${storyHeadingFoundation}">Icons</h1>
          <p style="${storyTextMuted}">Use the shared Nightcall icon package and avoid ad hoc custom icons inside components.</p>

          <article style="${storySurfaceCard} display:grid; gap: var(--space-2);">
            <h2 style="${storyHeadingSection}">Usage</h2>
            <code style="${storyCodeLine}">&lt;nc-icon name=\"play\" /&gt;</code>
            <code style="${storyCodeLine}">&lt;nc-icon name=\"settings\" ariaLabel=\"Open settings\" /&gt;</code>
          </article>

          <article style="display:grid; gap: var(--space-2);">
            <h2 style="${storyHeadingSection}">Size and Color</h2>
            <p style="${storyTextMuted}">Keep default icon size aligned with text rhythm (typically var(--font-size-md) to var(--font-size-lg)). Let color inherit currentColor unless a semantic state color is required.</p>
            <div style="${storyInlineWrap}">
              <nc-icon name="play" size="sm"></nc-icon>
              <nc-icon name="play"></nc-icon>
              <span style="display:inline-flex; align-items:center; color: var(--color-state-focus-ring);"><nc-icon name="play" size="lg"></nc-icon></span>
            </div>
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
                  <nc-icon name="settings" size="lg"></nc-icon>
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
