import { describe, expect, it } from 'vitest';
import { Injector, runInInjectionContext } from '@angular/core';
import { NcRadioGroupComponent } from '../../projects/nightcall-ui/src/lib/radio/radio.component';

function createRadioComponent(): NcRadioGroupComponent {
  const injector = Injector.create({ providers: [] });
  return runInInjectionContext(injector, () => new NcRadioGroupComponent());
}

describe('NcRadioGroupComponent', () => {
  it('has empty options by default', () => {
    const component = createRadioComponent();

    expect(component.options()).toEqual([]);
    expect(component.value()).toBeNull();
    expect(component.disabled()).toBe(false);
    expect(component.error()).toBe(false);
  });
});
