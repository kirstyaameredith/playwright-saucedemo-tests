import { test, expect } from './base.fixture';
import { users } from '../src/utils/users';

test.beforeEach(async ({ loginPage, page }) => {
  await loginPage.open();
  await loginPage.login(users.valid.username, users.valid.password);
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('.shopping_cart_link');
});

test('@smoke Complete checkout flow', async ({ cartPage, checkoutPage }) => {
  await cartPage.proceedToCheckout();

  await checkoutPage.fillDetails('Kirsty', 'Tester', 'BT23');
  await checkoutPage.continue();
  await checkoutPage.assertOnOverviewPage();
  await checkoutPage.finish();
  await checkoutPage.assertOrderComplete();
});

test('@regression Checkout fails when required fields are missing', async ({ cartPage, checkoutPage }) => {
  await cartPage.proceedToCheckout();

  await checkoutPage.fillDetails('', '', '');
  await checkoutPage.continue();
  await checkoutPage.assertErrorVisible();
});

test('@regression Cancel checkout returns to cart', async ({ cartPage, checkoutPage, page }) => {
  await cartPage.proceedToCheckout();
  await checkoutPage.cancel();

  await expect(page).toHaveURL(/cart/);
});