/**
 * API endpoint definitions.
 * Centralizes all service routes used by the automation framework.
 */

export class Endpoints {
    /**
     * Authentication endpoints
     */

    public static readonly AUTH = {
        LOGIN: '/users/login',
        REGISTER: '/users/register',
        LOGOUT: '/users/logout'
    } as const;

    /**
     * Notes endpoints
     */
    public static readonly NOTES = {
        GET_ALL: '/notes',
        CREATE: '/notes',
    } as const;

}