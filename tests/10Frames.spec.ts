import { test, expect } from '@playwright/test';

test.skip('Handling single frame', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/Frames.html');
    await page.waitForLoadState('domcontentloaded');

    const singleFrame = page.frameLocator(`#singleframe`);
    const textField = singleFrame.locator(`//input[@type='text']`);
    // await page.pause();

    await textField.fill('A text field');

});


test('Handling nested frames', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/Frames.html');
    await page.waitForLoadState('domcontentloaded');

    const nestedFrameLink = page.locator(`//a[text()='Iframe with in an Iframe']`);
    const ParentFrame = page.frame({ url: 'https://demo.automationtesting.in/MultipleFrames.html' });
    const childFrames = ParentFrame?.childFrames();
    const textField = childFrames?.at(0)?.locator(`//input[@type='text']`);

    await page.pause();

    await nestedFrameLink.click();
    await textField?.fill('A text field');

});

