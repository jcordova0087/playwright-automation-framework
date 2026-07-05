import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { ROUTES } from '../constants/routes';

/**
 * Represents the application's public landing page.
 * Provides navigation to the Login and Registration pages.
 */
export class WelcomePage extends BasePage {

    protected readonly basePath = ROUTES.welcome;

    private readonly loginButton: Locator = this.page.getByRole('link', {name: 'Login' });
    private readonly registerButton: Locator = this.page.getByRole('link', {name: 'Create an account' });

    constructor(page: Page) {
        super(page);
    }


    /**
     * Click the Login button to navigate to the credentials screen.
     */
    public async goToLogin(): Promise<void> {
        await this.click(this.loginButton);
    }

    /**
     * Click the Register button to nviagte to the sign-up screen.
     */
    public async goToRegistration(): Promise<void> {
        await this.click(this.registerButton);
    }

    /**
     * Verify that the login button is visible
     * @returns Promise<boolean> returns true if the login button is visible, false otherwise. 
     */
    public async isLoginButtonVisible(): Promise<boolean>{
        return this.isElementVisible(this.loginButton);
    }

    /**
     * Verify that the register button is visible
     * @returns Promise<boolean> returns true if the register button is visible, false otherwise. 
     */
    public async isRegisterButtonVisible(): Promise<boolean>{
        return this.isElementVisible(this.registerButton);
    }

}