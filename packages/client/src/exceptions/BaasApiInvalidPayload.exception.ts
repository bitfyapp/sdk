/**
 * Excessão que repesenta código 422 ou 400 da API,
 * no contexto do BaaS os dois códigos são vistos como sinônimos.
 *
 * @category Exception
 * @see https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/422
 * @see https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/400
 */
export class BaasApiInvalidPayload extends Error {}
