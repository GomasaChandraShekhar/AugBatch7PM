import { test, expect } from '@playwright/test';

test('Handling nested frames', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');

    // await page.pause();

    const submitBtn = page.locator('button.submit-btn');
    const atpText = page.locator(`h1.title`);
    const result = page.locator('div.result');
    const blogLink = page.locator(`//a[text()='Blog']`);
    const chooseFile = page.locator('#singleFileInput');
    const sourceEle = page.locator('#draggable');
    const targetEle = page.locator('#droppable');

    await page.pause();

    // Left click
    // await submitBtn.click({ button: 'left' });
    // await expect(result).toBeVisible();

    // Right Click
    // await blogLink.click({ button: 'right' });

    // middle click
    // await atpText.click({ button: 'middle' });

    // mouse hover
    // await submitBtn.hover();
    // await blogLink.hover();

    // drag and drop
    // await sourceEle.dragTo(targetEle);

    // double click
    // await atpText.dblclick();


    // scroll to the element
    // await submitBtn.scrollIntoViewIfNeeded();

    // await page.pause();
    // await blogLink.scrollIntoViewIfNeeded();





});



