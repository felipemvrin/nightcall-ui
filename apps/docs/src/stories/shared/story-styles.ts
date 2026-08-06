export const storyTextMuted =
  'margin: 0; color: var(--color-text-secondary); font-family: var(--font-family-body);';

export const storyTextMutedSm =
  'margin: 0; color: var(--color-text-secondary); font: var(--font-weight-regular) var(--font-size-sm)/var(--font-line-height-normal) var(--font-family-body);';

export const storyHeading =
  'margin: 0; color: var(--color-text-primary); font-family: var(--font-family-heading);';

export const storyList =
  'margin: 0; padding-inline-start: var(--space-5); color: var(--color-text-secondary); font-family: var(--font-family-body);';

export const storyListSm =
  'margin: 0; padding-inline-start: var(--space-5); color: var(--color-text-secondary); font-family: var(--font-family-body); font-size: var(--font-size-sm); line-height: var(--font-line-height-normal);';

export const storyDoDont =
  'display:grid; gap: var(--space-2); color: var(--color-text-secondary); font-family: var(--font-family-body);';

export const storyStrong = 'color: var(--color-text-primary);';

export const srOnlyStyle =
  'position: absolute; inline-size: 1px; block-size: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap;';

export function storyPanel(width = 'min(42rem, 92vw)'): string {
  return `display: grid; gap: var(--space-3); width: ${width}; padding: var(--space-5); border-radius: var(--radius-lg); border: 1px solid var(--color-border-subtle); background: color-mix(in srgb, var(--color-background-surface) 92%, transparent);`;
}

export function storyStack(width: string, gap = 'var(--space-3)'): string {
  return `display:grid; gap: ${gap}; width:${width};`;
}

export const storyInlineWrap =
  'display: flex; flex-wrap: wrap; gap: var(--space-3); align-items: center;';

export function storyFullscreenMain(
  background = 'var(--color-background-canvas)',
  foreground = 'var(--color-text-primary)',
): string {
  return `min-height: 100vh; background: ${background}; color: ${foreground}; padding: clamp(var(--space-6), 4vw, var(--space-8)); font-family: var(--font-family-body);`;
}

export function storyFullscreenSection(maxWidth = '72rem', gap = 'var(--space-4)'): string {
  return `max-width:${maxWidth}; margin:0 auto; display:grid; gap:${gap};`;
}

export function storyAutoGrid(min = '12rem', gap = 'var(--space-3)'): string {
  return `display:grid; grid-template-columns: repeat(auto-fit, minmax(${min}, 1fr)); gap:${gap};`;
}

export const storySurfaceCard =
  'padding: var(--space-4); border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle); background: var(--color-background-surface);';

export const storyCodeLine =
  'font-family: var(--font-family-code); color: var(--color-state-focus-ring);';

export const storyHeadingFoundation =
  'margin:0; font-family: var(--font-family-heading); color: var(--color-text-heading);';

export const storyHeadingSection =
  'margin:0; font-family: var(--font-family-heading); font-size: var(--font-size-lg);';

export const storyTokenLabel =
  'padding: var(--space-3); color: var(--color-text-primary); font-size: var(--font-size-sm); line-height: var(--font-line-height-snug); word-break: break-word;';

export const storyDemoFrame =
  'display:grid; gap: var(--space-2); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle); background: color-mix(in srgb, var(--color-background-surface) 92%, transparent);';

export const storySampleCaption =
  'margin: 0; color: var(--color-text-secondary); font-size: var(--font-size-sm); line-height: var(--font-line-height-snug);';

export const storyPreviewTile =
  'aspect-ratio: 4/3; border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle); overflow: hidden;';
