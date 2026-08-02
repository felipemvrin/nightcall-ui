import type { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
    backgrounds: {
      default: 'Nightcall',
      values: [
        { name: 'Nightcall', value: '#050816' },
        { name: 'Surface', value: '#0f172a' },
      ],
    },
    viewport: {
      defaultViewport: 'responsive',
      viewports: {
        desktop: {
          name: 'Desktop',
          styles: { width: '1440px', height: '900px' },
          type: 'desktop',
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '834px', height: '1112px' },
          type: 'tablet',
        },
        mobile: {
          name: 'Mobile',
          styles: { width: '390px', height: '844px' },
          type: 'mobile',
        },
      },
    },
    a11y: {
      manual: true,
    },
  },
};

export default preview;
