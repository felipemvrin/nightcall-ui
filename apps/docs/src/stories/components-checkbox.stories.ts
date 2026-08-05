import type { Meta, StoryObj } from '@storybook/angular';
import { NcCheckboxComponent } from '@nightcall-ui/components';

type CheckboxStoryArgs = {
  label: string;
  helperText: string;
  checked: boolean;
  indeterminate: boolean;
  disabled: boolean;
  error: boolean;
};

const meta: Meta<CheckboxStoryArgs> = {
  title: 'Components/Checkbox',
  component: NcCheckboxComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    label: 'Enable neon trails',
    helperText: 'Controls retro visual effects.',
    checked: false,
    indeterminate: false,
    disabled: false,
    error: false,
  },
  argTypes: {
    label: { control: 'text' },
    helperText: { control: 'text' },
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<CheckboxStoryArgs>;

export const Overview: Story = {
  render: () => ({
    template:
      '<nc-checkbox label="Save my preferences" helperText="Persistent user setting"></nc-checkbox>',
  }),
};

export const Playground: Story = {
  render: (args) => ({
    props: args,
    template: `
      <nc-checkbox
        [label]="label"
        [helperText]="helperText"
        [checked]="checked"
        [indeterminate]="indeterminate"
        [disabled]="disabled"
        [error]="error"
        (checkedChange)="checked = $event"
      ></nc-checkbox>
    `,
  }),
};

export const Variants: Story = {
  name: 'Variants',
  parameters: { controls: { disable: true } },
  render: () => ({
    template:
      '<p style="margin:0; color: var(--color-text-secondary); font-family: var(--font-family-body);">Checkbox has a single visual variant to protect recognition and accessibility.</p>',
  }),
};

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template:
      '<p style="margin:0; color: var(--color-text-secondary); font-family: var(--font-family-body);">One canonical size keeps touch targets consistent in forms.</p>',
  }),
};

export const States: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template: `
      <div style="display:grid; gap: var(--space-3);">
        <nc-checkbox label="Unchecked"></nc-checkbox>
        <nc-checkbox label="Checked" [checked]="true"></nc-checkbox>
        <nc-checkbox label="Indeterminate" [indeterminate]="true"></nc-checkbox>
        <nc-checkbox label="Error" [error]="true" helperText="Required setting"></nc-checkbox>
        <nc-checkbox label="Disabled" [disabled]="true" [checked]="true"></nc-checkbox>
      </div>
    `,
  }),
};

export const Accessibility: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template: `
      <ul style="margin:0; padding-inline-start: var(--space-5); color: var(--color-text-secondary); font-family: var(--font-family-body); width:min(36rem,92vw);">
        <li>Native checkbox element is preserved for assistive tech.</li>
        <li>Supports keyboard toggle with Space.</li>
        <li>Error state uses aria-invalid.</li>
      </ul>
    `,
  }),
};

export const DesignTokens: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template:
      '<p style="margin:0; color: var(--color-text-secondary); font-family: var(--font-family-body); width:min(36rem,92vw);">Consumes border, accent, focus-ring, glow-shadow and Rajdhani typography tokens.</p>',
  }),
};

export const BestPractices: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template: `
      <div style="display:grid; gap: var(--space-2); width:min(36rem,92vw); color: var(--color-text-secondary); font-family: var(--font-family-body);">
        <p style="margin:0;"><strong style="color:var(--color-text-primary);">Do:</strong> pair each checkbox with a clear action label.</p>
        <p style="margin:0;"><strong style="color:var(--color-text-primary);">Don't:</strong> use checkbox for mutually-exclusive selections.</p>
      </div>
    `,
  }),
};
