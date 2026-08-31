import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NcButtonComponent, NcGlitchTextComponent } from '@nightcall-ui/components';
import { NcMusicPlayerPatternComponent } from '@nightcall-ui/patterns';

type Feature = {
  title: string;
  description: string;
};

@Component({
  selector: 'nc-root',
  imports: [
    NgOptimizedImage,
    NcButtonComponent,
    NcGlitchTextComponent,
    NcMusicPlayerPatternComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = 'Nightcall UI';
  protected readonly subtitle =
    'In 2084, a signal from the edge of the galaxy arrived. It carried a new way to build digital interfaces.';
  protected readonly description = 'Angular ⚡, tokens 🎨, components 🧩, and Storybook 📚.';

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
