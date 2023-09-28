/**
 * Excessão que representa a impossibilidade de realizar a request HTTP.
 * Normalmente isso ocorre por problemas de rede ou de rota.
 *
 * @category Exception
 */
export class BaasApiUnableSendRequest extends Error {

    private readonly cause: unknown;
    constructor(cause: { message?: string, toJSON?: () => object }) {
        super(cause.message ?? 'Unknown error');
        this.cause = "toJSON" in cause ? cause.toJSON() : cause;
    }
}
