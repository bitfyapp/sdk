/**
 * Objeto de transação em uma blockchain
 * @category General
 */
export interface Transaction<V = string | number> {
    /**
     * Tipo de transação.
     */
    type: 'payment';
    /**
     * Endereço de origem da transação.
     */
    from: string;
    /**
     * Endereço de destino da transação.
     */
    to: string;
    /**
     * Valor a ser transferido na rede em atomos.
     */
    value: V;
    /**
     * Hash da transação.
     */
    hash: string;
    /**
     * Número do bloco onde essa transação ocorreu.
     */
    blockNumber: string | null;
    /**
     * Index da posição da transação no bloco.
     */
    transactionIndex: string | null;
    /**
     * Data em que a transaão foi criada.
     */
    date: string;
    /**
     * Similar ao type.
     */
    action: "received";
}
