import { test, expect } from '@playwright/test';

test('has title and can navigate to login', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/MANTIS/);
  
  const loginLink = page.getByRole('link', { name: 'Log in' });
  await loginLink.click();
  
  await expect(page.getByRole('heading', { name: 'Welcome back' })).toBeVisible();
});
