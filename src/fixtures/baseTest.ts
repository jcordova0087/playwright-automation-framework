import { test as base } from '@playwright/test';

export const test = base.extend({
    page: async ({ page }, use) => {
        await page.route('**/*googlesyndication*', route => route.abort());
        await page.route('**/*doubleclick*', route => route.abort());
        await page.route('**/pagead/js/*', route => route.abort());
        await page.route('**/*google-analytics*', route => route.abort());

        await use(page);
    }
});

export { expect } from '@playwright/test';