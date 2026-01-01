![CI](https://github.com/kirstyaameredith/playwright-saucedemo-tests/actions/workflows/playwright.yml/badge.svg)
![Playwright](https://img.shields.io/badge/Playwright-latest-blue?logo=playwright)
![TypeScript](https://img.shields.io/badge/TypeScript-latest-3178C6?logo=typescript)
![Allure](https://img.shields.io/badge/Allure-Reporting-ff69b4?logo=allure)
![Node](https://img.shields.io/badge/Node.js-latest-339933?logo=node.js)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-0A0FFF?logo=github)
![Smoke Tests](https://img.shields.io/badge/Tests-Smoke-green)
![Regression Tests](https://img.shields.io/badge/Tests-Regression-blue)
![Made with Love](https://img.shields.io/badge/Made%20with-%E2%9D%A4-red)

# Playwright Automation Framework — SauceDemo

A modern, scalable UI automation framework built with Playwright, TypeScript, and a clean Page Object Model (POM) architecture. This project demonstrates real‑world SDET engineering practices including fixtures, tagging, CI pipelines, and professional Allure reporting published to GitHub Pages.  

## 🚀 Key Features
### Framework Architecture
- Page Object Model (POM) with reusable components
- Custom Playwright fixtures for authenticated and unauthenticated flows
- Clean separation of smoke and regression test suites
- Reusable utilities and selectors
- Tag‑based execution (@smoke, @regression)
- TypeScript for maintainability and type‑safety

### Reporting & CI/CD
Fully automated Allure reporting for both suites

Separate result folders:
- allure-results-smoke
- allure-results-regression

Separate HTML reports:
- allure-report-smoke
- allure-report-regression

GitHub Actions pipeline that:
- Runs smoke → then regression
- Preserves Allure history
- Publishes both reports to GitHub Pages
- Uses a custom homepage (docs/index.html)

## 📁 Project Structure
```playwright-saucedemo-tests/
│
├── .github/workflows/
│   └── playwright.yml            # CI pipeline: smoke → regression → publish
│
├── src/
│   ├── fixtures/                 # Custom Playwright fixtures
│   ├── pages/                    # Page Object Model classes
│   ├── utils/                    # Helpers & utilities
│
├── tests/
│   ├── smoke/                    # @smoke tests
│   ├── regression/               # @regression tests
│
├── allure-results-smoke/        # Runtime results for smoke suite
├── allure-results-regression/   # Runtime results for regression suite
├── allure-report-smoke/         # Generated HTML report for smoke
├── allure-report-regression/    # Generated HTML report for regression
│
├── docs/                         # GitHub Pages publishing folder
│   ├── index.html                # Custom homepage
│   ├── smoke/                    # Published smoke report
│   └── regression/              # Published regression report
│
├── .nojekyll                     # Ensures GitHub Pages serves folders correctly
├── playwright.config.ts
├── package.json
└── README.md
```
## 🧪 Running Tests Locally
Install dependencies: npm install
Run all tests: npx playwright test
Run the full test suite: npm test
Run tests in headed mode: npm run test:headed
Run smoke suite: npx playwright test --grep @smoke
Run regression suite: npx playwright test --grep @regression

## 📊 Generating Allure Reports Locally
### Smoke report:
- ALLURE_RESULTS_DIR=allure-results-smoke npx playwright test --grep @smoke
- npx allure generate allure-results-smoke --clean -o allure-report-smoke
- npx allure open allure-report-smoke

### Regression report: 
- ALLURE_RESULTS_DIR=allure-results-regression npx playwright test --grep @regression
- npx allure generate allure-results-regression --clean -o allure-report-regression
- npx allure open allure-report-regression

## ⚙️ GitHub Actions CI/CD Pipeline
The pipeline consists of three jobs:

###  1. Smoke Tests
- Runs on every push & PR to main
- Cleans and prepares allure-results-smoke
- Restores Allure history
- Runs @smoke tests
- Generates allure-report-smoke
Uploads:
- allure-history-smoke
- allure-report-smoke

### 2. Regression Tests
- Runs after smoke
- Cleans and prepares allure-results-regression
- Restores Allure history
- Runs @regression tests
- Generates allure-report-regression
Uploads:
- allure-history-regression
- allure-report-regression

### 3. Publish Reports
- Runs after regression
- Copies custom homepage from docs/index.html
Downloads both reports into:
- publish/smoke
- publish/regression
Deploys everything to GitHub Pages

## 🌐 Published Allure Reports
Your GitHub Pages site hosts:
🔥Smoke Report: /smoke/
🧠Regression Report: /regression/
🏠Custom Homepage: /index.html

(Replace with your actual GitHub Pages URL once deployed.)

## 🔐 Authentication Fixture
The framework includes a reusable login fixture that:
- Logs in once
- Saves session state
- Reuses it across tests
- Speeds up execution
- Mirrors enterprise‑level test design

## 🧱 Tech Stack
TypeScript
Playwright
Allure
GitHub Actions
POM + Fixtures + Utilities

## 🎯 Why This Project Is SDET‑Ready
This framework demonstrates:
- Real CI/CD pipelines with multi‑suite orchestration
- Professional Allure reporting with history
- Clean, scalable automation architecture
- sStrong engineering discipline

## 👩‍💻 Author
### Kirsty Meredith QA Engineer/Manager | Over 16+ years QA, PM experience | MSc | PSM 1 | Future SDET 
### Newtwownards, Northern Ireland