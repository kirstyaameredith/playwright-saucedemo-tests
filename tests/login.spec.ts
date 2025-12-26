import { test, expect } from './base.fixture';
import { users } from '../src/utils/users';

test('@smoke Login with valid credentials', async ({ loginPage, page }) => {
  await loginPage.open();
  await loginPage.login(users.valid.username, users.valid.password);
  await expect(page).toHaveURL(/inventory/);
});

test('@regression Login with invalid credentials shows error', async ({ loginPage }) => {
  await loginPage.open();
  await loginPage.login(users.invalid.username, users.invalid.password);
  await loginPage.assertErrorVisible();
});

test('@regression Locked out user sees appropriate error message', async ({ loginPage, page }) => {
  await loginPage.open();
  await loginPage.login(users.lockedOut.username, users.lockedOut.password);

  await loginPage.assertErrorVisible();
  await expect(page.locator('[data-test="error"]')).toContainText(
    'Sorry, this user has been locked out.'
  );
});