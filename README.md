Playwright Automation Framework (SauceDemo)

A clean, modern, professional Playwright automation framework built with:
- ✅ Page Object Model (POM)
- ✅ BasePage inheritance
- ✅ Shared fixtures (base.fixture.ts)
- ✅ Auto‑login fixture
- ✅ Tagged test suites (@smoke, @regression)
- ✅ Allure reporting support
- ✅ Ready for GitHub Actions CI
- ✅ TypeScript + strict mode
- ✅ Clean folder structure with barrel exports

## Folder Structure
project-root/
│
├── src/
│   ├── pages/
│   │   ├── BasePage.ts
│   │   ├── LoginPage.ts
│   │   ├── InventoryPage.ts
│   │   ├── CartPage.ts
│   │   ├── CheckoutPage.ts
│   │   └── index.ts
│   │
│   └── utils/
│       └── users.ts
│
├── tests/
│   ├── base.fixture.ts
│   ├── login.spec.ts
│   ├── sorting.spec.ts
│   ├── cart.spec.ts
│   └── checkout.spec.ts
│
├── playwright.config.ts
├── package.json
└── tsconfig.json

## Getting Started
Install dependencies: npm install
Run the full test suite: npm test
Run tests in headed mode: npm run test:headed

## Tagged Test Suites

Smoke tests: npm run test:smoke
Regression tests: npm run test:regression
Tags are added directly in test titles, e.g.: test('@smoke Login with valid credentials', async () => { ... });

## Fixtures

All tests use the shared fixture file: tests/base.fixture.ts 

## Reporting
Allure reporting is supported.
Generate and open the report: npm run report
Optional script: "report": "allure generate allure-results --clean && allure open"

## Github Actions CI
This project is ready for CI with separate smoke + regression jobs.
Example workflow: .github/workflows/playwright.yml

Yaml
- name: Run smoke tests
  run: npm run test:smoke

- name: Run regression tests
  run: npm run test:regression

## Tech Stack
- Playwright
- TypeScript
- Allure
- GitHub Actions
- Page Object Model
- Fixtures
- Tagged test suites
