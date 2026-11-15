import { expect, type Page, type Locator } from '@playwright/test';
import { criarMassaDeTeste } from '../utils/MassasDeTeste';


export class PageSingup {
    readonly page: Page;
    readonly locator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.locator = page.locator('body');
    }

    async validateSingupPage() {
        await expect(this.page).toHaveURL('/signup');
        await expect(this.page.locator('#form')).toContainText('Enter Account Information');
        await expect(this.page.locator('#form')).toContainText('Address Information');
    }

    async preencherFormularioDeCadastro() {
        const massa = criarMassaDeTeste();
        if (massa.sexo === 'Masculino') {
            await this.page.getByRole('radio', { name: 'Mr.' }).check();
        } else {
            await this.page.getByRole('radio', { name: 'Mrs.' }).check();
        }
        await this.page.getByRole('textbox', { name: 'Password *' }).fill(`${massa.senha}`);
        await this.page.locator('#days').selectOption(massa.dataNascimento.getDay().toString());
        await this.page.locator('#months').selectOption((massa.dataNascimento.getMonth() + 1).toString());
        await this.page.locator('#years').selectOption(massa.dataNascimento.getFullYear().toString());
        await this.page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
        await this.page.getByRole('checkbox', { name: 'Receive special offers from our partners!' }).check();
        await this.page.getByRole('textbox', { name: 'First name *' }).fill(`${massa.nome}`);
        await this.page.getByRole('textbox', { name: 'Last name *' }).fill(`${massa.sobrenome}`);
        await this.page.getByRole('textbox', { name: 'Company', exact: true }).fill(massa.sexo);
        await this.page.getByRole('textbox', { name: 'Address *' }).fill(`${massa.endereco}`);
        await this.page.getByRole('textbox', { name: 'Address 2' }).fill(`${massa.endereco}`);
        await this.page.getByLabel('Country *').selectOption('Canada');
       // await this.page.getByRole('combobox', { name: 'Country *' }).selectOption({ label: massa.estado });
        await this.page.getByRole('textbox', { name: 'State' }).fill(`${massa.estado}`);
        await this.page.locator('#zipcode').fill(`${massa.cidade}`);
        await this.page.getByRole('textbox', { name: 'Zipcode *' }).fill(`${massa.cep}`);
        await this.page.getByRole('textbox', { name: 'Mobile Number *' }).fill(`${massa.numeroTelefone}`);
        await this.page.getByRole('button', { name: 'Create Account' }).click();
    }

    async validateAccountCreated() {
        await expect(this.page.locator('b')).toContainText('Account Created!');
        await this.page.getByRole('link', { name: 'Continue' }).click();
    }



}