import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

let nextCheckboxId = 0;

function generateCheckboxId(): string {
  return `nc-checkbox-${++nextCheckboxId}`;
}

@Component({
  selector: 'nc-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nc-checkbox-host',
    '[class.nc-checkbox-host--disabled]': 'disabled()',
    '[class.nc-checkbox-host--error]': 'error()',
  },
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class NcCheckboxComponent {
  readonly id = input<string | null>(null);
  readonly label = input('Checkbox');
  readonly helperText = input<string | null>(null);
  readonly checked = input(false);
  readonly indeterminate = input(false);
  readonly disabled = input(false);
  readonly error = input(false);

  readonly checkedChange = output<boolean>();

  private readonly _autoId = generateCheckboxId();
  protected readonly checkboxId = computed(() => this.id() ?? this._autoId);

  protected readonly supportId = computed(() =>
    this.helperText() ? `${this.checkboxId()}-support` : null,
  );

  protected onToggle(event: Event): void {
    const target = event.target as HTMLInputElement;

    if (this.indeterminate()) {
      this.checkedChange.emit(true);
      return;
    }

    this.checkedChange.emit(target.checked);
  }
}
