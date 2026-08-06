import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { getNcIcon, type NcIconDefinition, type NcIconName } from './icons';

export type NcIconSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'nc-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nc-icon-host',
    '[attr.data-size]': 'size()',
    '[attr.role]': 'resolvedAriaLabel() ? "img" : null',
    '[attr.aria-label]': 'resolvedAriaLabel()',
    '[attr.aria-hidden]': 'resolvedAriaLabel() ? null : "true"',
  },
  template: `
    <svg class="nc-icon" [attr.viewBox]="icon().viewBox" fill="none" focusable="false" xmlns="http://www.w3.org/2000/svg">
      @for (path of icon().paths; track path.d) {
        <path
          [attr.d]="path.d"
          [attr.fill]="path.fill ?? null"
          [attr.stroke]="path.stroke ?? null"
          [attr.stroke-width]="path.strokeWidth ?? null"
          [attr.stroke-linecap]="path.strokeLinecap ?? null"
          [attr.stroke-linejoin]="path.strokeLinejoin ?? null"
        />
      }

      @for (rect of icon().rects ?? []; track rect.x + '-' + rect.y + '-' + rect.width) {
        <rect
          [attr.x]="rect.x"
          [attr.y]="rect.y"
          [attr.width]="rect.width"
          [attr.height]="rect.height"
          [attr.rx]="rect.rx ?? null"
          [attr.fill]="rect.fill ?? null"
          [attr.stroke]="rect.stroke ?? null"
          [attr.stroke-width]="rect.strokeWidth ?? null"
        />
      }
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      inline-size: 1rem;
      block-size: 1rem;
      flex: 0 0 auto;
      color: inherit;
      line-height: 0;
    }

    :host([data-size='sm']) {
      inline-size: 0.875rem;
      block-size: 0.875rem;
    }

    :host([data-size='lg']) {
      inline-size: 1.25rem;
      block-size: 1.25rem;
    }

    .nc-icon {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      overflow: visible;
    }
  `,
})
export class NcIconComponent {
  readonly name = input<NcIconName>('arrow-right');
  readonly size = input<NcIconSize>('md');
  readonly ariaLabel = input<string | null>(null);

  protected readonly icon = computed<NcIconDefinition>(() => getNcIcon(this.name()));
  protected readonly resolvedAriaLabel = computed(() => {
    const label = this.ariaLabel()?.trim();
    return label?.length ? label : null;
  });
}