import { test } from '@playwright/test';

const date = '2';
const month = 'July';
const year = '2026';
let flag: boolean = true;
const date01 = '03/12/2026';

test('Handling Calender', async ({ page }) => {

    await page.goto('https://jqueryui.com/datepicker/');
    await page.waitForLoadState('domcontentloaded');

    const frame = page.frameLocator('.demo-frame');
    const dateField = frame.locator('#datepicker');
    const prevButton = frame.getByTitle('Prev');
    const nextButton = frame.getByTitle('Next');
    const monthValue = frame.locator('.ui-datepicker-month');
    const yearValue = frame.locator('.ui-datepicker-year');
    const dateValue = frame.getByRole('link', { name: `${date}`, exact: true });

    await page.pause();

    await dateField.click();
    // await dateField.fill('10/27/2026');

    do {
        if (await monthValue.innerText() == month &&
            await yearValue.innerText() == year) {
            await dateValue.click();
            flag = false;
        } else {
            // await nextButton.click();
            await prevButton.click();
        }
    } while (flag);

});


