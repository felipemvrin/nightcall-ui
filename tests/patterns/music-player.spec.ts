import { render } from '@testing-library/angular';
import { describe, expect, it, vi } from 'vitest';
import { NcMusicPlayerPatternComponent } from '../../libs/patterns/src/lib/music-player/music-player-pattern.component';
import { NcButtonComponent } from '../../projects/nightcall-ui/src/lib/button/button.component';

vi.mock('howler', () => ({
  Howl: class {
    play(): number {
      return 1;
    }
    pause(): this {
      return this;
    }
    stop(): this {
      return this;
    }
    seek(position?: number): number | this {
      return position === undefined ? 0 : this;
    }
    mute(): this {
      return this;
    }
    volume(): this {
      return this;
    }
    loop(): this {
      return this;
    }
    duration(): number {
      return 180;
    }
    unload(): void {}
  },
}));

describe('NcMusicPlayerPatternComponent', () => {
  it('preserves accessible labels on icon-only buttons', async () => {
    const result = await render(NcButtonComponent, {
      inputs: { iconOnly: true, ariaLabel: 'Play' },
    });

    expect(result.getByRole('button', { name: 'Play' })).not.toBeNull();
  });

  it('renders accessible Lucide playback controls without Unicode symbols', async () => {
    const result = await render(NcMusicPlayerPatternComponent);
    const expectedControls = ['Skip back 10 seconds', 'Play', 'Skip forward 10 seconds', 'Stop'];

    for (const accessibleName of expectedControls) {
      const control = result.getByRole('button', { name: accessibleName });
      expect(control.querySelector('svg')).not.toBeNull();
    }

    expect(result.container.textContent).not.toMatch(/[▶⏸⏮⏭🔊]/u);
    expect(result.getByRole('slider', { name: 'Volume' })).not.toBeNull();
    expect(result.getByText('Pattern • Media playback')).not.toBeNull();
  });
});
