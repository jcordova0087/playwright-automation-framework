import { Environment } from '../../../config';
import { test, expect } from '../../../src/fixtures/baseTest';
import { LoginPage } from '../../../src/pages/LoginPage';
import { MyNotesPage } from '../../../src/pages/MynotesPage';


test.describe('Login Page', () => {

    test('The login page is visible', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.pageIsLoaded();
    });

    test('Login with valid credentials', async ({ page })=> {
        
        const loginPage = new LoginPage(page);
        const myNotesPage =  new MyNotesPage(page);

        await loginPage.goto();

        expect(loginPage.isEmailLabelVisible()).toBeTruthy();

        await loginPage.login(Environment.username, Environment.password);
   
        await myNotesPage.waitForLogoutButtonIsVisisble();
        const logoutButtonVisible = await myNotesPage.isLogoutButtonVisible();
        expect(logoutButtonVisible).toBeTruthy();

    });

});