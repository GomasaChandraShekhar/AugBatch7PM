import { test, expect } from '@playwright/test';

test.skip('Handling one page/window', async ({ page, context }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');

    const newTabButton = page.getByRole('button', { name: 'New Tab' });
    const popupButton = page.getByRole('button', { name: 'Popup Windows' });

    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            newTabButton.click()
        ]
    );
    await newPage.waitForTimeout(5000);

    await newPage.bringToFront(); // to switch to the specific page/tab
    const sdetBlog = newPage.locator('h1.title');

    console.log('New page title is :: ', await newPage.title());
    await expect(sdetBlog).toBeVisible();
    console.log('New page text is :: ', await sdetBlog.innerText());

    await newPage.close();

    await page.bringToFront(); // to switch to the specific page/tab
    await expect(popupButton).toBeVisible();

});

test('Handling multiple pages/windows', async ({ page, context }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');

    const newTabButton = page.getByRole('button', { name: 'New Tab' });
    const popupButton = page.getByRole('button', { name: 'Popup Windows' });

    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            popupButton.click()
        ]
    );
    await page.waitForTimeout(10000);

    const pages = context.pages();
    console.log('Number of pages :: ', pages.length);

    const page1Title = await pages[0].title();
    const page2Title = await pages[1].title();
    const page3Title = await pages[2].title();

    console.log('Title of page 1 :: ', page1Title);
    // console.log('Title of page 2 :: ', page2Title);
    // console.log('Title of page 3 :: ', page3Title);

    await pages[1].bringToFront(); // Switches to Selenium page
    console.log('Title of page 2 :: ', await pages[1].title());
    const downloadsText = pages[1].locator(`//span[text()='Downloads']`);
    await expect.soft(downloadsText).toBeVisible();
    await pages[1].close();

    await pages[2].bringToFront(); // Switches to Playwright page
    console.log('Title of page 3 :: ', await pages[2].title());
    const playwrightText = pages[2].locator(`//b[text()='Playwright']`).nth(0);
    await expect.soft(playwrightText).toBeVisible();
    await pages[2].close();

    await page.bringToFront(); // to switch to the first page
    await expect(popupButton).toBeVisible();
    await page.close();

});






