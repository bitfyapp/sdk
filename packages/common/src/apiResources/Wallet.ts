import {Token} from "./Token";

/**
 * Objeto de uma carteira.
 * @category Wallet Manager
 */
export interface Wallet {
    /**
     * Identificador da carteira.
     */
    id: number;
    /**
     * Simbolo nativo da rede.
     */
    nativeTokenSymbol: string;
    /**
     * Descrição curta da carteira.
     */
    description: string;
    /**
     * Número do Id da rede.
     */
    networkId: number;
    /**
     * Número de casas decimais que a carteira possui pela rede.
     */
    precision: number;
    /**
     * Listade Tokens da Carteira na rede.
     */
    tokens: Token[];
    /**
     * Endereços da carteira, com excessão do bitcoin, sempre tem apenas 1 endereço.
     */
    addresses: string[];
    /**
     * Data de criação do registro.
     */
    createdAt: Date;
    /**
     * Data de atualização do registro.
     */
    updatedAt: Date | null;
}
