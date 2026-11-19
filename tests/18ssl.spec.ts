import { test, Browser, BrowserContext, Page, chromium } from '@playwright/test';

let browser: Browser;
let context: BrowserContext;
let page: Page;

test('Handling SSL elements', async () => {

    browser = await chromium.launch();
    context = await browser.newContext({
        viewport: { width: 1400, height: 700 },
        ignoreHTTPSErrors: true
    }

    );
    page = await context.newPage();

    await page.goto('https://expired.badssl.com/');
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

});



