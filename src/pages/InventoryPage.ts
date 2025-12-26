import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { allure } from 'allure-playwright';

export class InventoryPage extends BasePage {
  private sortDropdown = this.page.locator('select[data-test="product-sort-container"]');
  private productNames = this.page.locator('.inventory_item_name');
  private productPrices = this.page.locator('.inventory_item_price');

  constructor(page: Page) {
    super(page);
  }

  async sortBy(option: 'az' | 'za' | 'lohi' | 'hilo') {
    await allure.step(`Sort products by ${option}`, async () => {
      await this.sortDropdown.selectOption(option);
    });
  }

  async getNames(): Promise<string[]> {
    let names: string[] = [];

    await allure.step('Get product names', async () => {
      names = await this.productNames.allInnerTexts();
    });

    return names;
  }

  async getPrices(): Promise<number[]> {
    let prices: number[] = [];

    await allure.step('Get product prices', async () => {
      const texts = await this.productPrices.allInnerTexts();
      prices = texts.map(t => parseFloat(t.replace('$', '')));
    });

    return prices;
  }

  async assertSortedNamesAsc() {
    const names = await this.getNames();
    expect(names).toEqual([...names].sort());
  }

  async assertSortedNamesDesc() {
    const names = await this.getNames();
    expect(names).toEqual([...names].sort().reverse());
  }

  async assertSortedPricesAsc() {
    const prices = await this.getPrices();
    expect(prices).toEqual([...prices].sort((a, b) => a - b));
  }

  async assertSortedPricesDesc() {
    const prices = await this.getPrices();
    expect(prices).toEqual([...prices].sort((a, b) => b - a));
  }
}