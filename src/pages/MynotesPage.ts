import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { ROUTES } from '../constants/routes';

export class MyNotesPage extends BasePage {

    protected readonly basePath = ROUTES.notes;

    private readonly profileButton = this.page.getByTestId('Profile');
    private readonly logoutButton = this.page.getByTestId('logout');

    constructor (page: Page) {
        super(page)
    }

    /**
     * Verify if the profile button is visible
     * @returns Promise<boolean> returns true if the element is visible, false otherwise
     */
    public async isProfileButtonVisible(): Promise<boolean> {
        return this.isElementVisible(this.profileButton);
    }

    /**
     * Verify if teh profile button is visible
     * @returns Promise<boolean> returns true if the element is visible, false otherwise
     */
    public async isLogoutButtonVisible(): Promise<boolean> {
        return this.isElementVisible(this.logoutButton);
    }

    /**
     * wait until the logout button is visible
     */
    public async waitForLogoutButtonIsVisisble(): Promise<void>{
        await this.waitForVisible(this.logoutButton);
    }

}