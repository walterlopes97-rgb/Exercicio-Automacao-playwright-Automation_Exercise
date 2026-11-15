# Automação de Testes E2E - Automation Exercise

Projeto de automação de testes End-to-End (E2E) desenvolvido com **Playwright** e **TypeScript**, focado na validação dos fluxos funcionais da plataforma [Automation Exercise](https://automationexercise.com/).

## Arquitetura e Tecnologias

* **Playwright**: Framework principal para execução dos testes automatizados.
* **TypeScript**: Linguagem utilizada para maior segurança de tipos e manutenibilidade do código.
* **Page Object Model (POM)**: Padrão de projeto adotado para separar a lógica das páginas (`page/`) das especificações de teste (`tests/`), facilitando o reaproveitamento e a manutenção.
* **Faker.js (`@faker-js/faker`)**: Geração dinâmica de massas de dados (nomes, e-mails, endereços) para garantir independência entre as execuções.

## Como Executar

1. **Instale as dependências:**
   ```bash
   npm install
   npx playwright install
   npx playwright test
   npx playwright show-report
   ---

Se você já tiver adicionado os atalhos na seção `"scripts"` do seu `package.json`, basta substituir os comandos nos passos 3 e 4 por `npm test` e `npm run report`.
