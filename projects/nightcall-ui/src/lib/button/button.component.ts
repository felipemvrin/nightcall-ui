import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type NcButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type NcButtonSize = 'sm' | 'md' | 'lg';
export type NcButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'nc-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nc-button-host',
    '[attr.data-variant]': 'variant()',
    '[attr.data-size]': 'size()',
    '[class.nc-button-host--full-width]': 'fullWidth()',
    '[class.nc-button-host--icon-only]': 'iconOnly()',
  },
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class NcButtonComponent {
  readonly variant = input<NcButtonVariant>('primary');
  readonly size = input<NcButtonSize>('md');
  readonly type = input<NcButtonType>('button');
  readonly disabled = input(false);
  readonly loading = input(false);
  readonly fullWidth = input(false);
  readonly iconOnly = input(false);
  readonly glowTrace = input(false);
  readonly ariaLabel = input<string | null>(null);
  readonly ariaPressed = input<boolean | null>(null);

  protected readonly resolvedAriaLabel = computed(() => {
    if (!this.iconOnly()) {
      return null;
    }

    const label = this.ariaLabel()?.trim();
    return label?.length ? label : 'Button';
  });

  protected readonly isDisabled = computed(() => this.disabled() || this.loading());
}
