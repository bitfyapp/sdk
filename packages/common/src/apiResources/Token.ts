/**
 * Objeto de Token de uma rede
 * @category Token Contract Manager
 */
export interface Token {
  /**
   * Nome do token
   */
  name: string;
  /**
   * Símbolo do token na rede
   */
  symbol: string;
  /**
   * Endereço do Smart Contract do token
   */
  contractAddress: string | null;
  /**
   * Símbolo do fee
   */
  symbolFee: string;
  /**
   * Número de casas após a virgula que serão levadas em consideração
   */
  precision: number;
  /**
   * Identificador da Rede que foi cadastrado o objeto
   */
  networkId: number;
  /**
   * Flag que indica se o Token é nativo da rede ou customizado.
   */
  isNative: boolean;
  /**
   * Objeto de Network resumido.
   */
  network?: {
    /**
     * Id da network.
     */
    id: number,
    /**
     * Nome da network.
     */
    name: string
  }
}
