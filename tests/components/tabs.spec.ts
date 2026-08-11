import { fireEvent, render } from '@testing-library/angular';
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
    expect(component.ariaLabel()).toBe('Tabs');
  });

  it('falls back to the first enabled tab and renders semantic icons', async () => {
    const result = await render(NcTabsComponent, {
      inputs: {
        items: [
          { id: 'disabled', label: 'Disabled', disabled: true, icon: 'lock' },
          { id: 'library', label: 'Library', icon: 'music' },
          { id: 'settings', label: 'Settings', icon: 'settings' },
        ],
        activeId: 'disabled',
      },
    });

    const buttons = result.getAllByRole('tab');
    expect(buttons[1]?.getAttribute('aria-selected')).toBe('true');
    expect(buttons[1]?.getAttribute('tabindex')).toBe('0');
    expect(buttons[1]?.querySelector('nc-icon')).not.toBeNull();
    expect(buttons[1]?.hasAttribute('aria-controls')).toBe(false);
  });

  it('emits the next enabled tab and moves focus on arrow navigation', async () => {
    const result = await render(NcTabsComponent, {
      inputs: {
        items: [
          { id: 'home', label: 'Home' },
          { id: 'disabled', label: 'Disabled', disabled: true },
          { id: 'music', label: 'Music' },
        ],
        activeId: 'home',
      },
    });

    const emittedIds: string[] = [];
    result.fixture.componentInstance.activeIdChange.subscribe((id) => emittedIds.push(id));

    const buttons = result.getAllByRole('tab');
    const homeTab = buttons[0] as HTMLButtonElement;
    const musicTab = buttons[2] as HTMLButtonElement;

    homeTab.focus();
    await fireEvent.keyDown(homeTab, { key: 'ArrowRight' });

    expect(emittedIds).toEqual(['music']);
    expect(document.activeElement).toBe(musicTab);
  });

  it('activates the first tab when none is selected', async () => {
    const result = await render(NcTabsComponent, {
      inputs: {
        items: [
          { id: 'overview', label: 'Overview' },
          { id: 'details', label: 'Details' },
        ],
        activeId: null,
      },
    });

    const buttons = result.getAllByRole('tab');
    expect(buttons[0]?.getAttribute('aria-selected')).toBe('true');
    expect(buttons[1]?.getAttribute('aria-selected')).toBe('false');
  });
});
