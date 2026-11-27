import { test, expect } from '@playwright/test';
import ReadFiles from '../utils/ReadFiles';
import PageObjectManager from '../pages/PageObjectManager';
import { faker, fakerEN_IN } from '@faker-js/faker';
import { Random } from 'random-js';

let orderId: string;
let readFiles = new ReadFiles();
let poManager: PageObjectManager;
const random = new Random();

let prodData = readFiles.readJsonFile('./testdata/PlaceOrder.json');
// let prodData = readFiles.readJsonFile('./testdata/PlaceOrder.csv');
// let prodData = readFiles.readJsonFile('./testdata/PlaceOrder.xlsx');

for (const { prodName, country } of prodData) {

    test.describe(`Verify {Place order for  ${prodName}`, async () => {

        test.beforeEach('Before each', async ({ page }) => {
            console.log('Before each');
            poManager = new PageObjectManager(page);
            await page.goto(poManager.testData.getUrl());
            await poManager.loginPage.login(poManager.testData.getEmail(), poManager.testData.getPassword());
        });

        test.afterEach('After each', async () => {
            console.log('After each');
            await poManager.loginPage.signOut();
        });

        test('Print person details', async () => {
            // console.log(fakerEN_IN.person.firstName());
            // console.log(fakerEN_IN.person.lastName());
            // console.log(fakerEN_IN.person.fullName());
            // console.log(fakerEN_IN.internet.email());
            // console.log(fakerEN_IN.location.country());
            console.log(random.string(15));

        });

        test.skip(`Verigy place Order for the ${prodName} through orders page`, { tag: '@Regression' }, async () => {
            console.log('Test case 01');
            await poManager.placeOrderPage.addProdToCart(prodName);
            await poManager.placeOrderPage.navigateToCart();
            await poManager.placeOrderPage.placeOrder(country);
            orderId = await poManager.placeOrderPage.getOrderId();
            await poManager.placeOrderPage.navigateToOrders();
            await poManager.placeOrderPage.viewOrder(orderId);
            expect(orderId).toBe(await poManager.placeOrderPage.getOrderInSummaryPage());
            await poManager.placeOrderPage.clickViewOrdersButton();
        });

        test.skip(`Verigy place Order for the ${prodName} through orders history link`, { tag: '@Smoke' }, async () => {
            console.log('Test case 02');
            await poManager.placeOrderPage.addProdToCart(prodName);
            await poManager.placeOrderPage.navigateToCart();
            await poManager.placeOrderPage.placeOrder(country);
            orderId = await poManager.placeOrderPage.getOrderId();
            await poManager.placeOrderPage.clickOrderHistoryLink();
            await poManager.placeOrderPage.viewOrder(orderId);
            expect(orderId).toBe(await poManager.placeOrderPage.getOrderInSummaryPage());
            await poManager.placeOrderPage.clickViewOrdersButton();
        });

    });

}



