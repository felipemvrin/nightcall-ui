import type { Meta, StoryObj } from '@storybook/angular';
import { NcRadioGroupComponent } from '@nightcall-ui/components';

type RadioStoryArgs = {
  label: string;
  helperText: string;
  value: string;
  disabled: boolean;
  error: boolean;
};

const options = [
  { value: 'classic', label: 'Classic Neon' },
  { value: 'modern', label: 'Modern Grid' },
  { value: 'minimal', label: 'Minimal Dark', disabled: true },
];

const meta: Meta<RadioStoryArgs> = {
  title: 'Components/Radio',
  component: NcRadioGroupComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    label: 'Theme mode',
    helperText: 'Select one style preset.',
    value: 'classic',
    disabled: false,
    error: false,
  },
  argTypes: {
    label: { control: 'text' },
    helperText: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<RadioStoryArgs>;

export const Overview: Story = {
  render: () => ({
    props: { options },
    template:
      '<nc-radio-group label="Playback mode" helperText="Choose one option" [options]="options" value="classic"></nc-radio-group>',
  }),
};

export const Playground: Story = {
  render: (args) => ({
    props: { ...args, options },
    template: `
      <nc-radio-group
        [label]="label"
        [helperText]="helperText"
        [options]="options"
        [value]="value"
        [disabled]="disabled"
        [error]="error"
        (valueChange)="value = $event"
      ></nc-radio-group>
    `,
  }),
};

export const Variants: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template:
      '<p style="margin:0; color: var(--color-text-secondary); font-family: var(--font-family-body);">Radio uses a single variant for instant recognizability and consistent group semantics.</p>',
  }),
};

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template:
      '<p style="margin:0; color: var(--color-text-secondary); font-family: var(--font-family-body);">Radio keeps one ergonomic size to align with Checkbox and Input controls.</p>',
  }),
};

export const States: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    props: { options },
    template: `
      <div style="display:grid; gap: var(--space-3); width:min(36rem,92vw);">
        <nc-radio-group label="Default" [options]="options" value="classic"></nc-radio-group>
        <nc-radio-group label="Validation" [options]="options" [error]="true" helperText="Select one required mode"></nc-radio-group>
        <nc-radio-group label="Disabled" [options]="options" [disabled]="true" value="modern"></nc-radio-group>
      </div>
    `,
  }),
};

export const Accessibility: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template: `
      <ul style="margin:0; padding-inline-start: var(--space-5); color: var(--color-text-secondary); font-family: var(--font-family-body); width:min(36rem,92vw);">
        <li>Uses fieldset and legend for group context.</li>
        <li>Native radio keyboard behavior is preserved.</li>
        <li>Error state exposed with aria-invalid on the group.</li>
      </ul>
    `,
  }),
};

export const DesignTokens: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template:
      '<p style="margin:0; color: var(--color-text-secondary); font-family: var(--font-family-body); width:min(36rem,92vw);">Consumes focus-ring, accent, border, glow-shadow and Rajdhani typography tokens.</p>',
  }),
};

export const BestPractices: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template: `
      <div style="display:grid; gap: var(--space-2); width:min(36rem,92vw); color: var(--color-text-secondary); font-family: var(--font-family-body);">
        <p style="margin:0;"><strong style="color:var(--color-text-primary);">Do:</strong> use radios for exclusive choices only.</p>
        <p style="margin:0;"><strong style="color:var(--color-text-primary);">Don't:</strong> mix independent toggles in a radio group.</p>
      </div>
    `,
  }),
};
