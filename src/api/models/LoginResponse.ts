/**
 * Represents the succesful login response.
 */

export interface LoginResponse {
    success: boolean;
    status: number;
    message: string;
    data: {
        id: string;
        name: string;
        email: string;
        token: string
    };
}