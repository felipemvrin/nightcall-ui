import type { StorybookConfig } from '@storybook/angular';

const favicon = `
<link
  rel="icon"
  type="image/svg+xml"
  href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='48'%3E%F0%9F%8C%8C%3C/text%3E%3C/svg%3E"
/>`;

const config: StorybookConfig = {
  stories: ['../apps/docs/src/**/*.stories.@(ts|mdx)'],
  addons: ['@storybook/addon-a11y', 'storybook/viewport'],

  managerHead: (head) =>
    head.replace('<link rel="icon" type="image/x-icon" href="./favicon.ico" />', favicon),
  previewHead: (head) => `${head}${favicon}`,

  framework: {
    name: '@storybook/angular',
    options: {},
  },

  staticDirs: ['../apps/docs/public'],
};

export default config;
