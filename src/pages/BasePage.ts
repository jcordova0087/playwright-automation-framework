import { Page, Locator } from '@playwright/test';
import { Configuration, Environment } from '../../config';

/**
 * Abstract base class representing the foundational contract for all page objects.
 * Provides shared browser operations and enforces route management.
 */

export abstract class BasePage {
    protected readonly page: Page;

    /**
     * The relative application path for the specific page (e.g., '/login').
     * Must be implemnted by all derived Page Objects.
     */

    protected abstract readonly basePath: string;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navigates to the pages concrete URL by combining the BASE_URL and its basePath.
     * @param appendPath appendPath Optional extra path parameters, query parameters, or anchors.
     */
    public async goto(appendPath: string = ''): Promise<void> {
        const finalUrl = `${Environment.baseUrl}${this.basePath}${appendPath}`;
        await this.page.goto(finalUrl);
    }

    /**
     * Reloads the current page tracking the active session state
     */
    public async reload(): Promise<void> {
        await this.page.reload();
    }

    /**
     * Retrieves the current page's document title.
     * @returns A promise that resolves to the page title string
     */
    public async getTitle(): Promise<string> {
        return  await this.page.title();
    }

    /**
     * Retrieves the exact URL currently loaded in the browser context.
     * @returns  the full URl string.
     */
    public async getCurrentUrl(): Promise<string> {
        return this.page.url();
    }

    /**
     * Captures a screenshoot of the current viewport view for reporting purposes.
     * @param screenshotName 
     */
    public async takeScreenshot(screenshotName: string): Promise<void> {
        await this.page.screenshot({path: `${Configuration.SCREENSHOT.DIRECTORY}/${screenshotName}-${Date.now()}.png`});
    }

    /**
     * Click on a specific element after ensuring it is visible and actionable
     * @param locator The Playwright locator representing the element.
     */
    public async click(locator: Locator): Promise<void> {
        await locator.waitFor({state:"visible", timeout: Configuration.TIMEOUTS.DEFAULT });
        await locator.click();
    }

    /**
     * Retrieves the inner text of a specific element.
     * @param locator The Playwright locator representing the element.
     * @returns A primise that resolves to the element's text content
     */
    public async getElementText(locator: Locator): Promise<string> {
        await locator.waitFor({state: "visible", timeout: Configuration.TIMEOUTS.DEFAULT });
        return locator.innerText();
    }

    /**
     * Check if a given locator is visible in the current page.
     * 
     * @param locator The palywright locator instance to check.
     * @returns Promise <boolean> - True if the element is visible, false otherwise.
     */
    public async isElementVisible(locator: Locator): Promise<boolean> {
        return await locator.isVisible();

    }

    /**
     * Wait for specific element to achieve teh visible stats in the DOM.
     * 
     * @param locator The Playwright Locator isntace to wait for.
     * @param timeout Optional timeout in milliseconds (default: 5000).
     */
    public async waitForVisible(locator: Locator, timeout: number = Configuration.TIMEOUTS.DEFAULT): Promise<void> {
        await locator.waitFor({state: 'visible', timeout });

    }

    /**
     * Check if a specific element is enabled and interactive.
     * @param locator The Playwright locator instance to check.
     * @returns Promise<boolean> - True if the element is enabled, false otherwise.
     */
    public async isElementEnabled(locator: Locator): Promise<boolean> {
         return locator.isEnabled();
    }

    /**
     * Clears the current text and fills teh specified text
     * @param locator The playwright locator instance to check.
     * @param text text to enter in the locator
     */
    public async fill(locator: Locator, text: string): Promise<void> {
        await locator.waitFor({ state: 'visible', timeout: Configuration.TIMEOUTS.DEFAULT});
        await locator.fill(text);
    }
}

