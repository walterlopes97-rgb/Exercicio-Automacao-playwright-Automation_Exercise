import { expect, type Page, type Locator } from '@playwright/test';

export class PageProducts {
    readonly page: Page;
    readonly locator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.locator = page.locator('body');
    }
    async navigateToProductsPage() {
        await this.page.goto('/products');
        await expect(this.page.locator('body')).toContainText('All Products');
    }
    async validateProductsPage() {
        await expect(this.page).toHaveURL('/products');
        await expect(this.page.locator('body')).toContainText('All Products');
    }

    async validarProdutosBuscados(termoBuscado: string) {
        await this.page.getByRole('textbox', { name: 'Search Product' }).fill(termoBuscado);
        await this.page.locator('#submit_search').click();
        await expect(this.page.locator('body')).toContainText('Searched Products');
        // Localiza os títulos de todos os produtos exibidos nos cards de resultado
        const titulosProdutos = await this.page.locator('.features_items .productinfo p');

        // Garante que pelo menos 1 produto foi encontrado antes de iniciar o loop
        await expect(titulosProdutos.first()).toBeVisible();
        const termoNormalizado = termoBuscado.replace(/[-\s]/g, '').toLowerCase();

        // Percorre cada título encontrado
        for (const produto of await titulosProdutos.all()) {
            await expect(produto).toBeVisible();
            const textoProduto = await produto.innerText();
            const textoNormalizado = textoProduto.replace(/[-\s]/g, '').toLowerCase();
            // Valida se o nome do produto contém o termo pesquisado (ignorando maiúsculas/minúsculas)
            expect(textoNormalizado).toContain(termoNormalizado);
        }
    }

    async validarProdutosBuscadosSemResultados() {
        const titulosProdutos = this.page.locator('.features_items .productinfo p');
        await expect(titulosProdutos).toHaveCount(0);
    }

}