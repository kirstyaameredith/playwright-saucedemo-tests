import { test, expect } from './base.fixture';
import { users } from '../src/utils/users';

test.beforeEach(async ({ loginPage, page }) => {
  await loginPage.open();
  await loginPage.login(users.valid.username, users.valid.password);
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
});

test('@smoke Cart icon shows item count', async ({ page }) => {
  const badge = page.locator('.shopping_cart_badge');
  await expect(badge).toHaveText('1');
});

test('@regression Navigate to cart page', async ({ page }) => {
  await page.click('.shopping_cart_link');
  await expect(page).toHaveURL(/cart/);
});