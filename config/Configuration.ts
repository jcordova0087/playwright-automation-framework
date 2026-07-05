/**
 * Global framework configuration values.
 * contains non-environment-specific execution rules and timeouts.
 */

const SECOND = 1000;

export class Configuration {
    public static readonly TIMEOUTS = {
        SHORT: 5 * SECOND,
        DEFAULT: 10 * SECOND,
        LONG: 30 * SECOND,
    } as const;

    public static readonly RETRIES = {
        CI: 2,
        LOCAL: 0,
    } as const;

    public static readonly SCREENSHOT = {
        ONFAILUREONLY: true,
        DIRECTORY: './screenshots',
    } as const;
}