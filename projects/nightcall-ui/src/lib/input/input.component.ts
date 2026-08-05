import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

export type NcInputVariant = 'default' | 'filled' | 'outline';
export type NcInputState = 'default' | 'error' | 'success';

let nextInputId = 0;

@Component({
  selector: 'nc-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nc-input-host',
    '[attr.data-variant]': 'variant()',
    '[attr.data-state]': 'state()',
    '[class.nc-input-host--disabled]': 'disabled()',
    '[class.nc-input-host--readonly]': 'readonly()',
  },
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class NcInputComponent {
  readonly variant = input<NcInputVariant>('default');
  readonly state = input<NcInputState>('default');
  readonly type = input<'text' | 'email' | 'password' | 'search' | 'tel' | 'url'>('text');
  readonly label = input<string | null>(null);
  readonly placeholder = input('');
  readonly helperText = input<string | null>(null);
  readonly validationMessage = input<string | null>(null);
  readonly value = input('');
  readonly disabled = input(false);
  readonly readonly = input(false);
  readonly required = input(false);
  readonly id = input<string | null>(null);

  readonly valueChange = output<string>();

  protected readonly inputId = computed(() => this.id() ?? `nc-input-${nextInputId}`);

  protected readonly describedById = computed(() => {
    if (!this.supportingText()) {
      return null;
    }

    return `${this.inputId()}-support`;
  });

  protected readonly supportingText = computed(() => {
    if (this.state() === 'error') {
      return this.validationMessage() ?? this.helperText();
    }

    if (this.state() === 'success') {
      return this.validationMessage() ?? this.helperText();
    }

    return this.helperText();
  });

  protected readonly isInvalid = computed(() => this.state() === 'error');

  constructor() {
    nextInputId += 1;
  }

  protected onInput(event: Event): void {
    const element = event.target as HTMLInputElement;
    this.valueChange.emit(element.value);
  }
}
