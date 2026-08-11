import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  NcButtonComponent,
  NcCheckboxComponent,
  NcInputComponent,
  NcProgressBarComponent,
  NcRadioGroupComponent,
  NcSelectComponent,
  NcTabsComponent,
} from '@nightcall-ui/components';
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
    NcCheckboxComponent,
    NcInputComponent,
    NcMusicPlayerPatternComponent,
    NcProgressBarComponent,
    NcRadioGroupComponent,
    NcSelectComponent,
    NcTabsComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Nightcall UI');
  protected readonly subtitle = signal(
    'In 2084, a signal from the edge of the galaxy arrived. It carried a new way to build digital interfaces.',
  );
  protected readonly description = signal(
    'Angular ⚡, tokens 🎨, components 🧩, and Storybook 📚.',
  );
  protected readonly selectOptions = [
    { value: 'synthwave', label: 'Synthwave' },
    { value: 'electronic', label: 'Electronic' },
  ];
  protected readonly radioOptions = [
    { value: 'night', label: 'Night' },
    { value: 'dawn', label: 'Dawn' },
  ];
  protected readonly tabItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'details', label: 'Details' },
  ];

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
