import { test, expect } from '@playwright/test';

test.skip('Handling Radio Button', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');

    await page.pause();

    const maleRdButton = page.locator('#male');
    const femaleRdButton = page.locator('#female');

    await maleRdButton.check(); // selected - true
    expect(await maleRdButton.isChecked(), 'Expecting male radio button is selected and true').toBeTruthy();

    await femaleRdButton.check(); // selected - true
    expect.soft(await maleRdButton.isChecked(), 'Expecting male radio button is not selected and false').toBeFalsy();
    expect.soft(await femaleRdButton.isChecked(), 'Expecting female radio button is selected and true').toBeTruthy();


});


test('Handling Check Box', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');

    await page.pause();

    const sundayCB = page.getByRole('checkbox', { name: 'Sunday' });
    const mondayCB = page.getByRole('checkbox', { name: 'Monday' });
    const TuesdayCB = page.getByRole('checkbox', { name: 'Tuesday' });
    const wednesdayCB = page.getByRole('checkbox', { name: 'Wednesday' });

    await sundayCB.check();
    expect(await sundayCB.isChecked()).toBeTruthy();

    await sundayCB.uncheck();
    expect(await sundayCB.isChecked()).toBeFalsy();

    await TuesdayCB.check();
    expect(await TuesdayCB.isChecked()).toBeTruthy();

    await wednesdayCB.check();
    expect(await wednesdayCB.isChecked()).toBeTruthy();

    await wednesdayCB.uncheck();
    expect(await wednesdayCB.isChecked()).toBeFalsy();

    await mondayCB.check();
    expect(await mondayCB.isChecked()).toBeTruthy();

});

