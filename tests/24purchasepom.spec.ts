import { test, expect } from '@playwright/test';
import Constants from '../testdata/Constants';
import ReadFiles from '../utils/ReadFiles';

let orderId: string;
let constants = new Constants();
let readFiles = new ReadFiles();

// let prodData = readFiles.readJsonFile('./testdata/PlaceOrder.json');
// let prodData = readFiles.readJsonFile('./testdata/PlaceOrder.csv');
let prodData = readFiles.readJsonFile('./testdata/PlaceOrder.xlsx');

for (const { prodName, country } of prodData) {

    test(`Place Order ${prodName}`, async ({ page }) => {
        await page.goto(constants.getUrl());
        await page.getByRole('textbox', { name: 'email@example.com' }).fill(constants.getEmail());
        await page.getByRole('textbox', { name: 'enter your passsword' }).fill(constants.getPassword());
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByRole('button', { name: 'Sign Out' })).toBeVisible();
        await expect(page.locator('#products')).toContainText(prodName);
        await page.getByRole('button', { name: ' Add To Cart' }).first().click();
        await page.getByRole('button', { name: '   Cart' }).click();
        await expect(page.getByRole('heading', { name: prodName })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Checkout❯' })).toBeVisible();
        await page.getByRole('button', { name: 'Checkout❯' }).click();
        await page.getByRole('textbox', { name: 'Select Country' }).pressSequentially(country);
        await page.getByRole('button', { name: country }).click();
        await expect(page.getByText('Place Order')).toBeVisible();
        await page.getByText('Place Order').click();
        await expect(page.locator('h1')).toContainText('Thankyou for the order.');
        orderId = (await page.locator('label.ng-star-inserted').innerText()).replaceAll('|', '').trim();
        await page.getByRole('button', { name: '   ORDERS' }).click();
        await expect(page.locator('tbody')).toContainText(orderId);
        await expect(page.locator('tbody')).toContainText(prodName);
        await page.getByRole('button', { name: 'View' }).first().click();
        await expect(page.locator('app-order-details')).toContainText(orderId);
        await page.getByText('View Orders').click();
        await page.getByRole('button', { name: 'Sign Out' }).click();
    });

}



