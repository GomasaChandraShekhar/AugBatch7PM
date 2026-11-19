import { test, expect } from '@playwright/test';

test('Screenshot capture and comparision', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');

    const atpText = page.getByRole('heading', { name: 'Automation Testing Practice', level: 1 });

    await atpText.screenshot({ path: './screenshots/atpText.jpg' });
    await page.screenshot({ path: './screenshots/visiblePage.jpg' });
    await page.screenshot({ path: './screenshots/fullPage.jpg', fullPage: true });

    expect(await atpText.screenshot({ path: './screenshots/atpText.jpg' })).toMatchSnapshot();
    expect(await page.screenshot({ path: './screenshots/visiblePage.jpg' })).toMatchSnapshot();
    // expect(await page.screenshot({ path: './screenshots/fullPage.jpg', fullPage: true })).toMatchSnapshot();

});
