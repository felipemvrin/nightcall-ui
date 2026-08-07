import { describe, expect, it } from 'vitest';
import { Injector, runInInjectionContext } from '@angular/core';
import { NcCheckboxComponent } from '../../projects/nightcall-ui/src/lib/checkbox/checkbox.component';

function createCheckboxComponent(): NcCheckboxComponent {
  const injector = Injector.create({ providers: [] });
  return runInInjectionContext(injector, () => new NcCheckboxComponent());
}

describe('NcCheckboxComponent', () => {
  it('starts unchecked and enabled', () => {
    const component = createCheckboxComponent();

    expect(component.checked()).toBe(false);
    expect(component.indeterminate()).toBe(false);
    expect(component.disabled()).toBe(false);
    expect(component.error()).toBe(false);
  });
});
