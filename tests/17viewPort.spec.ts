import { test, Browser, BrowserContext, Page, chromium } from '@playwright/test';

let browser: Browser;
let context: BrowserContext;
let page: Page;

test('Handling viewport elements', async () => {

    browser = await chromium.launch();
    context = await browser.newContext({ viewport: { width: 1400, height: 700 } });
    page = await context.newPage();

    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const shadowDom = page.locator('#userName');
    const userNameField = shadowDom.locator('#kils');
    const pwdField = page.locator('#pwd');

    await userNameField.fill('Playwright');

    // await pwdField.fill('Playwright');
});



