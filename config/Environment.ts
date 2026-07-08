import dotenv from 'dotenv';

dotenv.config();

/**
 *  Provides centralized access to environment variables.
 */

export class Environment {
    public static readonly baseUrl = Environment.getRequired('BASE_URL');

    public static readonly apiUrl = Environment.getRequired('API_URL');

    public static readonly username = Environment.getRequired('APP_USERNAME');

    public static readonly password = Environment.getRequired('APP_PASSWORD');


    /**
     * Returns a required environemnt variable.
     * Throws an error if the variable is missing.
     * @param name 
     * @returns 
     */
    private static getRequired(name: string): string {
        const value = process.env[name];

        if(!value) {
            throw new Error(`Missing required environment variable: ${name}`);
        }

        return value;
    }
}