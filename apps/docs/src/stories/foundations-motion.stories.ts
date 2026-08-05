import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Foundations/Motion',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

export const MotionTokens: Story = {
  render: () => ({
    template: `
      <main style="min-height:100vh; background: var(--color-background-canvas); padding: var(--space-8); color: var(--color-text-primary); font-family: var(--font-family-body);">
        <section style="max-width:72rem; margin:0 auto; display:grid; gap: var(--space-4);">
          <h1 style="margin:0; font-family: var(--font-family-heading); color: var(--color-text-heading);">Motion</h1>
          <p style="margin:0; color: var(--color-text-secondary);">Core durations: fast, normal and slow. Core easing: standard.</p>
          <div style="display:flex; gap: var(--space-3); flex-wrap:wrap;">
            <div style="inline-size:8rem; block-size:3rem; border-radius: var(--radius-sm); background: var(--color-accent-primary); box-shadow: var(--shadow-glow-pink); animation: pulseFast var(--motion-duration-fast) var(--motion-easing-standard) infinite alternate;"></div>
            <div style="inline-size:8rem; block-size:3rem; border-radius: var(--radius-sm); background: var(--color-accent-secondary); box-shadow: var(--shadow-glow-cyan); animation: pulseNormal var(--motion-duration-normal) var(--motion-easing-standard) infinite alternate;"></div>
            <div style="inline-size:8rem; block-size:3rem; border-radius: var(--radius-sm); background: var(--color-state-focus-ring); box-shadow: var(--shadow-glow-cyan); animation: pulseSlow var(--motion-duration-slow) var(--motion-easing-standard) infinite alternate;"></div>
          </div>
        </section>
      </main>
      <style>
        @keyframes pulseFast { from { transform: scale(0.98); } to { transform: scale(1.02); } }
        @keyframes pulseNormal { from { transform: translateY(0); } to { transform: translateY(-2px); } }
        @keyframes pulseSlow { from { filter: brightness(0.92); } to { filter: brightness(1.08); } }
      </style>
    `,
  }),
};
