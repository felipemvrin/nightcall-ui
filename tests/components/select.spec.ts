import { describe, expect, it } from 'vitest';
import { Injector, runInInjectionContext } from '@angular/core';
import { NcSelectComponent } from '../../projects/nightcall-ui/src/lib/select/select.component';

function createSelectComponent(): NcSelectComponent {
  const injector = Injector.create({ providers: [] });
  return runInInjectionContext(injector, () => new NcSelectComponent());
}

describe('NcSelectComponent', () => {
  it('starts with no options and default variant', () => {
    const component = createSelectComponent();

    expect(component.variant()).toBe('default');
    expect(component.options()).toEqual([]);
    expect(component.groups()).toEqual([]);
    expect(component.disabled()).toBe(false);
  });
});
