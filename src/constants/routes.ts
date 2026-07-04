/**
 *  Application URL paths relative to the BASE_URL.
 */

export const ROUTES = {
    login: '/login',
    dashboard: '/dashboard',
    inventory: '/invetory'
} as const;

export type RouteType = typeof ROUTES[keyof typeof ROUTES];

