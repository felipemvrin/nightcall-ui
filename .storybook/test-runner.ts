import type { TestRunnerConfig } from '@storybook/test-runner';
import { getStoryContext, waitForPageReady } from '@storybook/test-runner';
import { injectAxe, checkA11y } from 'axe-playwright';

const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page, context) {
    await waitForPageReady(page);

    const storyContext = await getStoryContext(page, context);
    if (storyContext.parameters?.a11y?.disable) {
      return;
    }

    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: { html: true },
      axeOptions: storyContext.parameters?.a11y?.options,
    });
  },
};

export default config;
