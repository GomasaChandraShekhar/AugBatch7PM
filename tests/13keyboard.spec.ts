import { test, expect, type Locator } from '@playwright/test';

test("Key Board Actions", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');

    const nameField = page.locator('input#name');
    const emailField = page.locator('input#email');

    await page.pause();

    await nameField.fill('Playwright');
    await nameField.clear();

    await nameField.pressSequentially('Playwright', { delay: 1000 });

    await nameField.press('Control+A');
    await nameField.press('Control+X');
    await emailField.press('Control+V');

});