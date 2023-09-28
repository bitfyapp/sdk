// noinspection JSUnusedGlobalSymbols

import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { AddTokenRequest } from "./requests/AddTokenRequest";
import {Network, NetworkWithRelationships, Paginate, PaginateParams, Token} from '@bws-baas/common';

/**
 * Gerencia as Redes e tokens que estão disponíveis no BaaS.
 *
 * Essa classe é necessária para utilizar os outros endpoints do BaaS, o network_id é utilizado pela
 * grande maioria dos demais endpoints do BaaS, inclusive é recomendado guardar o ID da networks utilizada
 * do lado do cliente.
 *
 * @category Token Contract Manager
 */
export class TokenContractManager {
  constructor(
    private readonly http: AxiosInstance,
    private readonly prefix = '/token-contracts'
  ) {}

  /**
   * Lista todas as redes disponíveis no BaaS.
   *
   * @param params?
   */
  getNetworks(params?: PaginateParams<Network>): Promise<Paginate<Network>>
  getNetworks(params?: PaginateParams<Network>, config?: AxiosRequestConfig): Promise<Paginate<Network>> {
    return this.http.get(`${this.prefix}/networks`, { ...config, params: { ...params, ...config?.params } });
  }

  /**
   * Traz os detalhes de uma Rede com base em um Id.
   *
   * @param id
   */
  getNetwork(id: number): Promise<Paginate<NetworkWithRelationships>>
    getNetwork(id: number, config?: AxiosRequestConfig): Promise<Paginate<NetworkWithRelationships>> {
    return this.http.get(`${this.prefix}/networks/${id}`, config);
  }


  /**
   * Adiciona um token customizado para ser gerenciado pelo BaaS, é preciso fornecer um
   * endereço de contrato previamente publicado na rede.
   *
   * @param data
   */
  addToken(data: AddTokenRequest): Promise<Token>
  addToken(data: AddTokenRequest, config?: AxiosRequestConfig): Promise<Token> {
    return this.http.post(`${this.prefix}/tokens`, data, config)
  }

  /**
   * Remove um token custom da rede do BaaS, os tokens nativos da rede não podem ser removidos.
   *
   * @param id
   */
  async removeToken(id: number): Promise<void>
    async removeToken(id: number, config?: AxiosRequestConfig): Promise<void> {
    await this.http.delete(`${this.prefix}/tokens/${id}`, config);
  }

  /**
   * Lista todos os tokens nativos disponíveis pelo BaaS.
   * @param params
   */
  getDefaultTokens(params: PaginateParams<Token>): Promise<Paginate<Token>>
    getDefaultTokens(params: PaginateParams<Token>, config?: AxiosRequestConfig): Promise<Paginate<Token>> {
    return this.http.get(`${this.prefix}/defaults`, { params: {...params, ...config?.params }, ...config })
  }

  /**
   * Traz os detalhes de um token nativo.
   *
   * @param id
   */
  getDefaultToken(id: number): Promise<Token>
  getDefaultToken(id: number, config?: AxiosRequestConfig): Promise<Token> {
    return this.http.get(`${this.prefix}/defaults/${id}`, config);
  }

  /**
   * Traz todos os tokens customizados adicionados pelo BaaS
   * @param params
   */
  getCustomTokens(params: PaginateParams<Token>): Promise<Paginate<Token>>
  getCustomTokens(params: PaginateParams<Token>, config?: AxiosRequestConfig): Promise<Paginate<Token>> {
    return this.http.get(`${this.prefix}/tokens`, { params: {...params, ...config?.params }, ...config })
  }

  /**
   * Traz os detalhes de um token customizado.
   * @param id
   */
  getCustomToken(id: number): Promise<Token>
  getCustomToken(id: number, config?: AxiosRequestConfig): Promise<Token> {
    return this.http.get(`${this.prefix}/tokens/${id}`, config);
  }
}
