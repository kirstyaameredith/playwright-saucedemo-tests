import { defineConfig } from '@playwright/test';

const allureOutput = process.env.ALLURE_RESULTS_DIR;
console.log('✅ Allure output folder from env:', allureOutput);

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
  },

  reporter: [
    ['list'],
    ['allure-playwright', {
      resultsDir: allureOutput || 'allure-results',
      detail: true,
      suiteTitle: false
    }]
  ],
});