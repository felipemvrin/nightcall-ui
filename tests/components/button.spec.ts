import { describe, expect, it } from 'vitest';
import { Injector, runInInjectionContext } from '@angular/core';
import { NcButtonComponent } from '../../projects/nightcall-ui/src/lib/button/button.component';

function createButtonComponent(): NcButtonComponent {
  const injector = Injector.create({ providers: [] });
  return runInInjectionContext(injector, () => new NcButtonComponent());
}

describe('NcButtonComponent', () => {
  it('starts with primary/md defaults, enabled and not loading', () => {
    const component = createButtonComponent();

    expect(component.variant()).toBe('primary');
    expect(component.size()).toBe('md');
    expect(component.disabled()).toBe(false);
    expect(component.loading()).toBe(false);
  });

  describe('isDisabled', () => {
    it('is true when disabled is set', () => {
      const component = createButtonComponent();
      const instance = component as unknown as {
        disabled: () => boolean;
        isDisabled: () => boolean;
      };
      instance.disabled = () => true;

      expect(instance.isDisabled()).toBe(true);
    });

    it('is true when loading is set', () => {
      const component = createButtonComponent();
      const instance = component as unknown as {
        loading: () => boolean;
        isDisabled: () => boolean;
      };
      instance.loading = () => true;

      expect(instance.isDisabled()).toBe(true);
    });
  });

  describe('resolvedAriaLabel', () => {
    function withResolvedAriaLabel(iconOnly: boolean, ariaLabel: string | null) {
      const component = createButtonComponent();
      const instance = component as unknown as {
        iconOnly: () => boolean;
        ariaLabel: () => string | null;
        resolvedAriaLabel: () => string | null;
      };
      instance.iconOnly = () => iconOnly;
      instance.ariaLabel = () => ariaLabel;
      return instance;
    }

    it('returns null when iconOnly is false, regardless of ariaLabel', () => {
      expect(withResolvedAriaLabel(false, 'Close').resolvedAriaLabel()).toBeNull();
      expect(withResolvedAriaLabel(false, null).resolvedAriaLabel()).toBeNull();
    });

    it('returns the trimmed ariaLabel when iconOnly is true and a label is provided', () => {
      expect(withResolvedAriaLabel(true, '  Close panel  ').resolvedAriaLabel()).toBe(
        'Close panel',
      );
    });

    it("falls back to 'Button' when iconOnly is true and ariaLabel is null", () => {
      expect(withResolvedAriaLabel(true, null).resolvedAriaLabel()).toBe('Button');
    });

    it("falls back to 'Button' when iconOnly is true and ariaLabel is empty/whitespace", () => {
      expect(withResolvedAriaLabel(true, '   ').resolvedAriaLabel()).toBe('Button');
    });
  });
});
