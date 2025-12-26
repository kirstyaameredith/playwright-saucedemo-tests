import { Page, expect } from '@playwright/test';

/*Gives every page 
- navigation
- click
- fill
- URL assertions
- locator helper
*/

export class BasePage {
  constructor(protected page: Page) {}

  async goto(path: string) {
    await this.page.goto(path);
  }

  async assertUrlContains(text: string) {
    await expect(this.page).toHaveURL(new RegExp(text));
  }

  async click(selector: string) {
    await this.page.click(selector);
  }

  async fill(selector: string, value: string) {
    await this.page.fill(selector, value);
  }

  locator(selector: string) {
    return this.page.locator(selector);
  }
}