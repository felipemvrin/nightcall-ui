import type { Meta, StoryObj } from '@storybook/angular';
import {
  storyAutoGrid,
  storyCodeLine,
  storyFullscreenMain,
  storyFullscreenSection,
  storyHeadingFoundation,
  storyHeadingSection,
  storySurfaceCard,
  storyTextMuted,
} from './shared/story-styles';

const meta: Meta = {
  title: 'Foundations/Design Tokens',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

const usageCssExample = `.token-card {
  padding: var(--nc-space-5);
  color: var(--nc-color-text-primary);
  background: var(--nc-color-surface);
  border: 1px solid var(--nc-color-border);
  border-radius: var(--nc-radius-lg);
  box-shadow: var(--nc-shadow-elevation-2);
}

.token-card__title {
  font-family: var(--nc-font-heading);
  color: var(--nc-color-heading);
}

.token-card__action {
  color: var(--nc-color-text-inverse);
  background: var(--nc-color-primary);
  border-radius: var(--nc-radius-pill);
  transition: transform var(--nc-motion-fast)
    var(--nc-motion-easing-standard);
}`;

export const Overview: Story = {
  render: () => ({
    template: `
      <main style="${storyFullscreenMain()}">
        <section style="${storyFullscreenSection()}">
          <h1 style="${storyHeadingFoundation}">Design Tokens</h1>
          <p style="${storyTextMuted}">Nightcall UI components use a shared token system for color, typography, spacing, motion, radius, shadow, opacity, z-index, and layout.</p>
          <div style="${storyAutoGrid()}">
            <article style="${storySurfaceCard} padding: var(--space-3);">Color</article>
            <article style="${storySurfaceCard} padding: var(--space-3);">Typography</article>
            <article style="${storySurfaceCard} padding: var(--space-3);">Spacing</article>
            <article style="${storySurfaceCard} padding: var(--space-3);">Motion</article>
            <article style="${storySurfaceCard} padding: var(--space-3);">Shadow</article>
            <article style="${storySurfaceCard} padding: var(--space-3);">Radius</article>
          </div>
        </section>
      </main>
    `,
  }),
};

export const UsageExample: Story = {
  name: 'Usage Example',
  parameters: {
    controls: { disable: true },
  },
  render: () => ({
    props: { usageCssExample },
    template: `
      <main style="${storyFullscreenMain()}">
        <section style="${storyFullscreenSection('72rem', 'var(--space-6)')}">
          <header style="display:grid; gap:var(--space-2);">
            <h1 style="${storyHeadingFoundation}">Using Design Tokens</h1>
            <p style="${storyTextMuted}">Compose semantic theme aliases to build interfaces that remain consistent when the underlying theme changes.</p>
          </header>

          <div style="${storyAutoGrid('18rem', 'var(--space-5)')}">
            <section aria-labelledby="token-preview-title" style="display:grid; gap:var(--space-3); align-content:start;">
              <h2 id="token-preview-title" style="${storyHeadingSection}">Rendered example</h2>
              <article class="token-card">
                <p class="token-card__eyebrow">Now playing</p>
                <h3 class="token-card__title">Midnight Signals</h3>
                <p class="token-card__description">A product surface composed entirely from Nightcall theme aliases.</p>
                <button class="token-card__action" type="button">Add to queue</button>
              </article>
            </section>

            <section aria-labelledby="token-code-title" style="display:grid; gap:var(--space-3); align-content:start; min-width:0;">
              <h2 id="token-code-title" style="${storyHeadingSection}">CSS</h2>
              <pre style="margin:0; padding:var(--space-4); overflow:auto; border:1px solid var(--color-border-subtle); border-radius:var(--radius-md); background:var(--color-background-surface); font-size:var(--font-size-xs); line-height:var(--font-line-height-normal);"><code style="${storyCodeLine}" [textContent]="usageCssExample"></code></pre>
            </section>
          </div>

          <section aria-labelledby="token-layers-title" style="display:grid; gap:var(--space-3);">
            <div>
              <h2 id="token-layers-title" style="${storyHeadingSection}">Token layers</h2>
              <p style="${storyTextMuted}">Components consume theme aliases; aliases connect them to semantic intent and reusable primitive values.</p>
            </div>
            <div class="token-layers" role="list" aria-label="Token resolution example">
              <div style="${storySurfaceCard}" role="listitem">
                <strong>Primitive</strong>
                <code>color.primitive.primary</code>
              </div>
              <span class="token-layers__arrow" aria-hidden="true">→</span>
              <div style="${storySurfaceCard}" role="listitem">
                <strong>Semantic</strong>
                <code>--color-accent-primary</code>
              </div>
              <span class="token-layers__arrow" aria-hidden="true">→</span>
              <div style="${storySurfaceCard}" role="listitem">
                <strong>Theme alias</strong>
                <code>--nc-color-primary</code>
              </div>
            </div>
          </section>
        </section>
      </main>
    `,
    styles: [
      `
        .token-card {
          display: grid;
          gap: var(--nc-space-3);
          padding: var(--nc-space-5);
          color: var(--nc-color-text-primary);
          background: var(--nc-color-surface);
          border: 1px solid var(--nc-color-border);
          border-radius: var(--nc-radius-lg);
          box-shadow: var(--nc-shadow-elevation-2);
        }

        .token-card__eyebrow,
        .token-card__description {
          margin: 0;
          color: var(--nc-color-text-secondary);
        }

        .token-card__eyebrow {
          font-size: var(--font-size-xs);
          letter-spacing: var(--font-letter-spacing-ultra);
          text-transform: uppercase;
        }

        .token-card__title {
          margin: 0;
          font-family: var(--nc-font-heading);
          color: var(--nc-color-heading);
        }

        .token-card__action {
          justify-self: start;
          padding: var(--nc-space-2) var(--nc-space-4);
          color: var(--nc-color-text-inverse);
          font-family: var(--nc-font-button);
          font-weight: var(--nc-font-weight-button);
          background: var(--nc-color-primary);
          border: 0;
          border-radius: var(--nc-radius-pill);
          cursor: pointer;
          transition: transform var(--nc-motion-fast) var(--nc-motion-easing-standard);
        }

        .token-card__action:hover {
          transform: translateY(-2px);
        }

        .token-card__action:focus-visible {
          outline: none;
          box-shadow: var(--nc-ring-focus);
        }

        .token-layers {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr) auto minmax(0, 1fr);
          gap: var(--space-3);
          align-items: center;
        }

        .token-layers > div {
          display: grid;
          gap: var(--space-2);
          min-width: 0;
        }

        .token-layers code {
          color: var(--color-state-focus-ring);
          overflow-wrap: anywhere;
        }

        .token-layers__arrow {
          color: var(--color-text-secondary);
          font-size: var(--font-size-xl);
        }

        @media (max-width: 48rem) {
          .token-layers {
            grid-template-columns: 1fr;
          }

          .token-layers__arrow {
            justify-self: center;
            transform: rotate(90deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .token-card__action {
            transition: none;
          }
        }
      `,
    ],
  }),
};
