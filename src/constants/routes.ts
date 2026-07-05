/**
 *  Application URL paths relative to the BASE_URL.
 */

export const ROUTES = {
    welcome: '',
    login: '/login',
    register: '/register',
    notes: '/notes'

} as const;

export type RouteType = typeof ROUTES[keyof typeof ROUTES];

