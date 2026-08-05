import { Component, signal } from '@angular/core';
import { NcButtonComponent } from '@nightcall-ui/components';

type Feature = {
  title: string;
  description: string;
};

@Component({
  selector: 'nc-root',
  imports: [NcButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Nightcall UI');
  protected readonly subtitle = signal(
    'A scalable Angular design system with tokens, components, and Storybook documentation.',
  );

  protected readonly features: Feature[] = [
    {
      title: 'Design system foundation',
      description: 'Tokens, themes, and shared visual primitives are centralized for consistency.',
    },
    {
      title: 'Reusable components',
      description:
        'A publishable library of Angular components powers both product apps and documentation.',
    },
    {
      title: 'Storybook-ready docs',
      description:
        'The docs app acts as a living reference for designers, developers, and reviewers.',
    },
  ];

  protected openDocs(): void {
    window.open('http://localhost:4200', '_blank', 'noopener,noreferrer');
  }

  protected openStorybook(): void {
    window.open('http://localhost:6006', '_blank', 'noopener,noreferrer');
  }
}
