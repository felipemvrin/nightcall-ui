import { type Meta, type StoryObj } from '@storybook/angular';
import { NcIconComponent, type NcIconName } from '@nightcall-ui/icons';
import {
  storyCodeLine,
  storyFullscreenMain,
  storyFullscreenSection,
  storyHeadingFoundation,
  storyHeadingSection,
  storyInlineWrap,
  storyList,
  storySurfaceCard,
  storyTextMuted,
} from './shared/story-styles';

type IconGroup = { label: string; icons: NcIconName[] };

const iconGroups: IconGroup[] = [
  {
    label: 'Music',
    icons: [
      'play',
      'pause',
      'stop',
      'skip-back',
      'skip-forward',
      'rewind',
      'fast-forward',
      'volume',
      'volume-1',
      'volume-2',
      'volume-x',
      'repeat',
      'shuffle',
      'music',
      'disc',
      'list-music',
    ],
  },
  {
    label: 'Navigation',
    icons: [
      'arrow-left',
      'arrow-right',
      'arrow-up',
      'arrow-down',
      'chevron-left',
      'chevron-right',
      'chevron-up',
      'chevron-down',
      'menu',
      'x',
      'plus',
      'minus',
    ],
  },
  {
    label: 'Actions',
    icons: [
      'search',
      'settings',
      'edit',
      'trash',
      'download',
      'upload',
      'external-link',
      'check',
      'check-circle',
      'info',
      'alert-circle',
      'alert-triangle',
      'help-circle',
    ],
  },
  {
    label: 'Interface',
    icons: [
      'home',
      'user',
      'users',
      'calendar',
      'clock',
      'heart',
      'star',
      'bookmark',
      'mail',
      'bell',
      'lock',
      'unlock',
      'eye',
      'eye-off',
    ],
  },
  {
    label: 'Developer',
    icons: [
      'code',
      'terminal',
      'package',
      'layers',
      'component',
      'palette',
      'settings-2',
      'braces',
      'git-branch',
    ],
  },
];

