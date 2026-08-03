import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';

type Section = {
  title: string;
  description: string;
  items: string[];
};

@Component({
  selector: 'nc-root',
  imports: [NgOptimizedImage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Nightcall UI');

  protected readonly sections: Section[] = [
    {
      title: 'Workspace',
      description: 'Angular CLI application shell for the documentation and examples site.',
      items: ['Angular 20', 'Standalone APIs', 'SCSS', 'Signals'],
    },
    {
      title: 'Packages',
      description: 'A publishable components library plus token, theme, and icon packages.',
      items: ['@nightcall-ui/components', 'packages/tokens', 'packages/themes', 'packages/icons'],
    },
    {
      title: 'Tooling',
      description: 'Storybook, Style Dictionary, Vitest, Playwright, ESLint, Prettier, and Husky.',
      items: ['Storybook 9', 'Style Dictionary', 'Vitest', 'Playwright'],
    },
  ];
}
