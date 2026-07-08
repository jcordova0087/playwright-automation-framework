import { APIRequestContext, APIResponse } from "@playwright/test";
import { ApiClient } from "../clients/ApiClient";
import { Endpoints } from "../endpoints/Endpoints";
import { LoginRequest } from "../models/LoginRequest";
import { LoginResponse } from "../models/LoginResponse";

export class AuthService extends ApiClient {

    constructor(request: APIRequestContext) {
        super(request)
    }

    /**
     * Authenticate a user.
     */
    public async login(credentials: LoginRequest): Promise<LoginResponse> {
        return await this.post<LoginRequest,LoginResponse>(Endpoints.AUTH.LOGIN, credentials);
    }
}