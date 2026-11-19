import { test, expect } from '@playwright/test';

test('has title 001', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    await page.getByRole('textbox', { name: 'email@example.com' }).fill('splaywright@gmail.com');
    await page.getByRole('textbox', { name: 'enter your passsword' }).fill('Gomasa@1988');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('ADIDAS ORIGINAL')).toBeVisible();
    await expect(page.locator('#products')).toContainText('ADIDAS ORIGINAL');
    await page.getByRole('button', { name: ' Add To Cart' }).first().click();
    await page.getByRole('button', { name: '   Cart' }).click();
    // await page.pause();
    await expect(page.getByRole('button', { name: 'Checkout❯' })).toBeVisible();
    await page.getByRole('button', { name: 'Checkout❯' }).click();
    await page.getByRole('textbox', { name: 'Select Country' }).pressSequentially('India');
    await page.getByRole('button', { name: ' India' }).click();
    await page.getByText('Place Order').click();
    await expect(page.getByRole('heading', { name: 'Thankyou for the order.' })).toBeVisible();
    await page.getByRole('button', { name: '   ORDERS' }).click();
    await page.getByRole('button', { name: 'View' }).first().click();
    await page.getByText('View Orders').click();
    await page.getByRole('button', { name: 'Sign Out' }).click();


});


