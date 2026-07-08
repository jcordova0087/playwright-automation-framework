import { APIRequestContext, APIResponse } from "@playwright/test";
import { Environment } from "../../../config";

/**
 * Base API Client responsible for sending HTTP requests.
 * Provides reusable methods for all API Services
 */
export class ApiClient {

    constructor(protected readonly request: APIRequestContext) {}

    /**
     * Executes a GET request
     */
    protected async get(endpoint: string, headers?: Record<string, string>): Promise<APIResponse> {
        return await this.request.get(`${Environment.apiUrl}${endpoint}`, { headers } );
        
    }

    /**
     * Executes a POST request
     */
    protected async post<TRequest, TResponse>(endpoint: string, body: TRequest, headers?: Record<string, string>): Promise<TResponse> {
        const response = await this.request.post(`${Environment.apiUrl}${endpoint}`, {
            data: body,
            headers: {
                'Content-Type': 'application/json',
                ...headers
            }
        });

        if(!response.ok()) {
            throw new Error(`POST ${endpoint} failed (${response.status()})`);
        }

        return await response.json() as TResponse;
    } 

    /**
     * Executes a PUT request
     */
    protected async put<T>(endpoint: string, body: T, headers?: Record<string, string>): Promise<APIResponse> {
        return await this.request.put(`${Environment.apiUrl}${endpoint}`, {
            data: body,
            headers: {
                'Content-Type': 'application/json',
                ...headers
            }
        });
    } 

    /**
     * Executes a DELETE request
     */
    protected async delete(endpoint: string, headers?: Record<string, string>): Promise<APIResponse> {
        return await this.request.put(`${Environment.apiUrl}${endpoint}`, {
            headers
        });
    } 

}