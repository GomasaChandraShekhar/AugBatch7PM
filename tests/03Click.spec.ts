import { test, expect } from '@playwright/test';

test('Click Action', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');

    await page.pause();

    const PlaywrightPracticeLink = page.getByRole('link', { name: 'PlaywrightPractice' });
    const PlaywrightPracticeText = page.getByRole('heading', { name: 'PlaywrightPractice' });
    const HomeLink = page.getByRole('link', { name: 'Home' });
    const NameField = page.getByRole('textbox', { name: 'Enter Name' });


    await PlaywrightPracticeLink.click();
    await page.waitForLoadState('domcontentloaded');
    await expect(PlaywrightPracticeText).toBeVisible();

    const textData = await PlaywrightPracticeText.innerText();
    // expect(textData).toStrictEqual('PlaywrightPractice909'); // Hard Assertion
    expect.soft(textData).toStrictEqual('PlaywrightPractice909'); // Soft Assertion

    await HomeLink.first().click();
    await expect(NameField).toBeVisible();


});