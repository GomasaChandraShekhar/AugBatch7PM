import { expect, type Page, type Locator } from "@playwright/test";

export default class PlaceOrderPage {

    readonly page: Page;
    readonly prodCards: Locator;
    readonly myCartButton: Locator;
    readonly cartButton: Locator;
    readonly ordersButton: Locator;
    readonly checkoutButton: Locator;
    readonly selectCountrydrp: Locator;
    readonly countryOption: Locator;
    readonly placeOrderButton: Locator;
    readonly orderIdText: Locator;
    readonly orderPlacedMessage: Locator;
    readonly orderIdInOrderSummaryPage: Locator;
    readonly viewOrdersButton: Locator;
    readonly ordersHistoryLink: Locator;
    readonly ordersTable: Locator;
    readonly rows: Locator;
    readonly ordersLink: Locator;

    constructor(page: Page) {

        this.page = page;
        this.prodCards = this.page.locator('div.card-body');
        this.myCartButton = this.page.locator(`button[routerlink*='cart']`);
        this.cartButton = this.page.getByRole('button', { name: ' Cart' });
        this.ordersButton = this.page.getByRole('button', { name: ' ORDERS' });
        this.checkoutButton = this.page.getByRole('button', { name: 'Checkout❯' });
        this.selectCountrydrp = this.page.getByRole('textbox', { name: 'Select Country' });
        this.countryOption = this.page.locator('button.list-group-item');
        this.placeOrderButton = this.page.getByText('Place Order');
        this.orderIdText = this.page.locator(`label.ng-star-inserted`);
        this.orderPlacedMessage = this.page.getByLabel('Order Placed Successfully');
        this.orderIdInOrderSummaryPage = this.page.locator('div.col-text.-main');
        this.viewOrdersButton = this.page.getByText('View Orders');
        this.ordersHistoryLink = this.page.getByText('Orders History Page');
        this.ordersLink = this.page.locator("button[routerlink*='myorders']");
        this.ordersTable = this.page.locator(`table.ng-star-inserted`);
        this.rows = this.ordersTable.locator('tbody tr');


    }

    async addProdToCart(prodName: string) {
        await expect.soft(this.prodCards.first()).toBeVisible();
        const allProducts = await this.prodCards.all();
        for (const prod of allProducts) {
            console.log(`Product Name :: ${await prod.locator("//b").innerText()}`);
            if (await prod.locator("//b").innerText() == prodName) {
                await prod.getByRole('button', { name: ' Add To Cart' }).click();
                break;
            }
        }
    }

    async navigateToCart() {
        await this.myCartButton.click();
        await expect.soft(this.checkoutButton).toBeVisible();
    }

    async placeOrder(country: string) {
        await this.checkoutButton.click();
        await this.selectCountrydrp.pressSequentially(country);
        await expect(this.page.getByText(country).last()).toBeVisible();
        await this.page.getByText(country).last().click();
        await this.placeOrderButton.click();
    }


    async getOrderId(): Promise<string> {
        await expect(this.orderIdText).toBeVisible();
        let orderId = (await this.orderIdText.innerText()).replaceAll('|', '').trim();
        // orderId = orderId.replaceAll('|', '').trim();
        console.log(`OrderId is :: ${orderId}`);
        return orderId;
    }

    async clickOrderHistoryLink() {
        await this.ordersHistoryLink.click();
        await expect.soft(this.ordersTable).toBeVisible();
    }

    async navigateToOrders() {
        await this.ordersButton.click();
        await expect.soft(this.ordersTable).toBeVisible();
    }

    async viewOrder(orderId: string) {
        await expect(this.ordersTable).toBeVisible();
        for (const row of await this.rows.all()) {
            const orderIdFromTable = await row.locator('th').innerText();
            if (orderId == orderIdFromTable) {
                await row.getByText('View').click();
                break;
            }
        }
    }

    async verifyOrderInSummaryPage(orderId: string) {
        await expect(this.orderIdInOrderSummaryPage).toContainText(orderId);
    }

    async getOrderInSummaryPage(): Promise<string> {
        return (await this.orderIdInOrderSummaryPage.innerText()).trim();
    }

    async clickViewOrdersButton() {
        await this.viewOrdersButton.click();
        await expect(this.ordersTable).toBeVisible();
    }


}

