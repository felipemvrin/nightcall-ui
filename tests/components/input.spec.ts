import { describe, expect, it } from 'vitest';
import { Injector, runInInjectionContext } from '@angular/core';
import { NcInputComponent } from '../../projects/nightcall-ui/src/lib/input/input.component';

function createInputComponent(): NcInputComponent {
  const injector = Injector.create({ providers: [] });
  return runInInjectionContext(injector, () => new NcInputComponent());
}

describe('NcInputComponent', () => {
  it('uses safe defaults', () => {
    const component = createInputComponent();

    expect(component.variant()).toBe('default');
    expect(component.state()).toBe('default');
    expect(component.disabled()).toBe(false);
    expect(component.readonly()).toBe(false);
  });
});
