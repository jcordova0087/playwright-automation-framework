import { test, expect } from '../../../src/fixtures/baseTest';
import {WelcomePage } from '../../../src/pages/WelcomePage';

test.describe('Welcome Page', () => {

    test('All elements in Welcome page should be displayed', async ({page}) => {

        const welcomePage = new WelcomePage(page);

        await welcomePage.goto();

        const isLoginButtonVisible = await welcomePage.isLoginButtonVisible();
        expect(isLoginButtonVisible).toBeTruthy();

        const isRegisterButtonVisible = await welcomePage.isRegisterButtonVisible();
        expect(isRegisterButtonVisible).toBeTruthy();

    });

    test('Should navigate to Login Page', async ({page}) => {
        
        const welcomePage = new WelcomePage(page);

        await welcomePage.goto();

        const isLoginButtonVisible = await welcomePage.isLoginButtonVisible();
        expect(isLoginButtonVisible).toBeTruthy();

        await welcomePage.goToLogin();

        await expect(page).toHaveURL(/login/);
    });

        test('Should navigate to Create Account Page', async ({page}) => {
        
        const welcomePage = new WelcomePage(page);

        await welcomePage.goto();

        const isRegisterButtonVisible = await welcomePage.isRegisterButtonVisible();
        expect(isRegisterButtonVisible).toBeTruthy();

        await welcomePage.goToRegistration();

        await expect(page).toHaveURL(/register/);
    });
});