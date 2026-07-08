import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { ROUTES } from '../constants/routes';

export class LoginPage extends BasePage {

    protected readonly basePath = ROUTES.login;

    private readonly loginHeader: Locator = this.page.getByRole('heading', {name:'Login', exact: true});
    private readonly emailLabel: Locator = this.page.getByText('EmailL address', { exact: true });
    private readonly emailInput: Locator = this.page.getByLabel('Email address');
    private readonly passwordLabel: Locator = this.page.getByText('Password', {exact: true});
    private readonly passwordInput: Locator = this.page.getByLabel('Password');
    private readonly forgotPasswordLink: Locator = this.page.getByRole('link', {name: 'Forgot password' });
    private readonly loginbutton: Locator = this.page.getByRole('button', {name: 'Login'});
    private readonly loginWithGoogleButton: Locator = this.page.getByRole('button', {name: 'Login With Google'});
    private readonly loginWithLinkedInButton: Locator = this.page.getByRole('button', { name: 'Login with LinkedIn' });
    private readonly createAccountLink: Locator = this.page.getByRole('button', { name: 'Login with LinkedIn' });


    constructor(page: Page) {
        super(page);
    }


    /**
     * Verify that all page elements are visible
     * @returns Promise<boolean> returns true if all page elements are visible, false otherwise
     */
    public async pageIsLoaded(): Promise<boolean> {
        return (
            await this.isElementVisible(this.loginHeader) 
            &&
            await this.isElementVisible(this.emailLabel)
            &&
            await this.isElementVisible(this.emailInput)
            &&
            await this.isElementVisible(this.passwordLabel)
            &&
            await this.isElementVisible(this.passwordInput)
            &&
            await this.isElementVisible(this.forgotPasswordLink)
            &&
            await this.isElementVisible(this.loginbutton)
            &&
            await this.isElementVisible(this.loginWithGoogleButton)
            &&
            await this.isElementVisible(this.loginWithLinkedInButton)
            &&
            await this.isElementVisible(this.createAccountLink)
        );
    }

    /**
     * Verify that the email label is visible
     * @returns Promise <boolean> returns true if the eement is visible, false otherwise
     */
    public async isEmailLabelVisible(): Promise<boolean> {
        return this.isElementVisible(this.emailLabel);
    }

    /**
     * Click the login button ot submit the credentials
     */
    public async clickLoginButton(): Promise<void> {
        this.loginbutton.click();
    }

    /**
     * Click the login with google button to login with google credentials
     */
    public async clickLoginWithGoogleButton(): Promise<void> {
        this.loginWithGoogleButton.click();
    }

    /**
     * Click the login with linkedin button to login with linkedin credentials
     */
    public async clickLoginWithLinkedin(): Promise<void> {
        this.loginWithLinkedInButton.click();
    }

    /**
     * Enter the user email
     * 
     * @param email Email address
     */
    public async enterEmail(email: string) {
        await this.fill(this.emailInput, email);
    }

    /**
     * Enter the user password
     * 
     * @param password users password
     */
    public async enterPassword(password: string) {
        await this.fill(this.passwordInput, password);
    }

    /**
     * Login action
     * 
     * @param username text for the username field
     * @param password text for the password field 
     */
    public async login(username: string, password: string) {
        await this.enterEmail(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}