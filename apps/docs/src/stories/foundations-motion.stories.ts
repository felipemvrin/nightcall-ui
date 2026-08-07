import type { Meta, StoryObj } from '@storybook/angular';
import {
  storyDemoFrame,
  storyFullscreenMain,
  storyFullscreenSection,
  storyHeadingFoundation,
  storyTextMuted,
} from './shared/story-styles';

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
      <main style="${storyFullscreenMain()}">
        <section style="${storyFullscreenSection()}">
          <h1 style="${storyHeadingFoundation}">Motion</h1>
          <p style="${storyTextMuted}">Use core duration tokens (fast, normal, slow) with the standard easing curve for consistent interaction rhythm.</p>
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr)); gap: var(--space-3);">
            <article style="${storyDemoFrame}">
              <div aria-hidden="true" style="inline-size:100%; block-size:3rem; border-radius: var(--radius-sm); background: var(--color-accent-primary); box-shadow: var(--shadow-glow-pink); animation: pulseFast var(--motion-duration-fast) var(--motion-easing-standard) infinite alternate;"></div>
              <p style="${storyTextMuted}">Duration Fast · var(--motion-duration-fast)</p>
            </article>
            <article style="${storyDemoFrame}">
              <div aria-hidden="true" style="inline-size:100%; block-size:3rem; border-radius: var(--radius-sm); background: var(--color-accent-secondary); box-shadow: var(--shadow-glow-cyan); animation: pulseNormal var(--motion-duration-normal) var(--motion-easing-standard) infinite alternate;"></div>
              <p style="${storyTextMuted}">Duration Normal · var(--motion-duration-normal)</p>
            </article>
            <article style="${storyDemoFrame}">
              <div aria-hidden="true" style="inline-size:100%; block-size:3rem; border-radius: var(--radius-sm); background: var(--color-state-focus-ring); box-shadow: var(--shadow-glow-cyan); animation: pulseSlow var(--motion-duration-slow) var(--motion-easing-standard) infinite alternate;"></div>
              <p style="${storyTextMuted}">Duration Slow · var(--motion-duration-slow)</p>
            </article>
          </div>
        </section>
      </main>
      <style>
        @keyframes pulseFast { from { transform: scale(0.98); } to { transform: scale(1.02); } }
        @keyframes pulseNormal { from { transform: translateY(0); } to { transform: translateY(-2px); } }
        @keyframes pulseSlow { from { filter: brightness(0.92); } to { filter: brightness(1.08); } }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0ms !important;
          }
        }
      </style>
    `,
  }),
};
