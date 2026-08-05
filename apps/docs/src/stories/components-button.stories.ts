import { type Meta, type StoryObj } from '@storybook/angular';
import {
  NcButtonComponent,
  type NcButtonSize,
  type NcButtonVariant,
} from '@nightcall-ui/components';

type IconPosition = 'none' | 'start' | 'end';

type ButtonStoryArgs = {
  variant: NcButtonVariant;
  size: NcButtonSize;
  disabled: boolean;
  loading: boolean;
  fullWidth: boolean;
  iconOnly: boolean;
  icon: IconPosition;
  label: string;
};

const iconTemplate = `
<svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true" focusable="false">
  <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
</svg>
`;

const meta: Meta<ButtonStoryArgs> = {
  title: 'Components/Button',
  component: NcButtonComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Overview
Retro-futuristic action button for dark surfaces in Nightcall UI. It is token-driven, keyboard accessible, and designed for high-contrast neon contexts.

# Variants
- Primary: premium synthwave gradient with neon glow.
- Secondary: vivid alternative emphasis.
- Outline: lower emphasis with clear contour.
- Ghost: minimum visual weight for tertiary actions.

# States
- Default: baseline elevation and contrast.
- Hover: cyan accent and slightly stronger glow.
- Focus: visible focus ring (not glow-only).
- Active: darker press state and reduced glow.
- Disabled: lower opacity, no glow.
- Loading: interaction locked and busy feedback.

# Sizes
- Small, Medium, Large.

# Icons
- Leading icon.
- Trailing icon.
- Icon-only (requires ariaLabel).

# Accessibility
- Native button semantics.
- Keyboard support via native <button> behavior.
- Focus-visible ring for WCAG-compliant keyboard indication.
- Disabled uses native disabled attribute.

# Design Tokens
- Color: --color-accent-primary, --color-accent-secondary, --color-state-focus-ring, --color-text-primary.
- Radius: --radius-lg, --radius-pill.
- Shadow: --shadow-glow-pink, --shadow-glow-cyan, --elevation-shadow-*.
- Motion: --motion-duration-fast, --motion-duration-normal, --motion-duration-slow, --motion-easing-standard.
- Typography: button family via --font-family-button (Rajdhani), plus --font-size-* and --font-letter-spacing-wide.

# Best Practices
- Use Primary for one key action per section.
- Prefer Outline/Ghost for secondary actions.
- Keep label concise and action-oriented.
- Do not use icon-only buttons without an accessible label.
        `.trim(),
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    fullWidth: false,
    iconOnly: false,
    icon: 'none',
    label: 'Button',
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    icon: {
      control: 'inline-radio',
      options: ['none', 'start', 'end'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    iconOnly: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<ButtonStoryArgs>;

const docsPanelStyle =
  'display: grid; gap: var(--space-3); width: min(56rem, 92vw); padding: var(--space-5); border-radius: var(--radius-lg); border: 1px solid var(--color-border-subtle); background: color-mix(in srgb, var(--color-background-surface) 92%, transparent);';

const docsTitleStyle =
  'margin: 0; font-family: var(--font-family-heading); font-size: var(--font-size-xl); line-height: var(--font-line-height-snug); color: var(--color-text-primary);';

const docsBodyStyle =
  'margin: 0; font: var(--font-weight-regular) var(--font-size-md)/var(--font-line-height-normal) var(--font-family-body); color: var(--color-text-secondary);';

function buildButtonTemplate(width = 'auto'): string {
  return `
    <div style="width: ${width}; display: grid; gap: var(--space-3);">
      <nc-button
        [variant]="variant"
        [size]="size"
        [disabled]="disabled"
        [loading]="loading"
        [fullWidth]="fullWidth"
        [iconOnly]="iconOnly"
        [ariaLabel]="iconOnly ? label : null"
      >
        @if (icon === 'start') {
          <span ncButtonIconStart>${iconTemplate}</span>
        }

        @if (!iconOnly) {
          {{ label }}
        }

        @if (icon === 'end') {
          <span ncButtonIconEnd>${iconTemplate}</span>
        }

        @if (iconOnly) {
          <span style="position: absolute; inline-size: 1px; block-size: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap;">{{ label }}</span>
        }
      </nc-button>
    </div>
  `;
}

export const Overview: Story = {
  name: 'Overview',
  parameters: {
    controls: { disable: true },
  },
  render: () => ({
    template: `
      <section style="${docsPanelStyle}">
        <h2 style="${docsTitleStyle}">Button Overview</h2>
        <p style="${docsBodyStyle}">
          Nightcall Button is the main action control for dark UI surfaces, designed with neon depth and semantic tokens for scalable theming.
        </p>
        <div style="display: flex; gap: var(--space-3); flex-wrap: wrap;">
          <nc-button variant="primary">Primary Action</nc-button>
          <nc-button variant="outline">Secondary Action</nc-button>
        </div>
      </section>
    `,
  }),
};

export const Playground: Story = {
  name: 'Playground',
  render: (args) => ({
    props: args,
    template: buildButtonTemplate('min(24rem, 90vw)'),
  }),
};

export const Variants: Story = {
  name: 'Variants',
  parameters: {
    controls: { disable: true },
  },
  render: () => ({
    template: `
      <div style="display: grid; gap: var(--space-4); width: min(52rem, 92vw);">
        <div style="display: flex; flex-wrap: wrap; gap: var(--space-3);">
          <nc-button variant="primary">Primary</nc-button>
          <nc-button variant="secondary">Secondary</nc-button>
          <nc-button variant="outline">Outline</nc-button>
          <nc-button variant="ghost">Ghost</nc-button>
        </div>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  name: 'Sizes',
  parameters: {
    controls: { disable: true },
  },
  render: () => ({
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: var(--space-3); align-items: center;">
        <nc-button size="sm">Small</nc-button>
        <nc-button size="md">Medium</nc-button>
        <nc-button size="lg">Large</nc-button>
      </div>
    `,
  }),
};

export const States: Story = {
  name: 'States',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Hover and active are interactive. Use keyboard Tab on the focused button to inspect the focus-visible ring.',
      },
    },
  },
  render: () => ({
    template: `
      <div style="display: grid; gap: var(--space-4); width: min(56rem, 92vw);">
        <div style="display: flex; flex-wrap: wrap; gap: var(--space-3); align-items: center;">
          <nc-button variant="primary">Default</nc-button>
          <nc-button variant="primary" [loading]="true">Loading</nc-button>
          <nc-button variant="primary" [disabled]="true">Disabled</nc-button>
        </div>
        <p style="margin: 0; font: var(--font-weight-regular) var(--font-size-sm)/var(--font-line-height-normal) var(--font-family-body); color: var(--color-text-secondary);">
          Focus test: click inside the canvas and press Tab until a button is focused.
        </p>
      </div>
    `,
  }),
};

export const Icons: Story = {
  name: 'With Icons',
  parameters: {
    controls: { disable: true },
  },
  render: () => ({
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: var(--space-3); align-items: center;">
        <nc-button>
          <span ncButtonIconStart>${iconTemplate}</span>
          Leading Icon
        </nc-button>

        <nc-button variant="secondary">
          Trailing Icon
          <span ncButtonIconEnd>${iconTemplate}</span>
        </nc-button>

        <nc-button variant="outline" [iconOnly]="true" ariaLabel="Open details">
          <span ncButtonIconStart>${iconTemplate}</span>
          <span style="position: absolute; inline-size: 1px; block-size: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap;">Open details</span>
        </nc-button>
      </div>
    `,
  }),
};

