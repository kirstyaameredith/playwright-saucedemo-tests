// small wrapper: try to require the real allure-playwright at runtime,
// otherwise provide a minimal no-op fallback so code that calls `allure.*` won't throw.

let allure: any;

try {
  // Use require so this file works even if TypeScript transpilation target / moduleInterop varies.
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const real = require('allure-playwright');
  // Many versions export `allure` or export functions directly — normalize.
  allure = real?.allure ?? real;
} catch (err) {
  // Fallback: minimal no-op implementation that covers common calls used in tests/pages.
  allure = {
    step: async (_name: string, fn: Function) => await fn(),
    attachment: (_name: string, _content: any, _type?: string) => undefined,
    addTestId: (_id: string) => undefined,
    label: (_name: string, _value: string) => undefined,
    parameter: (_name: string, _value: any) => undefined,
    startStep: (_name: string) => undefined,
    endStep: () => undefined,
  };
}

export { allure };