/**
 * An array of routes that are accessable to the public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes: string[] = ["/"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /chats
 * @type {string[]}
 */
export const authRoutes: string[] = ["/auth/login", "/auth/register"];

/**
 * This prefix for API authentication routes
 * Routes that start with this prefix will be protected by API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * This is the default login redirect route
 * When a user logs in, they will be redirected to this route to /chat
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/chat/science";
