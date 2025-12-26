import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async waitForPageReady() {
    await this.page.waitForLoadState('domcontentloaded');
  }
}