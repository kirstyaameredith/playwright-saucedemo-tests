import { test, expect } from './base.fixture';

test.describe('@smoke Add to Cart', () => {
  test('User can add a single item to the cart', async ({
    page,
    loggedIn,
    inventoryPage,
    cartPage,
  }) => {

    expect(loggedIn).toBeTruthy();

    await expect(page).toHaveURL(/.*inventory.html/);

    await inventoryPage.addItemToCart('Sauce Labs Backpack');

    await expect(inventoryPage.cartBadgeLocator).toHaveText('1');

    await inventoryPage.openCart();

    await expect(cartPage.cartItemNames).toContainText('Sauce Labs Backpack');
  });
});