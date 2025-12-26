import { test as base } from '@playwright/test';
import {
  LoginPage,
  InventoryPage,
  CartPage,
  CheckoutPage,
} from '../src/pages';
import { users } from '../src/utils/users';

export const test = base.extend<{
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  loggedIn: boolean;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },

  // ⭐ Auto-login fixture
  loggedIn: async ({ loginPage }, use) => {
    await loginPage.open();
    await loginPage.login(users.valid.username, users.valid.password);
    await use(true);
  },
});

export const expect = base.expect;