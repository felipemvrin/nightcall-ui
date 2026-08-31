import { type Meta, type StoryObj } from '@storybook/angular';
import { NcGlitchTextComponent, type NcGlitchTextVariant } from '@nightcall-ui/components';

type GlitchTextStoryArgs = {
  text: string;
  variant: NcGlitchTextVariant;
};

const meta: Meta<GlitchTextStoryArgs> = {
  title: 'Components/Glitch Text',
  component: NcGlitchTextComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    text: 'Nightcall',
    variant: 'subtle',
  },
  argTypes: {
    text: { control: 'text' },
    variant: {
      control: 'inline-radio',
      options: ['subtle', 'neon'],
    },
  },
};

export default meta;

type Story = StoryObj<GlitchTextStoryArgs>;

export const Playground: Story = {
  render: (args) => ({
    props: args,
    template: `
      <nc-glitch-text
        [text]="text"
        [variant]="variant"
        style="color: var(--nc-color-primary); font-family: var(--nc-font-heading); font-size: var(--font-size-3xl); letter-spacing: var(--font-letter-spacing-wide); text-transform: uppercase;"
      />
    `,
  }),
};

export const Variants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => ({
    template: `
      <div style="display: grid; gap: var(--space-6); color: var(--nc-color-text-primary); font-family: var(--nc-font-heading); font-size: var(--font-size-2xl); letter-spacing: var(--font-letter-spacing-wide); text-transform: uppercase;">
        <nc-glitch-text text="Subtle signal" variant="subtle" />
        <nc-glitch-text text="Neon signal" variant="neon" style="color: var(--nc-color-secondary);" />
      </div>
    `,
  }),
};
