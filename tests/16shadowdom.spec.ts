import { test } from '@playwright/test';

test('Handling shadowDom elements', async ({ page }) => {
    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await page.waitForLoadState('domcontentloaded');
    // await page.pause();

    const shadowDom = page.locator('#userName');
    const userNameField = shadowDom.locator('#kils1');
    const nameFieldReg = page.locator(`//input[@name='email']`);
    const pwdField = page.locator('#pwd');

    await nameFieldReg.fill('Playwright');

    // await pwdField.fill('Playwright');
});



