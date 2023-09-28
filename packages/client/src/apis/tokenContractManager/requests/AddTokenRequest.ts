/**
 * Payload de criação de um novo token customizado na rede.
 * @category Token Contract Manager
 */
export interface AddTokenRequest {
  /**
   * Nome do Token.
   */
  name: string;
  /**
   * Simbolo do token.
   */
  symbol: string;
  /**
   * Endereço do contrato.
   */
  contractAddress: string;
  /**
   * Símbolo que será cobrado o Fee.
   */
  symbolFee: string;
  /**
   * Número de casas decimais levadas em consideração no token.
   */
  precision: number;
  /**
   * Identificador da rede.
   */
  networkId: number;
}
