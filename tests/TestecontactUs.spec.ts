import { test, expect } from '@playwright/test';

test('CT03: Envio do Formulário "Contact Us" com Upload e Alerta JS', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Contact us' }).click();
  await expect(page.locator('#contact-page')).toContainText('Contact Us');
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('caio gomes');
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('cario@gmail.com');
  await page.getByRole('textbox', { name: 'Subject' }).click();
  await page.getByRole('textbox', { name: 'Subject' }).fill('teste');
  await page.getByRole('textbox', { name: 'Your Message Here' }).click();
  await page.getByRole('textbox', { name: 'Your Message Here' }).fill('estou testando o site de forma automatizada');
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('imagteste/teste.jpg');
  //await page.goto('https://automationexercise.com/contact_us#google_vignette');
  //await page.goto('https://automationexercise.com/contact_us');
 // await page.locator('iframe[name="aswift_3"]').contentFrame().getByRole('button', { name: 'Close ad' }).click();
 /* page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });*/
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#contact-page')).toContainText('Success! Your details have been submitted successfully.');
  await page.getByRole('link', { name: ' Home' }).click();
});