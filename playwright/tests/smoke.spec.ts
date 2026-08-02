import { expect, test } from '@playwright/test';

test('docs landing page loads', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'Nightcall UI' })).toBeVisible();
});
