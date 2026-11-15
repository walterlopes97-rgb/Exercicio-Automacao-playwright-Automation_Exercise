import { expect, type Page, type Locator } from '@playwright/test';

export class PageHome {
  readonly page: Page;
  readonly locator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locator = page.locator('body');
  }

  async navigateToHomePage() {
    await this.page.goto('/');
  }

  async validateHomePage() {
    await expect(this.page).toHaveURL('https://automationexercise.com/');
    await expect(this.page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  }

  async clicarNoBotaoSignupLogin() {
       await this.page.getByRole('link', { name: ' Signup / Login' }).click();
  }

  async cofirmarUserLogado() {
    await expect(this.page.locator('#header')).toContainText('Logged in as');
  }

  async clicarNoBotaoDeleteAccount() {
    await this.page.getByRole('link', { name: ' Delete Account' }).click();
    await expect(this.page.locator('b')).toContainText('Account Deleted!');
  }


}