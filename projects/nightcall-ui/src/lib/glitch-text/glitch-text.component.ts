import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type NcGlitchTextVariant = 'subtle' | 'neon';

@Component({
  selector: 'nc-glitch-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nc-glitch-text-host',
    '[attr.data-variant]': 'variant()',
  },
  template: '<span class="nc-glitch-text__content" [attr.data-text]="text()">{{ text() }}</span>',
  styleUrl: './glitch-text.component.scss',
})
export class NcGlitchTextComponent {
  readonly text = input.required<string>();
  readonly variant = input<NcGlitchTextVariant>('subtle');
}
