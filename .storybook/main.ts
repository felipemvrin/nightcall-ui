import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../apps/docs/src/**/*.stories.@(ts|mdx)'],
  addons: ['@storybook/addon-a11y', 'storybook/viewport'],
  previewHead: (head) => `${head}
<link rel="icon" type="image/x-icon" href="/nc-favicon.ico" />`,
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  staticDirs: ['../apps/docs/public'],
  webpackFinal: async (webpackConfig) => {
    webpackConfig.performance = {
      hints: false,
    };

    return webpackConfig;
  },
};

export default config;
