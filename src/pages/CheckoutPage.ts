import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { allure } from 'allure-playwright';

export class CheckoutPage extends BasePage {
  private firstName = this.page.locator('[data-test="firstName"]');
  private lastName = this.page.locator('[data-test="lastName"]');
  private postalCode = this.page.locator('[data-test="postalCode"]');
  private continueButton = this.page.locator('[data-test="continue"]');
  private cancelButton = this.page.locator('[data-test="cancel"]');
  private finishButton = this.page.locator('[data-test="finish"]');
  private errorMessage = this.page.locator('[data-test="error"]');
  private summaryTotal = this.page.locator('.summary_total_label');
  private confirmationHeader = this.page.locator('.complete-header');

  constructor(page: Page) {
    super(page);
  }

  async fillDetails(first: string, last: string, postal: string) {
    await allure.step('Fill checkout details', async () => {
      await this.firstName.fill(first);
      await this.lastName.fill(last);
      await this.postalCode.fill(postal);
    });
  }

  async continue() {
    await this.continueButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }

  async finish() {
    await this.finishButton.click();
  }

  async assertErrorVisible() {
    await expect(this.errorMessage).toBeVisible();
  }

  async assertOnOverviewPage() {
    await expect(this.summaryTotal).toBeVisible();
  }

  async assertOrderComplete() {
    await expect(this.confirmationHeader).toHaveText('Thank you for your order!');
  }
}