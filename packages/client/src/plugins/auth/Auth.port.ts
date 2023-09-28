import { InternalAxiosRequestConfig } from 'axios';

/**
 * Interface para implementação do método de autenticação do BaaS.
 * @internal
 */
export interface Auth {
  handle(config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig>
}
