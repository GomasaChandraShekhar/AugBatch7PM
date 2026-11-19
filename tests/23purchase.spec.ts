import { test, expect } from '@playwright/test';

// test.describe.configure({ mode: 'serial' });

test('Place Order', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.getByRole('textbox', { name: 'email@example.com' }).fill('splaywright@gmail.com');
    await page.getByRole('textbox', { name: 'enter your passsword' }).fill('Gomasa@1988');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('button', { name: 'Sign Out' })).toBeVisible();
    await expect(page.locator('#products')).toContainText('ADIDAS ORIGINAL');
    await page.getByRole('button', { name: ' Add To Cart' }).first().click();
    await page.getByRole('button', { name: '   Cart' }).click();
    await expect(page.getByRole('heading', { name: 'ADIDAS ORIGINAL' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Checkout❯' })).toBeVisible();
    await page.getByRole('button', { name: 'Checkout❯' }).click();
    await page.getByRole('textbox', { name: 'Select Country' }).fill('india');
    await page.getByRole('button', { name: ' India' }).click();
    await expect(page.getByText('Place Order')).toBeVisible();
    await page.getByText('Place Order').click();
    await expect(page.locator('h1')).toContainText('Thankyou for the order.');
    await page.getByRole('button', { name: '   ORDERS' }).click();
    await expect(page.locator('tbody')).toContainText('6afdac8af1e24e33a3b9590e');
    await expect(page.locator('tbody')).toContainText('ADIDAS ORIGINAL');
    await page.getByRole('button', { name: 'View' }).first().click();
    await expect(page.locator('app-order-details')).toContainText('6afdac8af1e24e33a3b9590e');
    await page.getByText('View Orders').click();
    await page.getByRole('button', { name: 'Sign Out' }).click();
});



