import { Auth } from "./Auth.port";
import axios, { InternalAxiosRequestConfig, AxiosInstance } from 'axios';
import { Environment } from "../environment/Environment.port";
import {ClientOptions} from "../../ClientOptions";

export class AuthAdapter implements Auth {
  private token: string = null;
  private expireAt: number = 0;
  private http: AxiosInstance;

  constructor(private readonly environment: Environment, private readonly options: ClientOptions) {
    this.http = axios.create({ baseURL: environment.baseURL })
  }
  async handle(config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> {
    if (this.expireAt < new Date().getSeconds()) {
      const response = await this.http.post(`${this.environment.prefixes?.auth ?? '/auth'}/token`, {
        client_id: this.options.auth.clientId,
        client_secret: this.options.auth.clientSecret,
        application_name: this.options.auth.applicationName,
      });
      const { token, expire_at: expireAt } = response.data.data ?? response.data
      this.token = token;
      this.expireAt = expireAt;
    }

    config.headers['Authorization'] = `Bearer ${this.token}`;
    return config;
  }
}
