import { test, expect } from '@playwright/test';

test("File upload", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/download");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const gitDoxDownloadLink = page.getByRole('link', { name: 'Git.docx' });

    const [download] = await Promise.all(
        [
            page.waitForEvent('download'),
            gitDoxDownloadLink.click()
        ]
    );
    download.saveAs(`./downloads/${download.suggestedFilename()}`);

});