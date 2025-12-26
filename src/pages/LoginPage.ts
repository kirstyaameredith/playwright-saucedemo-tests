import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { allure } from 'allure-playwright';

export class LoginPage extends BasePage {
  private usernameInput = this.page.locator('#user-name');
  private passwordInput = this.page.locator('#password');
  private loginButton = this.page.locator('#login-button');
  private errorMessage = this.page.locator('[data-test="error"]');

  constructor(page: Page) {
    super(page);
  }

  async open() {
    await allure.step('Navigate to login page', async () => {
      await this.page.goto('/');
      await this.waitForPageReady();
    });
  }

  async login(username: string, password: string) {
    await allure.step(`Login as ${username}`, async () => {
      await this.usernameInput.fill(username);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    });
  }

  async assertErrorVisible() {
    await allure.step('Verify login error is visible', async () => {
      await expect(this.errorMessage).toBeVisible();
    });
  }
}