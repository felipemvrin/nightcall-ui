import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

export type NcRadioOption = {
  readonly value: string;
  readonly label: string;
  readonly disabled?: boolean;
};

let nextRadioGroupId = 0;

@Component({
  selector: 'nc-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nc-radio-host',
    '[class.nc-radio-host--disabled]': 'disabled()',
    '[class.nc-radio-host--error]': 'error()',
  },
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss',
})
export class NcRadioGroupComponent {
  readonly name = input<string | null>(null);
  readonly label = input<string | null>(null);
  readonly helperText = input<string | null>(null);
  readonly options = input<readonly NcRadioOption[]>([]);
  readonly value = input<string | null>(null);
  readonly disabled = input(false);
  readonly error = input(false);

  readonly valueChange = output<string>();

  protected readonly groupName = computed(() => this.name() ?? `nc-radio-${nextRadioGroupId}`);
  protected readonly supportId = computed(() =>
    this.helperText() ? `${this.groupName()}-support` : null,
  );

  constructor() {
    nextRadioGroupId += 1;
  }

  protected onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }
}
