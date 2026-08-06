import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../apps/docs/src/**/*.stories.@(ts|mdx)'],
  addons: ['@storybook/addon-a11y', 'storybook/viewport'],
  previewHead: (head) => `${head}
<link rel="icon" type="image/svg+xml" href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>%F0%9F%8C%8C</text></svg>' />`,
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
