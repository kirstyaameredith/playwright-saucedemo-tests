import { test } from './base.fixture';
import { users } from '../src/utils/users';

test.beforeEach(async ({ loginPage }) => {
  await loginPage.open();
  await loginPage.login(users.valid.username, users.valid.password);
});

test('@smoke Sort A → Z', async ({ inventoryPage }) => {
  await inventoryPage.sortBy('az');
  await inventoryPage.assertSortedNamesAsc();
});

test('@regression Sort Z → A', async ({ inventoryPage }) => {
  await inventoryPage.sortBy('za');
  await inventoryPage.assertSortedNamesDesc();
});

test('@regression Sort price low → high', async ({ inventoryPage }) => {
  await inventoryPage.sortBy('lohi');
  await inventoryPage.assertSortedPricesAsc();
});

test('@regression Sort price high → low', async ({ inventoryPage }) => {
  await inventoryPage.sortBy('hilo');
  await inventoryPage.assertSortedPricesDesc();
});