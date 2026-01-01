import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { allure } from 'allure-playwright';

export class CartPage extends BasePage {
  private itemNames = this.page.locator('.inventory_item_name');
  private checkoutButton = this.page.locator('[data-test="checkout"]');

  constructor(page: Page) {
    super(page);
  }

  public get cartItemNames() {
    return this.itemNames;
  }

  async removeItem(productName: string) {
    await allure.step(`Remove ${productName} from cart`, async () => {
      const selector = `[data-test="remove-${productName
        .toLowerCase()
        .replace(/ /g, '-') }"]`;

      await this.page.click(selector);
    });
  }
  async proceedToCheckout() {
  await allure.step('Proceed to checkout', async () => {
    await this.checkoutButton.click();
  });
}
}