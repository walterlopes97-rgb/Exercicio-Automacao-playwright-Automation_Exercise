import { test, expect } from '@playwright/test';
import { PageHome } from '../page/PageHome';
import { PageProducts } from '../page/PageProducts';

test('Cenario 02: Busca de Produtos e Validação de Resultados', async ({ page }) => {
    const pageHome = new PageHome(page);
    await pageHome.navigateToHomePage();
    await pageHome.validateHomePage();
    await pageHome.irParaPaginadeProdutos();
    const pageProducts = new PageProducts(page);
    await pageProducts.validateProductsPage();
    await pageProducts.validarProdutosBuscados('camisa');
});