import { test } from '@playwright/test';
import { PageHome } from '../page/PageHome';
import { PageLogin } from '../page/PageLogin';
import { PageSingup } from '../page/PageSingup';

test('Cenario 01: Cadastro e exclusao de usuario', async ({ page }) => {
    const pageHome = new PageHome(page);
    await pageHome.navigateToHomePage();
    await pageHome.validateHomePage();
    await pageHome.clicarNoBotaoSignupLogin();
    const pageLogin = new PageLogin(page);
    await pageLogin.validateLoginPage();
    await pageLogin.criarConta();
    const pageSingup = new PageSingup(page);
    await pageSingup.validateSingupPage();
    await pageSingup.preencherFormularioDeCadastro();
    await pageSingup.validateAccountCreated();
    await pageHome.cofirmarUserLogado();
    await pageHome.clicarNoBotaoDeleteAccount();
});