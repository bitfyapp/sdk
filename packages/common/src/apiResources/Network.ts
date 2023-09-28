import {ApiResourceBase} from "../interfaces/ApiResourceBase";

/**
 * Objeto de network do Token Contract Manager
 * @category Token Contract Manager
 */
export interface Network extends ApiResourceBase {
  /**
   * Nome da network.
   */
  name: string;
  /**
   * Simbolo do token nativo da rede.
   */
  nativeTokenSymbol: string;
  /**
   * Url do explorador de bloco.
   */
  explorerUrl: string | null;
  /**
   * Quantodade de confirmações necessárias para a TX ser validada pela rede.
   */
  neededTxConfirmations: number;
  /**
   * Valor mínimo de uma transação em uma rede.
   */
  dustAmount: number | null;

  /**
   * Valor mínimo que uma carteira deve ter de saldo para que ela exista.
   * Esse campo é pode ser nulo dependendo do tipo de rede.
   */
  walletExistentialReserve: number | null;

  /**
   * Tokens que podem ser cobrado fee na rede.
   */
  feeTokens: string[];
}
