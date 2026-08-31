import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { NcGlitchTextComponent } from '../../projects/nightcall-ui/src/lib/glitch-text/glitch-text.component';

function createGlitchTextComponent() {
  return TestBed.createComponent(NcGlitchTextComponent);
}

describe('NcGlitchTextComponent', () => {
  it('uses the subtle variant by default', () => {
    const fixture = createGlitchTextComponent();

    expect(fixture.componentInstance.variant()).toBe('subtle');
  });

  it('accepts the neon variant', () => {
    const fixture = createGlitchTextComponent();
    fixture.componentRef.setInput('variant', 'neon');
    fixture.componentRef.setInput('text', 'Nightcall');
    fixture.detectChanges();

    expect(fixture.componentInstance.variant()).toBe('neon');
    expect(fixture.nativeElement.dataset.variant).toBe('neon');
  });
});
