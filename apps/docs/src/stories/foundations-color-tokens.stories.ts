import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Foundations/Color Tokens',
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
      <main style="min-height: 100vh; background: var(--color-background-canvas, #060112); color: var(--color-text-primary, #f8f8ff); padding: 2rem; font-family: var(--nc-font-body, Inter, sans-serif);">
        <section style="max-width: 80rem; margin: 0 auto; display: grid; gap: 2rem;">
          <header>
            <p style="margin: 0 0 .5rem; letter-spacing: .12em; text-transform: uppercase; font-size: .75rem; color: var(--color-text-secondary, #a1a2d1);">Nightcall UI</p>
            <h1 style="margin: 0; font-family: var(--nc-font-heading, Michroma, sans-serif); font-size: var(--nc-font-size-h1, 3rem); line-height: 1; color: var(--nc-color-heading, #fb15cc);">
              Color Tokens
            </h1>
          </header>

          <section>
            <h2 style="margin: 0 0 1rem; font-size: 1.125rem; color: var(--color-text-secondary, #a1a2d1);">Semantic</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem;">
              <article style="border: 1px solid var(--color-border-subtle, #2a184d); border-radius: .75rem; overflow: hidden; background: var(--color-background-surface, #0d0221);">
                <div style="height: 72px; background: var(--color-background-canvas);"></div>
                <div style="padding: .75rem; font-size: .8125rem;">--color-background-canvas</div>
              </article>
              <article style="border: 1px solid var(--color-border-subtle, #2a184d); border-radius: .75rem; overflow: hidden; background: var(--color-background-surface, #0d0221);">
                <div style="height: 72px; background: var(--color-background-surface);"></div>
                <div style="padding: .75rem; font-size: .8125rem;">--color-background-surface</div>
              </article>
              <article style="border: 1px solid var(--color-border-subtle, #2a184d); border-radius: .75rem; overflow: hidden; background: var(--color-background-surface, #0d0221);">
                <div style="height: 72px; background: var(--color-accent-primary);"></div>
                <div style="padding: .75rem; font-size: .8125rem;">--color-accent-primary</div>
              </article>
              <article style="border: 1px solid var(--color-border-subtle, #2a184d); border-radius: .75rem; overflow: hidden; background: var(--color-background-surface, #0d0221);">
                <div style="height: 72px; background: var(--color-accent-secondary);"></div>
                <div style="padding: .75rem; font-size: .8125rem;">--color-accent-secondary</div>
              </article>
              <article style="border: 1px solid var(--color-border-subtle, #2a184d); border-radius: .75rem; overflow: hidden; background: var(--color-background-surface, #0d0221);">
                <div style="height: 72px; background: var(--color-state-success);"></div>
                <div style="padding: .75rem; font-size: .8125rem;">--color-state-success</div>
              </article>
              <article style="border: 1px solid var(--color-border-subtle, #2a184d); border-radius: .75rem; overflow: hidden; background: var(--color-background-surface, #0d0221);">
                <div style="height: 72px; background: var(--color-state-warning);"></div>
                <div style="padding: .75rem; font-size: .8125rem;">--color-state-warning</div>
              </article>
              <article style="border: 1px solid var(--color-border-subtle, #2a184d); border-radius: .75rem; overflow: hidden; background: var(--color-background-surface, #0d0221);">
                <div style="height: 72px; background: var(--color-state-danger);"></div>
                <div style="padding: .75rem; font-size: .8125rem;">--color-state-danger</div>
              </article>
            </div>
          </section>

          <section>
            <h2 style="margin: 0 0 1rem; font-size: 1.125rem; color: var(--color-text-secondary, #a1a2d1);">Primitive</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem;">
              <article style="border: 1px solid var(--color-border-subtle, #2a184d); border-radius: .75rem; overflow: hidden; background: var(--color-background-surface, #0d0221);">
                <div style="height: 72px; background: var(--color-primitive-pink-400);"></div>
                <div style="padding: .75rem; font-size: .8125rem;">--color-primitive-pink-400</div>
              </article>
              <article style="border: 1px solid var(--color-border-subtle, #2a184d); border-radius: .75rem; overflow: hidden; background: var(--color-background-surface, #0d0221);">
                <div style="height: 72px; background: var(--color-primitive-cyan-400);"></div>
                <div style="padding: .75rem; font-size: .8125rem;">--color-primitive-cyan-400</div>
              </article>
              <article style="border: 1px solid var(--color-border-subtle, #2a184d); border-radius: .75rem; overflow: hidden; background: var(--color-background-surface, #0d0221);">
                <div style="height: 72px; background: var(--color-primitive-violet-500);"></div>
                <div style="padding: .75rem; font-size: .8125rem;">--color-primitive-violet-500</div>
              </article>
              <article style="border: 1px solid var(--color-border-subtle, #2a184d); border-radius: .75rem; overflow: hidden; background: var(--color-background-surface, #0d0221);">
                <div style="height: 72px; background: var(--color-primitive-amber-400);"></div>
                <div style="padding: .75rem; font-size: .8125rem;">--color-primitive-amber-400</div>
              </article>
              <article style="border: 1px solid var(--color-border-subtle, #2a184d); border-radius: .75rem; overflow: hidden; background: var(--color-background-surface, #0d0221);">
                <div style="height: 72px; background: var(--color-primitive-mint-400);"></div>
                <div style="padding: .75rem; font-size: .8125rem;">--color-primitive-mint-400</div>
              </article>
            </div>
          </section>
        </section>
      </main>
    `,
  }),
};
