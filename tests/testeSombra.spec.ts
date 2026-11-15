import { test, expect } from '@playwright/test';
import { PageHome } from '../page/PageHome';
import { PageLogin } from '../page/PageLogin';

test('Cadastro_e_Exclusão_de_Usuário', async ({ page }) => {
    /*await page.goto('https://automationexercise.com/');
    await page.goto('https://automationexercise.com/#google_vignette');
    await expect(page.locator('#header')).toMatchAriaSnapshot(`
      - link "Website for automation practice":
        - /url: /
        - img "Website for automation practice"
      `);
    await expect(page.locator('div').nth(3)).toBeVisible();
    await expect(page.locator('#header')).toMatchAriaSnapshot(`
      - link "Website for automation practice":
        - /url: /
        - img "Website for automation practice"
      - list:
        - listitem:
          - link " Home":
            - /url: /
        - listitem:
          - link " Products":
            - /url: /products
        - listitem:
          - link " Cart":
            - /url: /view_cart
        - listitem:
          - link " Signup / Login":
            - /url: /login
        - listitem:
          - link " Test Cases":
            - /url: /test_cases
        - listitem:
          - link " API Testing":
            - /url: /api_list
        - listitem:
          - link " Video Tutorials":
            - /url: https://www.youtube.com/c/AutomationExercise
        - listitem:
          - link " Contact us":
            - /url: /contact_us
      `);
    await page.getByRole('textbox', { name: 'Name' }).click();*/
    const pageHome = new PageHome(page);
    await pageHome.navigateToHomePage();
    await pageHome.validateHomePage();
    await pageHome.clicarNoBotaoSignupLogin();
    const pageLogin = new PageLogin(page);
    await pageLogin.validateLoginPage();
    await pageLogin.criarConta();
   /* await page.getByRole('textbox', { name: 'Name' }).fill('habicho');
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('habicho@gmail.com');
    await page.getByRole('button', { name: 'Signup' }).click();
    */
    await page.getByRole('radio', { name: 'Mr.' }).check();
    await page.getByRole('textbox', { name: 'Password *' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill('454156W@l');
    await page.locator('#days').selectOption('8');
    await page.locator('#months').selectOption('8');
    await page.locator('#years').selectOption('2002');
    await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
    await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
    await page.getByRole('textbox', { name: 'First name *' }).click();
    await page.getByRole('textbox', { name: 'First name *' }).fill('habicho');
    await page.getByRole('textbox', { name: 'First name *' }).click();
    await page.getByRole('textbox', { name: 'Last name *' }).click();
    await page.getByRole('textbox', { name: 'Last name *' }).fill('cain silva');
    await page.getByRole('textbox', { name: 'Company', exact: true }).click();
    await page.getByRole('textbox', { name: 'Company', exact: true }).fill('mr');
    await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).click();
    await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('rua tatua pe');
    await page.getByRole('textbox', { name: 'Address 2' }).click();
    await page.getByRole('textbox', { name: 'Address 2' }).fill('156');
    await page.getByRole('textbox', { name: 'State *' }).click();
    await page.getByRole('textbox', { name: 'State *' }).fill('california');
    await page.getByRole('textbox', { name: 'City * Zipcode *' }).click();
    await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('maxico');
    await page.locator('#zipcode').click();
    await page.locator('#zipcode').fill('01001000');
    await page.getByRole('textbox', { name: 'Mobile Number *' }).click();
    await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('81988885888');
    await page.getByRole('textbox', { name: 'Mobile Number *' }).click();
    await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('+5581988885888');
    await page.getByRole('button', { name: 'Create Account' }).click();
    await expect(page.locator('b')).toContainText('Account Created!');
    await expect(page.locator('#form')).toMatchAriaSnapshot(`
    - heading "Account Created!" [level=2]
    - paragraph:
      - text: Congratulations! Your new account has been successfully created!
      - link "Get Writing Tools":
        - img
        - text: ""
    - paragraph: You can now take advantage of member privileges to enhance your online shopping experience with us.
    - link "Continue":
      - /url: /
    `);
    await page.getByRole('link', { name: 'Continue' }).click();
    await expect(page.locator('#header')).toContainText('Logged in as habicho');
    await page.getByRole('link', { name: ' Delete Account' }).click();
    await expect(page.locator('b')).toContainText('Account Deleted!');
    await expect(page.locator('#form')).toMatchAriaSnapshot(`
    - heading "Account Deleted!" [level=2]
    - paragraph: Your account has been permanently deleted!
    - paragraph:
      - text: You can create new account to take advantage of member privileges to enhance your online shopping experience with us.
      - link "Get Writing Tools":
        - img
        - text: ""
    - link "Continue":
      - /url: /
    `);
});