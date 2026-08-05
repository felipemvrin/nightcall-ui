import type { Meta, StoryObj } from '@storybook/angular';
import { NcInputComponent, type NcInputState, type NcInputVariant } from '@nightcall-ui/components';

type InputStoryArgs = {
  variant: NcInputVariant;
  state: NcInputState;
  label: string;
  placeholder: string;
  helperText: string;
  validationMessage: string;
  value: string;
  disabled: boolean;
  readonly: boolean;
  required: boolean;
};

const panelStyle =
  'display: grid; gap: var(--space-3); width: min(42rem, 92vw); padding: var(--space-5); border-radius: var(--radius-lg); border: 1px solid var(--color-border-subtle); background: color-mix(in srgb, var(--color-background-surface) 92%, transparent);';

const bodyStyle =
  'margin: 0; color: var(--color-text-secondary); font: var(--font-weight-regular) var(--font-size-sm)/var(--font-line-height-normal) var(--font-family-body);';

const meta: Meta<InputStoryArgs> = {
  title: 'Components/Input',
  component: NcInputComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Text input for forms with Rajdhani typography, tokenized neon states, helper text and validation support.',
      },
    },
  },
  args: {
    variant: 'default',
    state: 'default',
    label: 'Username',
    placeholder: 'Type your username',
    helperText: 'Use 4 to 24 characters.',
    validationMessage: 'Username is required.',
    value: '',
    disabled: false,
    readonly: false,
    required: false,
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'filled', 'outline'] },
    state: { control: 'inline-radio', options: ['default', 'error', 'success'] },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    validationMessage: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    required: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<InputStoryArgs>;

export const Overview: Story = {
  render: () => ({
    template: `
      <section style="${panelStyle}">
        <h2 style="margin: 0; color: var(--color-text-primary); font-family: var(--font-family-heading);">Input Overview</h2>
        <p style="${bodyStyle}">Use for short, single-line textual data with clear labels and validation feedback.</p>
        <nc-input label="Email" placeholder="name@nightcall.dev" helperText="We never share your email"></nc-input>
      </section>
    `,
  }),
};

export const Playground: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="width: min(36rem, 92vw);">
        <nc-input
          [variant]="variant"
          [state]="state"
          [label]="label"
          [placeholder]="placeholder"
          [helperText]="helperText"
          [validationMessage]="validationMessage"
          [value]="value"
          [disabled]="disabled"
          [readonly]="readonly"
          [required]="required"
          (valueChange)="value = $event"
        >
          <span ncInputPrefix aria-hidden="true">⌁</span>
          <span ncInputSuffix aria-hidden="true">⚡</span>
        </nc-input>
      </div>
    `,
  }),
};

export const Variants: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template: `
      <div style="display: grid; gap: var(--space-3); width: min(42rem, 92vw);">
        <nc-input variant="default" label="Default" placeholder="Default variant"></nc-input>
        <nc-input variant="filled" label="Filled" placeholder="Filled variant"></nc-input>
        <nc-input variant="outline" label="Outline" placeholder="Outline variant"></nc-input>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template:
      '<p style="margin:0; color: var(--color-text-secondary); font-family: var(--font-family-body);">Input uses a single canonical control height to preserve form rhythm across the system.</p>',
  }),
};

export const States: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template: `
      <div style="display: grid; gap: var(--space-3); width: min(42rem, 92vw);">
        <nc-input label="Default" placeholder="Default state" helperText="Helper text"></nc-input>
        <nc-input label="Success" state="success" helperText="Looks good" validationMessage="Field is valid"></nc-input>
        <nc-input label="Error" state="error" helperText="Please review" validationMessage="This field is required"></nc-input>
        <nc-input label="Readonly" [readonly]="true" value="nightcall-1986"></nc-input>
        <nc-input label="Disabled" [disabled]="true" value="disabled value"></nc-input>
      </div>
    `,
  }),
};

export const Accessibility: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template: `
      <section style="${panelStyle}">
        <h2 style="margin: 0; color: var(--color-text-primary); font-family: var(--font-family-heading);">Accessibility</h2>
        <ul style="margin: 0; padding-inline-start: var(--space-5); color: var(--color-text-secondary); font-family: var(--font-family-body);">
          <li>Native input semantics with associated label.</li>
          <li>Error state sets aria-invalid.</li>
          <li>Helper text is connected with aria-describedby.</li>
          <li>Keyboard and screen reader behavior remain native.</li>
        </ul>
      </section>
    `,
  }),
};

export const DesignTokens: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template: `
      <section style="${panelStyle}">
        <h2 style="margin: 0; color: var(--color-text-primary); font-family: var(--font-family-heading);">Design Tokens</h2>
        <p style="${bodyStyle}">Consumes color, motion, radius, shadow, spacing and typography tokens, including Rajdhani via --font-family-button.</p>
      </section>
    `,
  }),
};

export const BestPractices: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template: `
      <section style="${panelStyle}">
        <h2 style="margin:0; color: var(--color-text-primary); font-family: var(--font-family-heading);">Best Practices</h2>
        <p style="${bodyStyle}"><strong style="color: var(--color-text-primary);">Do:</strong> keep labels explicit and show helper text before errors happen.</p>
        <p style="${bodyStyle}"><strong style="color: var(--color-text-primary);">Don't:</strong> rely on placeholder as the only label or hide validation context.</p>
      </section>
    `,
  }),
};
