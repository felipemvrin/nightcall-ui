import type { Meta, StoryObj } from '@storybook/angular';
import { NcProgressBarComponent, type NcProgressBarSize } from '@nightcall-ui/components';
import {
  storyDoDont,
  storyList,
  storyStack,
  storyStrong,
  storyTextMuted,
} from './shared/story-styles';

type ProgressStoryArgs = {
  label: string;
  value: number;
  max: number;
  size: NcProgressBarSize;
  indeterminate: boolean;
  animated: boolean;
  showPercentage: boolean;
};

const meta: Meta<ProgressStoryArgs> = {
  title: 'Components/Progress Bar',
  component: NcProgressBarComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    label: 'Loading assets',
    value: 56,
    max: 100,
    size: 'md',
    indeterminate: false,
    animated: true,
    showPercentage: true,
  },
  argTypes: {
    label: { control: 'text' },
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    max: { control: { type: 'number', min: 1 } },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    indeterminate: { control: 'boolean' },
    animated: { control: 'boolean' },
    showPercentage: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<ProgressStoryArgs>;

export const Overview: Story = {
  render: () => ({
    template:
      '<div style="' +
      storyStack('min(40rem,92vw)') +
      '"><nc-progress-bar label="Deploying" [value]="72" [max]="100"></nc-progress-bar></div>',
  }),
};

export const Playground: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="${storyStack('min(40rem,92vw)')}">
        <nc-progress-bar
          [label]="label"
          [value]="value"
          [max]="max"
          [size]="size"
          [indeterminate]="indeterminate"
          [animated]="animated"
          [showPercentage]="showPercentage"
        ></nc-progress-bar>
      </div>
    `,
  }),
};

export const Variants: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template:
      '<p style="' +
      storyTextMuted +
      '">Progress Bar uses a single tokenized visual variant with state controlled by determinate/indeterminate mode.</p>',
  }),
};

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template: `
      <div style="${storyStack('min(40rem,92vw)')}">
        <nc-progress-bar size="sm" label="Small" [value]="32"></nc-progress-bar>
        <nc-progress-bar size="md" label="Medium" [value]="56"></nc-progress-bar>
        <nc-progress-bar size="lg" label="Large" [value]="78"></nc-progress-bar>
      </div>
    `,
  }),
};

export const States: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template: `
      <div style="${storyStack('min(40rem,92vw)')}">
        <nc-progress-bar label="Determinate" [value]="64"></nc-progress-bar>
        <nc-progress-bar label="Animated" [value]="44" [animated]="true"></nc-progress-bar>
        <nc-progress-bar label="Indeterminate" [indeterminate]="true" [showPercentage]="false"></nc-progress-bar>
      </div>
    `,
  }),
};

export const Accessibility: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template: `
      <ul style="${storyList} width:min(40rem,92vw);">
        <li>Uses role=progressbar with aria-valuemin/max/now on determinate mode.</li>
        <li>In indeterminate mode, value ARIA attributes are omitted intentionally.</li>
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
      ' width:min(40rem,92vw);">Uses accent and focus color tokens, radius-pill, neon shadows and motion duration/easing tokens.</p>',
  }),
};

export const BestPractices: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template: `
      <div style="${storyDoDont} width:min(40rem,92vw);">
        <p style="margin:0;"><strong style="${storyStrong}">Do:</strong> provide a contextual label when progress meaning is not obvious.</p>
        <p style="margin:0;"><strong style="${storyStrong}">Don't:</strong> show percentage for unknown duration processes.</p>
      </div>
    `,
  }),
};
