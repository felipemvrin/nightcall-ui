import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { getNcIcon, type NcIconName } from './icons';

export type NcIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type NcIconColor =
  'inherit' | 'primary' | 'secondary' | 'info' | 'text' | 'disabled' | 'danger' | 'success';

@Component({
  selector: 'nc-icon',
  imports: [LucideDynamicIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nc-icon-host',
    '[attr.data-size]': 'size()',
    '[attr.data-color]': 'color()',
    '[attr.data-invalid]': 'icon() ? null : "true"',
    '[attr.role]': 'resolvedAriaLabel() ? "img" : null',
    '[attr.aria-label]': 'resolvedAriaLabel()',
    '[attr.aria-hidden]': 'resolvedAriaLabel() ? null : "true"',
  },
  template: `
    @if (icon(); as iconDefinition) {
      <svg class="nc-icon" [lucideIcon]="iconDefinition" aria-hidden="true"></svg>
    }
  `,
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      inline-size: var(--nc-icon-size-md);
      block-size: var(--nc-icon-size-md);
      flex: 0 0 auto;
      color: inherit;
      line-height: 0;
    }

    :host([data-size='xs']) {
      inline-size: var(--nc-icon-size-xs);
      block-size: var(--nc-icon-size-xs);
    }

    :host([data-size='sm']) {
      inline-size: var(--nc-icon-size-sm);
      block-size: var(--nc-icon-size-sm);
    }

    :host([data-size='lg']) {
      inline-size: var(--nc-icon-size-lg);
      block-size: var(--nc-icon-size-lg);
    }

    :host([data-size='xl']) {
      inline-size: var(--nc-icon-size-xl);
      block-size: var(--nc-icon-size-xl);
    }

    :host([data-color='primary']) {
      color: var(--nc-color-primary);
    }
    :host([data-color='secondary']) {
      color: var(--nc-color-secondary);
    }
    :host([data-color='info']) {
      color: var(--nc-color-info);
    }
    :host([data-color='text']) {
      color: var(--nc-color-text);
    }
    :host([data-color='disabled']) {
      color: var(--nc-color-disabled);
    }
    :host([data-color='danger']) {
      color: var(--nc-color-danger);
    }
    :host([data-color='success']) {
      color: var(--nc-color-success);
    }

    .nc-icon {
      display: block;
      inline-size: 100%;
      block-size: 100%;
    }
  `,
})
export class NcIconComponent {
  readonly name = input<NcIconName>('arrow-right');
  readonly size = input<NcIconSize>('md');
  readonly color = input<NcIconColor>('inherit');
  readonly decorative = input(true);
  readonly ariaLabel = input<string | null>(null);

  protected readonly icon = computed(() => getNcIcon(this.name()));
  protected readonly resolvedAriaLabel = computed(() => {
    if (this.decorative()) {
      return null;
    }

    const label = this.ariaLabel()?.trim();
    return label?.length ? label : null;
  });
}
