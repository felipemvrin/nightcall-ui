import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

export type NcSelectVariant = 'default' | 'filled' | 'outline';
export type NcSelectState = 'default' | 'error' | 'success';

export type NcSelectOption = {
  readonly value: string;
  readonly label: string;
  readonly disabled?: boolean;
};

export type NcSelectGroup = {
  readonly label: string;
  readonly options: readonly NcSelectOption[];
};

let nextSelectId = 0;

@Component({
  selector: 'nc-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nc-select-host',
    '[attr.data-variant]': 'variant()',
    '[attr.data-state]': 'state()',
    '[class.nc-select-host--disabled]': 'disabled()',
  },
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class NcSelectComponent {
  readonly variant = input<NcSelectVariant>('default');
  readonly state = input<NcSelectState>('default');
  readonly label = input<string | null>(null);
  readonly placeholder = input<string | null>('Select option');
  readonly helperText = input<string | null>(null);
  readonly validationMessage = input<string | null>(null);
  readonly value = input<string | null>(null);
  readonly options = input<readonly NcSelectOption[]>([]);
  readonly groups = input<readonly NcSelectGroup[]>([]);
  readonly disabled = input(false);
  readonly required = input(false);
  readonly id = input<string | null>(null);

  readonly valueChange = output<string>();

  protected readonly selectId = computed(() => this.id() ?? `nc-select-${nextSelectId}`);

  protected readonly supportId = computed(() => {
    if (!this.supportingText()) {
      return null;
    }

    return `${this.selectId()}-support`;
  });

  protected readonly supportingText = computed(() => {
    if (this.state() === 'default') {
      return this.helperText();
    }

    return this.validationMessage() ?? this.helperText();
  });

  protected readonly hasGroups = computed(() => this.groups().length > 0);

  protected readonly isInvalid = computed(() => this.state() === 'error');

  constructor() {
    nextSelectId += 1;
  }

  protected onChange(event: Event): void {
    const element = event.target as HTMLSelectElement;
    this.valueChange.emit(element.value);
  }
}
