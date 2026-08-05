import { describe, expect, it } from 'vitest';
import { Injector, runInInjectionContext } from '@angular/core';
import { NcTabsComponent } from '../../projects/nightcall-ui/src/lib/tabs/tabs.component';

function createTabsComponent(): NcTabsComponent {
  const injector = Injector.create({ providers: [] });
  return runInInjectionContext(injector, () => new NcTabsComponent());
}

describe('NcTabsComponent', () => {
  it('starts with empty items and no active tab', () => {
    const component = createTabsComponent();

    expect(component.items()).toEqual([]);
    expect(component.activeId()).toBeNull();
    expect(component.scrollable()).toBe(false);
  });
});
