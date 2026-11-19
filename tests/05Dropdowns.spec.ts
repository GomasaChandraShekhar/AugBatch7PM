import { test, expect } from '@playwright/test';

test.skip('Handling SIngle selection dropdowns', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');

    // await page.pause();

    const countryDrpdwn = page.getByRole('combobox', { name: 'Country' });
    const countryOptions = countryDrpdwn.locator('option');

    await countryDrpdwn.selectOption({ value: 'uk' }); // value attribute uk
    console.log(await countryDrpdwn.inputValue());

    await countryDrpdwn.selectOption('Japan'); // label Japan
    console.log(await countryDrpdwn.inputValue());

    await countryDrpdwn.selectOption({ index: 9 }); // index India
    console.log(await countryDrpdwn.inputValue());

    // console.log(await countryDrpdwn.innerText()); // 

    // console.log(await countryDrpdwn.allInnerTexts()); // 

    // console.log(await countryDrpdwn.textContent()); // 

    // console.log(await countryDrpdwn.allTextContents()); // 

    console.log(await countryOptions.count());

    const options = await countryOptions.all();

    for (const option of options) {
        // console.log(await option.innerText());
        console.log(await option.textContent());
    }



});


test.skip('Handling multi selection dropdowns', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');

    await page.pause();

    const coloursListbox = page.getByRole('listbox', { name: 'colors' });
    const colourOptions = coloursListbox.locator('option');

    await coloursListbox.selectOption([{ value: 'green' }, { value: 'red' }]); // value attribute uk
    console.log(await coloursListbox.inputValue());

    await coloursListbox.selectOption(['Red', 'Green', 'White']);
    console.log(await coloursListbox.inputValue());

    await coloursListbox.selectOption({ index: 3 }); // index India
    console.log(await coloursListbox.inputValue());

    // console.log(await coloursListbox.innerText()); // 

    // console.log(await coloursListbox.allInnerTexts()); // 

    // console.log(await coloursListbox.textContent()); // 

    // console.log(await coloursListbox.allTextContents()); // 

    console.log(await colourOptions.count());

    const options = await colourOptions.all();

    for (const option of options) {
        // console.log(await option.innerText());
        console.log(await option.textContent());
    }



});

test('Auto Suggestion', async ({ page }) => {
    await page.goto('https://www.google.com');
    await page.waitForLoadState('domcontentloaded');

    await page.pause();

    const searchTexBox = page.locator(`[name='q']`);
    const autoSuggns = page.locator('ul.G43f7e li');
    const result = page.locator('#_xDDSatTGFb6PnesPherZwQk_58');

    await searchTexBox.fill('Playwright');

    for (const option of await autoSuggns.all()) {
        let suggestion = await option.innerText();
        if (suggestion == 'playwright documentation') {
            await option.click();
            await expect(result).toBeVisible();
        }
    }


});