const meta: Meta = {
  title: 'Foundations/Icons',
  component: NcIconComponent,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

const storyShell = (content: string) => `
  <main style="${storyFullscreenMain()}">
    <section style="${storyFullscreenSection()}">${content}</section>
  </main>
`;

export const Overview: Story = {
  render: () => ({
    imports: [NcIconComponent],
    template: storyShell(`
      <h1 style="${storyHeadingFoundation}">Icons</h1>
      <p style="${storyTextMuted}">Nightcall UI uses Lucide as a clean, geometric SVG foundation. A typed Nightcall wrapper applies semantic size and color tokens while preserving a small, tree-shakable catalog.</p>
      <div style="${storyInlineWrap}; margin-block-start: var(--space-5); color: var(--nc-color-info);">
        <nc-icon name="disc" size="xl"></nc-icon>
        <nc-icon name="music" size="xl"></nc-icon>
        <nc-icon name="terminal" size="xl"></nc-icon>
        <nc-icon name="palette" size="xl"></nc-icon>
      </div>
    `),
  }),
};

export const IconSet: Story = {
  render: () => ({
    imports: [NcIconComponent],
    props: { iconGroups },
    template: storyShell(`
      <h1 style="${storyHeadingFoundation}">Icon Set</h1>
      <p style="${storyTextMuted}">The supported names form the stable Nightcall icon contract.</p>
      @for (group of iconGroups; track group.label) {
        <section style="margin-block-start: var(--space-6);">
          <h2 style="${storyHeadingSection}">{{ group.label }}</h2>
          <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr)); gap: var(--space-2);">
            @for (name of group.icons; track name) {
              <div style="${storySurfaceCard}; display:grid; place-items:center; gap:var(--space-2); min-block-size:6.5rem; text-align:center;">
                <nc-icon [name]="name" size="lg"></nc-icon>
                <code style="font-size:var(--font-size-xs); color:var(--nc-color-text-secondary);">{{ name }}</code>
              </div>
            }
          </div>
        </section>
      }
    `),
  }),
};

export const Sizes: Story = {
  render: () => ({
    imports: [NcIconComponent],
    template: storyShell(`
      <h1 style="${storyHeadingFoundation}">Sizes</h1>
      <div style="${storyInlineWrap}; align-items:end; margin-block-start:var(--space-5);">
        @for (size of ['xs', 'sm', 'md', 'lg', 'xl']; track size) {
          <div style="display:grid; justify-items:center; gap:var(--space-2);">
            <nc-icon name="music" [size]="$any(size)"></nc-icon><code>{{ size }}</code>
          </div>
        }
      </div>
    `),
  }),
};

export const Colors: Story = {
  render: () => ({
    imports: [NcIconComponent],
    template: storyShell(`
      <h1 style="${storyHeadingFoundation}">Colors</h1>
      <p style="${storyTextMuted}">Icon colors resolve through existing Nightcall semantic tokens.</p>
      <div style="${storyInlineWrap}; margin-block-start:var(--space-5);">
        @for (color of ['primary', 'secondary', 'info', 'text', 'disabled', 'danger', 'success']; track color) {
          <div style="display:grid; justify-items:center; gap:var(--space-2);">
            <nc-icon name="disc" size="lg" [color]="$any(color)"></nc-icon><code>{{ color }}</code>
          </div>
        }
      </div>
    `),
  }),
};

export const States: Story = {
  render: () => ({
    imports: [NcIconComponent],
    template: storyShell(`
      <h1 style="${storyHeadingFoundation}">States</h1>
      <p style="${storyTextMuted}">Interactive state belongs to the surrounding control; the SVG stays clean and inherits its presentation.</p>
      <div class="icon-state-grid">
        @for (state of ['Default', 'Hover', 'Active', 'Focus', 'Disabled', 'Selected']; track state) {
          <button type="button" class="icon-state" [class]="'icon-state icon-state--' + state.toLowerCase()" [disabled]="state === 'Disabled'">
            <nc-icon name="play"></nc-icon><span>{{ state }}</span>
          </button>
        }
      </div>
    `),
    styles: [
      `
      .icon-state-grid { display:flex; flex-wrap:wrap; gap:var(--space-3); margin-block-start:var(--space-5); }
      .icon-state { display:inline-flex; align-items:center; gap:var(--space-2); padding:var(--space-3); border:1px solid var(--nc-color-border); border-radius:var(--nc-radius-sm); background:var(--nc-color-surface); color:var(--nc-color-text); }
      .icon-state--hover { color:var(--nc-color-hover); }
      .icon-state--active { color:var(--nc-color-active); }
      .icon-state--focus { outline:2px solid var(--nc-color-focus); outline-offset:2px; }
      .icon-state--disabled { color:var(--nc-color-disabled); opacity:var(--nc-opacity-disabled); }
      .icon-state--selected { border-color:var(--nc-color-secondary); color:var(--nc-color-secondary); }
    `,
    ],
  }),
};

export const Accessibility: Story = {
  render: () => ({
    imports: [NcIconComponent],
    template: storyShell(`
      <h1 style="${storyHeadingFoundation}">Accessibility</h1>
      <ul style="${storyList}">
        <li>Decorative icons use <code>aria-hidden="true"</code>; label the surrounding control.</li>
        <li>Semantic icons set <code>[decorative]="false"</code> and provide <code>ariaLabel</code>.</li>
        <li>Meaning must never depend on shape or color alone.</li>
      </ul>
      <div style="${storyInlineWrap}; margin-block-start:var(--space-5);">
        <button type="button" aria-label="Play"><nc-icon name="play"></nc-icon></button>
        <nc-icon name="alert-triangle" color="danger" [decorative]="false" ariaLabel="Connection warning"></nc-icon>
      </div>
    `),
  }),
};

export const Usage: Story = {
  render: () => ({
    imports: [NcIconComponent],
    template: storyShell(`
      <h1 style="${storyHeadingFoundation}">Usage</h1>
      <div style="${storySurfaceCard}; display:grid; gap:var(--space-2); margin-block-start:var(--space-5);">
        <code style="${storyCodeLine}">&lt;nc-icon name="play" size="md" /&gt;</code>
        <code style="${storyCodeLine}">&lt;button aria-label="Play"&gt;&lt;nc-icon name="play" /&gt;&lt;/button&gt;</code>
        <code style="${storyCodeLine}">&lt;nc-icon name="info" [decorative]="false" ariaLabel="Information" /&gt;</code>
      </div>
    `),
  }),
};

export const SizesWithStyles: Story = {
  render: () => ({
    template: `
      <main style="${storyFullscreenMain()}">
        <section style="${storyFullscreenSection()}">
          <h1 style="${storyHeadingFoundation}">Sizes with Styles</h1>
          <p style="${storyTextMuted}">The supported names form the stable Nightcall icon contract.</p>
          @for (group of iconGroups; track group.label) {
            <section style="margin-block-start: var(--space-6);">
              <h2 style="${storyHeadingSection}">{{ group.label }}</h2>
              <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr)); gap: var(--space-2);">
                @for (name of group.icons; track name) {
                  <div style="${storySurfaceCard}; display:grid; place-items:center; gap:var(--space-2); min-block-size:6.5rem; text-align:center;">
                    <nc-icon [name]="name" size="lg"></nc-icon>
                    <code style="font-size:var(--font-size-xs); color:var(--nc-color-text-secondary);">{{ name }}</code>
                  </div>
                }
              </div>
            </section>
          }
        </section>
      </main>
    `,
    styles: [
      `
      .token-card {
        display: grid;
        /* ... */
      }

      @media (max-width: 48rem) {
        .token-layers {
          grid-template-columns: 1fr;
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
