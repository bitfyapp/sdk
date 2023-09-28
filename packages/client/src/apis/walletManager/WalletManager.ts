// noinspection JSUnusedGlobalSymbols

import {AxiosInstance, AxiosRequestConfig} from 'axios';
import {CreateWalletRequest} from "./requests/CreateWalletRequest";
import {Balance, Paginate, PaginateParams, Transaction, Wallet} from '@bws-baas/common';

/**
 * Gerencia as Carteiras de propriedade do cliente, apenas carteiras criadas no BaaS serão mostradas aqui.
 *
 * @category Wallet Manager
 */
export class WalletManager {
  constructor(
    private readonly http: AxiosInstance,
    private readonly prefix = '/wallet-manager'
  ) {}

  /**
   * Criação de uma nova carteira em uma determinada rede.
   * @see https://docs.blockchainasaservice.com.br/#90ff2152-10df-49d1-b4db-9ac9f38e7e11
   * @param data
   */
  createWallet(data: CreateWalletRequest): Promise<Wallet>
  createWallet(data: CreateWalletRequest, config?: AxiosRequestConfig): Promise<Wallet> {
    return this.http.post<any, Wallet>(`${this.prefix}/wallets`, data, config);
  }

  /**
   * Listagem de carteiras com paginação.
   * @see https://docs.blockchainasaservice.com.br/#d21fc41b-d202-412a-9fb5-021a685922bf
   * @param params
   */
  getWallets(params?: PaginateParams<Wallet>): Promise<Paginate<Wallet>>
  getWallets(params: PaginateParams<Wallet>, config?: AxiosRequestConfig): Promise<Paginate<Wallet>> {
    return this.http.get<any, Paginate<Wallet>>(`${this.prefix}/wallets`, { ...config, params });
  }

  /**
   * Exibe os Detalhes de uma carteira pelo ID.
   * @see https://docs.blockchainasaservice.com.br/#0ac9af2a-6c68-4227-ae97-e6b5ceebc023
   * @param id
   */
  getWallet(id: number): Promise<Wallet>
  getWallet(id: number, config?: AxiosRequestConfig): Promise<Wallet> {
    return this.http.get<any, Wallet>(`${this.prefix}/wallets/${id}`, config);
  }

  /**
   * Exibe o histórico de transações em uma carteira através de seu ID
   * @see https://docs.blockchainasaservice.com.br/#1f828f24-5c72-4372-a20d-ad3294d9367b
   * @param id
   * @param symbol
   */
  getWalletHistory<T = Transaction>(id: number, symbol: string): Promise<Paginate<Transaction>>
  getWalletHistory<T = Transaction>(id: number, symbol: string, config?: AxiosRequestConfig): Promise<Paginate<Transaction>> {
    return this.http.get<any, Paginate<Transaction>>(`${this.prefix}/wallets/${id}/symbol/${symbol}/history`, config);
  }

  /**
   * Exibe o saldo de uma carteira através de seu ID.
   * @see https://docs.blockchainasaservice.com.br/#24a4fd4d-9f3b-4df5-bf72-62ea3be9042d
   * @param id
   * @param symbol
   */
  getBalance(id: number, symbol: string): Promise<Balance>
  getBalance(id: number, symbol: string, config?: AxiosRequestConfig): Promise<Balance> {
    return this.http.get<any, Balance>(`wallets/${id}/symbol/${symbol}/balance`, config);
  }
}