export const Accessibility: Story = {
  name: 'Accessibility',
  parameters: {
    controls: { disable: true },
  },
  render: () => ({
    template: `
      <section style="${docsPanelStyle}">
        <h2 style="${docsTitleStyle}">Accessibility</h2>
        <p style="${docsBodyStyle}">
          The component uses native button semantics and keyboard behavior. Focus visibility uses a dedicated tokenized ring and does not rely only on glow.
        </p>
        <ul style="margin: 0; padding-inline-start: var(--space-5); color: var(--color-text-secondary); font-family: var(--font-family-body); font-size: var(--font-size-sm); line-height: var(--font-line-height-normal);">
          <li>Tab moves focus to the button.</li>
          <li>Enter and Space trigger the action.</li>
          <li>Disabled state uses the native disabled attribute.</li>
          <li>Icon-only buttons require ariaLabel.</li>
        </ul>
      </section>
    `,
  }),
};

export const DesignTokens: Story = {
  name: 'Design Tokens',
  parameters: {
    controls: { disable: true },
  },
  render: () => ({
    template: `
      <section style="${docsPanelStyle}">
        <h2 style="${docsTitleStyle}">Design Tokens</h2>
        <div style="display: grid; gap: var(--space-2);">
          <p style="${docsBodyStyle}"><strong style="color: var(--color-text-primary);">Color:</strong> --color-accent-primary, --color-accent-secondary, --color-state-focus-ring, --color-text-primary.</p>
          <p style="${docsBodyStyle}"><strong style="color: var(--color-text-primary);">Radius:</strong> --radius-lg, --radius-pill.</p>
          <p style="${docsBodyStyle}"><strong style="color: var(--color-text-primary);">Shadow:</strong> --shadow-glow-pink, --shadow-glow-cyan, --elevation-shadow-1, --elevation-shadow-2.</p>
          <p style="${docsBodyStyle}"><strong style="color: var(--color-text-primary);">Motion:</strong> --motion-duration-fast, --motion-duration-normal, --motion-duration-slow, --motion-easing-standard.</p>
          <p style="${docsBodyStyle}"><strong style="color: var(--color-text-primary);">Typography:</strong> button family via --font-family-button (Rajdhani), plus --font-size-sm, --font-size-md, --font-size-lg and --font-letter-spacing-wide.</p>
        </div>
      </section>
    `,
  }),
};

export const BestPractices: Story = {
  name: 'Best Practices',
  parameters: {
    controls: { disable: true },
  },
  render: () => ({
    template: `
      <section style="${docsPanelStyle}">
        <h2 style="${docsTitleStyle}">Best Practices</h2>
        <ul style="margin: 0; padding-inline-start: var(--space-5); color: var(--color-text-secondary); font-family: var(--font-family-body); font-size: var(--font-size-sm); line-height: var(--font-line-height-normal);">
          <li>Use Primary for the single most important action in a section.</li>
          <li>Use Outline or Ghost for supporting actions.</li>
          <li>Keep labels short and specific.</li>
          <li>Avoid multiple glowing primary buttons competing in the same area.</li>
        </ul>
      </section>
    `,
  }),
};
