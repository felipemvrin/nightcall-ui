import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

export type NcRadioOption = {
  readonly value: string;
  readonly label: string;
  readonly disabled?: boolean;
};

let nextRadioGroupId = 0;

function generateRadioGroupId(): string {
  return `nc-radio-${++nextRadioGroupId}`;
}

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

  private readonly _autoGroupId = generateRadioGroupId();
  protected readonly groupName = computed(() => this.name() ?? this._autoGroupId);
  protected readonly supportId = computed(() =>
    this.helperText() ? `${this.groupName()}-support` : null,
  );

  protected onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }
}
