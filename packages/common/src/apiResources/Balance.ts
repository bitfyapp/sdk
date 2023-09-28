/**
 * Retorno de consulta de Balanço de Carteira
 * @category Wallet Manager
 */
export interface Balance {
    /**
     * Balanço representado no valor de atomo do token.
     */
    atoms: string;
    /**
     * Balanço representado na precisão decimal do token.
     */
    cryptos: string;
}
