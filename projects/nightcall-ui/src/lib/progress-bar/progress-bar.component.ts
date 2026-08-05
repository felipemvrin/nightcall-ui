import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type NcProgressBarSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'nc-progress-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nc-progress-host',
    '[attr.data-size]': 'size()',
    '[class.nc-progress-host--animated]': 'animated()',
    '[class.nc-progress-host--indeterminate]': 'indeterminate()',
  },
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class NcProgressBarComponent {
  readonly value = input(0);
  readonly max = input(100);
  readonly size = input<NcProgressBarSize>('md');
  readonly animated = input(true);
  readonly indeterminate = input(false);
  readonly label = input<string | null>(null);
  readonly showPercentage = input(true);

  protected readonly normalizedPercentage = computed(() => {
    const max = this.max();
    const value = this.value();

    if (max <= 0) {
      return 0;
    }

    const percentage = (value / max) * 100;
    return Math.min(100, Math.max(0, percentage));
  });

  protected readonly percentageLabel = computed(
    () => `${Math.round(this.normalizedPercentage())}%`,
  );

  protected readonly progressStyle = computed(() => {
    if (this.indeterminate()) {
      return null;
    }

    return { inlineSize: `${this.normalizedPercentage()}%` };
  });
}
