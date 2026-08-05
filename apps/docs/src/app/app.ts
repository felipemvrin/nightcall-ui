import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NcButtonComponent } from '@nightcall-ui/components';

type Section = {
  title: string;
  description: string;
  items: string[];
};

@Component({
  selector: 'nc-root',
  imports: [NgOptimizedImage, NcButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Design System Docs');

  protected readonly sections: Section[] = [
    {
      title: 'Foundations',
      description: 'Core design tokens, themes, and visual rules that define the system language.',
      items: ['Colors', 'Typography', 'Spacing', 'Elevation'],
    },
    {
      title: 'Components',
      description:
        'Reusable Angular components documented as interactive stories for implementation and review.',
      items: ['Buttons', 'Inputs', 'Tabs', 'Selects'],
    },
    {
      title: 'Usage',
      description:
        'Guidance for adopting the system, testing patterns, and contributing safely to the library.',
      items: ['Patterns', 'Accessibility', 'Testing', 'Contribution'],
    },
  ];

  protected readonly selectedSection = signal<Section>(this.sections[0]);

  protected selectSection(section: Section): void {
    this.selectedSection.set(section);
  }

  protected openStorybook(): void {
    window.open('http://localhost:6006', '_blank', 'noopener,noreferrer');
  }

  protected openAngularDocs(): void {
    window.open('https://angular.dev', '_blank', 'noopener,noreferrer');
  }
}
