import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { ROUTES } from '../constants/routes';

/**
 * Page Object representing the initial public Welcome / Landing screen
 */
export class WelcomePage extends BasePage {

    protected readonly basePath =  ROUTES.welcome;

    private readonly loginButton: Locator;
    private readonly registerButton: Locator;

    constructor(page: Page) {
        super(page);
        this.loginButton = this.page.getByRole('link', {name: 'Login' });
        this.registerButton = this.page.getByRole('link', {name: 'Register' });
    }


    /**
     * Click the Login button to navigate to the credentials screen.
     */
    public async clickLoginButton(): Promise<void> {
        await this.click(this.loginButton);
    }

    /**
     * Click the Register button to nviagte to the sign-up screen.
     */
    public async clickRegisterButton() {
        await this.click(this.registerButton);
    }

    

}