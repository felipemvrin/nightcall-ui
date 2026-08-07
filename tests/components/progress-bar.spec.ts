import { describe, expect, it } from 'vitest';
import { Injector, runInInjectionContext } from '@angular/core';
import { NcProgressBarComponent } from '../../projects/nightcall-ui/src/lib/progress-bar/progress-bar.component';

function createProgressBarComponent(): NcProgressBarComponent {
  const injector = Injector.create({ providers: [] });
  return runInInjectionContext(injector, () => new NcProgressBarComponent());
}

describe('NcProgressBarComponent', () => {
  it('starts in determinate mode with defaults', () => {
    const component = createProgressBarComponent();

    expect(component.indeterminate()).toBe(false);
    expect(component.size()).toBe('md');
    expect(component.max()).toBe(100);
    expect(component.value()).toBe(0);
  });
});
