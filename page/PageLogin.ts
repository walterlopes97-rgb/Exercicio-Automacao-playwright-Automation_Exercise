import { expect, type Page, type Locator } from '@playwright/test';

export class PageLogin {
  readonly page: Page;
  readonly locator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locator = page.locator('body');
  }

  async navigateToLoginPage() {
    await this.page.goto('/login');
    await expect(this.page).toHaveURL('/login');
  }

  async validateLoginPage() {
    await expect(this.page).toHaveURL('/login');
    await expect(this.page.locator('#form')).toContainText('New User Signup!');
    await expect(this.page.locator('#form')).toContainText('Login to your account');
  }

  async criarConta() {
    await this.page.getByRole('textbox', { name: 'Name' }).fill('habicho');
    await this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(`habicho${new Date().getUTCDay()}@gmail.com`);
    await this.page.getByRole('button', { name: 'Signup' }).click();
  }

  
}