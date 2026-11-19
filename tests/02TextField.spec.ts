
import { test } from '@playwright/test';


test('First Test', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');
    // await page.pause();

    const nameField = page.getByRole('textbox', { name: 'Enter Name', exact: true });

    // To insert data in text field
    await nameField.fill('Playwright');

    // Capture data from the field
    const nameFieldData = await nameField.inputValue();
    console.log(nameFieldData);

    await nameField.clear();

});









