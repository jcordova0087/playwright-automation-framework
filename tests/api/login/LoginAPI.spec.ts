import { test, expect } from '@playwright/test';
import { AuthService } from '../../../src/api/services/AuthService';
import { Environment } from '../../../config';

test('Login API', async ({ request })=> {

    const authService = new AuthService(request);

    const response = await authService.login({email: Environment.username, password: Environment.password});

    expect(response.success).toBeTruthy();
    expect(response.data.email).toBe(Environment.username);
    expect(response.data.token).toBeDefined();
    
});
