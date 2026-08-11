import {
  ChangeDetectionStrategy,
  Component,
  ViewChildren,
  computed,
  input,
  output,
  type ElementRef,
  type QueryList,
} from '@angular/core';

export type NcTabItem = {
  readonly id: string;
  readonly label: string;
  readonly icon?: string;
  readonly disabled?: boolean;
};

@Component({
  selector: 'nc-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nc-tabs-host',
    '[class.nc-tabs-host--scrollable]': 'scrollable()',
  },
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class NcTabsComponent {
  readonly items = input<readonly NcTabItem[]>([]);
  readonly activeId = input<string | null>(null);
  readonly scrollable = input(false);
  readonly ariaLabel = input('Tabs');

  readonly activeIdChange = output<string>();

  @ViewChildren('tabButton')
  private readonly tabButtons?: QueryList<ElementRef<HTMLButtonElement>>;

  protected readonly resolvedActiveId = computed(() => {
    const activeId = this.activeId();
    const items = this.items();

    if (activeId && items.some((item) => item.id === activeId && !item.disabled)) {
      return activeId;
    }

    const firstEnabled = items.find((item) => !item.disabled);
    return firstEnabled?.id ?? null;
  });

  protected isActive(tabId: string): boolean {
    return this.resolvedActiveId() === tabId;
  }

  protected onActivate(tabId: string): void {
    if (this.items().find((item) => item.id === tabId)?.disabled) {
      return;
    }

    this.activeIdChange.emit(tabId);
  }

  protected onKeydown(event: KeyboardEvent, index: number): void {
    const enabledIndices = this.items()
      .map((item, itemIndex) => ({ disabled: item.disabled, itemIndex }))
      .filter((item) => !item.disabled)
      .map((item) => item.itemIndex);

    const currentEnabledIndex = enabledIndices.indexOf(index);
    if (currentEnabledIndex === -1) {
      return;
    }

    let targetIndex = currentEnabledIndex;

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        targetIndex = (currentEnabledIndex + 1) % enabledIndices.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        targetIndex = (currentEnabledIndex - 1 + enabledIndices.length) % enabledIndices.length;
        break;
      case 'Home':
        targetIndex = 0;
        break;
      case 'End':
        targetIndex = enabledIndices.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();

    const nextIndex = enabledIndices[targetIndex];
    const nextItem = this.items()[nextIndex];

    if (!nextItem) {
      return;
    }

    this.activeIdChange.emit(nextItem.id);

    const button = this.tabButtons?.get(nextIndex)?.nativeElement;
    button?.focus();
  }
}
