import { expect, type Page, type Locator } from '@playwright/test';
import { criarMassaDeTeste } from '../utils/MassasDeTeste';


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
    const massa = criarMassaDeTeste();
    await this.page.getByRole('textbox', { name: 'Name' }).fill(`${massa.nome}`);
    await this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(`${massa.email}`);
    await this.page.getByRole('button', { name: 'Signup' }).click();
  }

  
}