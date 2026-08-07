import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'Nightcall UI',
    brandUrl: './',
    brandImage: '/assets/brand/logo-nc-ui.svg',
    brandTarget: '_self',
  }),
});
