import { test, expect } from '@playwright/test';

// test.describe.configure({ mode: 'serial' });

test('has title 001', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  console.log('has title  001');
});

test('get started link  002', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  console.log('get started link  002');

});

test('has title  003', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  console.log('has title  003');
});

test('get started link  004', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Pplaywright/);
  console.log('get started link  004');
});

