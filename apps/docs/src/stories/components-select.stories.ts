import type { Meta, StoryObj } from '@storybook/angular';
import {
  NcSelectComponent,
  type NcSelectOption,
  type NcSelectState,
  type NcSelectVariant,
} from '@nightcall-ui/components';
import {
  storyDoDont,
  storyList,
  storyStack,
  storyStrong,
  storyTextMuted,
} from './shared/story-styles';

type SelectStoryArgs = {
  variant: NcSelectVariant;
  state: NcSelectState;
  label: string;
  placeholder: string;
  helperText: string;
  validationMessage: string;
  value: string;
  disabled: boolean;
};

const options: NcSelectOption[] = [
  { value: 'outrun', label: 'Outrun' },
  { value: 'synthpop', label: 'Synthpop' },
  { value: 'darksynth', label: 'Darksynth', disabled: true },
];

const meta: Meta<SelectStoryArgs> = {
  title: 'Components/Select',
  component: NcSelectComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    variant: 'default',
    state: 'default',
    label: 'Genre',
    placeholder: 'Select genre',
    helperText: 'Choose your favorite synthwave style.',
    validationMessage: 'Selection required.',
    value: '',
    disabled: false,
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
  },
};

export default meta;
type Story = StoryObj<SelectStoryArgs>;

export const Overview: Story = {
  render: () => ({
    props: { options },
    template: `
      <div style="display:grid; gap: var(--space-3); width:min(36rem,92vw);">
        <p style="${storyTextMuted}">Select offers native semantics with Nightcall visual treatment and grouped options support.</p>
        <nc-select label="Genre" helperText="Native select for keyboard and screen readers" [options]="options"></nc-select>
      </div>
    `,
  }),
};

export const Playground: Story = {
  render: (args) => ({
    props: { ...args, options },
    template: `
      <div style="${storyStack('min(36rem,92vw)')}">
        <nc-select
          [variant]="variant"
          [state]="state"
          [label]="label"
          [placeholder]="placeholder"
          [helperText]="helperText"
          [validationMessage]="validationMessage"
          [value]="value"
          [disabled]="disabled"
          [options]="options"
          (valueChange)="value = $event"
        ></nc-select>
      </div>
    `,
  }),
};

export const Variants: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    props: { options },
    template: `
      <div style="${storyStack('min(36rem,92vw)')}">
        <nc-select variant="default" label="Default" [options]="options"></nc-select>
        <nc-select variant="filled" label="Filled" [options]="options"></nc-select>
        <nc-select variant="outline" label="Outline" [options]="options"></nc-select>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template:
      '<p style="' +
      storyTextMuted +
      '">Select uses a single height to align with Input and preserve predictable form rhythm.</p>',
  }),
};

export const States: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    props: {
      options,
      groups: [
        {
          label: 'Classic',
          options: [
            { value: 'night-drive', label: 'Night Drive' },
            { value: 'arcade-rush', label: 'Arcade Rush' },
          ],
        },
        {
          label: 'Modern',
          options: [
            { value: 'hyperwave', label: 'Hyperwave' },
            { value: 'neon-grid', label: 'Neon Grid', disabled: true },
          ],
        },
      ],
    },
    template: `
      <div style="${storyStack('min(36rem,92vw)')}">
        <nc-select label="Default" [options]="options"></nc-select>
        <nc-select label="Success" state="success" validationMessage="Selection confirmed" [options]="options"></nc-select>
        <nc-select label="Error" state="error" validationMessage="Please choose one option" [options]="options"></nc-select>
        <nc-select label="With Groups" [groups]="groups"></nc-select>
        <nc-select label="Disabled" [disabled]="true" [options]="options" value="synthpop"></nc-select>
      </div>
    `,
  }),
};

export const Accessibility: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template: `
      <ul style="${storyList} width:min(36rem,92vw);">
        <li>Uses native select and option/optgroup semantics.</li>
        <li>Keyboard navigation follows browser behavior.</li>
        <li>Error state sets aria-invalid and support text is linked via aria-describedby.</li>
      </ul>
    `,
  }),
};

export const DesignTokens: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template:
      '<p style="' +
      storyTextMuted +
      ' width:min(36rem,92vw);">Select consumes the same form-control token layer as Input: color, spacing, radius, motion, shadows and Rajdhani typography.</p>',
  }),
};

export const BestPractices: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template: `
      <div style="${storyDoDont} width:min(36rem,92vw);">
        <p style="margin:0;"><strong style="${storyStrong}">Do:</strong> keep option labels short and group long lists.</p>
        <p style="margin:0;"><strong style="${storyStrong}">Don't:</strong> use disabled placeholder as a permanent selected value.</p>
      </div>
    `,
  }),
};
