import { render } from '@testing-library/angular';
import { describe, expect, it } from 'vitest';
import { NcIconComponent } from '../../packages/icons/src/lib/icon.component';
import {
  NC_ICON_NAMES,
  getNcIcon,
  isNcIconName,
  type NcIconName,
} from '../../packages/icons/src/lib/icons';

const requiredIcons: NcIconName[] = [
  'play',
  'pause',
  'stop',
  'skip-back',
  'skip-forward',
  'rewind',
  'fast-forward',
  'volume',
  'volume-1',
  'volume-2',
  'volume-x',
  'repeat',
  'shuffle',
  'music',
  'disc',
  'list-music',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'arrow-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'chevron-down',
  'menu',
  'x',
  'plus',
  'minus',
  'search',
  'settings',
  'edit',
  'trash',
  'download',
  'upload',
  'external-link',
  'check',
  'check-circle',
  'info',
  'alert-circle',
  'alert-triangle',
  'help-circle',
  'home',
  'user',
  'users',
  'calendar',
  'clock',
  'heart',
  'star',
  'bookmark',
  'mail',
  'bell',
  'lock',
  'unlock',
  'eye',
  'eye-off',
  'code',
  'terminal',
  'package',
  'layers',
  'component',
  'palette',
  'settings-2',
  'braces',
  'git-branch',
];

describe('Nightcall icons', () => {
  it('contains every required icon as a valid Lucide definition', () => {
    expect(NC_ICON_NAMES).toEqual(expect.arrayContaining(requiredIcons));

    for (const name of requiredIcons) {
      expect(isNcIconName(name)).toBe(true);
      expect(getNcIcon(name)?.icon.name).toBeTruthy();
    }
  });

  it('renders a valid icon as SVG', async () => {
    const { container } = await render(NcIconComponent, { inputs: { name: 'play' } });

    expect(container.querySelector('svg.lucide-play')).not.toBeNull();
  });

  it.each(['xs', 'sm', 'md', 'lg', 'xl'] as const)('exposes the %s semantic size', async (size) => {
    const { fixture } = await render(NcIconComponent, { inputs: { name: 'music', size } });

    expect((fixture.nativeElement as HTMLElement).getAttribute('data-size')).toBe(size);
  });

  it('is decorative by default', async () => {
    const { fixture } = await render(NcIconComponent, { inputs: { name: 'play' } });
    const host = fixture.nativeElement as HTMLElement;

    expect(host.getAttribute('aria-hidden')).toBe('true');
    expect(host.hasAttribute('aria-label')).toBe(false);
    expect(host.hasAttribute('role')).toBe(false);
  });

  it('provides an accessible name in semantic mode', async () => {
    const { fixture } = await render(NcIconComponent, {
      inputs: { name: 'info', decorative: false, ariaLabel: 'Information' },
    });
    const host = fixture.nativeElement as HTMLElement;

    expect(host.getAttribute('role')).toBe('img');
    expect(host.getAttribute('aria-label')).toBe('Information');
    expect(host.hasAttribute('aria-hidden')).toBe(false);
  });

  it('does not render an SVG for an invalid runtime name', async () => {
    const result = await render(NcIconComponent, { inputs: { name: 'play' } });

    result.fixture.componentRef.setInput('name', 'not-an-icon');
    result.fixture.detectChanges();

    expect((result.fixture.nativeElement as HTMLElement).getAttribute('data-invalid')).toBe('true');
    expect(result.container.querySelector('svg')).toBeNull();
    expect(isNcIconName('not-an-icon')).toBe(false);
    expect(getNcIcon('not-an-icon')).toBeNull();
  });
});
