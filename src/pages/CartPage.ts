import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { allure } from 'allure-playwright';

export class CartPage extends BasePage {
  private checkoutButton = this.page.locator('[data-test="checkout"]');

  constructor(page: Page) {
    super(page);
  }

  async proceedToCheckout() {
    await allure.step('Proceed to checkout', async () => {
      await this.checkoutButton.click();
    });
  }
}