import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry'
  },

  reporter: [
    ['list'],
    [
      'allure-playwright',
      {
        outputFolder: process.env.ALLURE_RESULTS_DIR || 'allure-results',
        detail: true,
        suiteTitle: false
      }
    ]
  ],
});