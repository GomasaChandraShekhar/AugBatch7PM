import { test } from '@playwright/test';

test('Handling Web Table', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');


    const taskTable = page.locator('#taskTable');
    await taskTable.scrollIntoViewIfNeeded();
    const headerRowCells = await taskTable.locator('thead tr th').all();

    // for (let ind = 0; ind < headerRowCells.length; ind++) {
    //     const celllData = await headerRowCells.at(ind)?.innerText();
    //     console.log(`Header row cell data is ${celllData}`);
    // }

    // for (const cell of headerRowCells) {
    //     const celllData = await cell.innerText();
    //     console.log(`Header row cell data is ${celllData}`);
    // }

    // const rows = await taskTable.locator('tbody tr').all();
    await page.pause();
    // for (const row of rows) {
    //     const columns = await row.locator('td').all();
    //     for (const cell of columns) {
    //         const cellData = await cell.innerText();
    //         console.log(`Cell Data is :: ${cellData}`);
    //     }
    // }

    const rows = taskTable.locator('tbody tr');

    for (let rInd = 0; rInd < await rows.count(); rInd++) {
        const columns = rows.nth(rInd).locator('td');
        for (let cInd = 0; cInd < await columns.count(); cInd++) {
            const browseName = await columns.nth(0).innerText()
            if (browseName === 'Chrome') {
                const cellData = await columns.nth(cInd).innerText();
                console.log(`Cell Data is :: ${cellData}`);
            }
        }
    }



});


