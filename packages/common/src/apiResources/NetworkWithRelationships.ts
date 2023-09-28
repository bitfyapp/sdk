import { Token } from "./Token";
import { Network } from "./Network";

/**
 * Objeto de network do Token Contract Manager com relacionamentos
 * @category Token Contract Manager
 */
export interface NetworkWithRelationships extends Network {
  /**
   * Objeto Token nativo da rede.
   */
  nativeToken: Token;
  /**
   * Lista de Tokens da rede.
   */
  tokens: Token[];
}
