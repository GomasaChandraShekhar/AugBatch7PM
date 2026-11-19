import { test, expect } from '@playwright/test';

test('Handling Simple Alert', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');

    const simpleAlert = page.getByText('Simple Alert');
    const confirmationAlert = page.getByText('Confirmation Alert');
    const promptAlert = page.getByText('Prompt Alert');
    const displayMessage = page.locator('#demo');

    // await page.pause();

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        console.log(dialog.type());
        await dialog.accept('Playwright');
        // await dialog.dismiss();
    });

    // await simpleAlert.click();
    // await confirmationAlert.click();
    await promptAlert.click();
    expect(displayMessage).toBeVisible();
    console.log(await displayMessage.innerText());

});








