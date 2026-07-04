/**
 * Global framework configuration values.
 * contains non-environment-specific execution rules and timeouts.
 */

export class Configuration {
    public static readonly TIMEOUTS = {
        short: 5000,
        default: 10000,
        long: 30000,
    } as const;

    public static readonly RETRIES = {
        ci: 2,
        local: 0,
    } as const;

    public static readonly SCREENSHOT = {
        onFailureOnly: true,
        format: 'png',
    } as const;
}