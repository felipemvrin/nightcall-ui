import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { getNcTabIcon } from './tab-icons';

@Component({
  selector: 'nc-tab-icon',
  imports: [LucideDynamicIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nc-tabs__icon',
    '[attr.aria-hidden]': '"true"',
  },
  template: `
    @if (icon(); as iconDefinition) {
      <svg class="nc-tabs__icon-svg" [lucideIcon]="iconDefinition"></svg>
    }
  `,
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      inline-size: var(--nc-icon-size-sm);
      block-size: var(--nc-icon-size-sm);
      flex: 0 0 auto;
      color: currentcolor;
      line-height: 0;
    }

    .nc-tabs__icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
    }
  `,
})
export class NcTabsIconComponent {
  readonly name = input<string | null>(null);

  protected readonly icon = computed(() => getNcTabIcon(this.name()));
}
