import type { Meta, StoryObj } from '@storybook/angular';
import { NcTabsComponent, type NcTabItem } from '@nightcall-ui/components';

type TabsStoryArgs = {
  activeId: string;
  scrollable: boolean;
};

const items: NcTabItem[] = [
  { id: 'tab-1', label: 'Tab 01', icon: '◈' },
  { id: 'tab-2', label: 'Tab 02', icon: '◌' },
  { id: 'tab-3', label: 'Tab 03', icon: '◉' },
  { id: 'tab-4', label: 'Tab 04', disabled: true, icon: '◍' },
  { id: 'tab-5', label: 'Tab 05', icon: '◎' },
];

const meta: Meta<TabsStoryArgs> = {
  title: 'Components/Tabs',
  component: NcTabsComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    activeId: 'tab-1',
    scrollable: false,
  },
  argTypes: {
    activeId: { control: 'text' },
    scrollable: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<TabsStoryArgs>;

export const Overview: Story = {
  render: () => ({
    props: { items },
    template:
      '<div style="width:min(44rem,92vw);"><nc-tabs [items]="items" activeId="tab-1"></nc-tabs></div>',
  }),
};

export const Playground: Story = {
  render: (args) => ({
    props: { ...args, items },
    template: `
      <div style="display:grid; gap: var(--space-3); width:min(44rem,92vw);">
        <nc-tabs
          [items]="items"
          [activeId]="activeId"
          [scrollable]="scrollable"
          (activeIdChange)="activeId = $event"
        ></nc-tabs>
        <p style="margin:0; color: var(--color-text-secondary); font-family: var(--font-family-body);">Active tab: {{ activeId }}</p>
      </div>
    `,
  }),
};

export const Variants: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template:
      '<p style="margin:0; color: var(--color-text-secondary); font-family: var(--font-family-body);">Tabs uses one visual variant with animated active indicator to preserve navigation consistency.</p>',
  }),
};

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template:
      '<p style="margin:0; color: var(--color-text-secondary); font-family: var(--font-family-body);">Tab height is fixed for predictable scanning and keyboard focus targets.</p>',
  }),
};

export const States: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    props: { items },
    template: `
      <div style="display:grid; gap: var(--space-3); width:min(44rem,92vw);">
        <nc-tabs [items]="items" activeId="tab-2"></nc-tabs>
        <nc-tabs [items]="items" activeId="tab-5" [scrollable]="true"></nc-tabs>
      </div>
    `,
  }),
};

export const Accessibility: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template: `
      <ul style="margin:0; padding-inline-start: var(--space-5); color: var(--color-text-secondary); font-family: var(--font-family-body); width:min(44rem,92vw);">
        <li>Implements tablist/tab roles and aria-selected.</li>
        <li>Arrow keys navigate enabled tabs; Home/End jump to bounds.</li>
        <li>Disabled tabs are skipped in keyboard navigation.</li>
      </ul>
    `,
  }),
};

export const DesignTokens: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template:
      '<p style="margin:0; color: var(--color-text-secondary); font-family: var(--font-family-body); width:min(44rem,92vw);">Uses accent/border/focus tokens, neon glow shadow, spacing scale and motion tokens for indicator animation.</p>',
  }),
};

export const BestPractices: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    template: `
      <div style="display:grid; gap: var(--space-2); width:min(44rem,92vw); color: var(--color-text-secondary); font-family: var(--font-family-body);">
        <p style="margin:0;"><strong style="color:var(--color-text-primary);">Do:</strong> keep tab labels short and parallel.</p>
        <p style="margin:0;"><strong style="color:var(--color-text-primary);">Don't:</strong> hide critical actions behind disabled tabs without explanation.</p>
      </div>
    `,
  }),
};
