import { type Page, expect, type Locator } from '@playwright/test';

export default class LoginPage {

  readonly page: Page;
  readonly userName: Locator;
  readonly userPassword: Locator;
  readonly loginButton: Locator;
  readonly signOutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userName = this.page.getByRole('textbox', { name: 'email@example.com' });
    this.userPassword = this.page.getByRole('textbox', { name: 'enter your passsword' })
    this.loginButton = this.page.getByRole('button', { name: 'Login' });
    this.signOutButton = this.page.getByRole('button', { name: 'Sign Out' });
  }

  async goto(url: string) {
    await this.page.goto(url);
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.loginButton).toBeVisible();
  }

  async login(email: string, password: string) {
    await this.userName.fill(email);
    await this.userPassword.fill(password);
    await this.loginButton.click();
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.signOutButton).toBeVisible();
  }

  async signOut() {
    await this.signOutButton.click();
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.loginButton).toBeVisible();
  }




}